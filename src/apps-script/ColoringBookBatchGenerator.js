/**
 * Coloring Book Batch Generator
 * Version 1.0
 */

function generateColoringBookImages() {

  const manifests =
    getPageManifests();

  Logger.log(

    "Generating " +

    manifests.length +

    " coloring pages..."

  );

  manifests.forEach(
    function(manifest) {

      generateColoringPage(
        manifest
      );

    }
  );

  Logger.log(
    "Coloring Book Generation Complete."
  );

}
