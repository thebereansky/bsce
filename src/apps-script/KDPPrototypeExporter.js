/**
 * KDP Prototype Exporter
 * Version 1.0
 */

function exportKDPPrototype() {

  const book =
    buildKDPBook();

  const doc =
    DocumentApp.create(
      book.title +
      " Prototype"
    );

  const body =
    doc.getBody();

  body.appendParagraph(
    book.title
  );

  body.appendParagraph(
    book.subtitle
  );

  body.appendPageBreak();

  body.appendParagraph(
    "Introduction"
  );

  body.appendParagraph(
    book.introduction
  );

  book.chapters.forEach(
    function(chapter) {

      body.appendPageBreak();

      body.appendParagraph(
        chapter.title
      );

      body.appendParagraph(
        chapter.content
      );

    }
  );

  doc.saveAndClose();

  return {

    id:
      doc.getId(),

    url:
      doc.getUrl()

  };

}
