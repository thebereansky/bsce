/**
 * Artwork Generator
 * Version 2.0
 */

function generateArtwork(
  pageManifest
) {

  const prompt =
    buildArtworkPrompt(
      pageManifest
    );

  const imageBlob =
    generateImage(
      prompt
    );

  const filename =

    "artwork-" +

    String(
      pageManifest.pageNumber
    ).padStart(
      3,
      "0"
    ) +

    ".png";

  imageBlob.setName(
    filename
  );

  saveArtworkImage(
    imageBlob
  );

}
