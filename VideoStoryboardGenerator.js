/**
 * Video Storyboard Generator
 * Version 1.0
 */

function buildVideoStoryboard(
  lessonScript
) {

  return {

    title:
      lessonScript.title,

    estimatedDuration:
      lessonScript.estimatedDuration,

    scenes:
      buildStoryboardScenes(
        lessonScript
      ),

    productionNotes:
      buildStoryboardProductionNotes()

  };

}


/**
 * Builds storyboard scenes.
 */
function buildStoryboardScenes(
  lessonScript
) {

  const scenes = [];

  lessonScript.segments.forEach(
    (
      segment,
      index
    ) => {

      scenes.push({

        sceneNumber:
          index + 1,

        sceneTitle:
          segment.segmentTitle,

        estimatedDuration:
          estimateSceneDuration(
            segment
          ),

        narration:
          segment.narration,

        visualPrompt:
          buildStoryboardVisualPrompt(
            segment
          ),

        cameraDirection:
          buildCameraDirection(
            segment
          ),

        transition:
          buildTransitionType(
            segment
          )

      });

    }
  );

  return scenes;

}


/**
 * Estimate scene duration.
 */
function estimateSceneDuration(
  segment
) {

  return "30-60 seconds";

}


/**
 * Visual prompt.
 */
function buildStoryboardVisualPrompt(
  segment
) {

  return (

    "Cinematic educational scene illustrating " +

    segment.segmentTitle +

    ". Inspired by Scripture. " +

    "Family friendly. " +

    "Wonder and discovery. " +

    "Natural beauty. " +

    "The heavens, creation, and biblical themes. " +

    "No science fiction. " +

    "No astronauts. " +

    "No spacecraft. " +

    "Consistent with The Berean Sky worldview."

  );

}


/**
 * Camera direction.
 */
function buildCameraDirection(
  segment
) {

  return {

    shotType:
      "Slow cinematic movement",

    framing:
      "Wide establishing shot",

    movement:
      "Gentle push-in",

    emphasis:
      segment.segmentTitle

  };

}


/**
 * Transition style.
 */
function buildTransitionType(
  segment
) {

  return "Cross dissolve";

}


/**
 * Production notes.
 */
function buildStoryboardProductionNotes() {

  return [

    "Maintain consistent Berean Sky branding",

    "Support narration with visuals",

    "Use smooth transitions",

    "Avoid rapid cuts",

    "Use scripture overlays where appropriate",

    "Emphasize wonder and reflection",

    "Keep all visuals family friendly",

    "Remain consistent with the Berean Sky Cosmology Framework"

  ];

}
