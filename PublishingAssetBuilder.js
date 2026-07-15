/**
 * Publishing Asset Builder
 * Version 1.0
 */

function buildPublishingAssetPrompt(
  shortData
) {

  const template =
    getPromptTemplate(
      "publishing-assets"
    );

  return populateTemplate(
    template,
    shortData
  );

}