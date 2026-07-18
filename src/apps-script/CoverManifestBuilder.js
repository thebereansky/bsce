/**
 * Cover Manifest Builder
 * Version 1.0
 */

function buildCoverManifest() {

  const study =
    getActiveStudy();

  return {

    title:
      study.study.title,

    subtitle:
      "A Biblical Creation Coloring Book",

    brand:
      "The Berean Sky",

    tagline:
      "Searching the Scriptures. Exploring Creation.",

    mission:

      "Helping people understand, explore, and appreciate the true nature of God's creation through the truth of Scripture.",

    visualObjectives: [

      "Wonder",
      "Creation",
      "God's Glory",
      "Scripture",
      "Faith"

    ],

    includeBorder:
      true

  };

}
