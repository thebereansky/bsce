/**
 * Product Launch Engine
 * Version 1.0
 */

function launchStudyProducts() {

  const assets =
    buildAllProducts();

  saveProductAssets(
    assets
  );

  return assets;

}