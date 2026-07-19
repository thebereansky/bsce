/**
 * Artwork Repository
 * Version 1.0
 */

function saveArtworkImage(
  image
) {

  const folder =
    getOrCreateStudySubfolder(

      buildSeriesFolderName(
        getActiveStudy()
      ),

      buildTrackFolderName(
        getActiveStudy()
      ),

      buildStudyFolderName(
        getActiveStudy()
      ),

      "08 - Artwork"

    );

  folder.createFile(
    image
  );

}
