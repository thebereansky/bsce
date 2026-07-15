/**
 * Prompt Builder Engine
 * Version 1.0
 */

function buildMasterStudyPrompt() {

  const study =
    getCurrentStudy();

  return buildPrompt(
    "master-study",
    study
  );

}


function buildPrompt(
  assetType,
  data
) {

  const template =
    getPromptTemplate(
      assetType
    );

  return populateTemplate(
    template,
    data
  );

}