/**
 * Coloring Page Prompt Generator
 * Version 2.0
 */

function buildColoringPagePrompt() {

  const study =
    getActiveStudy();

  return [

    "Children's coloring book page.",

    "Black and white line art.",

    "Bold clean outlines.",

    "No shading.",

    "No grayscale.",

    "Large coloring areas.",

    "Simple educational illustration.",

    "Printable KDP interior.",

    "Ages 5-10.",

    "Scripture-first imagery.",

    "Derived from biblical descriptions.",

    "Earth-based viewpoint.",

    "Educational biblical cosmology.",

    "Child-friendly.",

    "Simple composition.",

    "High quality coloring book artwork.",

    "Study Title: " +
      study.study.title

  ].join(" ");

}
