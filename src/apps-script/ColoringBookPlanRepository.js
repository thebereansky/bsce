/**
 * Coloring Book Plan Repository
 * Version 1.0
 */

function getColoringBookPlan() {

  const files =
    getCurrentStudyFolder()
      .getFilesByName(
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
