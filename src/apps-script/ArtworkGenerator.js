/**
 * Artwork Generator
 * Version 1.0
 */

function generateArtwork(
  pageManifest
) {

  const prompt =

    buildArtworkPrompt(
      pageManifest
    );

  const image =
    generateImage(
      prompt
    );

  image.setName(

    "artwork-" +

    String(
      pageManifest.pageNumber
    ).padStart(
      3,
      "0"
    ) +

    ".png"

  );

  saveArtworkImage(
    image
  );

}
