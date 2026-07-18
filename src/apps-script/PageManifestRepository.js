/**
 * Page Manifest Repository
 * Version 1.0
 */

function savePageManifest(
  manifest
) {

  const filename =

    "page-manifest-" +

    String(
      manifest.pageNumber
    ).padStart(
      3,
      "0"
    ) +

    ".json";

  saveCurrentStudyFile(

    JSON.stringify(
      manifest,
      null,
      2
    ),

    filename,

    "07 - Children's Materials"

  );

}


/**
 * Load all page manifests
 * for current study.
 */
function getPageManifests() {

  const folder =
    getOrCreateStudySubfolder(

      buildSeriesFolderName(
        getActiveStudy()
      ),

      buildTrackFolderName(
        getActiveStudy()
      ),

      buildStudyFolderName(
        getActiveStudy()
      ),

      "07 - Children's Materials"

    );

  const files =
    folder.getFiles();

  const manifests = [];

  while (
    files.hasNext()
  ) {

    const file =
      files.next();

    if (

      !file.getName()
        .startsWith(
          "page-manifest-"
        )

    ) {

      continue;

    }

    manifests.push(

      JSON.parse(

        file.getBlob()
          .getDataAsString()

      )

    );

  }

  manifests.sort(
    function(a, b) {

      return (
        a.pageNumber -
        b.pageNumber
      );

    }
  );

  return manifests;

}
