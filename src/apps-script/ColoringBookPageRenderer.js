/**
 * Coloring Book Page Renderer
 * Version 1.0
 */

function renderColoringBookPage(
  presentation,
  pageManifest
) {

  const slide =

    presentation.appendSlide();

  const artworkFile =

    getColoringBookArtworkFile(
      pageManifest.pageNumber
    );

  //
  // TITLE
  //

  slide.insertTextBox(

    pageManifest.title,

    40,
    20,
    500,
    40

  );

  //
  // ARTWORK
  //

  slide.insertImage(

    artworkFile.getBlob(),

    40,
    80,
    520,
    620

  );

  //
  // SCRIPTURE
  //

  slide.insertTextBox(

    pageManifest.scripture,

    40,
    720,
    500,
    25

  );

}
