/**
 * Asset Orchestrator
 * Version 1.0
 */

function generateStudyAssets() {

  Logger.log(
    "Starting Study Asset Generation..."
  );

  const results = {};

  results.masterStudy =
    generateAsset(
      "master-study"
    );

  results.familyGuide =
    generateAsset(
      "family-guide"
    );

  results.lessonSeries =
    generateAsset(
      "lesson-series"
    );

  results.lessonScript =
    generateAsset(
      "lesson-script"
    );

  results.shorts =
    generateAsset(
      "shorts"
    );

  Logger.log(
    "Generating Publishing Assets..."
  );

  results.publishingAssets =
    generatePublishingAssetsForShorts(
      results.shorts
    );

  Logger.log(
    "Generating Video Assets..."
  );

  results.videoAssets =
    buildVideoAssets(
      results.lessonScript
    );

  Logger.log(
    "Generating Storyboard..."
  );

  results.storyboard =
    buildVideoStoryboard(
      results.lessonScript
    );

  Logger.log(
    "Study Asset Generation Complete."
  );

  return results;

}
