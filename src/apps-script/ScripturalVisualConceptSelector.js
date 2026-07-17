/**
 * Scriptural Visual Concept Selector
 * Version 1.0
 */

function getRelevantScripturalConcepts() {

  const concepts =
    getScripturalVisualConcepts();

  const selected = [];

  Object.keys(
    concepts.categories
  ).forEach(
    function(category) {

      const categoryItems =
        concepts.categories[
          category
        ];

      if (
        categoryItems &&
        categoryItems.length
      ) {

        selected.push(
          categoryItems[0]
        );

      }

    }
  );

  return selected;

}
