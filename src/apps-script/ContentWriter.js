/**
 * Content Writer Utilities
 * Version 1.0
 */


/**
 * Saves content into a specific
 * Study subfolder.
 *
 * Performs an upsert:
 * - Updates existing file if found
 * - Creates file if not found
 */
function saveFileToStudySubfolder(
  seriesName,
  trackName,
  studyName,
  content,
  filename,
  subfolderName
) {

const folder =
  getOrCreateStudySubfolder(
      seriesName,
      trackName,
      studyName,
      subfolderName
    );

  const files =
    folder.getFilesByName(
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

  folder.createFile(
    filename,
    content,
    MimeType.PLAIN_TEXT
  );

}


/**
 * Saves content into the
 * currently selected study.
 */
function saveCurrentStudyFile(
  content,
  filename,
  subfolderName
) {

  const study =
    getCurrentStudy();

  saveFileToStudySubfolder(
    buildSeriesFolderName(
      study
    ),
    buildTrackFolderName(
      study
    ),
    buildStudyFolderName(
      study
    ),
    content,
    filename,
    subfolderName
  );

}