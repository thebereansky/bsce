/**
 * Shorts Asset Factory
 * Version 1.0
 */

function generateShortAssets(
  shortObj
) {

  Logger.log(
    "Generating Voiceover..."
  );

  const voiceover =
    generateShortVoiceover(
      shortObj
    );

  Logger.log(
    "Generating Scene Package..."
  );

  const scenePackage =
    buildVideoScenePackage(

      shortObj,

      voiceover.narration

    );

  Logger.log(
    "Generating Images..."
  );

  scenePackage.scenes
    .forEach(function(scene) {

      const image =
        generateSceneImage(
          scene
        );

      saveSceneImage(

        image,

        scene.sceneNumber

      );

    });

  Logger.log(
    "Generating Manifest..."
  );

  const manifest =
    buildVideoManifest(

      shortObj,

      scenePackage

    );

  saveVideoManifest(

    manifest,

    shortObj

  );

  saveShortAudio(

    shortObj,

    voiceover.audioBlob

  );

  Logger.log(
    "Assets Complete."
  );

}
