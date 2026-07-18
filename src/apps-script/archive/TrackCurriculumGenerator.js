/**
 * EXPERIMENTAL
 * ----------------------------------
 * Generated during curriculum prototype work.
 *
 * DO NOT USE AS AUTHORITATIVE SOURCE.
 *
 * Replaced by:
 * TrackFolderGenerator.js
 * StudyFolderGenerator.js
 *
 * Pending review.
 */
/**
 * Track Curriculum Generator
 * Version 1.0
 */

function generateTrackCurriculum() {

  Logger.log(
    "Generating Track Curriculum..."
  );

  const prompt =
    buildTrackCurriculumPrompt();

  const response =
    generateContent(
      prompt
    );

  saveCurrentStudyFile(

    response,

    "track-curriculum-plan.json",

    "05 - Production"

  );

  Logger.log(
    "Track Curriculum Saved."
  );

  return JSON.parse(
    response
  );

}
