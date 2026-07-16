/**
 * Shorts Metadata Generator
 * Version 1.0
 */

function buildShortMetadata(
  shortObj
) {

  return {

    title:
      shortObj.title,

    description:

      shortObj.coreMessage +

      "\n\n" +

      shortObj.callToAction +

      "\n\n" +

      "#BibleStudy " +

      "#Genesis " +

      "#Creation " +

      "#TheBereanSky",

    hashtags: [

      "#BibleStudy",

      "#Genesis",

      "#Creation",

      "#TheBereanSky"

    ]

  };

}
