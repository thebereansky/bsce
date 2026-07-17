/**
 * Canonical Study Analyzer
 * Version 1.0
 */

function analyzeStudy() {

  const study =
    getActiveStudy();

  const masterStudy =
    loadGeneratedAsset(
      "master-study"
    );

  return {

    series:
      study.series,

    track:
      study.track,

    study:
      study.study,

    primaryScripture:
      study.primaryScripture ||

      null,

    bigIdea:
      study.bigIdea ||

      null,

    themes:
      study.themes ||

      [],

    audiences:
      study.audiences ||

      [],

    scriptureReferences:
      study.scriptureReferences ||

      [],

    bigQuestion:
      masterStudy.bigQuestion ||

      null,

    introduction:
      masterStudy.introduction ||

      null,

    keyTakeaways:
      masterStudy.keyTakeaways ||

      [],

    supportingScriptures:
      masterStudy.supportingScriptures ||

      [],

    reflectionQuestions:
      masterStudy.reflectionQuestions ||

      [],

    familyDiscussionQuestions:
      masterStudy.familyDiscussionQuestions ||

      []

  };

}
