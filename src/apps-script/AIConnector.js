/**
 * OpenAI Connector
 * Version 2.0
 */

function generateContent(
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

    model: "gpt-5-mini",

    input:
      prompt

  };

  const response =
    UrlFetchApp.fetch(
      "https://api.openai.com/v1/responses",
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

  const body =
    response.getContentText();

  if (status !== 200) {

    throw new Error(
      "OpenAI request failed.\n\n" +
      body
    );

  }

  const json =
    JSON.parse(
      body
    );

  if (
    !json.output ||
    !json.output.length
  ) {

    throw new Error(
      "OpenAI returned no output."
    );

  }

  let text = "";

  json.output.forEach(
    function(item) {

      if (
        item.content
      ) {

        item.content.forEach(
          function(part) {

            if (
              part.type ===
              "output_text"
            ) {

              text +=
                part.text;

            }

          }
        );

      }

    }
  );

  return text;

}
