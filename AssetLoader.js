/**
 * Asset Loader
 * Version 1.0
 */

function loadGeneratedAsset(
  assetType
) {

  const study =
    getActiveStudy();

  const asset =
    getAssetDefinition(
      assetType
    );

  const filename =
    resolveAssetFilename(
      asset.outputFilename,
      study
    );

  const folder =
    getStudySubfolder(
      buildSeriesFolderName(
        study
      ),
      buildTrackFolderName(
        study
      ),
      buildStudyFolderName(
        study
      ),
      asset.outputFolder
    );

  const files =
    folder.getFilesByName(
      filename
    );

  if (
    !files.hasNext()
  ) {

    throw new Error(
      "Asset not found: " +
      assetType
    );

  }

  return JSON.parse(
    files.next()
      .getBlob()
      .getDataAsString()
  );

}