/**
 * Publishing Engine
 * Version 1.0
 */

function publishStudy(
  studyId
) {

  Logger.log(
    "Publishing Study: " +
    studyId
  );

  const manifest =
    loadPublisherManifest(
      studyId
    );

  publishToYouTube(
    manifest
  );

  publishToFacebook(
    manifest
  );

  publishToInstagram(
    manifest
  );

  publishToX(
    manifest
  );

  markStudyPublished(
    studyId
  );

}


/**
 * Placeholder Publisher
 */
function publishToYouTube(
  manifest
) {

  Logger.log(
    "Publishing to YouTube..."
  );

}


/**
 * Placeholder Publisher
 */
function publishToFacebook(
  manifest
) {

  Logger.log(
    "Publishing to Facebook..."
  );

}


/**
 * Placeholder Publisher
 */
function publishToInstagram(
  manifest
) {

  Logger.log(
    "Publishing to Instagram..."
  );

}


/**
 * Placeholder Publisher
 */
function publishToX(
  manifest
) {

  Logger.log(
    "Publishing to X..."
  );

}


/**
 * Mark queue item published.
 */
function markStudyPublished(
  studyId
) {

  updateQueueStatus(
    studyId,
    PRODUCTION_STATUSES.PUBLISHED
  );

}

function loadPublisherManifest(
  studyId
) {

  const study =
    getCurrentStudy();

  const filename =
    "publisher-manifest-" +
    studyId +
    ".json";

  const folder =
    getStudySubfolder(
      buildSeriesFolderName(
        study
      ),
      buildTrackFolderName(
        study
      ),
      buildStudyFolderName(
        study
      ),
      "05 - Production"
    );

  const files =
    folder.getFilesByName(
      filename
    );

  if (
    !files.hasNext()
  ) {

    throw new Error(
      "Publisher Manifest Not Found"
    );

  }

  return JSON.parse(
    files.next()
      .getBlob()
      .getDataAsString()
  );

}
