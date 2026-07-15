/**
 * Governance Repository
 * Version 1.0
 */

function getGovernanceRegistry() {

  return loadJsonFromGitHub(

    BSCE_CONFIG.GOVERNANCE_REGISTRY_URL

  );

}


function getBrandIdentity() {

  const registry =
    getGovernanceRegistry();

  return loadJsonFromGitHub(

    buildGitHubUrl(
      registry.sources.brandIdentity
    )

  );

}


function getQualityStandards() {

  const registry =
    getGovernanceRegistry();

  return loadJsonFromGitHub(

    buildGitHubUrl(
      registry.sources.qualityStandards
    )

  );

}


function getPublishingStandards() {

  const registry =
    getGovernanceRegistry();

  return loadJsonFromGitHub(

    buildGitHubUrl(
      registry.sources.publishingStandards
    )

  );

}


function getApprovalThresholds() {

  const registry =
    getGovernanceRegistry();

  return loadJsonFromGitHub(

    buildGitHubUrl(
      registry.sources.approvalThresholds
    )

  );

}


function buildGovernanceContext() {

  return {

    brandIdentity:
      getBrandIdentity(),

    contentBoundaries:
      getContentBoundaries(),

    cosmologyFramework:
      getCosmologyFramework(),

    qualityStandards:
      getQualityStandards(),

    publishingStandards:
      getPublishingStandards(),

    approvalThresholds:
      getApprovalThresholds()

  };

}