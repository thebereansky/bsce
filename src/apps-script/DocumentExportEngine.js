/**
 * Document Export Engine
 * Version 1.0
 *
 * Generates all publication-ready
 * text documents for a study.
 */

function exportAllDocuments() {

  Logger.log(
    "========================================"
  );

  Logger.log(
    "BSCE DOCUMENT EXPORT ENGINE"
  );

  Logger.log(
    "========================================"
  );

  const exports = {};

  exports.studyDocument =
    exportStudyDocument();

  exports.workbookDocument =
    exportWorkbookDocument();

  exports.kdpManuscript =
    exportKDPManuscript();

  Logger.log(
    "Document Export Complete."
  );

  return exports;

}


function testDocumentExportEngine() {

  const result =
    exportAllDocuments();

  Logger.log(

    JSON.stringify(

      Object.keys(
        result
      ),

      null,

      2

    )

  );

}
