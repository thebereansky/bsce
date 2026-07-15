/**
 * Book Cover Prompt Generator
 * Version 1.0
 */

function buildBookCoverPrompt() {

  const study =
    getActiveStudy();

  return `
Create a Christian educational book cover.

Title:
${study.study.title}

Brand:
The Berean Sky

Style:
Professional
Family Friendly
Educational

Avoid:
Galaxies
Spacecraft
Heliocentric imagery
Science fiction
`;

}