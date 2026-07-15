/**
 * Video Project Generator
 * Version 1.0
 */

function buildVideoProject(
  lessonScript,
  storyboard,
  videoAssets,
  publishingAssets
) {

  return {

    projectName:
      buildVideoProjectName(
        lessonScript
      ),

    projectType:
      "lesson-video",

    estimatedDuration:
      lessonScript.estimatedDuration,

    thumbnailPrompt:
      extractThumbnailPrompt(
        publishingAssets
      ),

    voiceProfile:
      buildDefaultVoiceProfile(),

    musicProfile:
      buildDefaultMusicProfile(),

    publishingAssets:
      publishingAssets,

    scenes:
      storyboard.scenes,

    productionNotes:
      videoAssets.productionNotes

  };

}

function buildVideoProjectName(
  lessonScript
) {

  return (
    lessonScript.lessonId +
    "-" +
    sanitizeFilename(
      lessonScript.title
    )
  );

}

function extractThumbnailPrompt(
  publishingAssets
) {

  if (
    publishingAssets.youtube &&
    publishingAssets.youtube.thumbnailPrompt
  ) {

    return publishingAssets
      .youtube
      .thumbnailPrompt;

  }

  return "";

}

function buildDefaultVoiceProfile() {

  return {

    profileName:
      "BereanSkyNarrator",

    gender:
      "Male",

    tone:
      "Warm",

    pacing:
      "Moderate",

    style:
      "Educational",

    audience:
      "Families"

  };

}

function buildDefaultMusicProfile() {

  return {

    style:
      "Inspirational",

    mood:
      "Reflective",

    instruments: [

      "Piano",
      "Strings"

    ],

    volume:
      "Low"

  };

}
