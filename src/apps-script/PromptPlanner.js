/**
 * Prompt Planner
 * Version 1.0
 */

function generatePageManifests() {

  const plan =
    getColoringBookPlan();

  plan.pages.forEach(
    generatePageManifest
  );

}
