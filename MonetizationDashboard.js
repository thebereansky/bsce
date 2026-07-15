/**
 * Monetization Dashboard
 * Version 1.0
 */

function buildMonetizationDashboard() {

  const revenuePlan =
    buildSeriesRevenuePlan();

  return {

    generatedOn:
      new Date()
        .toISOString(),

    projectedProducts:
      revenuePlan.projectedProducts,

    revenueStreams:
      revenuePlan.revenueStreams

  };

}