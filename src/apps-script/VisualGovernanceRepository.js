/**
 * Visual Governance Repository
 * Version 1.0
 */

function getVisualGovernance() {

  return loadJsonFromGitHub(

    buildGitHubUrl(

      "config/governance/visual-governance.json"

    )

  );

}
