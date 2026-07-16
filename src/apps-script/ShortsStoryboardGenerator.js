/**
 * Shorts Storyboard Generator
 * Version 1.0
 */

function buildShortStoryboard(
  shortObj
) {

  return {

    title:
      shortObj.title,

    scenes: [

      {

        scene: 1,

        duration:
          3,

        narration:
          shortObj.hook

      },

      {

        scene: 2,

        duration:
          10,

        narration:
          shortObj.coreMessage

      },

      {

        scene: 3,

        duration:
          5,

        narration:
          shortObj.callToAction

      }

    ]

  };

}
