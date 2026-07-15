/**
 * KDP Manuscript Generator
 * Version 1.0
 */

function buildKDPManuscript() {

  const book =
    buildKDPBook();

  let manuscript = "";

  manuscript +=
    book.title +
    "\n\n";

  manuscript +=
    book.introduction +
    "\n\n";

  book.chapters.forEach(
    chapter => {

      manuscript +=
        chapter.title +
        "\n\n";

      manuscript +=
        chapter.content +
        "\n\n";

    }
  );

  return manuscript;

}