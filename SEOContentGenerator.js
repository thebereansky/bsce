/**
 * SEO Content Generator
 * Version 1.0
 */

function buildSEOContent() {

  const study =
    getActiveStudy();

  const content =
    generateMarketingContent(

      "SEO Content",

      study,

      `
Create:

- SEO Title
- SEO Description
- 20 SEO Keywords

Return JSON.
`

    );

return content;

}