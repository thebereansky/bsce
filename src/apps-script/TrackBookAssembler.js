/**
 * Track Book Assembler
 * Version 1.0
 */

function buildTrackBook() {

  const track =
    getActiveStudy().track;

  return {

    title:
      track.name,

    studies: [

      getCurrentStudy()

    ]

  };

}
