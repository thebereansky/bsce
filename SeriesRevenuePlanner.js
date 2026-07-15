/**
 * Series Revenue Planner
 * Version 1.0
 */

function buildSeriesRevenuePlan() {

  const studies =
    getIndexedStudies();

  return {

    studyCount:
      studies.length,

    productsPerStudy: 5,

    projectedProducts:
      studies.length * 5,

    revenueStreams: [

      "KDP Books",

      "Workbooks",

      "Family Guides",

      "Digital Downloads",

      "YouTube"

    ]

  };

}