/**
 * YouTube Publisher
 * Version 1.0
 */

function publishStudyToYouTube() {

  const publishingAssets =
    loadGeneratedAsset(
      "publishing-assets"
    );

  Logger.log(
    "Publishing to YouTube..."
  );

  return publishingAssets;

}