/**
 * Lesson Script Prompt Builder
 * Version 2.0
 */

function buildLessonScriptPrompt() {

  const data =
    buildPromptData(
      "lesson-script"
    );

  return buildPrompt(
    "lesson-script",
    data
  );

}