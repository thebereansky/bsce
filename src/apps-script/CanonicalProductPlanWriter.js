/**
 * Canonical Product Plan Writer
 * Version 1.0
 */

function saveCanonicalProductPlan() {

  const plan =
    buildCanonicalProductPlan();

  saveCurrentStudyFile(

    JSON.stringify(
      plan,
      null,
      2
    ),

    "canonical-product-plan.json",

    "05 - Production"

  );

  Logger.log(
    "Canonical Product Plan Saved."
  );

  return plan;

}
