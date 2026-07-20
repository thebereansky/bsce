/**
 * OpenAI Image Connector
 * Version 1.0
 */

function generateImage(
  prompt
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
  
    model: "gpt-image-1",
  
    prompt: prompt,
  
    size: "1024x1536",
  
    quality: "medium"
  
  };

  const response =
    UrlFetchApp.fetch(

      "https://api.openai.com/v1/images/generations",

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

      "OpenAI Image API failed:\n\n" +

      response.getContentText()

    );

  }

  const json =
    JSON.parse(
      response.getContentText()
    );

  const imageBase64 =
    json.data[0].b64_json;

  return Utilities.newBlob(
    Utilities.base64Decode(
      imageBase64
    ),
    "image/png",
    "generated-image.png"
  );

}
