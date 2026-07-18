/**
 * Study Coloring Book Writer
 * Version 1.0
 */

function saveStudyColoringBookPlan(
  plan
) {

  saveCurrentStudyFile(

    JSON.stringify(
      plan,
      null,
      2
    ),

    "coloring-book-plan.json",

    "07 - Children's Materials"

  );

}
