/**
 * Track Folder Generator
 * Version 1.0
 */

function generateTrackFolders() {

  const curriculum =
    getSeriesCurriculum();

  curriculum.tracks.forEach(
    function(track, index) {

      const folderName =

        "Track " +

        padNumber(
          index + 1
        ) +

        " - " +

        track.name;

      getTrackFolder(
        folderName
      );

      Logger.log(
        "Created: " +
        folderName
      );

    }
  );

}
