/**
 * Coloring Book Planning Prompt Builder
 * Version 1.0
 */

function buildColoringBookPlanningPrompt() {

  const study =
    getActiveStudy();

  const philosophy =
    getProductPhilosophy();

  return [

    "You are a Christian educational publisher.",

    "",

    "Create a complete commercial coloring book plan.",

    "",

    "Mission:",

    philosophy.mission,

    "",

    "Study Definition:",

    JSON.stringify(
      study,
      null,
      2
    ),

    "",

    "Requirements:",

    "- 32 pages",
    "- Unique Scripture references",
    "- No duplicate verses",
    "- Educational progression",
    "- Scripture-first approach",
    "- Wonder and worship themes",
    "- Commercial product quality",

    "",

    "For each page provide:",

    "- Page Number",
    "- Page Type",
    "- Title",
    "- Scripture",
    "- Visual Description",

    "",

    "Return valid JSON only."

  ].join("\n");

}
