/**
 * Governed Coloring Page Prompt Builder
 * Version 1.0
 */

function buildGovernedColoringPagePrompt(
  page
) {

  const promptParts = [];

  //
  // Product Type
  //

  promptParts.push(
    "Professional children's coloring book page."
  );

  //
  // Coloring Book Standards
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
  // Border Standard
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
    "Large interior coloring area."
  );

  promptParts.push(
    "Reserved scripture reference area at bottom."
  );

  promptParts.push(
    "Same border style used throughout the entire book."
  );

  //
  // Typography Standard
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
  // Visual Governance
  //

  promptParts.push(
    "Earth-based viewpoint."
  );

  promptParts.push(
    "No globe earth imagery."
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

  promptParts.push(
    "Scripture-first imagery."
  );

  //
  // Page Specific Content
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
      "Scripture reference: " +
      page.scripture
    );

  }

  //
  // Page Type Handling
  //

  switch (
    page.pageType
  ) {

    case "SCRIPTURE_SCENE":

      promptParts.push(
        "Illustrate the Scripture scene."
      );

      break;

    case "MEMORY_VERSE_PAGE":

      promptParts.push(
        "Decorative memory verse page."
      );

      break;

    case "REFLECTION_PAGE":

      promptParts.push(
        "Wonder and worship themed page."
      );

      break;

    case "TYPOGRAPHY_PAGE":

      promptParts.push(
        "Large decorative colorable lettering."
      );

      break;

  }

  return promptParts.join(
    " "
  );

}
