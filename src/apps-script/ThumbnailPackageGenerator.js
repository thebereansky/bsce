/**
 * Thumbnail Package Generator
 * Version 1.0
 */

function buildThumbnailPackage(
  shortObj
) {

  return {

    title:
      shortObj.title,

    textOverlay:
      shortObj.hook,

    imagePrompt:

      "Cinematic biblical illustration. " +

      shortObj.title +

      ". Dramatic lighting. Educational. " +

      "YouTube thumbnail. Professional."

  };

}
