/**
 * Lesson Series Generator
 * Version 1.0
 */

function buildLessonSeries() {

  Logger.log(
    "Generating Lesson Series..."
  );

  const prompt =
    buildLessonSeriesPrompt();

  const response =
    generateContent(
      prompt
    );

  const cleanResponse =
    response
      .replace(
        /^```json/i,
        ""
      )
      .replace(
        /^```/,
        ""
      )
      .replace(
        /```$/,
        ""
      )
      .trim();

  const lessonSeries =
    JSON.parse(
      cleanResponse
    );

  saveLessonSeries(
    lessonSeries
  );

  Logger.log(
    "Lesson Series Complete."
  );

  return lessonSeries;

}


function testLessonSeriesGenerator() {

  const result =
    buildLessonSeries();

  Logger.log(

    JSON.stringify(

      result,

      null,

      2

    )

  );

}
