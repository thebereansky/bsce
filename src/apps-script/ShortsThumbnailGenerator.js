/**
 * Shorts Thumbnail Generator
 * Version 1.0
 */

function generateShortThumbnailPrompt(
  shortObj
) {

  return {

    title:
      shortObj.title,

    prompt:

      "Cinematic biblical illustration, " +

      shortObj.title +

      ", dramatic lighting, educational, " +

      "high click-through YouTube thumbnail, " +

      "professional digital art"

  };

}
