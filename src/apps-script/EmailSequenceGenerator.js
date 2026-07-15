/**
 * Email Sequence Generator
 * Version 2.0
 */

function buildEmailSequence() {

  const study =
    getActiveStudy();

  const content =
    generateMarketingContent(

      "Email Campaign",

      study,

      `
Create:

- Launch Email
- Reminder Email
- Follow-Up Email

Return JSON.
`

    );

return content;

}