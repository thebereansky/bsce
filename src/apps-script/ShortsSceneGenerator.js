/**
 * Shorts Scene Generator
 * Version 1.0
 */

function generateShortScenes(
  shortObj,
  narration
) {

  const prompt = `
Create 5 cinematic video scenes.

Title:
${shortObj.title}

Narration:
${narration}

Requirements:

- 5 scenes
- 3 to 6 seconds each
- Cinematic
- Educational
- Family friendly

Return JSON only.
`;

  return generateContent(
    prompt
  );

}
