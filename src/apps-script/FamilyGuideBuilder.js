/**
 * Family Guide Prompt Builder
 * Version 2.0
 */

function buildFamilyGuidePrompt() {

  const data =
    buildPromptData(
      "family-guide"
    );

  return buildPrompt(
    "family-guide",
    data
  );

}