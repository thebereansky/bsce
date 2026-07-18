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
