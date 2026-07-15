/**
 * Production Manifest Generator
 * Version 1.0
 */

function buildProductionManifest(
  results
) {

  const study =
    getActiveStudy();

  return {

    manifestVersion:
      "1.0",

    generatedOn:
      new Date()
        .toISOString(),

    study: {

      seriesId:
        study.series.id,

      seriesName:
        study.series.name,

      trackId:
        study.track.id,

      trackName:
        study.track.name,

      studyId:
        study.study.id,

      studyTitle:
        study.study.title

    },

    assets: {

      masterStudy:
        !!results.masterStudy,

      familyGuide:
        !!results.familyGuide,

      lessonSeries:
        !!results.lessonSeries,

      lessonScript:
        !!results.lessonScript,

      shorts:
        !!results.shorts,

      publishingAssets:
        !!results.publishingAssets,

      videoAssets:
        !!results.videoAssets,

      storyboard:
        !!results.storyboard

    },

    status:
      determineManifestStatus(
        results
      )

  };

}

function determineManifestStatus(
  results
) {

  const requiredAssets = [

    "masterStudy",
    "familyGuide",
    "lessonSeries",
    "lessonScript",
    "shorts",
    "publishingAssets",
    "videoAssets",
    "storyboard"

  ];

  const missing =
    requiredAssets.filter(
      asset =>
        !results[asset]
    );

  if (
    missing.length === 0
  ) {

    return "Ready For Production";

  }

  return (
    "Missing Assets: " +
    missing.join(", ")
  );

}

function saveProductionManifest(
  manifest
) {

  const study =
    getCurrentStudy();

  const filename =
    "production-manifest-" +
    study.study.id +
    ".json";

  saveCurrentStudyFile(
    JSON.stringify(
      manifest,
      null,
      2
    ),
    filename,
    "05 - Production"
  );

}