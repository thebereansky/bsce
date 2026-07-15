/**
 * KDP Package Exporter
 * Version 1.0
 */

function exportKDPPackage() {

  const pkg =
    buildKDPPackage();

  saveCurrentStudyFile(
    JSON.stringify(
      pkg,
      null,
      2
    ),
    "kdp-package.json",
    "04 - Digital Products"
  );

  return pkg;

}