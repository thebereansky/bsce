/**
 * Study Subfolder Creator
 * Version 2.0
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

    "05 - Production",

    "05 - Small Group Materials",

    "06 - Posters & Visuals",

    "07 - Children's Materials",

    "08 - Amazon KDP",

    "09 - Marketing"

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

  createYouTubeSubfolders(

    seriesName,

    trackName,

    studyName

  );

}
