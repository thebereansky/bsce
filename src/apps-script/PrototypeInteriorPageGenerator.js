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
