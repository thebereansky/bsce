/**
 * Series Curriculum Repository
 * Version 2.0
 */

function getSeriesCurriculum() {

  const folder =
    getSeriesRootFolder();

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
