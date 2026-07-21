/**
 * Coloring Book Slides Template Manager
 * Version 2.0
 */

function createColoringBookPresentation(
  title
) {

  const presentation =
    SlidesApp.create(
      title
    );

  const standard =
    getColoringBookStandard();

  const width =
    standard.page.widthInches * 72;

  const height =
    standard.page.heightInches * 72;

  presentation.setPageWidth(
    width
  );

  presentation.setPageHeight(
    height
  );

  return presentation;

}
