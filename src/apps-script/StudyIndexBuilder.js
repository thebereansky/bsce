/**
 * Study Index Builder
 * Version 1.0
 */

/**
 * Builds an index of all studies
 * found under:
 *
 * 01 - Series
 */
function buildStudyIndex() {

  const studies = [];

  const seriesRoot =
    getSeriesRootFolder();

  const seriesFolders =
    seriesRoot.getFolders();

  while (
    seriesFolders.hasNext()
  ) {

    const seriesFolder =
      seriesFolders.next();

    processSeriesFolder(
      seriesFolder,
      studies
    );

  }

  return studies;

}


/**
 * Process Series Folder
 */
function processSeriesFolder(
  seriesFolder,
  studies
) {

  const trackFolders =
    seriesFolder.getFolders();

  while (
    trackFolders.hasNext()
  ) {

    const trackFolder =
      trackFolders.next();

    processTrackFolder(
      seriesFolder,
      trackFolder,
      studies
    );

  }

}


/**
 * Process Track Folder
 */
function processTrackFolder(
  seriesFolder,
  trackFolder,
  studies
) {

  const studyFolders =
    trackFolder.getFolders();

  while (
    studyFolders.hasNext()
  ) {

    const studyFolder =
      studyFolders.next();

    studies.push({

      seriesName:
        seriesFolder.getName(),

      trackName:
        trackFolder.getName(),

      studyName:
        studyFolder.getName(),

      seriesFolderId:
        seriesFolder.getId(),

      trackFolderId:
        trackFolder.getId(),

      studyFolderId:
        studyFolder.getId()

    });

  }

}

/**
 * Save study index.
 */
function saveStudyIndex(
  index
) {

  const root =
    getEngineRootFolder();

  const filename =
    "study-index.json";

  const files =
    root.getFilesByName(
      filename
    );

  const content =
    JSON.stringify(
      index,
      null,
      2
    );

  if (
    files.hasNext()
  ) {

    files.next()
      .setContent(
        content
      );

    return;

  }

  root.createFile(
    filename,
    content,
    MimeType.PLAIN_TEXT
  );

}

/**
 * Load study index.
 */
function getStudyIndex() {

  const root =
    getEngineRootFolder();

  const files =
    root.getFilesByName(
      "study-index.json"
    );

  if (
    !files.hasNext()
  ) {

    throw new Error(
      "Study index not found."
    );

  }

  return JSON.parse(
    files.next()
      .getBlob()
      .getDataAsString()
  );

}

/**
 * Build and save index.
 */
function generateStudyIndex() {

  const index =
    buildStudyIndex();

  saveStudyIndex(
    index
  );

  return index;

}