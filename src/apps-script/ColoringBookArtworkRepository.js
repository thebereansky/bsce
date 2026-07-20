/**
 * Coloring Book Artwork Repository
 * Version 1.0
 */

function getColoringBookArtworkFolder() {

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

    "08 - Artwork"

  );

}


function getColoringBookArtworkFile(
  pageNumber
) {

  const filename =

    "artwork-" +

    String(
      pageNumber
    ).padStart(
      3,
      "0"
    ) +

    ".png";

  const files =

    getColoringBookArtworkFolder()
      .getFilesByName(
        filename
      );

  if (
    !files.hasNext()
  ) {

    throw new Error(

      "Artwork not found: " +

      filename

    );

  }

  return files.next();

}
