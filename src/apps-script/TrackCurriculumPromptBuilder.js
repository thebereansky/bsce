/**
 * Track Curriculum Prompt Builder
 * Version 1.0
 */

function buildTrackCurriculumPrompt() {

  const study =
    getActiveStudy();

  return [

    "You are designing a curriculum.",

    "Create a complete track curriculum.",

    "Series:",
    study.series.name,

    "Track:",
    study.track.name,

    "Generate 15 studies.",

    "Each study should contain:",

    "- Study ID",
    "- Study Title",
    "- Primary Scripture",
    "- Big Idea",
    "- Themes",
    "- Learning Objectives",

    "Return valid JSON only."

  ].join("\n");

}
