function buildLessonSeries() {

  return generateJsonAsset(

    buildLessonSeriesPrompt,

    saveLessonSeries

  );

}
