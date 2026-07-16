/**
 * Shorts Prototype Generator
 * Version 1.0
 */

function buildShortsPrototype() {

  const study =
    loadGeneratedAsset(
      "master-study"
    );

  return (

    study.keyTakeaways || []

  ).map(

    function(
      takeaway,
      index
    ) {

      return {

        shortNumber:
          index + 1,

        hook:
          takeaway,

        title:
          "Did You Know?",

        callToAction:
          "Explore more at The Berean Sky"

      };

    }

  );

}
