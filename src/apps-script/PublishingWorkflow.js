/**
 * Publishing Workflow
 * Version 1.0
 */

function promoteStudyToPublishing(
  studyId
) {

  updateQueueStatus(
    studyId,
    PRODUCTION_STATUSES.READY_FOR_PUBLISHING
  );

}


function publishReadyStudies() {

  const queue =
    getProductionQueue();

  const studies =
    queue.filter(
      item =>
        item.status ===
        PRODUCTION_STATUSES.READY_FOR_PUBLISHING
    );

  studies.forEach(
    study => {

      try {

        publishStudy(
          study.studyId
        );

      } catch (e) {

        Logger.log(
          e
        );

      }

    }
  );

}