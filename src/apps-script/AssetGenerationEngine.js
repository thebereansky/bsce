/**
 * Asset Generation Engine
 * Version 1.0
 */

function generateCoreAssets() {

  const assets = {};

  assets.familyGuide =
    buildFamilyGuide();

  assets.lessonSeries =
    buildLessonSeries();

  return assets;

}
