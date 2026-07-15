/**
 * Batch Series Processor
 * Version 1.0
 */

function processSeriesFromIndex() {

  const studies =
    getIndexedStudies();

  Logger.log(
    "Studies Found: " +
    studies.length
  );

  studies.forEach(
    study => {

      processIndexedStudy(
        study
      );

    }
  );

}


/**
 * Process study from index.
 */
function processIndexedStudy(
  study
) {

  Logger.log(
    "Processing: " +
    study.studyName
  );

  try {

    processCurrentStudy();

  } catch (e) {

    Logger.log(
      e
    );

  }

}
