/**
 * Asset Generation Audit
 * Version 1.0
 */

function createAuditReport() {

  return {

    generatedOn:
      new Date()
        .toISOString(),

    generated: [],

    regenerated: [],

    missing: [],

    warnings: []

  };

}


function addGeneratedAsset(
  audit,
  assetType
) {

  audit.generated.push(
    assetType
  );

}


function addRegeneratedAsset(
  audit,
  assetType
) {

  audit.regenerated.push(
    assetType
  );

}


function addMissingAsset(
  audit,
  assetType
) {

  audit.missing.push(
    assetType
  );

}


function addAuditWarning(
  audit,
  warning
) {

  audit.warnings.push(
    warning
  );

}


function saveAuditReport(
  audit
) {

  saveCurrentStudyFile(

    JSON.stringify(
      audit,
      null,
      2
    ),

    "asset-generation-audit.json",

    "05 - Production"

  );

}