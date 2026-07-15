/**
 * Publishing Asset Generator
 * Version 2.0
 */

function generatePublishingAssets(
  shortData
) {

  const prompt =
    buildPublishingAssetPrompt(
      shortData
    );

  return generateJsonContent(
    prompt
  );

}


/**
 * Generates publishing assets
 * and saves them to Drive.
 */
function generateAndSavePublishingAssets(
  shortData
) {

  const assets =
    generatePublishingAssets(
      shortData
    );

  const filename =
    buildPublishingAssetsFilename(
      shortData
    );

  savePublishingAssets(
    assets,
    filename
  );

  return assets;

}


/**
 * Filename builder.
 */
function buildPublishingAssetsFilename(
  shortData
) {

  return (
    "publishing-assets-" +
    shortData.shortNumber +
    "-v1.0.json"
  );

}


/**
 * Save publishing assets.
 */
function savePublishingAssets(
  assets,
  filename
) {

  const study =
    getCurrentStudy();

  saveFileToStudySubfolder(
    JSON.stringify(
      assets,
      null,
      2
    ),
    filename,
    "03 - YouTube"
  );

}


/**
 * Generate publishing assets
 * for every Short.
 */
function generatePublishingAssetsForShorts(
  shortsContent
) {

  const results = [];

  shortsContent.shorts.forEach(
    shortData => {

      const assets =
        generatePublishingAssets(
          shortData
        );

      results.push({

        shortNumber:
          shortData.shortNumber,

        shortTitle:
          shortData.title,

        assets:
          assets

      });

    }
  );

  return results;

}


/**
 * Generate and save publishing
 * assets for every Short.
 */
function generateAndSavePublishingAssetsForShorts(
  shortsContent
) {

  const results = [];

  shortsContent.shorts.forEach(
    shortData => {

      const assets =
        generateAndSavePublishingAssets(
          shortData
        );

      results.push({

        shortNumber:
          shortData.shortNumber,

        shortTitle:
          shortData.title,

        assets:
          assets

      });

    }
  );

  return results;

}