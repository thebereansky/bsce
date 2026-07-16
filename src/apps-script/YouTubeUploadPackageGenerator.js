/**
 * YouTube Upload Package Generator
 * Version 1.0
 */

function buildYouTubeUploadPackage(
  productionPackage
) {

  return {

    generatedOn:
      new Date()
        .toISOString(),

    seriesId:
      productionPackage.seriesId,

    trackId:
      productionPackage.trackId,

    studyId:
      productionPackage.studyId,

    title:
      productionPackage.metadata.title,

    description:
      productionPackage.metadata.description,

    hashtags:
      productionPackage.metadata.hashtags,

    thumbnail:
      productionPackage.thumbnail,

    narration:
      productionPackage.narration,

    scenes:
      productionPackage.scenes,

    uploadStatus:
      "READY_FOR_RENDERING"

  };

}
