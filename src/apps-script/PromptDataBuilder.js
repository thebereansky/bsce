/**
 * Prompt Data Builder
 * Version 4.0
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

  /*
   * Legacy support
   *
   * Existing prompts currently
   * reference {{cosmologyFramework}}.
   */

  data.cosmologyFramework =
    getCosmologyFramework();

  /*
   * Governance Context
   *
   * Future prompts should use:
   *
   * {{governance.brandIdentity}}
   * {{governance.contentBoundaries}}
   * {{governance.cosmologyFramework}}
   * {{governance.qualityStandards}}
   * {{governance.publishingStandards}}
   * {{governance.approvalThresholds}}
   */

  data.governance =
    buildGovernanceContext();

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
