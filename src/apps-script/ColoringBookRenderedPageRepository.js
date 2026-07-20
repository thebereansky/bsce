/**
 * Coloring Book Rendered Page Repository
 * Version 1.0
 */

function getColoringBookRenderedPagesFolder() {

  const study =
    getActiveStudy();

  return getOrCreateStudySubfolder(

    buildSeriesFolderName(
      study
    ),

    buildTrackFolderName(
      study
    ),

    buildStudyFolderName(
      study
    ),

    "09 - Rendered Pages"

  );

}
