/**
 * Coloring Book Manifest Repository
 * Version 1.0
 */

function getColoringBookPageManifest(
  pageNumber
) {

  const filename =

    "page-manifest-" +

    String(
      pageNumber
    ).padStart(
      3,
      "0"
    ) +

    ".json";

  const files =

    getCurrentStudyFolder()
      .getFilesByName(
        filename
      );

  if (
    !files.hasNext()
  ) {

    throw new Error(

      "Manifest not found: " +

      filename

    );

  }

  return JSON.parse(

    files.next()
      .getBlob()
      .getDataAsString()

  );

}
