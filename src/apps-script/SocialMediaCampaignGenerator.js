/**
 * Social Media Campaign Generator
 * Version 2.0
 */

function buildSocialMediaCampaign() {

  const study =
    getActiveStudy();

  const content =
    generateMarketingContent(

      "Social Media Campaign",

      study,

      `
Create:

- 10 Facebook Posts
- 10 Instagram Captions
- 10 X Posts

Return JSON.
`

    );

return content;

}