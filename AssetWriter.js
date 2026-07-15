/**
 * Asset Writer
 * Version 1.0
 */

function saveGeneratedAsset(
  assetType,
  content
) {

  const study =
    getCurrentStudy();

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
      getCurrentSeriesFolderName(),
      getCurrentTrackFolderName(),
      getCurrentStudyFolderName(),
      asset.outputFolder
    );

  folder.createFile(
    filename,
    content,
    MimeType.PLAIN_TEXT
  );

}