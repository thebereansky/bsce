/**
 * Family Guide Writer
 * Version 0.2
 */

function saveFamilyGuide(
  familyGuideJson
) {

  const study =
    getCurrentStudy();

  saveFileToStudySubfolder(
    buildSeriesFolderName(
      study
    ),
    buildTrackFolderName(
      study
    ),
    buildStudyFolderName(
      study
    ),
    JSON.stringify(
      familyGuideJson,
      null,
      2
    ),
    buildFamilyGuideFilename(
      study
    ),
    "04 - Digital Products"
  );

}