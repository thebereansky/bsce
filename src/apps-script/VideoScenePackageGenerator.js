/**
 * Video Scene Package Generator
 * Version 1.0
 */

function buildVideoScenePackage(
  shortObj,
  narration
) {

  const prompt = `
Create a YouTube Short scene package.

Title:
${shortObj.title}

Narration:
${narration}

Requirements:

- 5 scenes
- 3-6 seconds each
- cinematic
- educational
- biblical
- visually compelling

Return JSON ONLY:

{
  "scenes": [
    {
      "sceneNumber": 1,
      "duration": 5,
      "voiceover": "",
      "videoPrompt": ""
    }
  ]
}
`;

  const response =
    generateContent(
      prompt
    );

  return JSON.parse(
    response
  );

}
