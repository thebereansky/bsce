/**
 * Shorts Audio Writer
 * Version 1.0
 */

function saveShortAudio(
  shortObj,
  audioBlob
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

      "03 - YouTube"

    );

  folder.createFile(
    audioBlob
  );

}
