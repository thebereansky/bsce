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
 * Study Definition Generator
 * Version 2.0
 */

function generateStudyDefinitions(
  trackSlug
) {

  const track =
    getTrackDefinition(
      trackSlug
    );

  track.studies.forEach(
    function(study) {

      saveStudyDefinition(
        trackSlug,
        study
      );

    }
  );

}
