/**
 * Website Publisher
 * Version 1.0
 */

function publishStudyToWebsite() {

  const study =
    getActiveStudy();

  Logger.log(
    "Publishing Study To Website: " +
    study.study.id
  );

}