/**
 * Video Manifest Generator
 * Version 1.0
 */

function buildVideoManifest(
  shortObj,
  scenePackage
) {

  return {

    generatedOn:
      new Date()
        .toISOString(),

    series:
      shortObj.seriesName,

    track:
      shortObj.trackName,

    study:
      shortObj.studyTitle,

    audio:

      "short-" +

      String(
        shortObj.shortNumber
      ).padStart(
        3,
        "0"
      ) +

      ".mp3",

    slides:

      scenePackage.scenes.map(
        function(scene) {

          return {

            image:

              "scene-" +

              String(
                scene.sceneNumber
              ).padStart(
                3,
                "0"
              ) +

              ".png",

            duration:
              scene.duration

          };

        }
      )

  };

}
