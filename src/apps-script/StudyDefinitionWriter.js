/**
 * Study Definition Writer
 * Version 3.0
 *
 * Writes canonical study-definition.json
 * into the appropriate Study folder.
 */

function saveStudyDefinition(
  definition
) {

  const seriesName =

    definition.series.id +
    " - " +
    definition.series.name;

  const trackName =

    "Track " +
    definition.track.id +
    " - " +
    definition.track.name;

  const studyName =

    "Study " +
    definition.study.id +
    " - " +
    definition.study.title;

  const folder =
    getStudyFolder(
      seriesName,
      trackName,
      studyName
    );

  const content =
    JSON.stringify(
      definition,
      null,
      2
    );

  const files =
    folder.getFilesByName(
      "study-definition.json"
    );

  if (
    files.hasNext()
  ) {

    files.next()
      .setContent(
        content
      );

    Logger.log(
      "Updated: " +
      studyName
    );

    return;

  }

  folder.createFile(
    "study-definition.json",
    content,
    MimeType.PLAIN_TEXT
  );

  Logger.log(
    "Created: " +
    studyName
  );

}
