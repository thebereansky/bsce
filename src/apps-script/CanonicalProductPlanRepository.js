/**
 * Canonical Product Plan Builder
 * Version 2.0
 */

function buildCanonicalProductPlan() {

  const analysis =
    analyzeStudy();

  return {

    version:
      "1.0",

    generatedOn:
      new Date()
        .toISOString(),

    series:
      analysis.series,

    track:
      analysis.track,

    study:
      analysis.study,

    primaryScripture:
      analysis.primaryScripture,

    bigIdea:
      analysis.bigIdea,

    themes:
      analysis.themes,

    audiences:
      analysis.audiences,

    scriptureReferences:
      analysis.scriptureReferences,

    bigQuestion:
      analysis.bigQuestion,

    introduction:
      analysis.introduction,

    keyTakeaways:
      analysis.keyTakeaways,

    reflectionQuestions:
      analysis.reflectionQuestions,

    familyDiscussionQuestions:
      analysis.familyDiscussionQuestions,

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
