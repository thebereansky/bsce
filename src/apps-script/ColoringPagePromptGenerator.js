/**
 * Coloring Page Prompt Generator
 * Version 1.0
 */

function buildColoringPages() {

  const study =
    loadGeneratedAsset(
      "master-study"
    );

  const pages = [];

  (
    study.creationConnections || []
  ).forEach(function(item, index) {

    pages.push({

      pageNumber:
        index + 1,

      title:
        item,

      prompt:

        "Black and white coloring page. " +

        item +

        ". Clean outlines. " +

        "Children's coloring book. " +

        "No shading."

    });

  });

  return pages;

}
