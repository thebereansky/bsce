/**
 * Build Planner
 * Version 1.0
 */

function createBuildPlan() {

  const assets =
    getAssetRegistry()
      .assets;

  const plan = [];

  assets.forEach(
    asset => {

      if (
        shouldBuildAsset(
          asset.id
        )
      ) {

        plan.push(
          asset.id
        );

      }

    }
  );

  return plan;

}


function shouldBuildAsset(
  assetType
) {

  if (
    !isAssetBuilt(
      assetType
    )
  ) {

    return true;

  }

  if (
    hasStudyChanged()
  ) {

    return true;

  }

  return false;

}