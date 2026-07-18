/**
 * Curriculum Provisioner
 * Version 1.0
 */

function provisionCurriculum() {

  Logger.log(
    "Provisioning Curriculum..."
  );

  provisionTracks();

  provisionStudies();

  Logger.log(
    "Curriculum Provisioning Complete."
  );

}
