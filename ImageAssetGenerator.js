/**
 * Image Asset Generator
 * Version 1.0
 */

function buildImageAssets(
  study,
  content
) {

  return {

    studyGuideCover:
      buildStudyGuideCoverPrompt(
        study,
        content
      ),

    youtubeThumbnail:
      buildYouTubeThumbnailPrompt(
        study,
        content
      ),

    socialMediaImage:
      buildSocialMediaImagePrompt(
        study,
        content
      ),

    lessonSeriesBanner:
      buildLessonSeriesBannerPrompt(
        study,
        content
      )

  };

}

/**
 * Study Guide Cover Prompt
 */
function buildStudyGuideCoverPrompt(
  study,
  content
) {

  return (

    "Professional educational book cover for The Berean Sky. " +

    "Series: " +
    study.series.name +
    ". " +

    "Study Title: " +
    study.title +
    ". " +

    "Theme: Biblical creation, Scripture, wonder, learning, family discipleship. " +

    "Cinematic lighting. " +

    "Beautiful natural scenery. " +

    "Family friendly. " +

    "Christian educational publishing quality. " +

    "No science fiction. " +

    "No astronauts. " +

    "No spacecraft. " +

    "Consistent with biblical creation themes."

  );

}

/**
 * YouTube Thumbnail Prompt
 */
function buildYouTubeThumbnailPrompt(
  study,
  content
) {

  return (

    "Professional YouTube thumbnail. " +

    "Study: " +
    study.title +
    ". " +

    "Scripture centered. " +

    "Wonder and discovery. " +

    "Strong focal point. " +

    "High contrast. " +

    "Cinematic composition. " +

    "Educational Christian content. " +

    "The Berean Sky brand style. " +

    "No modern astronomy assumptions. " +

    "No astronauts. " +

    "No science fiction."

  );

}

/**
 * Social Media Graphic Prompt
 */
function buildSocialMediaImagePrompt(
  study,
  content
) {

  return (

    "Square social media graphic. " +

    "Theme: " +
    study.title +
    ". " +

    "Designed for Facebook, Instagram, X, Threads. " +

    "Biblical inspiration. " +

    "Creation and Scripture. " +

    "Bright, engaging, professional. " +

    "Family friendly. " +

    "Encourage curiosity and reflection."

  );

}

/**
 * Lesson Series Banner Prompt
 */
function buildLessonSeriesBannerPrompt(
  study,
  content
) {

  return (

    "Wide cinematic educational banner. " +

    "Lesson Series: " +
    study.title +
    ". " +

    "Scripture-centered learning. " +

    "The heavens declare the glory of God. " +

    "Professional educational media style. " +

    "Suitable for YouTube playlists and course pages. " +

    "Family friendly. " +

    "High quality digital art."

  );

}
