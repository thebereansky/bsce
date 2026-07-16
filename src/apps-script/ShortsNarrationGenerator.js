/**
 * Shorts Narration Generator
 * Version 1.0
 */

function buildShortNarrationPrompt(
  shortObj
) {

  return `
Create a 30-second YouTube Short narration.

Title:
${shortObj.title}

Hook:
${shortObj.hook}

Core Message:
${shortObj.coreMessage}

Call To Action:
${shortObj.callToAction}

Requirements:

- 30 seconds
- Educational
- Curiosity driven
- Strong opening hook
- Conversational tone
- End with CTA

Return narration only.
`;

}


function generateShortNarration(
  shortObj
) {

  const prompt =
    buildShortNarrationPrompt(
      shortObj
    );

  return generateContent(
    prompt
  );

}
