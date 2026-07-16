/**
 * Video Render Package Generator
 * Version 1.0
 */

function buildVideoRenderPackage(
  productionPackage
) {

  return {

    title:
      productionPackage.metadata.title,

    narration:
      productionPackage.narration,

    scenes:

      productionPackage.scenes,

    thumbnailPrompt:

      productionPackage
        .thumbnail
        .prompt,

    renderInstructions: {

      aspectRatio:
        "9:16",

      resolution:
        "1080x1920",

      targetDuration:
        "30 seconds",

      voiceoverIncluded:
        true

    }

  };

}
