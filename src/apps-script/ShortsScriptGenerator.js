/**
 * Shorts Script Generator
 * Version 1.0
 */

function buildShortScript(
  shortObj
) {

  return {

    title:
      shortObj.title,

    script:

      shortObj.hook +

      "\n\n" +

      shortObj.coreMessage +

      "\n\n" +

      shortObj.callToAction

  };

}
