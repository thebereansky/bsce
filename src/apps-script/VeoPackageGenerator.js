/**
 * Veo Package Generator
 * Version 1.0
 */

function buildVeoPackage(
  shortObj,
  narration,
  scenePackage
) {

  return {

    title:
      shortObj.title,

    narration:
      narration,

    scenes:
      scenePackage.scenes.map(
        function(scene) {

          return {

            sceneNumber:
              scene.sceneNumber,

            duration:
              scene.duration,

            veoPrompt:
              scene.videoPrompt,

            voiceover:
              scene.voiceover

          };

        }
      )

  };

}
