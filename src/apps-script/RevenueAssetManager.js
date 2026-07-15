/**
 * Revenue Asset Manager
 * Version 1.0
 */

function getRevenueAssets() {

  return [

    "KDP Book",

    "Workbook",

    "Family Guide",

    "Digital Study Guide",

    "Video Series"

  ];

}


function buildRevenuePlan() {

  const assets =
    getRevenueAssets();

  return {

    generatedOn:
      new Date()
        .toISOString(),

    assets:
      assets

  };

}