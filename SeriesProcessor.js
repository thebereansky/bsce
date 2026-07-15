/**
 * Series Processor
 * Version 1.0
 */

function processCurrentSeries() {

  const studies =
    getStudiesInSeries();

  Logger.log(
    "Studies Found: " +
    studies.length
  );

  studies.forEach(
    study => {

      processStudy(
        study
      );

    }
  );

}


/**
 * Process one study.
 */
function processStudy(
  study
) {

  Logger.log(
    "Processing Study: " +
    study.study.id
  );

  try {

    const results =
      generateStudyAssets();

    const productionManifest =
      buildProductionManifest(
        results
      );

    saveProductionManifest(
      productionManifest
    );

    const publisherManifest =
      buildPublisherManifest(
        study,
        results
      );

    savePublisherManifest(
      publisherManifest
    );

    Logger.log(
      "Completed: " +
      study.study.id
    );

  } catch (e) {

    Logger.log(
      e
    );

  }

}