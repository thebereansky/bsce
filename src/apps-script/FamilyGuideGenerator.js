/**
 * Family Guide Generator
 * Version 1.0
 */

function buildFamilyGuide() {

  Logger.log(
    "Generating Family Guide..."
  );

  const prompt =
    buildFamilyGuidePrompt();

  const response =
    generateContent(
      prompt
    );

  const familyGuide =
    JSON.parse(
      response
    );

  saveFamilyGuide(
    familyGuide
  );

  Logger.log(
    "Family Guide Complete."
  );

  return familyGuide;

}


function testFamilyGuideGenerator() {

  const result =
    buildFamilyGuide();

  Logger.log(

    JSON.stringify(

      result,

      null,

      2

    )

  );

}
