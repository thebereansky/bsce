/**
 * Coloring Page Generator
 * Version 1.0
 */

function generateColoringPage() {

  Logger.log(
    "Generating Coloring Page..."
  );

  const prompt =
    buildColoringPagePrompt();

  const image =
    generateImage(
      prompt
    );

  image.setName(
    "page-001.png"
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

      "07 - Children's Products"

    );

  folder.createFile(
    image
  );

  Logger.log(
    "Coloring Page Complete."
  );

}
