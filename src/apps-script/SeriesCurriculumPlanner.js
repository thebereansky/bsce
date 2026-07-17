/**
 * Series Curriculum Planner
 * Version 1.0
 *
 * Generates the complete
 * curriculum roadmap for a series.
 */

function buildSeriesCurriculumPrompt() {

  const study =
    getActiveStudy();

  return [

    "You are a curriculum architect.",

    "",

    "Create a complete curriculum roadmap.",

    "",

    "Series:",
    study.series.name,

    "",

    "Generate two tracks:",

    "1. Foundations",
    "2. Advanced Topics",

    "",

    "Each track should contain 15 studies.",

    "",

    "For each study provide:",

    "- Study ID",
    "- Study Title",
    "- Primary Scripture",
    "- Big Idea",
    "- Themes",
    "- Learning Objectives",

    "",

    "Return valid JSON only.",

    "",

    "JSON Schema:",

    JSON.stringify({

      series: {},

      tracks: [

        {

          id: "",

          name: "",

          description: "",

          studies: [

            {

              id: "",

              title: "",

              primaryScripture: "",

              bigIdea: "",

              themes: [],

              learningObjectives: []

            }

          ]

        }

      ]

    })

  ].join("\n");

}
