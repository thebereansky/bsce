/**
 * Study Definition Generator
 * Version 1.0
 */

function generateStudyDefinitions(
  trackId
) {

  const track =
    getTrackDefinition(
      trackId
    );

  track.studies.forEach(
    function(study) {

      saveStudyDefinition(
        trackId,
        study
      );

    }
  );

}
