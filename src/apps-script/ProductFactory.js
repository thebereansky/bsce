/**
 * Product Factory
 * Version 2.0
 *
 * Catalog-driven product generation.
 */

function buildAllProducts() {

  const products = {};

  const catalog =
    getProductCatalog();

  catalog.products.forEach(

    function(product) {

      const asset =

        buildProductById(
          product.id
        );

      if (asset) {

        products[
          product.id
        ] = asset;

      }

    }

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

    case "workbook":

      return buildWorkbook();

    case "kdpBook":

      return buildKDPBook();

    case "lessonSeries":

      return buildLessonSeries();

    case "videoSeries":

      return buildVideoSeries();

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

    default:

      Logger.log(

        "Unknown product: " +

        productId

      );

      return null;

  }

}
