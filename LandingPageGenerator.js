/**
 * Landing Page Generator
 * Version 1.0
 */

function buildLandingPage() {

  const study =
    getActiveStudy();

  const content =
    generateMarketingContent(

      "Landing Page",

      study,

      `
Create:

- Headline
- Subheadline
- Benefits
- CTA

Return JSON.
`

    );

return content;

}