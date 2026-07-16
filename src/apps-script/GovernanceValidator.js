/**
 * Governance Validator
 * Version 1.1
 *
 * Centralized governance validation.
 */

function validateGovernance(
  assetType,
  assetContent
) {

  const governance =
    buildGovernanceContext();

  const results = {

    passed: true,

    overallScore: 100,

    findings: [],

    hasCriticalViolation: false,

    hasMajorViolation: false,

    scores: {}

  };

  results.scores.brandIdentity =
    validateAgainstBrandIdentity(
      assetContent,
      governance.brandIdentity
    );

  results.scores.contentBoundaries =
    validateAgainstContentBoundaries(
      assetContent,
      governance.contentBoundaries
    );

  results.scores.cosmologyFramework =
    validateAgainstCosmologyFramework(
      assetContent,
      governance.cosmologyFramework
    );

  results.scores.qualityStandards =
    validateAgainstQualityStandards(
      assetContent,
      governance.qualityStandards
    );

  results.scores.publishingStandards =
    validateAgainstPublishingStandards(
      assetContent,
      governance.publishingStandards
    );

  const allFindings = [];

  let totalScore = 0;
  let scoreCount = 0;

  Object.keys(
    results.scores
  ).forEach(function(key) {

    const scoreResult =
      results.scores[key];

    totalScore +=
      scoreResult.score;

    scoreCount++;

    allFindings.push.apply(
      allFindings,
      scoreResult.findings
    );

  });

  results.findings =
    allFindings;

  results.overallScore =
    Math.round(
      totalScore / scoreCount
    );

  results.hasCriticalViolation =
    allFindings.some(function(finding) {

      return (
        finding.severity ===
        "CRITICAL"
      );

    });

  results.hasMajorViolation =
    allFindings.some(function(finding) {

      return (
        finding.severity ===
        "MAJOR"
      );

    });

  /*
   * Governance policy:
   *
   * Critical violations
   * always fail validation.
   */

  results.passed =
    !results.hasCriticalViolation;

  return results;

}


/**
 * Brand Identity Validation
 */
function validateAgainstBrandIdentity(
  assetContent,
  brandIdentity
) {

  return {

    score: 100,

    findings: []

  };

}


/**
 * Content Boundaries Validation
 */
function validateAgainstContentBoundaries(
  assetContent,
  contentBoundaries
) {

  const prohibited =
    getProhibitedTerms();

  const findings = [];

  const text =
    JSON.stringify(
      assetContent
    ).toLowerCase();

  Object.keys(
    prohibited.categories
  ).forEach(function(category) {

    prohibited.categories[category]
      .forEach(function(term) {

        if (

          text.includes(
            term.toLowerCase()
          )

        ) {

          findings.push({

            severity:
              "CRITICAL",

            category:
              "Content Boundaries",

            message:
              "Prohibited term detected: " +
              term

          });

        }

      });

  });

  return {

    score:
      findings.length > 0
        ? 50
        : 100,

    findings:
      findings

  };

}


/**
 * Cosmology Validation
 */
function validateAgainstCosmologyFramework(
  assetContent,
  cosmologyFramework
) {

  return {

    score: 100,

    findings: []

  };

}


/**
 * Quality Validation
 */
function validateAgainstQualityStandards(
  assetContent,
  qualityStandards
) {

  return {

    score: 100,

    findings: []

  };

}


/**
 * Publishing Validation
 */
function validateAgainstPublishingStandards(
  assetContent,
  publishingStandards
) {

  return {

    score: 100,

    findings: []

  };

}


/**
 * Prohibited Terms
 */
function getProhibitedTerms() {

  return loadJsonFromGitHub(

    buildGitHubUrl(

      "config/governance/prohibited-terms.json"

    )

  );

}
