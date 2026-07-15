function loadPromptTemplate(path) {

  const url =
    BSCE_CONFIG.PROMPT_BASE_URL +
    "/" +
    path;

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
      "Unable to load prompt template.\n" +
      "HTTP Status: " + status +
      "\nURL: " + url
    );

  }

  return response.getContentText();

}

function getPromptTemplate(assetType) {

  return loadPromptTemplate(
    assetType + "/current.md"
  );

}

function loadPromptTemplate(path) {

  const url =
    BSCE_CONFIG.PROMPT_BASE_URL +
    "/" +
    path;

  const response =
    UrlFetchApp.fetch(
      url,
      {
        muteHttpExceptions: true
      }
    );

  if (response.getResponseCode() !== 200) {

    throw new Error(
      "Unable to load prompt template.\nURL: " +
      url
    );

  }

  return response.getContentText();

}