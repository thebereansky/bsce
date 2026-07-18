/**
 * Coloring Page Prompt Generator
 * Version 4.0
 */

function buildColoringPagePrompt(
  pageManifest
) {

  const promptParts = [

    "Children's coloring book page.",

    "Black and white line art.",

    "Bold clean outlines.",

    "No shading.",

    "No grayscale.",

    "Large coloring areas.",

    "Professional coloring page.",

    "Ages 5-10.",

    "Scripture-first illustration.",

    "Educational biblical scene.",

    "Single primary scene only.",

    "No labels.",

    "No Hebrew words.",

    "No doctrinal diagrams.",

    "No charts.",

    "No clutter.",

    "Include decorative border.",

    "Printable Amazon KDP interior.",

    "Primary Scripture:",

    pageManifest.primaryScripture,

    "Theme:",

    pageManifest.visualTheme

  ];

  switch (
    pageManifest.pageType
  ) {

    case "SCRIPTURE_SCENE":

      promptParts.push(

        "Depict the biblical scene described by Scripture."

      );

      break;

    case "KEY_CONCEPT":

      promptParts.push(

        "Depict the central teaching concept in a child-friendly way."

      );

      break;

    case "MEMORY_VERSE":

      promptParts.push(

        "Include a large decorative Scripture verse area."

      );

      break;

  }

  return promptParts.join(
    " "
  );

}
