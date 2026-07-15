/**
 * Book Cover Generator
 * Version 1.0
 */

function buildBookCoverPrompt() {

  const study =
    getActiveStudy();

  return `
Create a professional Christian educational book cover.

Title:
${study.study.title}

Brand:
The Berean Sky

Tagline:
Searching the Scriptures. Exploring Creation.

Style:
Educational
Family Friendly
Biblically Faithful
Professional

Avoid:
Science-fiction imagery
Galaxy imagery
Space travel imagery
Heliocentric depictions
`;
}
