/**
 * Shorts Production Engine
 * Version 1.0
 */

function generateShortsPackage() {

  Logger.log(
    "Generating Shorts Package..."
  );

  const shorts =
    buildShorts();

  saveShorts(
    shorts
  );

  shorts.forEach(
    function(shortObj) {

      saveCurrentStudyFile(

        JSON.stringify(

          buildShortStoryboard(
            shortObj
          ),

          null,

          2

        ),

        "short-" +

        String(
          shortObj.shortNumber
        ).padStart(
          3,
          "0"
        ) +

        "-storyboard.json",

        "03 - YouTube"

      );

      saveCurrentStudyFile(

        JSON.stringify(

          buildShortImagePrompts(
            shortObj
          ),

          null,

          2

        ),

        "short-" +

        String(
          shortObj.shortNumber
        ).padStart(
          3,
          "0"
        ) +

        "-image-prompts.json",

        "03 - YouTube"

      );

    }
  );

  return shorts;

}
