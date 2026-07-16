/**
 * File Utilities
 * Version 1.0
 */

function sanitizeFilename(
  value
) {

  if (!value) {
    return "";
  }

  return value
    .toString()
    .trim()
    .replace(/[<>:"/\\|?*]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

}

/**
 * Returns a child folder by name.
 *
 * Throws an error if the folder
 * does not exist.
 */
function getChildFolderByName(
  parentFolder,
  folderName
) {

  const folders =
    parentFolder.getFoldersByName(
      folderName
    );

  if (
    !folders.hasNext()
  ) {

    throw new Error(

      "Folder not found: " +

      folderName

    );

  }

  return folders.next();

}
