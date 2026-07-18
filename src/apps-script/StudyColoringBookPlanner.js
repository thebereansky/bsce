/**
 * Study Coloring Book Planner
 * Version 3.0
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
      scripture: "Genesis 1:1",

      visualDescription:
        "Earth-based view of creation. Land, waters, sky. No globe earth. No planetary imagery. No space view."
    },

    {
      pageNumber: 5,
      pageType: "SCRIPTURE_SCENE",
      title: "The Earth Was Without Form",
      scripture: "Genesis 1:2",

      visualDescription:
        "Unformed land and waters under darkness. Straight horizon. Earth viewed as land and sea, not as a planet."
    },

    {
      pageNumber: 6,
      pageType: "SCRIPTURE_SCENE",
      title: "Let There Be Light",
      scripture: "Genesis 1:3",

      visualDescription:
        "Light appearing over the waters. No sun. No moon. No stars. No galaxies. No planets."
    },

    {
      pageNumber: 7,
      pageType: "MEMORY_VERSE_PAGE",
      title: "The Heavens Declare the Glory of God",
      scripture: "Psalm 19:1",

      visualDescription:
        "Decorative scripture page with clouds, birds, mountains, trees, and sky viewed from the earth."
    },

    {
      pageNumber: 8,
      pageType: "TYPOGRAPHY_PAGE",
      title: "Through Faith We Understand",
      scripture: "Hebrews 11:3",

      visualDescription:
        "Decorative biblical typography with creation-themed border and natural elements."
    },

    {
      pageNumber: 9,
      pageType: "REFLECTION_PAGE",
      title: "God's Invisible Attributes Are Clearly Seen",
      scripture: "Romans 1:20",

      visualDescription:
        "Majestic landscape showing mountains, rivers, trees, and sky that inspire wonder and worship."
    },

    {
      pageNumber: 10,
      pageType: "BACK_COVER"
    }

  ];

}
