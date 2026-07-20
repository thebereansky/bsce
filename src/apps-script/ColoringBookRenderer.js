/**
 * Coloring Book Renderer
 * Version 1.0
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

    presentation.getUrl()

  );

  return presentation;

}
