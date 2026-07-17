/**
 * Gospel Verse Selector
 * Version 1.1
 */

function getRandomGospelVerse() {

  const verses =
    getGospelVerses()
      .verses;

  const index =
    Math.floor(

      Math.random() *

      verses.length

    );

  return verses[index];

}


function getGospelVerseByTheme(
  theme
) {

  const verses =
    getGospelVerses()
      .verses;

  const matches =
    verses.filter(
      function(verse) {

        return (
          verse.theme ===
          theme
        );

      }
    );

  if (
    matches.length === 0
  ) {

    return getRandomGospelVerse();

  }

  return matches[
    Math.floor(
      Math.random() *
      matches.length
    )
  ];

}
