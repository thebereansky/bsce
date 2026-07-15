/**
 * Content Change Detector
 * Version 1.0
 */

function hasStudyChanged() {

  const study =
    getActiveStudy();

  const current =
    fingerprintStudy(
      study
    );

  const stored =
    getStoredFingerprint(
      "study"
    );

  return (
    current !== stored
  );

}


/**
 * Updates study fingerprint.
 */
function updateStudyFingerprint() {

  const study =
    getActiveStudy();

  const fingerprint =
    fingerprintStudy(
      study
    );

  saveFingerprint(
    "study",
    fingerprint
  );

}


/**
 * Returns whether rebuild
 * should occur.
 */
function shouldRebuildAssets() {

  return hasStudyChanged();

}


/**
 * Updates fingerprints
 * after successful build.
 */
function finalizeBuild() {

  updateStudyFingerprint();

}