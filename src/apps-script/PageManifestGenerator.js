/**
 * Page Manifest Generator
 * Version 2.0
 */

function generatePageManifest(
  page
) {

  const prompt =

    buildGovernedColoringPagePrompt(
      page
    );

  const manifest = {

    generatedOn:
      new Date()
        .toISOString(),

    pageNumber:
      page.pageNumber,

    pageType:
      page.pageType,

    title:
      page.title || "",

    scripture:
      page.scripture || "",

    visualDescription:
      page.visualDescription || "",

    imagePrompt:
      prompt,

    outputFilename:

      "page-" +

      String(
        page.pageNumber
      ).padStart(
        3,
        "0"
      ) +

      ".png"

  };

  savePageManifest(
    manifest
  );

}
