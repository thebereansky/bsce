/**
 * Prototype Image Writer
 * Version 1.0
 */

function savePrototypeImage(
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

      "07 - Children's Materials"

    );

  folder.createFile(
    image
  );

}
