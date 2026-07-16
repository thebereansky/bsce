/**
 * Veo Render Package Generator
 * Version 1.0
 */

function buildVeoRenderPackage(
  renderPackage
) {

  let output = "";

  output +=
    "TITLE:\n";

  output +=
    renderPackage.title +
    "\n\n";

  renderPackage.scenes
    .forEach(function(scene) {

      output +=
        "=================================\n";

      output +=
        "SCENE " +
        scene.sceneNumber +
        "\n\n";

      output +=
        "VOICEOVER:\n";

      output +=
        scene.voiceover +
        "\n\n";

      output +=
        "VIDEO PROMPT:\n";

      output +=
        scene.videoPrompt +
        "\n\n";

    });

  return output;

}
