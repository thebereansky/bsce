/**
 * Prompt Data Builder
 * Version 3.0
 */

function buildPromptData(
  assetType
) {

  let data;

  switch (assetType) {

    case "master-study":

      data =
        getCurrentStudy();

      break;

    default:

      data =
        getMasterStudy();

      break;

  }

  data.gospelTheme =
    getGospelThemeForStudy(
      data
    );

  data.gospelConnection =
    getGospelConnectionForTheme(
      data.gospelTheme
    );

  data.gospelVerse =
    getGospelVerseForTheme(
      data.gospelTheme
    );

  data.cosmologyFramework =
    getCosmologyFramework();

  /*
   * IMPORTANT
   *
   * Makes the entire source object
   * available to prompt templates.
   */

  data.sourceJson =
    JSON.stringify(
      data,
      null,
      2
    );

  return data;

}