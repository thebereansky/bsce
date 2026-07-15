/**
 * Content Reuse Engine
 * Version 1.0
 */

function buildReusableContent() {

  const masterStudy =
    loadGeneratedAsset(
      "master-study"
    );

  return {

    quotes:
      masterStudy.keyTakeaways,

    discussionQuestions:
      masterStudy.discussionQuestions,

    reflectionQuestions:
      masterStudy.reflectionQuestions

  };

}