/**
 * Gospel Verse Repository
 * Version 1.0
 */

function getGospelVerses() {

  return loadJsonFromGitHub(

    buildGitHubUrl(

      "config/gospel-verses.json"

    )

  );

}
