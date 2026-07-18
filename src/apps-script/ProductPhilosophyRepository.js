/**
 * Product Philosophy Repository
 * Version 1.0
 */

function getProductPhilosophy() {

  const folder =
    getGovernanceFolder();

  const files =
    folder.getFilesByName(
      "product-philosophy.json"
    );

  if (
    !files.hasNext()
  ) {

    throw new Error(
      "product-philosophy.json not found."
    );

  }

  return JSON.parse(

    files.next()
      .getBlob()
      .getDataAsString()

  );

}
