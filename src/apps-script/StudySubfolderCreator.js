/**
 * Study Subfolder Creator
 * Version 1.0
 */

function createStudySubfolders(
  seriesName,
  trackName,
  studyName
) {

  const folders = [

    "02 - Master Study",
    "03 - YouTube",
    "04 - Digital Products",
    "05 - Production"

  ];

  folders.forEach(
    function(folderName) {

      getOrCreateStudySubfolder(

        seriesName,

        trackName,

        studyName,

        folderName

      );

    }
  );

}
