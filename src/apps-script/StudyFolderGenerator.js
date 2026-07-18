/**
 * Study Folder Generator
 * Version 1.0
 */

function generateStudyFolders() {

  const curriculum =
    getSeriesCurriculum();

  curriculum.tracks.forEach(
    function(track, trackIndex) {

      const trackFolderName =

        "Track " +

        padNumber(
          trackIndex + 1
        ) +

        " - " +

        track.name;

      const trackFolder =
        getTrackFolder(
          trackFolderName
        );

      track.studies.forEach(
        function(study, studyIndex) {

          const studyFolderName =

            "Study " +

            padNumber(
              studyIndex + 1
            ) +

            " - " +

            study.title;

          getStudyFolder(
            trackFolder,
            studyFolderName
          );

          Logger.log(
            "Created: " +
            studyFolderName
          );

        }
      );

    }
  );

}
