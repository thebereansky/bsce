/**
 * AI Quality Assurance Engine
 * Version 1.2
 */

function evaluateAssetQuality(
  assetType,
  assetContent
) {

  const governance =
    buildGovernanceContext();

  const standards =
    getQAStandards();

  const validation =
    validateGovernance(
      assetType,
      assetContent
    );

  /*
   * GovernanceValidator is now
   * the authoritative scoring source.
   */

  const overallScore =
    validation.overallScore;

  return {

    assetType:
      assetType,

    score:
      overallScore,

    recommendation:
      getRecommendation(
        overallScore,
        validation
      ),

    findings:
      validation.findings,

    validation:
      validation,

    governanceVersion:
      governance.brandIdentity.version ||

      "1.0",

    evaluatedOn:
      new Date()
        .toISOString()

  };

}


/**
 * QA Standards Loader
 */
function getQAStandards() {

  return loadJsonFromGitHub(

    buildGitHubUrl(

      "config/governance/qa-standards.json"

    )

  );

}


/**
 * Recommendation Logic
 *
 * Governance violations always
 * override score-based decisions.
 */
function getRecommendation(
  score,
  validation
) {

  /*
   * Critical violations
   * immediately fail QA.
   */

  if (
    validation.hasCriticalViolation
  ) {

    return "REJECT";

  }

  /*
   * Major violations
   * require regeneration.
   */

  if (
    validation.hasMajorViolation
  ) {

    return "REGENERATE";

  }

  /*
   * Quality scoring
   */

  if (score >= 90) {

    return "APPROVE";

  }

  if (score >= 75) {

    return "REGENERATE";

  }

  return "REJECT";

}


/**
 * QA Test
 */
function testQAEngine() {

  const result =

    evaluateAssetQuality(

      "masterStudy",

      {

        title:
          "Test Study"

      }

    );

  Logger.log(

    JSON.stringify(

      result,

      null,

      2

    )

  );

}
