/**
 * Study Repository
 * Version 1.0
 */

/**
 * Returns current study.
 */
function getStudyById(
  studyId
) {

  const study =
    getCurrentStudy();

  if (
    study.study.id ===
    studyId
  ) {

    return study;

  }

  throw new Error(
    "Study not found: " +
    studyId
  );

}


/**
 * Returns studies in current track.
 *
 * Placeholder until
 * Drive/GitHub indexing
 * is implemented.
 */
function getStudiesInTrack() {

  return [

    getCurrentStudy()

  ];

}


/**
 * Returns studies in current series.
 *
 * Placeholder until
 * Drive/GitHub indexing
 * is implemented.
 */
function getStudiesInSeries() {

  return [

    getCurrentStudy()

  ];

}


/**
 * Returns all studies.
 *
 * Placeholder.
 */
function getAllStudies() {

  return [

    getCurrentStudy()

  ];

}


/**
 * Checks if study exists.
 */
function studyExists(
  studyId
) {

  try {

    getStudyById(
      studyId
    );

    return true;

  } catch (e) {

    return false;

  }

}