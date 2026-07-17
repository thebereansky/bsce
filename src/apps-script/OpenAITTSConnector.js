/**
 * OpenAI TTS Connector
 * Version 1.0
 */

function generateSpeech(
  text,
  filename,
  voice
) {

  const apiKey =
    PropertiesService
      .getScriptProperties()
      .getProperty(
        "OPENAI_API_KEY"
      );

  if (!apiKey) {

    throw new Error(
      "OPENAI_API_KEY is not configured."
    );

  }

  const payload = {

    model: "gpt-4o-mini-tts",

  voice:
    voice || "alloy",

    input: text

  };

  const response =
    UrlFetchApp.fetch(

      "https://api.openai.com/v1/audio/speech",

      {

        method: "post",

        contentType:
          "application/json",

        headers: {

          Authorization:
            "Bearer " +
            apiKey

        },

        payload:
          JSON.stringify(
            payload
          ),

        muteHttpExceptions:
          true

      }

    );

  const status =
    response.getResponseCode();

  if (status !== 200) {

    throw new Error(

      "OpenAI TTS failed:\n\n" +

      response.getContentText()

    );

  }

  const blob =
    response.getBlob()
      .setName(
        filename
      );

  return blob;

}
