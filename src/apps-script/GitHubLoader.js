/**
 * GitHub Loader Utilities
 * Version 1.1
 *
 * Centralized GitHub content loading.
 */


/**
 * Build GitHub Raw URL
 */
function buildGitHubUrl(
  path
) {

  return (

    BSCE_CONFIG.GITHUB_RAW_BASE_URL +

    "/" +

    path

  );

}


/**
 * Load JSON from GitHub
 */
function loadJsonFromGitHub(
  url
) {

  const response =
    UrlFetchApp.fetch(url);

  return JSON.parse(

    response.getContentText()

  );

}


/**
 * Load Text from GitHub
 */
function loadTextFromGitHub(
  url
) {

  const response =
    UrlFetchApp.fetch(url);

  return response.getContentText();

}
