/**
 * Study Loader
 * Version 1.0
 */


/**
 * Loads a study from
 * the Study Index.
 */
function loadStudyByName(
  studyName
) {

  const index =
    getStudyIndex();

  const study =
    index.find(
      item =>
        item.studyName ===
        studyName
    );

  if (
    !study
  ) {

    throw new Error(
      "Study not found: " +
      studyName
    );

  }

  return study;

}


/**
 * Loads study folder.
 */
function loadStudyFolder(
  studyName
) {

  const study =
    loadStudyByName(
      studyName
    );

  return DriveApp.getFolderById(
    study.studyFolderId
  );

}


/**
 * Returns study metadata.
 */
function getStudyMetadata(
  studyName
) {

  return loadStudyByName(
    studyName
  );

}


/**
 * Returns all indexed studies.
 */
function getIndexedStudies() {

  return getStudyIndex();

}