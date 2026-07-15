/**
 * Product Export Engine
 * Version 1.0
 */

function exportProducts() {

  const products =
    assembleStudyProducts();

  saveCurrentStudyFile(
    JSON.stringify(
      products,
      null,
      2
    ),
    "export-package.json",
    "04 - Digital Products"
  );

  Logger.log(
    "Products Exported"
  );

}