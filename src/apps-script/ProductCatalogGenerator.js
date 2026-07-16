/**
 * Product Catalog Generator
 * Version 2.0
 */

function buildProductCatalog() {

  const study =
    getActiveStudy();

  const catalog =
    getProductCatalog();

  return {

    studyId:
      study.study.id,

    studyTitle:
      study.study.title,

    generatedOn:
      new Date()
        .toISOString(),

    products:
      catalog.products

  };

}


function testProductCatalogGenerator() {

  Logger.log(

    JSON.stringify(

      buildProductCatalog(),

      null,

      2

    )

  );

}
