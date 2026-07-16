/**
 * Product Factory
 * Version 2.2
 *
 * Catalog-driven product generation.
 */

function buildAllProducts() {

  const products = {};

  const catalog =
    getProductCatalog();

  Logger.log(
    "Building Products From Catalog..."
  );

  catalog.products.forEach(

    function(product) {

      const asset =
        buildProductById(
          product.id
        );

      if (asset !== null) {

        products[
          product.id
        ] = asset;

      }

    }

  );

  Logger.log(
    "Product Generation Complete."
  );

  return products;

}


/**
 * Product Dispatcher
 */
function buildProductById(
  productId
) {

  switch (productId) {

    case "familyGuide":

      return buildFamilyGuide();

    case "lessonSeries":

      return buildLessonSeries();

    case "workbook":

      return buildWorkbook();

    case "kdpBook":

      return buildKDPBook();

    case "amazonDescription":

      return buildAmazonDescription();

    case "seoContent":

      return buildSEOContent();

    case "landingPage":

      return buildLandingPage();

    case "socialCampaign":

      return buildSocialMediaCampaign();

    case "emailCampaign":

      return buildEmailSequence();

    /*
     * Future Assets
     */

    case "videoSeries":

      Logger.log(
        "Skipping videoSeries (not implemented yet)"
      );

      return null;

    default:

      Logger.log(
        "Unknown product: " +
        productId
      );

      return null;

  }

}


/**
 * Product Factory Test
 */
function testProductFactory() {

  const products =
    buildAllProducts();

  Logger.log(

    JSON.stringify(

      Object.keys(
        products
      ),

      null,

      2

    )

  );

}
