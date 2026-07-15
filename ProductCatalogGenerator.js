/**
 * Product Catalog Generator
 * Version 1.0
 */

function buildProductCatalog() {

  const study =
    getActiveStudy();

  return {

    studyId:
      study.study.id,

    studyTitle:
      study.study.title,

    products: [

      "Family Guide",

      "Workbook",

      "KDP Book",

      "Lesson Series",

      "Video Series"

    ]

  };

}