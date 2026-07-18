/**
 * Prototype Interior Generator
 * Version 1.0
 */

function generatePrototypeInteriorPages() {

  const plan =
    getStudyColoringBookPlan();

  const samplePages =

    plan.pages.filter(
      function(page) {

        return (

          page.pageNumber >= 4 &&

          page.pageNumber <= 8

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

  const prompt = [

    "Children's coloring book page.",

    page.title || "",

    page.scripture || "",

    "Bold outlines.",

    "Large coloring areas.",

    "Professional border.",

    "Educational biblical illustration.",

    "Scripture based.",

    "Black and white."

  ].join(" ");

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
