/**
 * Artwork Prompt Builder
 * Version 1.0
 */

function buildArtworkPrompt(
  page
) {

  const promptParts = [];

  promptParts.push(
    "Professional coloring book artwork."
  );

  promptParts.push(
    "Black and white line art."
  );

  promptParts.push(
    "Bold clean outlines."
  );

  promptParts.push(
    "Large coloring areas."
  );

  promptParts.push(
    "No shading."
  );

  promptParts.push(
    "No grayscale."
  );

  promptParts.push(
    "No text."
  );

  promptParts.push(
    "No lettering."
  );

  promptParts.push(
    "No words."
  );

  promptParts.push(
    "No scripture references."
  );

  promptParts.push(
    "No captions."
  );

  promptParts.push(
    "No title."
  );

  promptParts.push(
    "Artwork only."
  );

  promptParts.push(
    page.visualDescription
  );

  return promptParts.join(
    " "
  );

}
