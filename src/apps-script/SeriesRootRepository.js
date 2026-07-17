/**
 * Series Root Repository
 * Version 1.0
 */

function getSeriesRootFolder() {

  const contentRoot =
    getContentRootFolder();

  const folders =
    contentRoot.getFoldersByName(
      BSCE_CONFIG.SERIES_FOLDER
    );

  if (
    !folders.hasNext()
  ) {

    throw new Error(
      "Unable to locate folder: " +
      BSCE_CONFIG.SERIES_FOLDER
    );

  }

  return folders.next();

}
