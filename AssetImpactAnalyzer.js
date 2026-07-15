/**
 * Asset Impact Analyzer
 * Version 1.0
 */

function getImpactedAssets(
  assetType
) {

  const dependencies =
    getAssetDependencies();

  const impacted = [];

  Object.keys(
    dependencies
  ).forEach(
    asset => {

      const deps =
        dependencies[
          asset
        ];

      if (
        deps.includes(
          assetType
        )
      ) {

        impacted.push(
          asset
        );

      }

    }
  );

  return impacted;

}