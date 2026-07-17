/**
 * Video Manifest Writer
 * Version 1.0
 */

function saveVideoManifest(
  manifest,
  shortObj
) {

  saveCurrentStudyFile(

    JSON.stringify(
      manifest,
      null,
      2
    ),

    "short-" +

    String(
      shortObj.shortNumber
    ).padStart(
      3,
      "0"
    ) +

    "-video-manifest.json",

    "03 - YouTube"

  );

}
