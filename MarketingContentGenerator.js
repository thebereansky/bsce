/**
 * Marketing Content Generator
 * Version 1.0
 */

function generateMarketingContent(
  assetType,
  study,
  additionalInstructions
) {

  const prompt =
    buildMarketingPrompt(
      assetType,
      study,
      additionalInstructions
    );

  const response =
    generateJsonContent(
      prompt
    );

  return response;

}


function buildMarketingPrompt(
  assetType,
  study,
  additionalInstructions
) {

  return `
You are creating marketing content for The Berean Sky.

Brand:

Searching the Scriptures.
Exploring Creation.

Study Title:

${study.study.title}

Series:

${study.series.name}

Instructions:

${additionalInstructions}

Requirements:

- Biblically faithful
- Consistent with Berean Sky Cosmology Framework
- Family friendly
- Educational
- Encouraging
- Avoid sensationalism
- Avoid modern cosmological assumptions
- Avoid clickbait

Return only the requested content.

Asset Type:

${assetType}
`;

}