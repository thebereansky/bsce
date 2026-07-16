/**
 * Publishing Package Generator
 * Version 1.0
 */

function buildPublishingPackage() {

  const packageData = {

    generatedOn:
      new Date()
        .toISOString(),

    study:
      getActiveStudy(),

    exports: {

      studyDocument:
        "StudyDocument.txt",

      workbookDocument:
        "WorkbookDocument.txt",

      kdpManuscript:
        "KDPManuscript.txt"

    }

  };

  saveCurrentStudyFile(

    JSON.stringify(
      packageData,
      null,
      2
    ),

    "publishing-package.json",

    "05 - Production"

  );

  return packageData;

}
