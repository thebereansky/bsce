/**
 * Page Manifest Generator
 * Version 1.0
 */

function generatePageManifest(
  page
) {

  const prompt =

    buildGovernedColoringPagePrompt(
      page
    );

  const manifest = {

    pageNumber:
      page.pageNumber,

    pageType:
      page.pageType,

    title:
      page.title,

    scripture:
      page.scripture,

    imagePrompt:
      prompt

  };

  savePageManifest(
    manifest
  );

}
