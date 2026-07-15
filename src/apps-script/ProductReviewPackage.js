/**
 * Product Review Package
 * Version 1.0
 */

function buildProductReviewPackage() {

  const assets =
    buildAllProducts();

  return {

    generatedOn:
      new Date()
        .toISOString(),

    study:
      getActiveStudy(),

    assets:
      Object.keys(
        assets
      )

  };

}