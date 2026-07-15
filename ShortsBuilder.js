/**
 * Shorts Prompt Builder
 * Version 2.0
 */

function buildShortsPrompt() {

  const data =
    buildPromptData(
      "shorts"
    );

  return buildPrompt(
    "shorts",
    data
  );

}