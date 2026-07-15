/**
 * Asset Fingerprint Manager
 * Version 1.0
 */

function generateFingerprint(
  content
) {

  const digest =
    Utilities.computeDigest(
      Utilities.DigestAlgorithm.SHA_256,
      content
    );

  return digest
    .map(
      b =>
        ('0' + (
          b & 0xFF
        ).toString(16))
        .slice(-2)
    )
    .join('');

}


/**
 * Creates fingerprint
 * for study JSON.
 */
function fingerprintStudy(
  study
) {

  return generateFingerprint(
    JSON.stringify(
      study
    )
  );

}


/**
 * Creates fingerprint
 * for asset content.
 */
function fingerprintAsset(
  content
) {

  return generateFingerprint(
    content
  );

}


/**
 * Returns stored fingerprint.
 */
function getStoredFingerprint(
  assetType
) {

  const manifest =
    loadBuildManifest();

  return manifest
    .fingerprints?.[
      assetType
    ] || null;

}


/**
 * Saves fingerprint.
 */
function saveFingerprint(
  assetType,
  fingerprint
) {

  const manifest =
    loadBuildManifest();

  if (
    !manifest.fingerprints
  ) {

    manifest.fingerprints =
      {};

  }

  manifest.fingerprints[
    assetType
  ] = fingerprint;

  saveBuildManifest(
    manifest
  );

}