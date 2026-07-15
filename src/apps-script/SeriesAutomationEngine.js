/**
 * Series Automation Engine
 * Version 1.0
 */

function automateSeriesProduction() {

  const studies =
    getIndexedStudies();

  Logger.log(
    "Studies Found: " +
    studies.length
  );

  studies.forEach(
    study => {

      try {

        setCurrentStudyContext(
          study
        );

        runIncrementalBuild();

        processCurrentStudy();

      } catch (e) {

        Logger.log(
          e
        );

      }

    }
  );

  clearCurrentStudyContext();

}