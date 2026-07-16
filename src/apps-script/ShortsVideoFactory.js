/**
 * Shorts Video Factory
 * Version 1.0
 */

function generateShortsVideoPackage() {

  const shorts =
    buildShorts();

  shorts.forEach(
    function(shortObj) {

      const pkg =
        buildShortProductionPackage(
          shortObj
        );

      saveCurrentStudyFile(

        JSON.stringify(
          pkg,
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

        "-production-package.json",

        "03 - YouTube"

      );

    }
  );

}
