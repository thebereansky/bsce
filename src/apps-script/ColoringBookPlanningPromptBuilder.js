/**
 * Coloring Book Planning Prompt Builder
 * Version 3.0
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

    "Book Structure:",

    "- Page 1 = Front Cover",
    "- Pages 2-3 = Introduction",
    "- Pages 4-26 = Main Coloring Pages",
    "- Pages 27-29 = Memory Verse Pages",
    "- Pages 30-31 = Reflection Pages",
    "- Page 32 = Back Cover",

    "",

    "Requirements:",

    "- Exactly 32 pages",
    "- Unique Scripture references",
    "- No duplicate verses",
    "- Scripture references should progress naturally through the study",
    "- Commercial product quality",
    "- Educational progression",
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
