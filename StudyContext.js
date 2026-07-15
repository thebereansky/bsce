/**
 * Study Context
 * Version 0.2
 */

function getCurrentSeriesFolderName() {

  return buildSeriesFolderName(
    getCurrentStudy()
  );

}

function getCurrentTrackFolderName() {

  return buildTrackFolderName(
    getCurrentStudy()
  );

}

function getCurrentStudyFolderName() {

  return buildStudyFolderName(
    getCurrentStudy()
  );

}