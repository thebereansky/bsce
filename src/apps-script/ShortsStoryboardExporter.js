/**
 * Shorts Storyboard Exporter
 * Version 1.0
 */

function exportShortStoryboard(
  productionPackage
) {

  const doc =
    DocumentApp.create(

      productionPackage.title +

      " Storyboard"

    );

  const body =
    doc.getBody();

  body.appendParagraph(
    productionPackage.title
  );

  productionPackage.scenes
    .forEach(function(scene) {

      body.appendParagraph(
        "Scene " +
        scene.sceneNumber
      );

      body.appendParagraph(
        scene.voiceover
      );

      body.appendParagraph(
        scene.veoPrompt
      );

    });

  doc.saveAndClose();

  return doc.getUrl();

}
