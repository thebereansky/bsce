/**
 * Content Metrics
 * Version 1.0
 */

function createMetricsRecord(
  studyId
) {

  return {

    studyId:
      studyId,

    createdOn:
      new Date()
        .toISOString(),

    youtube: {

      views: 0,

      watchHours: 0,

      subscribers: 0

    },

    facebook: {

      views: 0,

      reactions: 0,

      shares: 0

    },

    instagram: {

      views: 0,

      likes: 0,

      shares: 0

    },

    x: {

      impressions: 0,

      likes: 0,

      reposts: 0

    }

  };

}

function saveMetricsRecord(
  record
) {

  const root =
    getEngineRootFolder();

  const filename =
    "metrics-" +
    record.studyId +
    ".json";

  const files =
    root.getFilesByName(
      filename
    );

  const content =
    JSON.stringify(
      record,
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

  root.createFile(
    filename,
    content,
    MimeType.PLAIN_TEXT
  );

}

function loadMetricsRecord(
  studyId
) {

  const root =
    getEngineRootFolder();

  const filename =
    "metrics-" +
    studyId +
    ".json";

  const files =
    root.getFilesByName(
      filename
    );

  if (
    !files.hasNext()
  ) {

    return createMetricsRecord(
      studyId
    );

  }

  return JSON.parse(
    files.next()
      .getBlob()
      .getDataAsString()
  );

}