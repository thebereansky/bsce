/**
 * Study DOCX Exporter
 * Version 1.0
 */

function exportStudyDocument() {

  const content =
    buildStudyDocument();

  const studyFolder =
    getCurrentStudyFolder();

  const file =
    studyFolder.createFile(
      "StudyDocument.txt",
      content,
      MimeType.PLAIN_TEXT
    );

  Logger.log(
    file.getUrl()
  );

  return file;

}
