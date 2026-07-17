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

  saveSeriesRootFile(
  
    response,
  
    "series-curriculum-plan.json"
  
  );

  Logger.log(
    "Series Curriculum Saved."
  );

  return JSON.parse(
    response
  );

}
