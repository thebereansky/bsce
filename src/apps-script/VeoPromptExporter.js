/**
 * Veo Prompt Exporter
 * Version 1.0
 */

function buildVeoPromptDocument(
  scenePackage
) {

  let output = "";

  scenePackage.scenes.forEach(
    function(scene) {

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

    }
  );

  return output;

}
