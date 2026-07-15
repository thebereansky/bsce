/**
 * Asset Registry
 * Version 1.0
 */

function getAssetRegistry() {

  const response =
    UrlFetchApp.fetch(
      BSCE_CONFIG.ASSET_REGISTRY_URL,
      {
        muteHttpExceptions: true
      }
    );

  const status =
    response.getResponseCode();

  if (status !== 200) {

    throw new Error(
      "Unable to load asset registry."
    );

  }

  return JSON.parse(
    response.getContentText()
  );

}


function getAssetDefinition(
  assetId
) {

  const registry =
    getAssetRegistry();

  const asset =
    registry.assets.find(
      function(item) {

        return (
          item.id === assetId
        );

      }
    );

  if (!asset) {

    throw new Error(
      "Unknown asset type: " +
      assetId
    );

  }

  return asset;

}
