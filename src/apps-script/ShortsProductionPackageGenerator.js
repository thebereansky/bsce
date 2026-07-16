/**
 * Shorts Production Package Generator
 * Version 1.0
 */

function buildShortProductionPackage(
  shortObj
) {

  Logger.log(
    "Generating narration..."
  );

  const narration =
    generateShortNarration(
      shortObj
    );

  Logger.log(
    "Generating scenes..."
  );

  const scenes =
    generateShortScenes(
      shortObj,
      narration
    );

  const thumbnail =
    generateShortThumbnailPrompt(
      shortObj
    );

  const metadata =
    buildShortMetadata(
      shortObj
    );

  return {

    short:
      shortObj,

    narration:
      narration,

    scenes:
      scenes,

    thumbnail:
      thumbnail,

    metadata:
      metadata

  };

}
