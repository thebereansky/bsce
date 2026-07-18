/**
 * Coloring Book Page Manifest Writer
 * Version 1.0
 */

function saveColoringBookPageManifest(
  manifest
) {

  const filename =

    "page-manifest-" +

    String(
      manifest.pageNumber
    ).padStart(
      3,
      "0"
    ) +

    ".json";

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
