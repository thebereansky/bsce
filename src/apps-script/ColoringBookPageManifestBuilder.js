/**
 * Coloring Book Page Manifest Builder
 * Version 1.0
 */

function buildColoringBookPageManifest(
  page
) {

  return {

    pageNumber:
      page.pageNumber,

    pageType:
      page.pageType,

    title:
      page.title || "",

    scripture:
      page.scripture || "",

    includeBorder:
      true,

    pageSize:
      "8.5x11",

    singleSided:
      true

  };

}
