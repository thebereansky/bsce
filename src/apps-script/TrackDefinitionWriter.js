/**
 * Track Definition Writer
 * Version 1.0
 */

function saveTrackDefinition(
  definition
) {

  const study =
    getActiveStudy();

  const seriesFolder =
    getSeriesFolder(
      buildSeriesFolderName(
        study
      )
    );

  const filename =

    "track-" +

    definition.id +

    "-definition.json";

  const files =
    seriesFolder.getFilesByName(
      filename
    );

  const content =
    JSON.stringify(
      definition,
      null,
      2
    );

  if (
    files.hasNext()
  ) {

    files.next()
      .setContent(
        content
      );

    return;

  }

  seriesFolder.createFile(
    filename,
    content,
    MimeType.PLAIN_TEXT
  );

}
