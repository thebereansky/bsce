/**
 * Product Package Exporter
 * Version 1.0
 */

function exportProductPackage(
  packageData
) {

  const filename =
    "product-package-" +
    getActiveStudy().study.id +
    ".json";

  saveCurrentStudyFile(

    JSON.stringify(
      packageData,
      null,
      2
    ),

    filename,

    "04 - Digital Products"

  );

  Logger.log(
    "Product Package Exported."
  );

}