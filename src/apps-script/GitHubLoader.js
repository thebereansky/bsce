/**
 * GitHub Loader Utilities
 * Version 1.0
 *
 * Centralized GitHub content loading.
 */


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
