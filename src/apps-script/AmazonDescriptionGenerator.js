/**
 * Amazon Description Generator
 * Version 2.1
 */

function buildAmazonDescription() {

  const study =
    getActiveStudy();

  return generateMarketingContent(

    "Amazon Book Description",

    study,

    `
Create:

1. Short Description

2. Long Description

3. Five Marketing Bullets

Output JSON.
`

  );

}