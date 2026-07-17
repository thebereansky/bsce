/**
 * Governed Image Prompt Builder
 * Version 1.0
 */

function buildGovernedImagePrompt(
  scene
) {

  const governance =
    getVisualGovernance();

  const promptParts = [];

  promptParts.push(
    scene.videoPrompt
  );

  promptParts.push(
    "Earth-based viewpoint."
  );

  promptParts.push(
    "Human observation."
  );

  promptParts.push(
    "Biblical setting."
  );

  promptParts.push(
    "Scripture-consistent imagery."
  );

  promptParts.push(
    "Educational illustration."
  );

  promptParts.push(
    "Vertical composition."
  );

  promptParts.push(
    "YouTube Shorts format."
  );

  promptParts.push(
    "No space-view imagery."
  );

  promptParts.push(
    "No globe-earth imagery."
  );

  promptParts.push(
    "No NASA-style imagery."
  );

  promptParts.push(
    "No satellite imagery."
  );

  return promptParts.join(
    " "
  );

}
