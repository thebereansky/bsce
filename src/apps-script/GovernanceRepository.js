/**
 * Governance Repository
 * Version 2.0
 *
 * Centralized governance loading layer.
 *
 * All governance files should be discoverable
 * through governance-registry.json.
 */


/**
 * Load Governance Registry
 */
function getGovernanceRegistry() {

  return loadJsonFromGitHub(

    BSCE_CONFIG.GOVERNANCE_REGISTRY_URL

  );

}


/**
 * Generic Governance Source Loader
 */
function loadGovernanceSource(
  sourceName
) {

  const registry =
    getGovernanceRegistry();

  const path =
    registry.sources[sourceName];

  if (!path) {

    throw new Error(

      "Governance source not found: " +
      sourceName

    );

  }

  return path;

}


/**
 * Brand Identity
 */
function getBrandIdentity() {

  const path =
    loadGovernanceSource(
      "brandIdentity"
    );

  return loadJsonFromGitHub(

    buildGitHubUrl(path)

  );

}


/**
 * Content Boundaries
 */
function getContentBoundaries() {

  const path =
    loadGovernanceSource(
      "contentBoundaries"
    );

  return loadJsonFromGitHub(

    buildGitHubUrl(path)

  );

}


/**
 * Cosmology Framework
 *
 * Markdown is authoritative.
 */
function getCosmologyFramework() {

  const path =
    loadGovernanceSource(
      "cosmologyFramework"
    );

  return loadTextFromGitHub(

    buildGitHubUrl(path)

  );

}


/**
 * Quality Standards
 */
function getQualityStandards() {

  const path =
    loadGovernanceSource(
      "qualityStandards"
    );

  return loadJsonFromGitHub(

    buildGitHubUrl(path)

  );

}


/**
 * Publishing Standards
 */
function getPublishingStandards() {

  const path =
    loadGovernanceSource(
      "publishingStandards"
    );

  return loadJsonFromGitHub(

    buildGitHubUrl(path)

  );

}


/**
 * Approval Thresholds
 */
function getApprovalThresholds() {

  const path =
    loadGovernanceSource(
      "approvalThresholds"
    );

  return loadJsonFromGitHub(

    buildGitHubUrl(path)

  );

}


/**
 * Complete Governance Context
 */
function buildGovernanceContext() {

  return {

    brandIdentity:
      getBrandIdentity(),

    productPhilosophy:
      getProductPhilosophy(),

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


/**
 * Governance Context Test
 */
function testGovernanceContext() {

  Logger.log(

    JSON.stringify(

      buildGovernanceContext(),

      null,

      2

    )

  );

}

/**
 * Product Philosophy
 */
function getProductPhilosophy() {

  const path =
    loadGovernanceSource(
      "productPhilosophy"
    );

  return loadJsonFromGitHub(

    buildGitHubUrl(path)

  );

}

/**
 * Product Philosophy
 */
function getProductPhilosophy() {

  const path =
    loadGovernanceSource(
      "productPhilosophy"
    );

  return loadJsonFromGitHub(

    buildGitHubUrl(path)

  );

}

/**
 * Coloring Book Publishing Standard
 */
function getColoringBookStandard() {

  const path =
    loadGovernanceSource(
      "coloringBookStandard"
    );

  return loadJsonFromGitHub(

    buildGitHubUrl(
      path
    )

  );

}
