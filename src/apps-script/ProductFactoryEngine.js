/**
 * Product Factory Engine
 * Version 1.0
 */

function runProductFactory() {

  Logger.log(
    "Running Product Factory..."
  );

  const assets =
    buildAllProducts();

  saveProductAssets(
    assets
  );

  const review =
    buildProductReviewPackage();

  saveCurrentStudyFile(

    JSON.stringify(
      review,
      null,
      2
    ),

    "product-review-package.json",

    "04 - Digital Products"

  );

  Logger.log(
    "Product Factory Complete."
  );

}