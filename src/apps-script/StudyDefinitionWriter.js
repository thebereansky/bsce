/**
 * EXPERIMENTAL
 * ----------------------------------
 * Generated during curriculum prototype work.
 *
 * DO NOT USE AS AUTHORITATIVE SOURCE.
 *
 * Replaced by:
 * TrackFolderGenerator.js
 * StudyFolderGenerator.js
 *
 * Pending review.
 */
/**
 * Study Definition Writer
 * Version 2.0
 *
 * Persists individual study definitions
 * generated from Track Definitions.
 */

function saveStudyDefinition(
  trackSlug,
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

  const definition = {

    series:
      currentStudy.series,

    track: {

      id:
        trackSlug

    },

    study: {

      id:
        study.id,

      title:
        study.title,

      primaryScripture:
        study.primaryScripture ||

        "",

      bigIdea:
        study.bigIdea ||

        "",

      themes:
        study.themes ||

        [],

      learningObjectives:
        study.learningObjectives ||

        []

    },

    metadata: {

      generatedOn:
        new Date()
          .toISOString(),

      generatedBy:
        "BSCE"

    }

  };

  const content =
    JSON.stringify(
      definition,
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

    Logger.log(
      "Updated: " +
      filename
    );

    return;

  }

  seriesFolder.createFile(
    filename,
    content,
    MimeType.PLAIN_TEXT
  );

  Logger.log(
    "Created: " +
    filename
  );

}
