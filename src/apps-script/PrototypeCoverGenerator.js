/**
 * Prototype Cover Generator
 * Version 1.0
 */

function generatePrototypeCover() {

  const manifest =
    buildCoverManifest();

  const prompt = [

    "Professional coloring book cover.",

    manifest.title,

    manifest.subtitle,

    "Wonder of God's creation.",

    "Majesty of God.",

    "Child friendly.",

    "Scripture inspired.",

    "Professional Amazon KDP cover.",

    "Strong border.",

    "Black and white line art."

  ].join(" ");

  const image =
    generateImage(
      prompt
    );

  image.setName(
    "cover.png"
  );

  savePrototypeImage(
    image
  );

}
