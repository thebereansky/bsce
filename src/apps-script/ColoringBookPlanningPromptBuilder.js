/**
 * Coloring Book Planning Prompt Builder
 * Version 4.0
 */

function buildColoringBookPlanningPrompt() {

  const study =
    getActiveStudy();

  const philosophy =
    getProductPhilosophy();

  const brand =
    getBrandIdentity();

  return [

    "You are a senior Christian publisher and curriculum designer.",

    "",

    "Create a commercial-quality coloring book plan.",

    "",

    "Mission:",

    philosophy.mission,

    "",

    "Brand Purpose:",

    brand.purpose,

    "",

    "Product Goals:",

    philosophy.productGoals
      .map(goal => "- " + goal)
      .join("\n"),

    "",

    "Cover Principles:",

    philosophy.coverPrinciples
      .map(item => "- " + item)
      .join("\n"),

    "",

    "Study Definition:",

    JSON.stringify(
      study,
      null,
      2
    ),

    "",

    "Visual Governance:",

    "- Earth-based viewpoint",
    "- Human observer perspective",
    "- Never depict earth as a globe",
    "- Never depict earth floating in space",
    "- Never depict earth as a planet",
    "- Never use NASA-style imagery",
    "- Never show planetary curvature",
    "- Favor observable creation",
    "- Favor biblical descriptions",
    "- Favor Scripture-first imagery",

    "",

    "Creation Timeline Governance:",

    "- Visuals must match the specific creation day being depicted",
    "- Do not depict elements that do not yet exist",
    "- Before Genesis 1:26 do not depict humans",
    "- Before Genesis 1:20 do not depict birds",
    "- Before Genesis 1:20 do not depict sea creatures",
    "- Before Genesis 1:11 do not depict trees or plants",
    "- Before Genesis 1:14 do not depict sun moon or stars",
    "- Avoid generic Christian imagery",
    "- Depict the actual biblical scene",

    "",

    "Educational Objectives:",

    "- Encourage wonder",
    "- Encourage worship",
    "- Strengthen faith in God",
    "- Help readers understand the true nature of God's creation through Scripture",

    "",

    "Product Title Rules:",

    "- The book title should be the Study title",
    "- Do not prepend The Berean Sky to the title",
    "- The Berean Sky is the publisher",
    "- Example Title: In the Beginning",
    "- Example Publisher: The Berean Sky",

    "",

    "Book Structure:",

    "- Page 1 = FRONT_COVER",
    "- Pages 2-31 = COLORING_PAGE",
    "- Page 32 = BACK_COVER",

    "",

    "Cover Requirements:",

    "- Front cover should be a full-color watercolor illustration",
    "- Front cover should appear professionally painted",
    "- Front cover is not a coloring page",
    "- Front cover should be retail-quality",
    "- Front cover should communicate wonder and the majesty of God's creation",

    "- Back cover should be a full-color watercolor illustration",
    "- Back cover is not a coloring page",
    "- Back cover should include a product description area",
    "- Back cover should include space for future book thumbnails",
    "- Back cover should support future series marketing",

    "",

    "Coloring Page Requirements:",

    "- Every interior page should be a coloring page",
    "- Do not create introduction pages",
    "- Do not create memory verse pages",
    "- Do not create reflection pages",
    "- Maximize coloring value for the customer",
    "- At least 25 pages should come directly from the study",
    "- Remaining pages may reinforce wonder worship creation scripture and biblical cosmology themes",

    "",

    "Requirements:",

    "- Exactly 32 pages",
    "- Unique Scripture references",
    "- No duplicate verses",
    "- A Scripture reference may appear only once in the entire book",
    "- Scripture references should progress naturally through the study",
    "- Commercial product quality",
    "- Suitable for Amazon KDP",
    "- Suitable for ages 5-10",
    "- Every page should contribute to wonder worship or faith",

    "",

    "For each page provide:",

    "- Page Number",
    "- Page Type",
    "- Title",
    "- Scripture",
    "- Visual Description",

    "",

    "Visual Descriptions:",

    "- Must describe only what should be drawn",
    "- Must not contain caption text",
    "- Must not contain narration",
    "- Must not contain explanatory sentences",
    "- Must not contain placeholder instructions",

    "",

    "Return valid JSON only."

  ].join("\n");

}
