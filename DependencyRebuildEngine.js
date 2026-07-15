/**
 * Dependency Rebuild Engine
 * Version 1.0
 */

function rebuildAssetTree(
  assetType
) {

  Logger.log(
    "Rebuilding: " +
    assetType
  );

  buildAsset(
    assetType
  );

  const impacted =
    getImpactedAssets(
      assetType
    );

  impacted.forEach(
    asset => {

      rebuildAssetTree(
        asset
      );

    }
  );

}
