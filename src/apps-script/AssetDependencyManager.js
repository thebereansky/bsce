/**
 * Asset Dependency Manager
 * Version 1.0
 */

function getAssetDependencies() {

  return {

    "master-study": [],

    "family-guide": [
      "master-study"
    ],

    "lesson-series": [
      "master-study"
    ],

    "lesson-script": [
      "lesson-series"
    ],

    "shorts": [
      "master-study"
    ],

    "publishing-assets": [
      "shorts",
      "lesson-script"
    ],

    "video-assets": [
      "lesson-script"
    ],

    "storyboard": [
      "lesson-script"
    ]

  };

}


/**
 * Returns dependency chain.
 */
function getDependencies(
  assetType
) {

  const deps =
    getAssetDependencies();

  return (
    deps[assetType] ||
    []
  );

}


/**
 * Checks whether asset
 * can be generated.
 */
function canGenerateAsset(
  assetType
) {

  const dependencies =
    getDependencies(
      assetType
    );

  return (
    dependencies.length === 0
  );

}