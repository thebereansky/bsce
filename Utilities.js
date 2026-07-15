function formatScriptureReferences(references) {

  return references
    .map(function(item){

      return item.reference +
        " - " +
        item.purpose;

    })
    .join("\n");

}