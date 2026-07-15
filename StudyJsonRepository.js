/**
 * Study JSON Repository
 * Version 1.0
 */


/**
 * Returns study JSON filename.
 */
function buildStudyJsonFilename(
  studyId
) {

  return (
    "study-" +
    studyId +
    ".json"
  );

}


/**
 * Load study JSON.
 */
function loadStudyJson(
  studyId
) {

  const studyFolder =
    getCurrentStudyFolder();

  const filename =
    buildStudyJsonFilename(
      studyId
    );

  const files =
    studyFolder.getFilesByName(
      filename
    );

  if (
    !files.hasNext()
  ) {

    throw new Error(
      "Study JSON not found: " +
      filename
    );

  }

  return JSON.parse(
    files.next()
      .getBlob()
      .getDataAsString()
  );

}


/**
 * Save study JSON.
 */
function saveStudyJson(
  studyId,
  studyData
) {

  const studyFolder =
    getCurrentStudyFolder();

  const filename =
    buildStudyJsonFilename(
      studyId
    );

  const content =
    JSON.stringify(
      studyData,
      null,
      2
    );

  const files =
    studyFolder.getFilesByName(
      filename
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

  studyFolder.createFile(
    filename,
    content,
    MimeType.PLAIN_TEXT
  );

}


/**
 * Check existence.
 */
function studyJsonExists(
  studyId
) {

  try {

    loadStudyJson(
      studyId
    );

    return true;

  } catch (e) {

    return false;

  }

}
