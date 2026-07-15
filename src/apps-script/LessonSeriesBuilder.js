/**
 * Lesson Series Prompt Builder
 * Version 2.0
 */

function buildLessonSeriesPrompt() {

  const data =
    buildPromptData(
      "lesson-series"
    );

  return buildPrompt(
    "lesson-series",
    data
  );

}