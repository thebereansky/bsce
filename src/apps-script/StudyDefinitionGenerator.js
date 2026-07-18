/**
 * Study Definition Generator
 * Version 3.0
 *
 * Generates canonical study-definition.json
 * files from the Series Curriculum.
 */

function generateStudyDefinitions() {

  const curriculum =
    getSeriesCurriculum();

  const activeStudy =
    getActiveStudy();

  curriculum.tracks.forEach(
    function(track) {

      track.studies.forEach(
        function(study) {

          const definition = {

            series: {
              id:
                activeStudy.series.id,

              name:
                activeStudy.series.name
            },

            track: {
              id:
                track.id,

              slug:
                track.slug,

              name:
                track.name
            },

            study: {
              id:
                study.id,

              slug:
                study.slug,

              title:
                study.title
            },

            primaryScripture:
              study.primaryScripture,

            bigIdea:
              study.bigIdea,

            themes:
              study.themes || [],

            learningObjectives:
              study.learningObjectives || [],

            metadata: {

              status:
                "Planned",

              version:
                "1.0",

              generatedBy:
                "BSCE"

            }

          };

          saveStudyDefinition(
            definition
          );

        }
      );

    }
  );

}
