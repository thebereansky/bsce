/**
 * Study Definition Writer
 * Version 1.0
 */

function saveStudyDefinition(
  trackId,
  study
) {

  const currentStudy =
    getActiveStudy();

  const seriesFolder =
    getSeriesFolder(
      buildSeriesFolderName(
        currentStudy
      )
    );

  const filename =

    "study-" +

    study.id +

    ".json";

  const content =
    JSON.stringify({

      series:
        currentStudy.series,

      track: {

        id:
          trackId,

        name:
          ""

      },

      study:
        study

    },

    null,
    2

    );

  const files =
    seriesFolder.getFilesByName(
      filename
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
