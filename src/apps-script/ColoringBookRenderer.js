/**
 * Coloring Book Renderer
 * Version 2.0
 */

function createColoringBookRenderSession() {

  const study =
    getActiveStudy();

  const presentation =

    createColoringBookPresentation(

      study.title +

      " Rendered Book"

    );

  Logger.log(

    "Presentation URL: " +

    presentation.getUrl()

  );

  return presentation;

}
