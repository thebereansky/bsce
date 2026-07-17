/**
 * Series Curriculum Repository
 * Version 1.0
 */

function getSeriesCurriculum() {

  const study =
    getActiveStudy();

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

      "05 - Production"

    );

  const files =
    folder.getFilesByName(
      "series-curriculum-plan.json"
    );

  if (
    !files.hasNext()
  ) {

    throw new Error(
      "Series curriculum not found."
    );

  }

  return JSON.parse(

    files.next()
      .getBlob()
      .getDataAsString()

  );

}
