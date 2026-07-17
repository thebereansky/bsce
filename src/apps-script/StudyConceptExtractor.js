/**
 * Study Concept Extractor
 * Version 1.0
 *
 * Extracts reusable concepts from
 * the generated Master Study.
 */

function extractStudyConcepts() {

  const masterStudy =
    loadGeneratedAsset(
      "master-study"
    );

  return {

    studyTitle:
      masterStudy.studyTitle || "",

    bigQuestion:
      masterStudy.bigQuestion || "",

    introduction:
      masterStudy.introduction || "",

    keyTakeaways:
      masterStudy.keyTakeaways || [],

    supportingScriptures:
      masterStudy.supportingScriptures || [],

    teachingPoints:
      masterStudy.teachingPoints || [],

    reflectionQuestions:
      masterStudy.reflectionQuestions || [],

    familyDiscussionQuestions:
      masterStudy.familyDiscussionQuestions || []

  };

}
