/**
 * Naming Utilities
 * Version 2.0
 */


/**
 * Series Folder
 *
 * Example:
 * 001 - Biblical Cosmology
 */
function buildSeriesFolderName(
  study
) {

  return (
    study.series.id +
    " - " +
    study.series.name
  );

}


/**
 * Track Folder
 *
 * Example:
 * Track 001 - Foundations
 */
function buildTrackFolderName(
  study
) {

  return (
    "Track " +
    study.track.id +
    " - " +
    study.track.name
  );

}


/**
 * Study Folder
 *
 * Example:
 * Study 001 - In the Beginning
 */
function buildStudyFolderName(
  study
) {

  return (
    "Study " +
    study.study.id +
    " - " +
    study.study.title
  );

}


/**
 * Master Study Filename
 */
function buildMasterStudyFilename(
  study
) {

  return (
    "master-study-" +
    study.study.id +
    "-v1.0.json"
  );

}


/**
 * Family Guide Filename
 */
function buildFamilyGuideFilename(
  study
) {

  return (
    "family-guide-" +
    study.study.id +
    "-v1.0.json"
  );

}


/**
 * Master Study Prompt Filename
 */
function buildMasterStudyPromptFilename(
  study
) {

  return (
    "master-study-" +
    study.study.id +
    "-prompt.md"
  );

}


/**
 * Family Guide Prompt Filename
 */
function buildFamilyGuidePromptFilename(
  study
) {

  return (
    "family-guide-" +
    study.study.id +
    "-prompt.md"
  );

}


/**
 * Sanitizes text for safe
 * filenames.
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
    .replace(
      /[<>:"\/\\|?*]/g,
      ""
    )
    .replace(
      /\s+/g,
      "-"
    )
    .replace(
      /-+/g,
      "-"
    );

}


/**
 * Creates URL-friendly slug.
 */
function buildSlug(
  value
) {

  if (!value) {

    return "";

  }

  return value
    .toLowerCase()
    .trim()
    .replace(
      /[^a-z0-9\s-]/g,
      ""
    )
    .replace(
      /\s+/g,
      "-"
    )
    .replace(
      /-+/g,
      "-"
    );

}


/**
 * Generic Asset Filename
 *
 * Example:
 * shorts-001-v1.0.json
 */
function buildAssetFilename(
  assetType,
  studyId,
  version
) {

  return (

    assetType +
    "-" +
    studyId +
    "-v" +
    version +
    ".json"

  );

}


/**
 * Video Project Name
 *
 * Example:
 * lesson-What-Does-Genesis-11-Teach-About-God
 */
function buildVideoProjectFilename(
  lessonScript
) {

  const lessonId =
    lessonScript.lessonId ||
    "lesson";

  const title =
    lessonScript.title ||
    "untitled";

  return (

    lessonId +
    "-" +
    sanitizeFilename(
      title
    )

  );

}