
/**
 * Production Queue
 * Version 1.0
 */

const PRODUCTION_STATUSES = {

  QUEUED:
    "Queued",

  GENERATING:
    "Generating",

  VALIDATING:
    "Validating",

  READY_FOR_PRODUCTION:
    "Ready For Production",

  READY_FOR_PUBLISHING:
    "Ready For Publishing",

  PUBLISHED:
    "Published",

  FAILED:
    "Failed"

};


/**
 * Creates a queue record.
 */
function createProductionQueueItem(
  study
) {

  return {

    studyId:
      study.study.id,

    studyTitle:
      study.study.title,

    createdOn:
      new Date()
        .toISOString(),

    updatedOn:
      new Date()
        .toISOString(),

    status:
      PRODUCTION_STATUSES.QUEUED

  };

}


/**
 * Creates queue file.
 */
function initializeProductionQueue() {

  const queue = [];

  saveProductionQueue(
    queue
  );

}


/**
 * Load queue.
 */
function getProductionQueue() {

  try {

    const file =
      getProductionQueueFile();

    return JSON.parse(
      file.getBlob()
        .getDataAsString()
    );

  } catch (e) {

    return [];

  }

}


/**
 * Save queue.
 */
function saveProductionQueue(
  queue
) {

  const root =
    getEngineRootFolder();

  const filename =
    "production-queue.json";

  const files =
    root.getFilesByName(
      filename
    );

  if (
    files.hasNext()
  ) {

    const file =
      files.next();

    file.setContent(
      JSON.stringify(
        queue,
        null,
        2
      )
    );

    return;

  }

  root.createFile(
    filename,
    JSON.stringify(
      queue,
      null,
      2
    ),
    MimeType.PLAIN_TEXT
  );

}


/**
 * Get queue file.
 */
function getProductionQueueFile() {

  const root =
    getEngineRootFolder();

  const files =
    root.getFilesByName(
      "production-queue.json"
    );

  if (
    !files.hasNext()
  ) {

    throw new Error(
      "Production queue not found."
    );

  }

  return files.next();

}


/**
 * Add study.
 */
function queueCurrentStudy() {

  const study =
    getCurrentStudy();

  const queue =
    getProductionQueue();

  queue.push(
    createProductionQueueItem(
      study
    )
  );

  saveProductionQueue(
    queue
  );

}

function updateQueueStatus(
  studyId,
  status
) {

  const queue =
    getProductionQueue();

  const item =
    queue.find(
      q =>
        q.studyId ===
        studyId
    );

  if (!item) {

    throw new Error(
      "Queue item not found."
    );

  }

  item.status =
    status;

  item.updatedOn =
    new Date()
      .toISOString();

  saveProductionQueue(
    queue
  );

}