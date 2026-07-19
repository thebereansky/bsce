/**
 * Governed Coloring Page Prompt Builder
 * Version 5.0
 */

function buildGovernedColoringPagePrompt(
  page
) {

  const promptParts = [];

  //
  // PRODUCT PURPOSE
  //

  promptParts.push(
    "Help children understand, explore, and appreciate the true nature of God's creation through Scripture."
  );

  promptParts.push(
    "Encourage wonder, worship, and faith in God."
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
    "Avoid generic Christian imagery."
  );

  promptParts.push(
    "Depict the actual biblical scene."
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

  //
  // PAGE CONTENT
  //

  if (
    page.title
  ) {

    promptParts.push(
      "Title: " +
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

    //
    // FRONT COVER
    //

    case "FRONT_COVER":

      promptParts.push(
        "Professional commercial book cover."
      );

      promptParts.push(
        "Retail-quality product."
      );

      promptParts.push(
        "Full-color watercolor painting."
      );

      promptParts.push(
        "Beautiful watercolor illustration."
      );

      promptParts.push(
        "Bookstore-quality design."
      );

      promptParts.push(
        "Eye-catching."
      );

      promptParts.push(
        "Not a coloring page."
      );

      promptParts.push(
        "Do not include The Berean Sky in the title."
      );

      promptParts.push(
        "The title should contain only the book title."
      );

      promptParts.push(
        "Small publisher branding allowed."
      );

      break;

    //
    // INTERIOR PAGE
    //

    case "COLORING_PAGE":

      promptParts.push(
        "Professional children's coloring book page."
      );

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
        "Professional Amazon KDP interior."
      );

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
        "Same border style used throughout the book."
      );

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
        "Consistent lettering style."
      );

      promptParts.push(
        "Scripture reference centered at bottom."
      );

      break;

    //
    // BACK COVER
    //

    case "BACK_COVER":

      promptParts.push(
        "Professional commercial back cover."
      );

      promptParts.push(
        "Full-color watercolor painting."
      );

      promptParts.push(
        "Retail-quality design."
      );

      promptParts.push(
        "Not a coloring page."
      );

      promptParts.push(
        "Include space for product description."
      );

      promptParts.push(
        "Include space for future book thumbnails."
      );

      promptParts.push(
        "Small publisher branding allowed."
      );

      break;

  }

  return promptParts.join(
    " "
  );

}
