/**
 * Coloring Book Page Manifest Generator
 * Version 1.0
 */

function generateColoringBookPageManifests() {

  const plan =
    getStudyColoringBookPlan();

  plan.pages.forEach(
    function(page) {

      const manifest =
        buildColoringBookPageManifest(
          page
        );

      saveColoringBookPageManifest(
        manifest
      );

    }
  );

}
