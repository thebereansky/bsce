/**
 * KDP Submission Package
 * Version 1.0
 */

function buildKDPSubmissionPackage() {

  const study =
    getActiveStudy();

  const packageData = {

    generatedOn:
      new Date()
        .toISOString(),

    studyId:
      study.study.id,

    studyTitle:
      study.study.title,

    manuscript:
      buildKDPBook(),

    workbook:
      buildWorkbook(),

    amazonDescription:
      buildAmazonDescription(),

    seo:
      buildSEOContent(),

    coverPrompt:
      buildBookCoverPrompt()

  };

  return packageData;

}


function saveKDPSubmissionPackage() {

  const study =
    getActiveStudy();

  const packageData =
    buildKDPSubmissionPackage();

  saveCurrentStudyFile(

    JSON.stringify(
      packageData,
      null,
      2
    ),

    "kdp-submission-package.json",

    "04 - Digital Products"

  );

  return packageData;

}


function testKDPSubmissionPackage() {

  const pkg =
    saveKDPSubmissionPackage();

  Logger.log(

    JSON.stringify(
      pkg,
      null,
      2
    )

  );

}