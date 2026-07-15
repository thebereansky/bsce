/**
 * BSCE Content Pipeline
 * Version 4.0
 */

function generatePrompt(
  study,
  assetType
) {

  const builder =
    getAssetBuilder(
      assetType
    );

  return builder();

}


function saveGeneratedPrompt(
  study,
  assetType,
  prompt
) {

  const asset =
    getAssetDefinition(
      assetType
    );

  const filename =
    resolveAssetFilename(
      asset.promptFilename,
      study
    );

  savePromptToDrive(
    prompt,
    filename
  );

}


function generateAsset(
  assetType
) {

  const study =
    getCurrentStudy();

  Logger.log(
    "Building prompt..."
  );

  const prompt =
    generatePrompt(
      study,
      assetType
    );

  Logger.log(
    "Generating content..."
  );

  const content =
    generateValidatedContent(
    prompt,
    3
  );

  Logger.log(
    "Validating content..."
  );

  const validation =
    validateGeneratedContent(
      content
    );

  logValidationWarnings(
    validation
  );

  createValidationReport(
    assetType,
    validation
  );

  Logger.log(
    "Saving asset..."
  );

  saveGeneratedAsset(
    assetType,
    JSON.stringify(
      content,
      null,
      2
    )
  );

  Logger.log(
    assetType +
    " generated successfully."
  );

  return content;

}