/**
 * Lesson Series Writer
 * Version 1.0
 */

function saveLessonSeries(
  lessonSeriesJson
) {

  const study =
    getCurrentStudy();

  saveFileToStudySubfolder(

    buildSeriesFolderName(
      study
    ),

    buildTrackFolderName(
      study
    ),

    buildStudyFolderName(
      study
    ),

    JSON.stringify(
      lessonSeriesJson,
      null,
      2
    ),

    "lesson-series.json",

    "03 - Lesson Series"

  );

}
