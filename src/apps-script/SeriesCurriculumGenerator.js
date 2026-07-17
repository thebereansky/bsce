/**
 * Series Curriculum Generator
 * Version 2.0
 *
 * Generates the master curriculum
 * roadmap for all Series.
 */

function generateSeriesCurriculum() {

  Logger.log(
    "========================================"
  );

  Logger.log(
    "GENERATING SERIES CURRICULUM"
  );

  Logger.log(
    "========================================"
  );

  const prompt =
    buildSeriesCurriculumPrompt();

  Logger.log(
    "Sending curriculum prompt..."
  );

  const response =
    generateContent(
      prompt
    );

  Logger.log(
    "Saving series curriculum..."
  );

  saveSeriesRootFile(

    response,

    "series-curriculum-plan.json"

  );

  Logger.log(
    "Series curriculum saved."
  );

  return JSON.parse(
    response
  );

}
