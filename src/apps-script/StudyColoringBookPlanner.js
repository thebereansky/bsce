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
 * We will expand this to
 * 32 pages after review.
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
      pageType: "ABOUT_BOOK"
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
      title: "God Created the Heavens",
      scripture: "Genesis 1:1"
    },

    {
      pageNumber: 6,
      pageType: "SCRIPTURE_SCENE",
      title: "God Created the Earth",
      scripture: "Genesis 1:1"
    },

    {
      pageNumber: 7,
      pageType: "SCRIPTURE_PAGE",
      title: "Creation Declares His Glory",
      scripture: "Psalm 19:1"
    },

    {
      pageNumber: 8,
      pageType: "SCRIPTURE_PAGE",
      title: "By Faith We Understand",
      scripture: "Hebrews 11:3"
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
