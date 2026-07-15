/**
 * Thumbnail Prompt Generator
 * Version 1.0
 */

function buildThumbnailPrompt(
  shortData
) {

  const title =
    shortData.title || "";

  const teachingPoint =
    shortData.teachingPoint || "";

  const scripture =
    shortData.scripture || "";

  const creationConnection =
    shortData.creationConnection || "";

  return [

    "Create a professional YouTube thumbnail.",

    "Style: cinematic, educational, inspiring.",

    "Brand: The Berean Sky.",

    "Tagline: Searching the Scriptures. Exploring Creation.",

    "Topic:",

    title,

    teachingPoint,

    "Scripture:",

    scripture,

    "Creation Connection:",

    creationConnection,

    "Visual Requirements:",

    "- Family friendly",
    "- High contrast",
    "- Visually striking",
    "- Clean composition",
    "- Suitable for YouTube",

    "Include visual elements that reinforce the biblical teaching.",

    "Use imagery inspired by observable creation and Scripture.",

    "Avoid:",
    "- Modern sci-fi imagery",
    "- Space travel",
    "- Astronauts",
    "- Futuristic technology",
    "- Alien imagery",

    "Focus on:",
    "- God's creation",
    "- The heavens",
    "- The firmament",
    "- The sun, moon, and stars",
    "- Scripture",
    "- Wonder and discovery",

    "No text overlays unless explicitly requested."

  ].join("\n");

}

/**
 * Enhanced Cinematic Thumbnail Prompt
 */
function buildEnhancedThumbnailPrompt(
  shortData
) {

  return (

    "Ultra-detailed cinematic biblical educational thumbnail. " +

    "Topic: " +

    shortData.title +

    ". Based on Scripture: " +

    shortData.scripture +

    ". Inspired by: " +

    shortData.creationConnection +

    ". Family friendly. " +

    "Professional YouTube thumbnail composition. " +

    "High visual impact. " +

    "Warm lighting. " +

    "Wonder and awe. " +

    "Biblical creation themes. " +

    "Scripture-centered. " +

    "No modern astronomy assumptions. " +

    "No astronauts. " +

    "No spacecraft. " +

    "No science-fiction imagery. " +

    "Consistent with biblical cosmology. " +

    "Professional digital art."

  );

}