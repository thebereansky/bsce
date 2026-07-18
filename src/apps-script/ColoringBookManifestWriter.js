/**
 * Coloring Book Manifest Writer
 * Version 1.0
 */

function saveColoringBookManifest(
  filename,
  manifest
) {

  saveCurrentStudyFile(

    JSON.stringify(
      manifest,
      null,
      2
    ),

    filename,

    "07 - Children's Materials"

  );

}
