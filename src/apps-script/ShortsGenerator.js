/**
 * Shorts Generator
 * Version 1.0
 */

function buildShorts() {

  const study =
    loadGeneratedAsset(
      "master-study"
    );

  const activeStudy =
    getActiveStudy();

  const shorts = [];

  const takeaways =
    study.keyTakeaways || [];

  takeaways.forEach(
    function(
      takeaway,
      index
    ) {

      shorts.push({

        seriesId:
          activeStudy.series.id,

        seriesName:
          activeStudy.series.name,

        trackId:
          activeStudy.track.id,

        trackName:
          activeStudy.track.name,

        studyId:
          activeStudy.study.id,

        studyTitle:
          activeStudy.study.title,

        shortNumber:
          index + 1,

        title:
          takeaway,

        hook:
          takeaway,

        coreMessage:
          takeaway,

        callToAction:
          "Explore more at The Berean Sky"

      });

    }
  );

  return shorts;

}
