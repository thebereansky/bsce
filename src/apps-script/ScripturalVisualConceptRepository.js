/**
 * Scriptural Visual Concept Repository
 * Version 1.0
 */

function getScripturalVisualConcepts() {

  return loadJsonFromGitHub(

    buildGitHubUrl(

      "config/governance/scriptural-visual-concepts.json"

    )

  );

}
