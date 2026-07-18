/**
 * Track Provisioner
 * Version 1.0
 */

function provisionTracks() {

  const curriculum =
    getSeriesCurriculum();

  const seriesFolder =
    getSeriesFolder(
      buildSeriesFolderName(
        getActiveStudy()
      )
    );

  curriculum.tracks.forEach(
    function(track) {

      const trackFolderName =

        "Track " +

        track.id +

        " - " +

        track.name;

      const folders =
        seriesFolder.getFoldersByName(
          trackFolderName
        );

      if (
        folders.hasNext()
      ) {

        return;

      }

      Logger.log(
        "Creating Track: " +
        trackFolderName
      );

      seriesFolder.createFolder(
        trackFolderName
      );

    }
  );

}
