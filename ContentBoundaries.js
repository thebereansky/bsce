/**
 * Content Boundaries Library
 * Version 1.0
 */

function getContentBoundaries() {

  const response =
    UrlFetchApp.fetch(
      BSCE_CONFIG.CONTENT_BOUNDARIES_URL,
      {
        muteHttpExceptions: true
      }
    );

  const status =
    response.getResponseCode();

  if (status !== 200) {

    throw new Error(
      "Unable to load content boundaries."
    );

  }

  return JSON.parse(
    response.getContentText()
  );

}