/**
 * Scene Image Writer
 * Version 1.0
 */

function saveSceneImage(
  imageBlob,
  sceneNumber
) {

  imageBlob.setName(

    "scene-" +

    String(
      sceneNumber
    ).padStart(
      3,
      "0"
    ) +

    ".png"

  );

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
    imageBlob
  );

}
