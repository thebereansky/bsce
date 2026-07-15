/**
 * Study DOCX Generator
 * Version 1.0
 */

function buildStudyDocument() {

  const study =
    loadGeneratedAsset(
      "master-study"
    );

  return [

    study.studyTitle,

    "",

    study.introduction,

    "",

    "Big Question",

    study.bigQuestion,

    "",

    "Key Takeaways",

    study.keyTakeaways.join(
      "\n"
    )

  ].join("\n");

}