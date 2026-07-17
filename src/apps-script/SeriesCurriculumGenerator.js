/**
 * Series Curriculum Generator
 * Version 1.0
 */

function generateSeriesCurriculum() {

  Logger.log(
    "Generating Series Curriculum..."
  );

  const prompt =
    buildSeriesCurriculumPrompt();

  const response =
    generateContent(
      prompt
    );

  saveCurrentStudyFile(

    response,

    "series-curriculum-plan.json",

    "05 - Production"

  );

  Logger.log(
    "Series Curriculum Saved."
  );

  return JSON.parse(
    response
  );

}
