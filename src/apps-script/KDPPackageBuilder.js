/**
 * KDP Package Builder
 * Version 1.0
 */

function buildKDPPackage() {

  const book =
    buildKDPBook();

  const workbook =
    buildWorkbook();

  return {

    book:
      book,

    workbook:
      workbook,

    publishingMetadata: {

      title:
        book.title,

      subtitle:
        book.subtitle,

      keywords: [

        "Bible Study",
        "Creation",
        "Christian Education",
        "Genesis",
        "Biblical Cosmology"

      ],

      category:
        "Religion"

    }

  };

}