/**
 * Track Curriculum Repository
 * Version 1.0
 */

function getTrackCurriculum() {

  const study =
    getActiveStudy();

  const content =
    loadStudyFile(

      buildSeriesFolderName(
        study
      ),

      buildTrackFolderName(
        study
      ),

      buildStudyFolderName(
        study
      ),

      "05 - Production",

      "track-curriculum-plan.json"

    );

  return JSON.parse(
    content
  );

}
