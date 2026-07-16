/**
 * YouTube Upload Package Writer
 * Version 1.0
 */

function saveYouTubeUploadPackage(
  packageData,
  shortObj
) {

  saveCurrentStudyFile(

    JSON.stringify(
      packageData,
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

    "-youtube-upload-package.json",

    "03 - YouTube"

  );

}
