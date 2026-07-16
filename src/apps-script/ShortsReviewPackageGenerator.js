/**
 * Shorts Review Package Generator
 * Version 1.0
 */

function buildShortReviewPackage(
  shortObj,
  narration,
  scenePackage
) {

  return {

    title:
      shortObj.title,

    reviewChecklist: {

      narrationApproved:
        false,

      scenesApproved:
        false,

      thumbnailApproved:
        false,

      readyForRendering:
        false

    },

    narration:
      narration,

    scenes:
      scenePackage.scenes

  };

}
