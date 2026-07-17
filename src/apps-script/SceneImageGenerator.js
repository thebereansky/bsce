/**
 * Scene Image Generator
 * Version 2.0
 */

function generateSceneImage(
  scene
) {

  const prompt =
    buildGovernedImagePrompt(
      scene
    );

  const validation =
    validateVisualPrompt(
      prompt
    );

  if (
    !validation.passed
  ) {

    throw new Error(

      "Visual Governance Failure:\n\n" +

      JSON.stringify(

        validation,

        null,

        2

      )

    );

  }

  Logger.log(
    "Generating governed image for scene " +
    scene.sceneNumber
  );

  return generateImage(
    prompt
  );

}
