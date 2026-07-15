/**
 * Publishing Readiness Validator
 * Version 1.0
 */

function validatePublishingReadiness() {

  const report = {

    ready: true,

    missing: [],

    warnings: []

  };

  const requiredAssets = [

    "master-study",
    "family-guide",
    "lesson-series",
    "lesson-script",
    "shorts"

  ];

  requiredAssets.forEach(
    function(assetType) {

      try {

        loadGeneratedAsset(
          assetType
        );

      } catch(error) {

        report.ready = false;

        report.missing.push(
          assetType
        );

      }

    }
  );

  return report;

}


function savePublishingReadinessReport() {

  const report =
    validatePublishingReadiness();

  saveCurrentStudyFile(

    JSON.stringify(
      report,
      null,
      2
    ),

    "publishing-readiness-report.json",

    "05 - Production"

  );

  return report;

}