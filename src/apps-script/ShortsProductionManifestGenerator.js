/**
 * Shorts Production Manifest Generator
 * Version 1.0
 */

function buildShortProductionManifest(
  shortObj,
  narration,
  scenePackage,
  thumbnail
) {

  return {

    generatedOn:
      new Date()
        .toISOString(),

    shortNumber:
      shortObj.shortNumber,

    title:
      shortObj.title,

    narration:
      narration,

    sceneCount:
      scenePackage.scenes.length,

    thumbnail:
      thumbnail,

    status:
      "READY_FOR_VIDEO_PRODUCTION"

  };

}
