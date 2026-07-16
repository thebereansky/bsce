/**
 * Image Generation Package Generator
 * Version 1.0
 */

function buildImageGenerationPackage(
  scenePackage
) {

  return {

    generatedOn:
      new Date()
        .toISOString(),

    images:

      scenePackage.scenes.map(
        function(scene) {

          return {

            sceneNumber:
              scene.sceneNumber,

            prompt:
              scene.videoPrompt +

              ". Cinematic biblical illustration. " +

              "Vertical 9:16 composition. " +

              "YouTube Shorts style. " +

              "Highly detailed."

          };

        }
      )

  };

}
