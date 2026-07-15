/**
 * Asset Naming Utilities
 * Version 1.0
 */

function resolveAssetFilename(
  template,
  study
) {

  return template.replace(
    "{studyId}",
    study.study.id
  );

}
