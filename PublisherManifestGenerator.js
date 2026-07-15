/**
 * Publisher Manifest Generator
 * Version 1.0
 */

function buildPublisherManifest(
  study,
  results
) {

  return {

    generatedOn:
      new Date()
        .toISOString(),

    studyId:
      study.study.id,

    studyTitle:
      study.study.title,

    publishingReady:
      true,

    assets: {

      shorts:
        !!results.shorts,

      lessonScript:
        !!results.lessonScript,

      storyboard:
        !!results.storyboard,

      publishingAssets:
        !!results.publishingAssets

    },

    channels: {

      youtube: {

        enabled: true,

        status:
          "Ready"

      },

      facebook: {

        enabled: true,

        status:
          "Ready"

      },

      instagram: {

        enabled: true,

        status:
          "Ready"

      },

      x: {

        enabled: true,

        status:
          "Ready"

      }

    }

  };

}

function savePublisherManifest(
  manifest
) {

  const study =
    getActiveStudy();

  const filename =
    "publisher-manifest-" +
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