/**
 * Study Registry Loader
 * Version 1.0
 */

function getRegistry() {

  const url =
    BSCE_CONFIG.REGISTRY_URL;

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
      "Unable to load registry."
    );

  }

  return JSON.parse(
    response.getContentText()
  );

}