/**
 * Study Coloring Book Planner
 * Version 2.0
 *
 * Creates a complete coloring
 * book plan for a Study.
 */

function buildStudyColoringBookPlan() {

  const study =
    getActiveStudy();

  return {

    productId:
      "coloring-book-" +
      study.study.id,

    productType:
      "coloring-book",

    title:
      study.study.title,

    subtitle:
      "A Biblical Creation Coloring Book",

    pageSize:
      "8.5x11",

    singleSided:
      true,

    includeBorders:
      true,

    targetAudience:
      "Children 5-10",

    generatedOn:
      new Date()
        .toISOString(),

    pageCount:
      10,

    pages:

      buildPrototypeBookPages(
        study
      )

  };

}

/**
 * Prototype book structure.
 *
 * Version 2.0
 *
 * Designed as a commercial
 * Berean Sky coloring book.
 */
function buildPrototypeBookPages(
  study
) {

  return [

    {
      pageNumber: 1,
      pageType: "COVER"
    },

    {
      pageNumber: 2,
      pageType: "TITLE_PAGE"
    },

    {
      pageNumber: 3,
      pageType: "INTRODUCTION_PAGE"
    },

    {
      pageNumber: 4,
      pageType: "SCRIPTURE_SCENE",
      title: "In the Beginning",
      scripture: "Genesis 1:1"
    },

    {
      pageNumber: 5,
      pageType: "SCRIPTURE_SCENE",
      title: "The Earth Was Without Form",
      scripture: "Genesis 1:2"
    },

    {
      pageNumber: 6,
      pageType: "SCRIPTURE_SCENE",
      title: "Darkness Upon the Deep",
      scripture: "Genesis 1:2"
    },

    {
      pageNumber: 7,
      pageType: "MEMORY_VERSE_PAGE",
      title: "In the Beginning God Created",
      scripture: "Genesis 1:1"
    },

    {
      pageNumber: 8,
      pageType: "TYPOGRAPHY_PAGE",
      title: "The Heavens Declare the Glory of God",
      scripture: "Psalm 19:1"
    },

    {
      pageNumber: 9,
      pageType: "REFLECTION_PAGE",
      title: "Wonder of Creation"
    },

    {
      pageNumber: 10,
      pageType: "BACK_COVER"
    }

  ];

}
