/**
 * Study Definition Repository
 * Version 1.0
 */

function getStudyDefinitionById(
  studyId
) {

  const study =
    getActiveStudy();

  const seriesFolder =
    getSeriesFolder(
      buildSeriesFolderName(
        study
      )
    );

  const filename =

    "study-" +

    studyId +

    ".json";

  const files =
    seriesFolder.getFilesByName(
      filename
    );

  if (
    !files.hasNext()
  ) {

    throw new Error(

      "Study definition not found: " +

      studyId

    );

  }

  return JSON.parse(

    files.next()
      .getBlob()
      .getDataAsString()

  );

}
