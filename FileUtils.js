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