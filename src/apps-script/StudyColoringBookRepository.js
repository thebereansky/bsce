/**
 * Study Coloring Book Repository
 * Version 1.0
 */

function getStudyColoringBookPlan() {

  const folder =
    getStudySubfolder(

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

  const files =
    folder.getFilesByName(
      "coloring-book-plan.json"
    );

  if (
    !files.hasNext()
  ) {

    throw new Error(
      "Coloring Book Plan not found."
    );

  }

  return JSON.parse(

    files.next()
      .getBlob()
      .getDataAsString()

  );

}
