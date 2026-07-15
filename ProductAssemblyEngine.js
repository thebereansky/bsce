/**
 * Product Assembly Engine
 * Version 1.0
 */

function assembleStudyProducts() {

  Logger.log(
    "Assembling Products..."
  );

  const products = {

    kdpBook:
      buildKDPBook(),

    workbook:
      buildWorkbook(),

    manuscript:
      buildKDPManuscript(),

    metadata:
      buildKDPMetadata()

  };

  return products;

}


function generateAllProducts() {

  const products =
    assembleStudyProducts();

  saveCurrentStudyFile(
    JSON.stringify(
      products,
      null,
      2
    ),
    "product-package.json",
    "04 - Digital Products"
  );

  return products;

}