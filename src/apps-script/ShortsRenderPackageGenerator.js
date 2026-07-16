/**
 * Shorts Render Package Generator
 * Version 1.0
 */

function buildShortRenderPackage(
  shortObj,
  narration,
  scenePackage,
  thumbnail,
  metadata
) {

  return {

    generatedOn:
      new Date()
        .toISOString(),

    series:
      shortObj.seriesName,

    track:
      shortObj.trackName,

    study:
      shortObj.studyTitle,

    title:
      metadata.title,

    narration:
      narration,

    scenes:
      scenePackage.scenes,

    thumbnail:
      thumbnail,

    metadata:
      metadata,

    renderingStatus:
      "READY"

  };

}
