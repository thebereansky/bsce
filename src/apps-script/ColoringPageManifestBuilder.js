/**
 * Coloring Page Manifest Builder
 * Version 1.0
 *
 * Builds page manifests directly
 * from Study curriculum data.
 */

function buildColoringPageManifest(
  study,
  pageType
) {

  return {

    studyId:
      study.id,

    studyTitle:
      study.title,

    primaryScripture:
      study.primaryScripture,

    pageType:
      pageType,

    includeBorder:
      true,

    borderStyle:
      "simple-clean",

    ageRange:
      "5-10",

    visualTheme:
      determineVisualTheme(
        study,
        pageType
      )

  };

}


function determineVisualTheme(
  study,
  pageType
) {

  switch (
    pageType
  ) {

    case "SCRIPTURE_SCENE":

      return (
        study.title
      );

    case "KEY_CONCEPT":

      return (
        study.bigIdea ||
        study.title
      );

    case "MEMORY_VERSE":

      return (
        study.primaryScripture
      );

    default:

      return (
        study.title
      );

  }

}
