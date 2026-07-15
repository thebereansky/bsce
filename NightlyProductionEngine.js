/**
 * Nightly Production Engine
 * Version 1.0
 */

function runNightlyProduction() {

  Logger.log(
    "Starting Nightly Production..."
  );

  const studies =
    getIndexedStudies();

  Logger.log(
    "Studies Found: " +
    studies.length
  );

  studies.forEach(
    study => {

      try {

        Logger.log(
          "Processing: " +
          study.studyName
        );

        setCurrentStudyContext(
          study
        );

        processCurrentStudy();

      } catch (e) {

        Logger.log(
          e
        );

      }

    }
  );

  clearCurrentStudyContext();

  Logger.log(
    "Nightly Production Complete."
  );

}