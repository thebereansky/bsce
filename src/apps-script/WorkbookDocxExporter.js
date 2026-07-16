/**
 * Workbook Document Exporter
 * Version 1.0
 */

function exportWorkbookDocument() {

  const content =
    buildWorkbookDocument();

  const studyFolder =
    getCurrentStudyFolder();

  const file =
    studyFolder.createFile(

      "WorkbookDocument.txt",

      content,

      MimeType.PLAIN_TEXT

    );

  Logger.log(
    file.getUrl()
  );

  return file;

}
