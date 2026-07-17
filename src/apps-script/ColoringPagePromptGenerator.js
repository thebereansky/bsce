/**
 * Coloring Page Prompt Generator
 * Version 3.0
 */

function buildColoringPagePrompt() {

  const concepts =
    getRelevantScripturalConcepts();

  const promptParts = [

    "Children's coloring book page.",

    "Black and white line art.",

    "Bold clean outlines.",

    "No shading.",

    "No grayscale.",

    "Large coloring areas.",

    "Printable KDP interior.",

    "Ages 5-10.",

    "Scripture-first imagery.",

    "Educational biblical illustration.",

    "Earth-based viewpoint.",

    "Child-friendly.",

    "Simple composition."

  ];

  concepts.forEach(
    function(concept) {

      promptParts.push(
        concept
      );

    }
  );

  return promptParts.join(
    " "
  );

}
