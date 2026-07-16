/**
 * KDP Manuscript Exporter
 * Version 1.0
 */

function exportKDPManuscript() {

  const content =
    buildKDPManuscript();

  const studyFolder =
    getCurrentStudyFolder();

  const file =
    studyFolder.createFile(

      "KDPManuscript.txt",

      content,

      MimeType.PLAIN_TEXT

    );

  Logger.log(
    file.getUrl()
  );

  return file;

}
