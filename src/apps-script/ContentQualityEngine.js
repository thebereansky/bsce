/**
 * Content Quality Engine
 * Version 1.0
 */

function validateContentQuality(
  content
) {

  const report = {

    valid: true,

    score: 100,

    warnings: []

  };

  checkForPlaceholders(
    content,
    report
  );

  checkForInternalFrameworkLeaks(
    content,
    report
  );

  checkForAILeaks(
    content,
    report
  );

  checkForEmptyContent(
    content,
    report
  );

  report.valid =
    report.warnings.length === 0;

  return report;

}


function checkForPlaceholders(
  content,
  report
) {

  const text =
    JSON.stringify(content);

  const patterns = [

    "Awaiting",
    "TODO",
    "Placeholder",
    "Insert Here",
    "Coming Soon"

  ];

  patterns.forEach(
    pattern => {

      if (
        text.indexOf(pattern) >= 0
      ) {

        report.warnings.push(
          "Placeholder detected: " +
          pattern
        );

        report.score -= 10;

      }

    }
  );

}


function checkForInternalFrameworkLeaks(
  content,
  report
) {

  const text =
    JSON.stringify(content);

  const forbidden = [

    "Berean Sky Cosmology Framework",
    "Internal Framework",
    "Prompt Template",
    "System Instruction"

  ];

  forbidden.forEach(
    phrase => {

      if (
        text.indexOf(phrase) >= 0
      ) {

        report.warnings.push(
          "Internal reference found: " +
          phrase
        );

        report.score -= 15;

      }

    }
  );

}


function checkForAILeaks(
  content,
  report
) {

  const text =
    JSON.stringify(content);

  const phrases = [

    "As an AI",
    "Language Model",
    "AI Assistant",
    "I cannot"

  ];

  phrases.forEach(
    phrase => {

      if (
        text.indexOf(phrase) >= 0
      ) {

        report.warnings.push(
          "AI leakage: " +
          phrase
        );

        report.score -= 20;

      }

    }
  );

}


function checkForEmptyContent(
  content,
  report
) {

  const text =
    JSON.stringify(content);

  if (
    text.length < 500
  ) {

    report.warnings.push(
      "Content appears unusually short."
    );

    report.score -= 10;

  }

}