/**
 * Video Asset Generator
 * Version 1.0
 */

function buildVideoAssets(
  lessonScript
) {

  return {

    videoTitle:
      lessonScript.title,

    estimatedDuration:
      lessonScript.estimatedDuration,

    scenes:
      buildVideoScenes(
        lessonScript
      ),

    bRollPrompts:
      buildBRollPrompts(
        lessonScript
      ),

    narrationStyle:
      buildNarrationStyle(),

    musicStyle:
      buildMusicStyle(),

    productionNotes:
      buildProductionNotes()

  };

}


/**
 * Convert lesson segments
 * into video scenes.
 */
function buildVideoScenes(
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

        narration:
          segment.narration,

        visualPrompt:
          buildScenePrompt(
            segment
          )

      });

    }
  );

  return scenes;

}


/**
 * Scene Prompt
 */
function buildScenePrompt(
  segment
) {

  return (

    "Create a cinematic educational scene illustrating: " +

    segment.segmentTitle +

    ". Biblical teaching. " +

    "Family friendly. " +

    "Wonder and discovery. " +

    "Inspired by Scripture and creation. " +

    "No science fiction. " +

    "No astronauts. " +

    "No spacecraft. " +

    "Consistent with biblical creation themes."

  );

}


/**
 * B-Roll Prompts
 */
function buildBRollPrompts(
  lessonScript
) {

  return [

    "The heavens declaring the glory of God",

    "Sunrise over mountains",

    "Clouds moving across the sky",

    "Stars visible in the night sky",

    "Open Bible being studied",

    "Families reading Scripture together",

    "Children observing creation",

    "Nature scenes emphasizing order and beauty",

    "Sun and moon following their appointed courses",

    "Quiet reflection and prayer"

  ];

}


/**
 * Narration Style
 */
function buildNarrationStyle() {

  return {

    tone:
      "Warm and educational",

    pace:
      "Moderate",

    delivery:
      "Thoughtful",

    audience:
      "Families and learners",

    emotion:
      "Wonder and encouragement"

  };

}


/**
 * Music Style
 */
function buildMusicStyle() {

  return {

    genre:
      "Inspirational cinematic",

    mood:
      "Reflective",

    energy:
      "Moderate",

    instruments: [

      "Piano",
      "Strings",
      "Ambient textures"

    ]

  };

}


/**
 * Production Notes
 */
function buildProductionNotes() {

  return [

    "Use smooth transitions",

    "Keep visuals family friendly",

    "Prioritize Scripture on screen when appropriate",

    "Maintain Berean Sky brand voice",

    "Avoid speculative cosmology",

    "Emphasize observation of creation",

    "Support narration with visual storytelling"

  ];

}
