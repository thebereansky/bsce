/**
 * Series Curriculum Planner
 * Version 2.0
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

    "IMPORTANT:",

    "Track IDs must be numeric strings.",

    "Examples:",
    "001",
    "002",

    "",

    "Track slugs must be URL-safe.",

    "Examples:",
    "foundations",
    "advanced-topics",

    "",

    "Each track should contain 15 studies.",

    "",

    "Study IDs must be numeric strings.",

    "Examples:",
    "001",
    "002",
    "003",

    "",

    "Study slugs must be URL-safe.",

    "Examples:",
    "creation-account",
    "heavens-firmament-earth",

    "",

    "For each study provide:",

    "- Study ID",
    "- Study Slug",
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

      series: {

        id: "",

        name: ""

      },

      tracks: [

        {

          id: "001",

          slug: "",

          name: "",

          description: "",

          studies: [

            {

              id: "001",

              slug: "",

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
