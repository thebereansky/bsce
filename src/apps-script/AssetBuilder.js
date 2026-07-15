/**
 * Asset Builder Registry
 * Version 2.0
 */

function getAssetBuilder(
  assetType
) {

  const asset =
    getAssetDefinition(
      assetType
    );

  const builders = {

    "buildMasterStudyPrompt":
      buildMasterStudyPrompt,

    "buildFamilyGuidePrompt":
      buildFamilyGuidePrompt,

    "buildShortsPrompt":
      buildShortsPrompt,

    "buildLessonSeriesPrompt":
      buildLessonSeriesPrompt,

    "buildLessonScriptPrompt":
      buildLessonScriptPrompt

  };

  const builder =
    builders[
      asset.builderFunction
    ];

  if (!builder) {

    throw new Error(
      "No builder registered for: " +
      asset.builderFunction
    );

  }

  return builder;

}