/**
 * Incremental Build Engine
 * Version 1.0
 */

function runIncrementalBuild() {

  const plan =
    createBuildPlan();

  Logger.log(
    "Assets To Build: " +
    plan.length
  );

  plan.forEach(
    assetType => {

      buildAsset(
        assetType
      );

    }
  );

  finalizeBuild();

}