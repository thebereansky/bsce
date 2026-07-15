/**
 * YouTube Asset Pack Builder
 * Version 1.0
 */

function buildYouTubeAssetPacks(
  shortsContent
) {

  return shortsContent.shorts.map(
    shortData => {

      return {

        shortNumber:
          shortData.shortNumber,

        title:
          shortData.title,

        assetPack:
          buildYouTubeAssetPack(
            shortData
          )

      };

    }
  );

}