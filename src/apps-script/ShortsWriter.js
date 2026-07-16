/**
 * Shorts Writer
 * Version 1.0
 */

function saveShorts(
  shorts
) {

  shorts.forEach(
    function(shortObj) {

      saveCurrentStudyFile(

        JSON.stringify(
          shortObj,
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

        ".json",

        "03 - YouTube"

      );

    }
  );

}
