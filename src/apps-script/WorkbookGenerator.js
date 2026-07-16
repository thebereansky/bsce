/**
 * Workbook Generator
 * Version 2.0
 *
 * Builds a structured workbook
 * from the Master Study.
 */

function buildWorkbook() {

  const masterStudy =
    loadGeneratedAsset(
      "master-study"
    );

  return {

    title:
      masterStudy.studyTitle,

    subtitle:
      "Berean Sky Workbook",

    introduction:
      masterStudy.introduction,

    lessons:
      buildWorkbookLessons(
        masterStudy
      ),

    keyTakeaways:
      masterStudy.keyTakeaways || [],

    metadata: {

      generatedOn:
        new Date()
          .toISOString(),

      generatedBy:
        "BSCE Workbook Generator"

    }

  };

}


/**
 * Builds workbook lessons from
 * teaching points.
 */
function buildWorkbookLessons(
  masterStudy
) {

  const lessons = [];

  const teachingPoints =
    masterStudy.teachingPoints || [];

  teachingPoints.forEach(
    function(
      point,
      index
    ) {

      lessons.push({

        lessonNumber:
          index + 1,

        title:
          point.title ||

          (
            "Lesson " +
            (index + 1)
          ),

        teachingPoint:
          point.explanation || "",

        supportingScripture:
          point.supportingScripture || "",

        creationConnection:
          point.creationConnection || "",

        reflectionQuestions:
          masterStudy
            .reflectionQuestions || [],

        applicationIdeas:
          masterStudy
            .application || [],

        notesSection:
          true

      });

    }
  );

  return lessons;

}
