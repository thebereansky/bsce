/**
 * Batch Study Processor
 * Version 1.0
 */

function processQueuedStudies() {

  const queue =
    getProductionQueue();

  const studies =
    queue.filter(
      item =>
        item.status ===
        PRODUCTION_STATUSES.QUEUED
    );

  Logger.log(
    "Queued Studies: " +
    studies.length
  );

  studies.forEach(
    study => {

      processQueuedStudy(
        study
      );

    }
  );

}


/**
 * Process one study.
 */
function processQueuedStudy(
  queueItem
) {

  try {

    Logger.log(
      "Processing Study: " +
      queueItem.studyId
    );

    markGenerating(
      queueItem.studyId
    );

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
        getCurrentStudy(),
        results
      );

    savePublisherManifest(
      publisherManifest
    );

    markReadyForProduction(
      queueItem.studyId
    );

    Logger.log(
      "Completed Study: " +
      queueItem.studyId
    );

  } catch (e) {

    Logger.log(
      e
    );

    markFailed(
      queueItem.studyId
    );

  }

}
