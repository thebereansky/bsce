/**
 * Revenue Package Generator
 * Version 1.0
 */

function buildRevenuePackage() {

  const study =
    getActiveStudy();

  return {

    generatedOn:
      new Date()
        .toISOString(),

    studyId:
      study.study.id,

    studyTitle:
      study.study.title,

    amazonDescription:
      buildAmazonDescription(),

    seoPackage:
      buildSEOContent(),

    emailCampaign:
      buildEmailSequence(),

    socialCampaign:
      buildSocialMediaCampaign(),

    landingPage:
      buildLandingPage(),

    leadMagnet:

      "Family Guide",

    primaryProduct:

      "KDP Book",

    secondaryProducts: [

      "Workbook",
      "Family Guide PDF",
      "Video Series"

    ]

  };

}


function saveRevenuePackage() {

  const packageData =
    buildRevenuePackage();

  saveCurrentStudyFile(

    JSON.stringify(
      packageData,
      null,
      2
    ),

    "revenue-package.json",

    "04 - Digital Products"

  );

  return packageData;

}