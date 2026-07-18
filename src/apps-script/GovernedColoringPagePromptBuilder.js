/**
 * Governed Coloring Page Prompt Builder
 * Version 2.0
 *
 * Applies:
 * - Product Philosophy
 * - Brand Identity
 * - Visual Governance
 * - Coloring Book Standards
 */

function buildGovernedColoringPagePrompt(
  page
) {

  const promptParts = [];

  //
  // PRODUCT TYPE
  //

  promptParts.push(
    "Professional children's coloring book page."
  );

  //
  // BEREAN SKY MISSION
  //

  promptParts.push(
    "Help children understand, explore, and appreciate the true nature of God's creation through Scripture."
  );

  promptParts.push(
    "Encourage wonder, worship, and faith in God."
  );

  //
  // COLORING BOOK STANDARDS
  //

  promptParts.push(
    "Black and white line art."
  );

  promptParts.push(
    "Bold clean outlines."
  );

  promptParts.push(
    "Large coloring areas."
  );

  promptParts.push(
    "No shading."
  );

  promptParts.push(
    "No grayscale."
  );

  promptParts.push(
    "Educational biblical illustration."
  );

  promptParts.push(
    "Child friendly."
  );

  //
  // BORDER STANDARD
  //

  promptParts.push(
    "Consistent decorative coloring book border."
  );

  promptParts.push(
    "Double-line border."
  );

  promptParts.push(
    "Decorative corner flourishes."
  );

  promptParts.push(
    "Classic storybook border."
  );

  promptParts.push(
    "Same border style used throughout the entire book."
  );

  //
  // TYPOGRAPHY
  //

  promptParts.push(
    "Outline lettering only."
  );

  promptParts.push(
    "Hollow letters."
  );

  promptParts.push(
    "Colorable typography."
  );

  promptParts.push(
    "No solid black text."
  );

  //
  // VISUAL GOVERNANCE
  //

  promptParts.push(
    "Earth-based viewpoint."
  );

  promptParts.push(
    "Human observer perspective."
  );

  promptParts.push(
    "Ground-level viewpoint."
  );

  promptParts.push(
    "Visible sky from earth."
  );

  promptParts.push(
    "Biblical observational perspective."
  );

  promptParts.push(
    "Never depict the earth from above."
  );

  promptParts.push(
    "Never depict a globe earth."
  );

  promptParts.push(
    "Never depict a planetary earth."
  );

  promptParts.push(
    "Never depict the earth floating in space."
  );

  promptParts.push(
    "No space-view imagery."
  );

  promptParts.push(
    "No satellite imagery."
  );

  promptParts.push(
    "No NASA-style imagery."
  );

  //
  // PAGE CONTENT
  //

  if (
    page.title
  ) {

    promptParts.push(
      page.title
    );

  }

  if (
    page.scripture
  ) {

    promptParts.push(
      "Scripture Reference: " +
      page.scripture
    );

  }

  //
  // PAGE TYPES
  //

  switch (
    page.pageType
  ) {

    case "SCRIPTURE_SCENE":

      promptParts.push(
        "Illustrate the Scripture scene."
      );

      promptParts.push(
        "Biblical narrative illustration."
      );

      break;

    case "MEMORY_VERSE_PAGE":

      promptParts.push(
        "Large memory verse page."
      );

      promptParts.push(
        "Colorable typography."
      );

      promptParts.push(
        "Minimal supporting illustration."
      );

      break;

    case "TYPOGRAPHY_PAGE":

      promptParts.push(
        "Large inspirational Scripture quote."
      );

      promptParts.push(
        "Decorative lettering."
      );

      break;

    case "REFLECTION_PAGE":

      promptParts.push(
        "Wonder of creation."
      );

      promptParts.push(
        "Majesty of God."
      );

      promptParts.push(
        "Worship themed illustration."
      );

      break;

  }

  return promptParts.join(
    " "
  );

}
