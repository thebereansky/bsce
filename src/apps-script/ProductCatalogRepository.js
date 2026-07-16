/**
 * Product Catalog Repository
 * Version 1.0
 */

function getProductCatalog() {

  return loadJsonFromGitHub(

    buildGitHubUrl(

      "config/product-catalog.json"

    )

  );

}


function getProductById(
  productId
) {

  const catalog =
    getProductCatalog();

  return catalog.products.find(
    function(product) {

      return (
        product.id ===
        productId
      );

    }
  );

}


function getRevenueProducts() {

  const catalog =
    getProductCatalog();

  return catalog.products.filter(
    function(product) {

      return product
        .revenueGenerating;

    }
  );

}


function testProductCatalog() {

  Logger.log(

    JSON.stringify(

      getProductCatalog(),

      null,

      2

    )

  );

}
