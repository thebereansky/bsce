/**
 * Cosmology Library
 * Version 1.0
 */

function getCosmologyFramework() {

  const response =
    UrlFetchApp.fetch(
      BSCE_CONFIG.COSMOLOGY_FRAMEWORK_URL
    );

  if (
    response.getResponseCode() !== 200
  ) {

    throw new Error(
      "Unable to load cosmology framework."
    );

  }

  return response.getContentText();

}
