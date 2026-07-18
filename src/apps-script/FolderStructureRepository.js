/**
 * Folder Structure Repository
 * Version 1.0
 */

function getSeriesFolderByStudy() {

  const study =
    getActiveStudy();

  return getSeriesFolder(
    buildSeriesFolderName(
      study
    )
  );

}


function getTrackFolder(
  trackFolderName
) {

  const seriesFolder =
    getSeriesFolderByStudy();

  const folders =
    seriesFolder.getFoldersByName(
      trackFolderName
    );

  if (
    folders.hasNext()
  ) {

    return folders.next();

  }

  return seriesFolder.createFolder(
    trackFolderName
  );

}


function getStudyFolder(
  trackFolder,
  studyFolderName
) {

  const folders =
    trackFolder.getFoldersByName(
      studyFolderName
    );

  if (
    folders.hasNext()
  ) {

    return folders.next();

  }

  return trackFolder.createFolder(
    studyFolderName
  );

}
