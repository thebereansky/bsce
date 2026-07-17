/**
 * Visual Governance Validator
 * Version 1.0
 */

function validateVisualPrompt(
  prompt
) {

  const governance =
    getVisualGovernance();

  const findings = [];

  const text =
    prompt.toLowerCase();

  governance.prohibitedVisualConcepts
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
            "Visual Governance",

          message:
            "Prohibited visual concept detected: " +
            term

        });

      }

    });

  return {

    passed:
      findings.length === 0,

    findings:
      findings

  };

}
