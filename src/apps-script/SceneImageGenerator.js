/**
 * Scene Image Generator
 * Version 1.0
 */

function generateSceneImage(
  scene
) {

  Logger.log(
    "Generating image for scene " +
    scene.sceneNumber
  );

  return generateImage(
    scene.videoPrompt
  );

}
