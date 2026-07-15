/**
 * Dependency Aware Build Engine
 * Version 1.0
 */

function buildAsset(
  assetType
) {

  Logger.log(
    "Building Asset: " +
    assetType
  );

  const dependencies =
    getDependencies(
      assetType
    );

  dependencies.forEach(
    dependency => {

      ensureAssetBuilt(
        dependency
      );

    }
  );

  generateAsset(
    assetType
  );

  markAssetBuilt(
    assetType
  );

}


/**
 * Ensures dependency exists.
 */
function ensureAssetBuilt(
  assetType
) {

  if (
    isAssetBuilt(
      assetType
    )
  ) {

    Logger.log(
      assetType +
      " already built."
    );

    return;

  }

  buildAsset(
    assetType
  );

}


/**
 * Build all assets.
 */
function buildStudyAssets() {

  const assets =
    getAssetRegistry()
      .assets;

  assets.forEach(
    asset => {

      buildAsset(
        asset.id
      );

    }
  );

}