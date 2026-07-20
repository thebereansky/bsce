/**
 * Coloring Book Manifest Repository
 * Version 2.0
 */

function getColoringBookManifestFolder() {

  const study =
    getActiveStudy();

  return getOrCreateStudySubfolder(

    buildSeriesFolderName(
      study
    ),

    buildTrackFolderName(
      study
    ),

    buildStudyFolderName(
      study
    ),

    "07 - Children's Materials"

  );

}


function getColoringBookPageManifest(
  pageNumber
) {

  const filename =

    "page-manifest-" +

    String(
      pageNumber
    ).padStart(
      3,
      "0"
    ) +

    ".json";

  const files =

    getColoringBookManifestFolder()
      .getFilesByName(
        filename
      );

  if (
    !files.hasNext()
  ) {

    throw new Error(

      "Manifest not found: " +

      filename

    );

  }

  return JSON.parse(

    files.next()
      .getBlob()
      .getDataAsString()

  );

}
