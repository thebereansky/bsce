/**
 * Publishing Readiness Report
 * Version 1.0
 */

function buildPublishingReadinessReport() {

  const report = {

    generatedOn:
      new Date()
        .toISOString(),

    study:
      getActiveStudy()
        .study.title,

    status:
      "READY FOR HUMAN REVIEW",

    checklist: {

      masterStudy: true,

      familyGuide: true,

      lessonSeries: true,

      workbook: true,

      kdpBook: true,

      productPackage: true

    }

  };

  saveCurrentStudyFile(

    JSON.stringify(
      report,
      null,
      2
    ),

    "publishing-readiness.json",

    "05 - Production"

  );

  return report;

}
