/**
 * Study Folder Initializer
 * Version 1.0
 */

function initializeStudyFolders() {

  const curriculum =
    getSeriesCurriculum();

  const seriesName =
    buildSeriesFolderName(
      getActiveStudy()
    );

  curriculum.tracks.forEach(
    function(track) {

      const trackFolderName =

        "Track " +

        track.id +

        " - " +

        track.name;

      track.studies.forEach(
        function(study) {

          const studyFolderName =

            "Study " +

            study.id +

            " - " +

            study.title;

          createStudySubfolders(
            seriesName,
            trackFolderName,
            studyFolderName
          );

        }
      );

    }
  );

}
