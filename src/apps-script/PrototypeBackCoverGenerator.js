/**
 * Prototype Back Cover Generator
 * Version 1.0
 */

function generatePrototypeBackCover() {

  const manifest =
    buildBackCoverManifest();

  const prompt = [

    "Professional coloring book back cover.",

    "Scripture themed.",

    "Wonder of creation.",

    "Space for product description.",

    "Space for other book thumbnails.",

    "Professional Amazon KDP design.",

    "Black and white."

  ].join(" ");

  const image =
    generateImage(
      prompt
    );

  image.setName(
    "back-cover.png"
  );

  savePrototypeImage(
    image
  );

}
