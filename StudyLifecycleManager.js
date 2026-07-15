/**
 * Study Lifecycle Manager
 * Version 1.0
 */

function getStudyLifecycleStatuses() {

  return {

    DRAFT:
      "Draft",

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

    ARCHIVED:
      "Archived",

    FAILED:
      "Failed"

  };

}


/**
 * Promote study.
 */
function promoteStudyStatus(
  studyId,
  status
) {

  updateQueueStatus(
    studyId,
    status
  );

}


/**
 * Queue study.
 */
function queueStudy(
  studyId
) {

  promoteStudyStatus(
    studyId,
    getStudyLifecycleStatuses().QUEUED
  );

}


/**
 * Mark generating.
 */
function markGenerating(
  studyId
) {

  promoteStudyStatus(
    studyId,
    getStudyLifecycleStatuses().GENERATING
  );

}


/**
 * Mark validating.
 */
function markValidating(
  studyId
) {

  promoteStudyStatus(
    studyId,
    getStudyLifecycleStatuses().VALIDATING
  );

}


/**
 * Mark production ready.
 */
function markReadyForProduction(
  studyId
) {

  promoteStudyStatus(
    studyId,
    getStudyLifecycleStatuses()
      .READY_FOR_PRODUCTION
  );

}


/**
 * Mark publishing ready.
 */
function markReadyForPublishing(
  studyId
) {

  promoteStudyStatus(
    studyId,
    getStudyLifecycleStatuses()
      .READY_FOR_PUBLISHING
  );

}


/**
 * Mark published.
 */
function markPublished(
  studyId
) {

  promoteStudyStatus(
    studyId,
    getStudyLifecycleStatuses()
      .PUBLISHED
  );

}


/**
 * Archive study.
 */
function archiveStudy(
  studyId
) {

  promoteStudyStatus(
    studyId,
    getStudyLifecycleStatuses()
      .ARCHIVED
  );

}


/**
 * Mark failed.
 */
function markFailed(
  studyId
) {

  promoteStudyStatus(
    studyId,
    getStudyLifecycleStatuses()
      .FAILED
  );

}