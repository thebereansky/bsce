/**
 * Context Manager
 * Version 1.0
 */

const BSCE_CONTEXT = {

  currentStudy: null

};


/**
 * Sets current study context.
 */
function setCurrentStudyContext(
  study
) {

  BSCE_CONTEXT.currentStudy =
    study;

}


/**
 * Clears study context.
 */
function clearCurrentStudyContext() {

  BSCE_CONTEXT.currentStudy =
    null;

}


/**
 * Returns current study context.
 */
function getCurrentStudyContext() {

  return BSCE_CONTEXT.currentStudy;

}


/**
 * Checks if context exists.
 */
function hasStudyContext() {

  return (
    BSCE_CONTEXT.currentStudy !==
    null
  );

}


/**
 * Returns study from context
 * if available.
 *
 * Falls back to existing
 * implementation.
 */
function getActiveStudy() {

  if (
    hasStudyContext()
  ) {

    return getCurrentStudyContext();

  }

  return getCurrentStudy();

}