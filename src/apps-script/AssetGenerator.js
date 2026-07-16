/**
 * Asset Generator
 * Version 1.0
 */

function generateJsonAsset(
  promptBuilderFunction,
  writerFunction
) {

  const prompt =
    promptBuilderFunction();

  const response =
    generateContent(
      prompt
    );

  const cleanResponse =
    response
      .replace(
        /^```json/i,
        ""
      )
      .replace(
        /^```/,
        ""
      )
      .replace(
        /```$/,
        ""
      )
      .trim();

  const json =
    JSON.parse(
      cleanResponse
    );

  writerFunction(
    json
  );

  return json;

}
