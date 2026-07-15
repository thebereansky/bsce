/**
 * Quality Gate
 * Version 1.0
 */

function validateAndApprove(
  content
) {

  const validation =
    validateGeneratedContent(
      content
    );

  if (
    validation.valid
  ) {

    return {
      approved: true,
      content: content
    };

  }

  return {
    approved: false,
    validation: validation
  };

}

/**
 * Generate Until Valid
 */
function generateValidatedContent(
  prompt,
  maxAttempts
) {

  maxAttempts =
    maxAttempts || 3;

  for (
    let attempt = 1;
    attempt <= maxAttempts;
    attempt++
  ) {

    Logger.log(
      "Generation Attempt: " +
      attempt
    );

    const content =
      generateJsonContent(
        prompt
      );

    const validation =
      validateGeneratedContent(
        content
      );

    if (
      validation.valid
    ) {

      Logger.log(
        "Content Approved."
      );

      return content;

    }

    Logger.log(
      "Content Rejected."
    );

  }

  throw new Error(
    "Unable to generate valid content."
  );

}
