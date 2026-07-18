/**
 * Governed Coloring Page Prompt Builder
 * Version 4.0
 */

function buildGovernedColoringPagePrompt(
  page
) {

  const promptParts = [];

  //
  // PRODUCT PURPOSE
  //

  promptParts.push(
    "Professional children's coloring book page."
  );

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

  promptParts.push(
    "Professional Amazon KDP interior."
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
    "Same border style used throughout entire book."
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

  promptParts.push(
    "Consistent lettering style across entire book."
  );

  promptParts.push(
    "Scripture reference centered at bottom."
  );

  promptParts.push(
    "Small consistent footer text."
  );

  promptParts.push(
    "Footer occupies approximately five percent of page height."
  );

  //
  // TEXT CONTROL
  //

  promptParts.push(
    "Visual descriptions are scene instructions only."
  );

  promptParts.push(
    "Do not render visual descriptions as text."
  );

  promptParts.push(
    "Do not create captions."
  );

  promptParts.push(
    "Do not create narration."
  );

  promptParts.push(
    "Do not create explanatory sentences."
  );

  promptParts.push(
    "Do not create placeholder text."
  );

  promptParts.push(
    "Do not create empty text boxes."
  );

  promptParts.push(
    "Do not create blank rectangles."
  );

  promptParts.push(
    "Only render page title and scripture reference."
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
    "Biblical observational perspective."
  );

  promptParts.push(
    "Never depict a globe earth."
  );

  promptParts.push(
    "Never depict a spherical earth."
  );

  promptParts.push(
    "Never depict earth as a planet."
  );

  promptParts.push(
    "Never show earth floating in space."
  );

  promptParts.push(
    "Never show visible planetary curvature."
  );

  promptParts.push(
    "Never use NASA-style imagery."
  );

  promptParts.push(
    "Never use satellite imagery."
  );

  promptParts.push(
    "No outer-space scenes."
  );

  promptParts.push(
    "Flat horizon."
  );

  promptParts.push(
    "Straight horizon."
  );

  //
  // CREATION TIMELINE GOVERNANCE
  //

  promptParts.push(
    "Depict only elements that exist in the referenced Scripture passage."
  );

  promptParts.push(
    "Do not add decorative animals."
  );

  promptParts.push(
    "Do not add decorative people."
  );

  promptParts.push(
    "Do not add decorative plants."
  );

  promptParts.push(
    "Do not add decorative celestial objects."
  );

  promptParts.push(
    "Only include elements directly supported by the Scripture passage."
  );

  promptParts.push(
    "Avoid generic Christian coloring book imagery."
  );

  promptParts.push(
    "Depict the actual biblical scene."
  );

  //
  // PAGE CONTENT
  //

  if (
    page.title
  ) {

    promptParts.push(
      "Page Title: " +
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

  if (
    page.visualDescription
  ) {

    promptParts.push(
      "Scene Description: " +
      page.visualDescription
    );

  }

  //
  // PAGE TYPE LOGIC
  //

  switch (
    page.pageType
  ) {

    case "Cover":

      promptParts.push(
        "Professional commercial coloring book cover."
      );

      promptParts.push(
        "Retail quality."
      );

      promptParts.push(
        "Eye-catching."
      );

      break;

    case "SCRIPTURE_SCENE":

      promptParts.push(
        "Illustrate the specific Scripture scene."
      );

      promptParts.push(
        "Do not add objects not present in the passage."
      );

      break;

    case "MEMORY_VERSE_PAGE":

      promptParts.push(
        "Large scripture typography."
      );

      promptParts.push(
        "Minimal supporting illustration."
      );

      break;

    case "REFLECTION_PAGE":

      promptParts.push(
        "Wonder and worship theme."
      );

      promptParts.push(
        "Creation-focused illustration."
      );

      break;

    case "BackCover":

      promptParts.push(
        "Professional coloring book back cover."
      );

      promptParts.push(
        "Commercial retail product."
      );

      break;

  }

  return promptParts.join(
    " "
  );

}
