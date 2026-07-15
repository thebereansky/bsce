/**
 * Asset Recovery Engine
 * Version 2.0
 *
 * Provides self-healing asset recovery
 * for Product Factory operations.
 */


/**
 * Loads an asset if it exists.
 * If missing, regenerates it automatically.
 */
function loadOrGenerateAsset(
  assetType
) {

  try {

    Logger.log(
      "Loading asset: " +
      assetType
    );

    return loadGeneratedAsset(
      assetType
    );

  } catch (error) {

    Logger.log(
      "Missing asset detected: " +
      assetType
    );

    Logger.log(
      "Attempting recovery..."
    );

    regenerateAsset(
      assetType
    );

    return loadGeneratedAsset(
      assetType
    );

  }

}


/**
 * Forces regeneration of a specific asset.
 */
function regenerateAsset(
  assetType
) {

  Logger.log(
    "Regenerating asset: " +
    assetType
  );

  generateAsset(
    assetType
  );

}


/**
 * Ensures an asset exists.
 * Generates it if missing.
 */
function ensureAssetExists(
  assetType
) {

  try {

    loadGeneratedAsset(
      assetType
    );

    Logger.log(
      "Verified asset: " +
      assetType
    );

    return true;

  } catch (error) {

    Logger.log(
      "Asset missing: " +
      assetType
    );

    Logger.log(
      "Generating asset..."
    );

    generateAsset(
      assetType
    );

    return true;

  }

}


/**
 * Returns true if asset exists.
 */
function assetExists(
  assetType
) {

  try {

    loadGeneratedAsset(
      assetType
    );

    return true;

  } catch (error) {

    return false;

  }

}


/**
 * Ensures all Product Factory
 * dependencies exist.
 */
function ensureProductDependencies() {

  const requiredAssets = [

    "master-study",

    "family-guide",

    "lesson-series",

    "lesson-script",

    "shorts"

  ];

  requiredAssets.forEach(
    ensureAssetExists
  );

}


/**
 * Returns list of missing assets.
 */
function getMissingAssets(
  assetList
) {

  const missing = [];

  assetList.forEach(
    function(assetType) {

      if (
        !assetExists(
          assetType
        )
      ) {

        missing.push(
          assetType
        );

      }

    }
  );

  return missing;

}


/**
 * Validates Product Factory
 * dependency requirements.
 */
function validateProductDependencies() {

  const requiredAssets = [

    "master-study",

    "family-guide",

    "lesson-series",

    "lesson-script",

    "shorts"

  ];

  const missing =
    getMissingAssets(
      requiredAssets
    );

  return {

    valid:
      missing.length === 0,

    missing:
      missing

  };

}


/**
 * Repairs all missing dependencies.
 */
function repairMissingDependencies() {

  const validation =
    validateProductDependencies();

  if (
    validation.valid
  ) {

    Logger.log(
      "No repairs required."
    );

    return;

  }

  validation.missing.forEach(
    function(assetType) {

      Logger.log(
        "Repairing: " +
        assetType
      );

      generateAsset(
        assetType
      );

    }
  );

}


/**
 * Test Function
 */
function testAssetRecovery() {

  const validation =
    validateProductDependencies();

  Logger.log(

    JSON.stringify(
      validation,
      null,
      2
    )

  );

}