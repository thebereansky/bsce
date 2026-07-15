/**
 * Build Manifest Manager
 * Version 1.0
 */

function getBuildManifestFilename() {

  return "build-manifest.json";

}


/**
 * Load manifest.
 */
function loadBuildManifest() {

  try {

    const studyFolder =
      getCurrentStudyFolder();

    const files =
      studyFolder.getFilesByName(
        getBuildManifestFilename()
      );

    if (
      !files.hasNext()
    ) {

      return {
        assets: {}
      };

    }

    return JSON.parse(
      files.next()
        .getBlob()
        .getDataAsString()
    );

  } catch (e) {

    return {
      assets: {}
    };

  }

}


/**
 * Save manifest.
 */
function saveBuildManifest(
  manifest
) {

  const studyFolder =
    getCurrentStudyFolder();

  const content =
    JSON.stringify(
      manifest,
      null,
      2
    );

  const files =
    studyFolder.getFilesByName(
      getBuildManifestFilename()
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
    getBuildManifestFilename(),
    content,
    MimeType.PLAIN_TEXT
  );

}

function isAssetBuilt(
  assetType
) {

  const manifest =
    loadBuildManifest();

  return (
    manifest.assets[
      assetType
    ] === true
  );

}


function markAssetBuilt(
  assetType
) {

  const manifest =
    loadBuildManifest();

  manifest.assets[
    assetType
  ] = true;

  manifest.lastBuild =
    new Date()
      .toISOString();

  saveBuildManifest(
    manifest
  );

}


function resetBuildManifest() {

  saveBuildManifest({

    assets: {}

  });

}