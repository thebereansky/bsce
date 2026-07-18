/**
 * Track Definition Repository
 * Version 3.0
 */

function getTrackDefinition(
  trackId
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

    trackId +

    "-definition.json";

  const files =
    seriesFolder.getFilesByName(
      filename
    );

  if (
    !files.hasNext()
  ) {

    throw new Error(
      "Track definition not found: " +
      trackId
    );

  }

  return JSON.parse(
    files.next()
      .getBlob()
      .getDataAsString()
  );

}
