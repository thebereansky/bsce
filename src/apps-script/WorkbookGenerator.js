/**
 * Workbook Generator
 * Version 1.0
 */

function buildWorkbook() {

  const masterStudy =
    loadGeneratedAsset(
      "master-study"
    );

  return {

    title:
      masterStudy.studyTitle,

    lessons:
      buildWorkbookLessons(
        masterStudy
      )

  };

}


function buildWorkbookLessons(
  masterStudy
) {

  return [

    {

      questions:
        masterStudy
          .reflectionQuestions,

      activities:
        masterStudy
          .familyDiscussionQuestions

    }

  ];

}