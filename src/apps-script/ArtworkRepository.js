/**
 * Artwork Repository
 * Version 2.0
 */

function saveArtworkImage(
  imageBlob
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
    imageBlob
  );

}
