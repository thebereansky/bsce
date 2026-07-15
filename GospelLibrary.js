/**
 * Gospel Library
 * Version 2.0
 */

function loadJsonFromUrl(
  url
) {

  const response =
    UrlFetchApp.fetch(
      url,
      {
        muteHttpExceptions: true
      }
    );

  if (
    response.getResponseCode() !== 200
  ) {

    throw new Error(
      "Unable to load JSON.\nURL: " +
      url
    );

  }

  return JSON.parse(
    response.getContentText()
  );

}


function getGospelVerses() {

  return loadJsonFromUrl(
    BSCE_CONFIG.GOSPEL_VERSES_URL
  );

}


function getGospelConnections() {

  return loadJsonFromUrl(
    BSCE_CONFIG.GOSPEL_CONNECTIONS_URL
  );

}


function getGospelThemeMap() {

  return loadJsonFromUrl(
    BSCE_CONFIG.GOSPEL_THEME_MAP_URL
  );

}


function getGospelThemeForStudy(
  study
) {

  if (
    !study.themes ||
    !study.themes.length
  ) {

    return "creator";

  }

  const primaryTheme =
    study.themes[0];

  const mappings =
    getGospelThemeMap()
      .mappings;

  const match =
    mappings.find(
      function(item) {

        return (
          item.studyTheme ===
          primaryTheme
        );

      }
    );

  return match
    ? match.gospelTheme
    : "creator";

}


function getGospelConnectionForTheme(
  theme
) {

  const connections =
    getGospelConnections()
      .connections;

  const match =
    connections.find(
      function(item) {

        return (
          item.theme ===
          theme
        );

      }
    );

  return match ||
    connections[0];

}


function getGospelVerseForTheme(
  theme
) {

  const verses =
    getGospelVerses()
      .verses;

  const matches =
    verses.filter(
      function(item) {

        return (
          item.theme ===
          theme
        );

      }
    );

  if (
    matches.length === 0
  ) {

    return verses[0];

  }

  const index =
    Math.floor(
      Math.random() *
      matches.length
    );

  return matches[index];

}