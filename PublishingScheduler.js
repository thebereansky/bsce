/**
 * Publishing Scheduler
 * Version 1.0
 */

function schedulePublishing() {

  const queue =
    getProductionQueue();

  return queue.filter(
    item =>
      item.status ===
      PRODUCTION_STATUSES
        .READY_FOR_PUBLISHING
  );

}