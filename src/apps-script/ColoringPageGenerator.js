/**
 * Coloring Page Generator
 * Version 2.0
 */

function generateColoringPage(
  pageManifest
) {

  Logger.log(
    "Generating Coloring Page..."
  );

  const prompt =
    buildColoringPagePrompt(
      pageManifest
    );

  const image =
    generateImage(
      prompt
    );

  const filename =

    "page-" +

    String(
      pageManifest.pageNumber || 1
    ).padStart(
      3,
      "0"
    ) +

    ".png";

  image.setName(
    filename
  );

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

  folder.createFile(
    image
  );

  Logger.log(
    "Coloring Page Complete."
  );

}
