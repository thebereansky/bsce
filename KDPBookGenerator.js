/**
 * KDP Book Generator
 * Version 2.0
 *
 * Generates a complete KDP-ready
 * book object from study assets.
 */

function buildKDPBook() {

  const study =
    getActiveStudy();

  Logger.log(
    "Building KDP Book..."
  );

  const masterStudy =
    loadOrGenerateAsset(
      "master-study"
    );

  const familyGuide =
    loadOrGenerateAsset(
      "family-guide"
    );

  const lessonSeries =
    loadOrGenerateAsset(
      "lesson-series"
    );

  return {

    title:
      study.study.title,

    subtitle:
      "A Berean Sky Study",

    introduction:
      masterStudy.introduction || "",

    bigQuestion:
      masterStudy.bigQuestion || "",

    keyTakeaways:
      masterStudy.keyTakeaways || [],

    supportingScriptures:
      masterStudy.supportingScriptures || [],

    chapters:
      buildKDPChapters(
        masterStudy,
        lessonSeries
      ),

    familyGuide:
      familyGuide,

    metadata: {

      generatedOn:
        new Date()
          .toISOString(),

      generatedBy:
        "BSCE",

      studyId:
        study.study.id,

      studyTitle:
        study.study.title,

      series:
        study.series.name,

      track:
        study.track.name

    }

  };

}


/**
 * Converts lesson series
 * into book chapters.
 */
function buildKDPChapters(
  masterStudy,
  lessonSeries
) {

  const chapters = [];

  if (
    !lessonSeries ||
    !lessonSeries.lessons
  ) {

    return chapters;

  }

  lessonSeries.lessons.forEach(
    function(lesson, index) {

      chapters.push({

        chapterNumber:
          index + 1,

        title:
          lesson.title || (
            "Lesson " +
            (index + 1)
          ),

        summary:
          lesson.summary || "",

        content:
          lesson.content ||
          lesson.summary ||
          ""

      });

    }
  );

  return chapters;

}


/**
 * Returns estimated page count.
 */
function estimateKDPPageCount(
  kdpBook
) {

  let wordCount = 0;

  kdpBook.chapters.forEach(
    function(chapter) {

      const content =
        chapter.content || "";

      wordCount +=
        content.split(/\s+/)
          .length;

    }
  );

  return Math.ceil(
    wordCount / 300
  );

}


/**
 * Test Function
 */
function testKDPBook() {

  const book =
    buildKDPBook();

  Logger.log(

    JSON.stringify(
      book,
      null,
      2
    )

  );

}