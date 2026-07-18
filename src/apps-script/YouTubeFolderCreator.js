/**
 * YouTube Folder Creator
 * Version 1.0
 */

function createYouTubeSubfolders(
  seriesName,
  trackName,
  studyName
) {

  const youtubeFolder =
    getStudySubfolder(
      seriesName,
      trackName,
      studyName,
      "03 - YouTube"
    );

  const folders = [

    "Shorts",

    "Lessons",

    "Assets"

  ];

  folders.forEach(
    function(folderName) {

      const existingFolders =
        youtubeFolder.getFoldersByName(
          folderName
        );

      if (
        existingFolders.hasNext()
      ) {

        return;

      }

      Logger.log(
        "Creating YouTube Folder: " +
        folderName
      );

      youtubeFolder.createFolder(
        folderName
      );

    }
  );

}
