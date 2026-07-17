/**
 * Track Definition Generator
 * Version 1.0
 */

function generateTrackDefinitions() {

  const curriculum =
    getSeriesCurriculum();

  curriculum.tracks.forEach(
    function(track) {

      const definition = {

        id:
          track.id,

        name:
          track.name,

        description:
          track.description ||

          "",

        studyCount:
          track.studies.length,

        studies:
          track.studies

      };

      saveTrackDefinition(
        definition
      );

    }
  );

}
