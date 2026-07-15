/**
 * Product Asset Saver
 * Version 1.0
 */

function saveProductAssets(
  assets
) {

  Object.keys(
    assets
  ).forEach(
    key => {

      saveCurrentStudyFile(

        JSON.stringify(
          assets[key],
          null,
          2
        ),

        key + ".json",

        "04 - Digital Products"

      );

    }
  );

}