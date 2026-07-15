/**
 * Content Validator
 * Version 2.0
 */

function validateGeneratedContent(
  content
) {

  const warnings = [];

  const boundaries =
    getContentBoundaries();

  const text =
    JSON.stringify(
      content
    ).toLowerCase();

  boundaries.avoidPhrases.forEach(
    phrase => {

      if (
        text.includes(
          phrase.toLowerCase()
        )
      ) {

        warnings.push(
          phrase
        );

      }

    }
  );

  return {

    valid:
      warnings.length === 0,

    warnings:
      warnings

  };

}

function logValidationWarnings(
  validation
) {

  if (
    validation.valid
  ) {

    return;

  }

  Logger.log(
    "CONTENT VALIDATION WARNINGS"
  );

  validation.warnings.forEach(
    warning => {

      Logger.log(
        "- " + warning
      );

    }
  );

}