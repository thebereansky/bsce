/**
 * Master Study Loader
 * Version 0.2
 */

function getMasterStudy() {

  const study =
    getCurrentStudy();

  const folder =
    getStudySubfolder(
      buildSeriesFolderName(
        study
      ),
      buildTrackFolderName(
        study
      ),
      buildStudyFolderName(
        study
      ),
      "02 - Master Study"
    );

  const files =
    folder.getFilesByName(
      buildMasterStudyFilename(
        study
      )
    );

  if (!files.hasNext()) {

    throw new Error(
      "Unable to locate Master Study file."
    );

  }

  const file =
    files.next();

  const json =
    file.getBlob()
      .getDataAsString();

  return JSON.parse(
    json
  );

}