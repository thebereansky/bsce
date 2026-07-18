/**
 * Coloring Book Plan Repository
 * Version 2.0
 */

function getColoringBookPlan() {

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


/**
 * Save Coloring Book Plan
 */
function saveColoringBookPlan(
  plan
) {

  saveCurrentStudyFile(

    JSON.stringify(
      plan,
      null,
      2
    ),

    "coloring-book-plan.json",

    "07 - Children's Materials"

  );

}
