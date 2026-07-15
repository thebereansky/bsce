/**
 * Study Definition Loader
 * Version 1.0
 */

function getStudyDefinition(
  filename
) {

  const url =
    BSCE_CONFIG.STUDIES_BASE_URL +
    "/" +
    filename;

  const response =
    UrlFetchApp.fetch(
      url,
      {
        muteHttpExceptions: true
      }
    );

  const status =
    response.getResponseCode();

  if (status !== 200) {

    throw new Error(
      "Unable to load study definition.\n" +
      "HTTP Status: " +
      status +
      "\nURL: " +
      url
    );

  }

  return JSON.parse(
    response.getContentText()
  );

}
