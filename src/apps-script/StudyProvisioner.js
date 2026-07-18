/**
 * Study Provisioner
 * Version 1.0
 */

function provisionStudies() {

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

      const trackFolder =
        getTrackFolder(
          seriesName,
          trackFolderName
        );

      track.studies.forEach(
        function(study) {

          const studyFolderName =

            "Study " +

            study.id +

            " - " +

            study.title;

          const folders =
            trackFolder.getFoldersByName(
              studyFolderName
            );

          if (
            folders.hasNext()
          ) {

            return;

          }

          Logger.log(
            "Creating Study: " +
            studyFolderName
          );

          trackFolder.createFolder(
            studyFolderName
          );

        }
      );

    }
  );

}
