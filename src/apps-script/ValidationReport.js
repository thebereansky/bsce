/**
 * Validation Report
 * Version 1.0
 */

function createValidationReport(
  assetType,
  validation
) {

  Logger.log(
    "================================="
  );

  Logger.log(
    "BSCE Validation Report"
  );

  Logger.log(
    "================================="
  );

  Logger.log(
    "Asset Type: " +
    assetType
  );

  Logger.log(
    "Valid: " +
    validation.valid
  );

  Logger.log(
    "Warning Count: " +
    validation.warnings.length
  );

  if (
    validation.warnings.length > 0
  ) {

    Logger.log(
      ""
    );

    Logger.log(
      "Warnings:"
    );

    validation.warnings.forEach(
      warning => {

        Logger.log(
          "- " + warning
        );

      }
    );

  }

  Logger.log(
    "================================="
  );

}


/**
 * Logs validation warnings.
 */
function logValidationWarnings(
  validation
) {

  if (
    validation.valid
  ) {

    Logger.log(
      "No content validation warnings."
    );

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
