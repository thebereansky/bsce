/**
 * Study Folder Utilities
 * Version 0.2
 */


/**
 * Root Folder
 */
function getContentRootFolder() {

  return DriveApp.getFolderById(
    BSCE_CONFIG.CONTENT_ROOT_FOLDER_ID
  );

}

function getEngineRootFolder() {

  return DriveApp.getFolderById(
    BSCE_CONFIG.ENGINE_ROOT_FOLDER_ID
  );

}

/**
 * 01 - Series
 */
function getSeriesRootFolder() {

  const root =
    getContentRootFolder();

  const folders =
    root.getFoldersByName(
      BSCE_CONFIG.SERIES_FOLDER
    );

  if (!folders.hasNext()) {

    throw new Error(
      "Unable to locate folder: " +
      BSCE_CONFIG.SERIES_FOLDER
    );

  }

  return folders.next();

}


/**
 * Example:
 * 001 - Biblical Cosmology
 */
function getSeriesFolder(
  seriesName
) {

  const root =
    getSeriesRootFolder();

  const folders =
    root.getFoldersByName(
      seriesName
    );

  if (!folders.hasNext()) {

    throw new Error(
      "Unable to locate series: " +
      seriesName
    );

  }

  return folders.next();

}


/**
 * Example:
 * Track 001 - Foundations
 */
function getTrackFolder(
  seriesName,
  trackName
) {

  const seriesFolder =
    getSeriesFolder(
      seriesName
    );

  const folders =
    seriesFolder.getFoldersByName(
      trackName
    );

  if (!folders.hasNext()) {

    throw new Error(
      "Unable to locate track: " +
      trackName
    );

  }

  return folders.next();

}


/**
 * Example:
 * Study 001 - In the Beginning
 */
function getStudyFolder(
  seriesName,
  trackName,
  studyName
) {

  const trackFolder =
    getTrackFolder(
      seriesName,
      trackName
    );

  const folders =
    trackFolder.getFoldersByName(
      studyName
    );

  if (!folders.hasNext()) {

    throw new Error(
      "Unable to locate study: " +
      studyName
    );

  }

  return folders.next();

}


/**
 * Example:
 * 02 - Master Study
 * 03 - YouTube
 * 04 - Digital Products
 */
function getStudySubfolder(
  seriesName,
  trackName,
  studyName,
  subfolderName
) {

  const studyFolder =
    getStudyFolder(
      seriesName,
      trackName,
      studyName
    );

  const folders =
    studyFolder.getFoldersByName(
      subfolderName
    );

  if (!folders.hasNext()) {

    throw new Error(
      "Unable to locate subfolder: " +
      subfolderName
    );

  }

  return folders.next();

}

/**
 * Gets or creates a study subfolder.
 */
function getOrCreateStudySubfolder(
  seriesName,
  trackName,
  studyName,
  subfolderName
) {

  const studyFolder =
    getStudyFolder(
      seriesName,
      trackName,
      studyName
    );

  const folders =
    studyFolder.getFoldersByName(
      subfolderName
    );

  if (
    folders.hasNext()
  ) {

    return folders.next();

  }

  Logger.log(
    "Creating subfolder: " +
    subfolderName
  );

  return studyFolder.createFolder(
    subfolderName
  );

}

/**
 * Gets or creates a study subfolder.
 *
 * Example:
 * 02 - Master Study
 * 03 - YouTube
 * 04 - Digital Products
 * 05 - Production
 */
function getOrCreateStudySubfolder(
  seriesName,
  trackName,
  studyName,
  subfolderName
) {

  const studyFolder =
    getStudyFolder(
      seriesName,
      trackName,
      studyName
    );

  const folders =
    studyFolder.getFoldersByName(
      subfolderName
    );

  if (
    folders.hasNext()
  ) {

    return folders.next();

  }

  Logger.log(
    "Creating subfolder: " +
    subfolderName
  );

  return studyFolder.createFolder(
    subfolderName
  );

}

function getCurrentStudyFolder() {

  const study =
    getActiveStudy();

  return getStudyFolder(
    buildSeriesFolderName(
      study
    ),
    buildTrackFolderName(
      study
    ),
    buildStudyFolderName(
      study
    )
  );

}