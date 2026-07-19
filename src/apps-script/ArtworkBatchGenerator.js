/**
 * Artwork Batch Generator
 * Version 1.0
 */

function generateArtworkPages(
  startPage,
  endPage
) {

  const manifests =
    getPageManifests();

  manifests

    .filter(

      page =>

        page.pageNumber >=
          startPage &&

        page.pageNumber <=
          endPage

    )

    .forEach(
      generateArtwork
    );

}
