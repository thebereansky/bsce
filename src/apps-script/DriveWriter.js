/**
 * Drive Writer
 * Version 3.0
 */


/**
 * Save prompt into the legacy
 * Generated Prompts folder.
 */
function savePromptToDrive(
  content,
  filename
) {

  const root =
    DriveApp.getFolderById(
      BSCE_CONFIG.ENGINE_ROOT_FOLDER_ID
    );

  const folders =
    root.getFoldersByName(
      BSCE_CONFIG.OUTPUT_FOLDER
    );

  let folder;

  if (
    folders.hasNext()
  ) {

    folder =
      folders.next();

  } else {

    folder =
      root.createFolder(
        BSCE_CONFIG.OUTPUT_FOLDER
      );

  }

  folder.createFile(
    filename,
    content,
    MimeType.PLAIN_TEXT
  );

}


/**
 * Save a file into a specific
 * study subfolder.
 */
function saveFileToStudySubfolder(
  seriesFolderName,
  trackFolderName,
  studyFolderName,
  content,
  filename,
  subfolderName
) {

  const root =
    DriveApp.getFolderById(
      BSCE_CONFIG.CONTENT_ROOT_FOLDER_ID
    );

  const seriesFolder =
    getChildFolderByName(
      root,
      seriesFolderName
    );

  const trackFolder =
    getChildFolderByName(
      seriesFolder,
      trackFolderName
    );

  const studyFolder =
    getChildFolderByName(
      trackFolder,
      studyFolderName
    );

  const subfolder =
    getChildFolderByName(
      studyFolder,
      subfolderName
    );

  subfolder.createFile(
    filename,
    content,
    MimeType.PLAIN_TEXT
  );

}