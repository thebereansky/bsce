/**
 * Asset Validation Rules
 * Version 1.0
 */

function getRequiredSections(
  assetType
) {

  switch (assetType) {

    case "masterStudy":

      return [

        "introduction",

        "teachingPoints",

        "reflectionQuestions",

        "keyTakeaways"

      ];

    case "familyGuide":

      return [

        "familyActivities",

        "memoryVerse",

        "closingPrayer"

      ];

    default:

      return [];

  }

}
