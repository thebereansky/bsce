/**
 * JSON Utilities
 * Version 2.0
 */

function parseJsonContent(
  content
) {

  try {

    return JSON.parse(
      content
    );

  } catch(error) {

    throw new Error(
      "Invalid JSON returned by AI.\n\n" +
      error +
      "\n\nContent:\n" +
      content
    );

  }

}


function generateJsonContent(
  prompt
) {

  const content =
    generateContent(
      prompt
    );

  return parseJsonContent(
    content
  );

}


function saveJsonFile(
  object,
  filename,
  folder
) {

  folder.createFile(
    filename,
    JSON.stringify(
      object,
      null,
      2
    ),
    MimeType.PLAIN_TEXT
  );

}