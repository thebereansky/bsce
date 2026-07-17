/**
 * Canonical Product Plan Builder
 * Version 1.0
 *
 * Creates the canonical planning
 * object used by future products.
 */

function buildCanonicalProductPlan() {

  const study =
    getActiveStudy();

  const concepts =
    extractStudyConcepts();

  return {

    version:
      "1.0",

    generatedOn:
      new Date()
        .toISOString(),

    series: {

      id:
        study.series.id,

      name:
        study.series.name

    },

    track: {

      id:
        study.track.id,

      name:
        study.track.name

    },

    study: {

      id:
        study.study.id,

      title:
        study.study.title

    },

    studySummary:
      concepts.introduction,

    bigQuestion:
      concepts.bigQuestion,

    keyScriptures:
      concepts.supportingScriptures,

    teachingPoints:
      concepts.teachingPoints,

    keyTakeaways:
      concepts.keyTakeaways,

    reflectionQuestions:
      concepts.reflectionQuestions,

    familyDiscussionQuestions:
      concepts.familyDiscussionQuestions,

    productPlans: {

      book: {},

      workbook: {},

      familyGuide: {},

      shorts: [],

      coloringBook: [],

      activityBook: [],

      posters: []

    }

  };

}
