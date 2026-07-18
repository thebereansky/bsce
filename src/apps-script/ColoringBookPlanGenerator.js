/**
 * Coloring Book Plan Generator
 * Version 1.0
 */

function generateColoringBookPlan() {

  const prompt =
    buildColoringBookPlanningPrompt();

  const response =
    generateContent(
      prompt
    );

  const plan =
    JSON.parse(
      response
    );

  saveColoringBookPlan(
    plan
  );

  return plan;

}
