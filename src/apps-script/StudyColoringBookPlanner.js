/**
 * Study Coloring Book Planner
 * Version 1.0
 */

function buildStudyColoringPages(
  study
) {

  return [

    buildColoringPageManifest(

      study,

      "SCRIPTURE_SCENE"

    ),

    buildColoringPageManifest(

      study,

      "KEY_CONCEPT"

    ),

    buildColoringPageManifest(

      study,

      "MEMORY_VERSE"

    )

  ];

}
