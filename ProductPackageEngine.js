/**
 * Product Package Engine
 * Version 4.0
 *
 * Creates a complete monetization package
 * for a Berean Sky study.
 */

function generateCompleteProductPackage() {

  const study =
    getActiveStudy();

  Logger.log(
    "========================================"
  );

  Logger.log(
    "BSCE PRODUCT PACKAGE ENGINE"
  );

  Logger.log(
    study.study.id +
    " - " +
    study.study.title
  );

  Logger.log(
    "========================================"
  );

  const audit =
    createAuditReport();

  Logger.log(
    "Checking Dependencies..."
  );

  ensureProductDependencies();

  Logger.log(
    "Generating Product Assets..."
  );

  const assets =
    buildAllProducts();

  Object.keys(
    assets
  ).forEach(
    function(assetName) {

      addGeneratedAsset(
        audit,
        assetName
      );

    }
  );

  Logger.log(
    "Building Product Package..."
  );

  const packageData = {

    packageVersion:
      "4.0",

    generatedOn:
      new Date()
        .toISOString(),

    generatedBy:
      "BSCE Product Package Engine",

    study: {

      seriesId:
        study.series.id,

      seriesName:
        study.series.name,

      trackId:
        study.track.id,

      trackName:
        study.track.name,

      studyId:
        study.study.id,

      studyTitle:
        study.study.title

    },

    assets:
      assets

  };

  Logger.log(
    "Validating Package..."
  );

  const validation =
    validateProductPackage(
      packageData
    );

  packageData.validation =
    validation;

  if (
    !validation.valid
  ) {

    validation.warnings.forEach(
      function(warning) {

        addAuditWarning(
          audit,
          warning
        );

      }
    );

  }

  Logger.log(
    "Saving Product Assets..."
  );

  saveProductAssets(
    assets
  );

  Logger.log(
    "Creating Review Package..."
  );

  const reviewPackage =
    buildProductReviewPackage();

  saveCurrentStudyFile(

    JSON.stringify(
      reviewPackage,
      null,
      2
    ),

    "product-review-package.json",

    "04 - Digital Products"

  );

  Logger.log(
    "Exporting Product Package..."
  );

  saveCurrentStudyFile(

    JSON.stringify(
      packageData,
      null,
      2
    ),

    "product-package.json",

    "04 - Digital Products"

  );

  Logger.log(
    "Saving Audit Report..."
  );

  saveAuditReport(
    audit
  );

  Logger.log(
    "Product Package Complete."
  );

  return packageData;

}


/**
 * Returns summary information.
 */
function getProductPackageSummary(
  packageData
) {

  return {

    studyId:
      packageData.study.studyId,

    studyTitle:
      packageData.study.studyTitle,

    generatedOn:
      packageData.generatedOn,

    assetCount:
      Object.keys(
        packageData.assets
      ).length,

    validation:
      packageData.validation

  };

}


/**
 * Generates package and logs summary.
 */
function testCompleteProductPackage() {

  const packageData =
    generateCompleteProductPackage();

  Logger.log(

    JSON.stringify(

      getProductPackageSummary(
        packageData
      ),

      null,
      2

    )

  );

}


/**
 * Generates package and KDP bundle.
 */
function testProductFactory() {

  const packageData =
    generateCompleteProductPackage();

  const kdpPackage =
    saveKDPSubmissionPackage();

  Logger.log(
    "Product Factory Complete."
  );

  return {

    package:
      packageData,

    kdp:
      kdpPackage

  };

}