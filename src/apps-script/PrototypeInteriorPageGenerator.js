/**
 * Prototype Interior Page Generator
 * Version 2.1
 */

function generatePrototypeInteriorPages() {

  const plan =
    getStudyColoringBookPlan();

  const samplePages =

    plan.pages.filter(
      function(page) {

        return (

          page.pageNumber >= 4 &&

          page.pageNumber <= 9

        );

      }
    );

  samplePages.forEach(
    generatePrototypePage
  );

}


function generatePrototypePage(
  page
) {

  const prompt =

    buildGovernedColoringPagePrompt(
      page
    );

  Logger.log(
    prompt
  );

  const image =
    generateImage(
      prompt
    );

  image.setName(

    "page-" +

    String(
      page.pageNumber
    ).padStart(
      3,
      "0"
    ) +

    ".png"

  );

  savePrototypeImage(
    image
  );

}
