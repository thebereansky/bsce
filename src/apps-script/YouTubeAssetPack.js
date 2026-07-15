/**
 * YouTube Asset Pack Generator
 * Version 1.0
 */

function buildYouTubeAssetPack(
  shortData
) {

  return {

    title:
      buildYouTubeTitle(
        shortData
      ),

    description:
      buildYouTubeDescription(
        shortData
      ),

    hashtags:
      buildYouTubeHashtags(
        shortData
      ),

    thumbnailPrompt:
      buildThumbnailPrompt(
        shortData
      ),

    pinnedComment:
      buildPinnedComment(
        shortData
      )

  };

}


/**
 * Title
 */
function buildYouTubeTitle(
  shortData
) {

  return (
    shortData.title +
    " | The Berean Sky"
  );

}


/**
 * Description
 */
function buildYouTubeDescription(
  shortData
) {

  return (

    shortData.teachingPoint +

    "\n\nScripture: " +

    shortData.scripture +

    "\n\n" +

    shortData.gospelVerseReference +

    "\n\n" +

    shortData.gospelVerseText +

    "\n\nSearching the Scriptures. Exploring Creation."

  );

}


/**
 * Hashtags
 */
function buildYouTubeHashtags(
  shortData
) {

  return [

    "#TheBereanSky",
    "#BibleStudy",
    "#Scripture",
    "#Creation",
    "#Christianity",
    "#Gospel",
    "#Jesus",
    "#Genesis"

  ];

}


/**
 * Thumbnail Prompt
 */
function buildThumbnailPrompt(
  shortData
) {

  return (

    "Create a cinematic educational " +
    "YouTube thumbnail illustrating: " +

    shortData.title +

    ". Emphasize biblical themes, " +
    "wonder, creation, scripture, " +
    "and God's handiwork. Family friendly. " +
    "No modern sci-fi elements. " +
    "No astronauts. " +
    "No space travel. " +
    "Consistent with biblical creation."

  );

}


/**
 * Pinned Comment
 */
function buildPinnedComment(
  shortData
) {

  return (

    "What do you think this passage " +
    "teaches us about God?\n\n" +

    "Search the Scriptures and let us know below.\n\n" +

    "#TheBereanSky"

  );

}
