/**
 * Production Dashboard
 * Version 1.0
 */

function getProductionDashboard() {

  const queue =
    getProductionQueue();

  const summary = {

    queued: 0,

    generating: 0,

    validating: 0,

    readyForProduction: 0,

    readyForPublishing: 0,

    published: 0,

    failed: 0

  };

  queue.forEach(
    item => {

      switch (
        item.status
      ) {

        case PRODUCTION_STATUSES.QUEUED:
          summary.queued++;
          break;

        case PRODUCTION_STATUSES.GENERATING:
          summary.generating++;
          break;

        case PRODUCTION_STATUSES.VALIDATING:
          summary.validating++;
          break;

        case PRODUCTION_STATUSES.READY_FOR_PRODUCTION:
          summary.readyForProduction++;
          break;

        case PRODUCTION_STATUSES.READY_FOR_PUBLISHING:
          summary.readyForPublishing++;
          break;

        case PRODUCTION_STATUSES.PUBLISHED:
          summary.published++;
          break;

        case PRODUCTION_STATUSES.FAILED:
          summary.failed++;
          break;

      }

    }
  );

  return summary;

}
