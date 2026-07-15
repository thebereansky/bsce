/**
 * Business Dashboard
 * Version 1.0
 */

function buildBusinessDashboard() {

  const production =
    getProductionDashboard();

  const analytics =
    buildAnalyticsDashboard();

  const improvement =
    buildImprovementReport();

  return {

    generatedOn:
      new Date()
        .toISOString(),

    production:
      production,

    analytics:
      analytics,

    topPerformers:
      improvement.topPerformers
        .slice(0, 10),

    recommendations:
      improvement.recommendations

  };

}
