/**
 * Short Ending Generator
 * Version 1.1
 */

function buildShortEnding() {

  const verse =
    getRandomGospelVerse();

  return {

    verseId:
      verse.id,

    theme:
      verse.theme,

    reference:
      verse.reference,

    text:
      verse.text,

    endingText:

      verse.text +

      "\n\n" +

      verse.reference,

    logoOnly:
      true

  };

}
