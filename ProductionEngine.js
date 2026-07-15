/**
 * Production Engine
 * Version 1.1
 */

function processCurrentStudy() {

  const study =
    getActiveStudy();

  Logger.log(
    "Starting Production Engine..."
  );

  updateStudyStatus(
    study.study.id,
    PRODUCTION_STATUSES.GENERATING
  );

  Logger.log(
    "Generating Study Assets..."
  );

  const results =
    generateStudyAssets();

  Logger.log(
    "Building Production Manifest..."
  );

  const productionManifest =
    buildProductionManifest(
      results
    );

  saveProductionManifest(
    productionManifest
  );

  Logger.log(
    "Building Publisher Manifest..."
  );

  const publisherManifest =
    buildPublisherManifest(
      study,
      results
    );

  savePublisherManifest(
    publisherManifest
  );

  updateStudyStatus(
    study.study.id,
    PRODUCTION_STATUSES.READY_FOR_PRODUCTION
  );

  Logger.log(
    "Production Complete."
  );

  return {

    results:
      results,

    productionManifest:
      productionManifest,

    publisherManifest:
      publisherManifest

  };

}


/**
 * Queue current study
 * if not already queued.
 */
function ensureCurrentStudyQueued() {

  const study =
    getCurrentStudy();

  const queue =
    getProductionQueue();

  const exists =
    queue.some(
      item =>
        item.studyId ===
        study.study.id
    );

  if (
    exists
  ) {

    return;

  }

  queue.push(
    createProductionQueueItem(
      study
    )
  );

  saveProductionQueue(
    queue
  );

}


/**
 * Updates study status.
 */
function updateStudyStatus(
  studyId,
  status
) {

  updateQueueStatus(
    studyId,
    status
  );

}