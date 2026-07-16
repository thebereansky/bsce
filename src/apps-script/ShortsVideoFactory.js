/**
 * Shorts Video Factory
 * Version 2.0
 *
 * Generates complete YouTube Shorts
 * production packages including:
 *
 * - Narration
 * - MP3 Voiceover
 * - Scene Prompts
 * - Thumbnail Prompt
 * - Metadata
 */

function generateShortsVideoPackage() {

  Logger.log(
    "========================================"
  );

  Logger.log(
    "BSCE SHORTS VIDEO FACTORY"
  );

  Logger.log(
    "========================================"
  );

  const shorts =
    buildShorts();

  shorts.forEach(
    function(shortObj) {

      Logger.log(
        "Processing Short #" +
        shortObj.shortNumber
      );

      Logger.log(
        "Generating Voiceover..."
      );

      const voiceover =
        generateShortVoiceover(
          shortObj
        );

      Logger.log(
        "Generating Scene Package..."
      );

      const scenes =
        generateShortScenes(
          shortObj,
          voiceover.narration
        );

      Logger.log(
        "Generating Thumbnail..."
      );

      const thumbnail =
        generateShortThumbnailPrompt(
          shortObj
        );

      Logger.log(
        "Generating Metadata..."
      );

      const metadata =
        buildShortMetadata(
          shortObj
        );

      const productionPackage = {

        generatedOn:
          new Date()
            .toISOString(),

        generatedBy:
          "BSCE Shorts Video Factory",

        seriesId:
          shortObj.seriesId,

        seriesName:
          shortObj.seriesName,

        trackId:
          shortObj.trackId,

        trackName:
          shortObj.trackName,

        studyId:
          shortObj.studyId,

        studyTitle:
          shortObj.studyTitle,

        shortNumber:
          shortObj.shortNumber,

        short:
          shortObj,

        narration:
          voiceover.narration,

        scenes:
          scenes,

        thumbnail:
          thumbnail,

        metadata:
          metadata

      };

      Logger.log(
        "Saving Production Package..."
      );

      saveCurrentStudyFile(

        JSON.stringify(
          productionPackage,
          null,
          2
        ),

        "short-" +

        String(
          shortObj.shortNumber
        ).padStart(
          3,
          "0"
        ) +

        "-production-package.json",

        "03 - YouTube"

      );

      Logger.log(
        "Saving MP3..."
      );

      saveShortAudio(

        shortObj,

        voiceover.audioBlob

      );

      Logger.log(
        "Completed Short #" +
        shortObj.shortNumber
      );

    }
  );

  Logger.log(
    "========================================"
  );

  Logger.log(
    "SHORTS VIDEO FACTORY COMPLETE"
  );

  Logger.log(
    "========================================"
  );

  return shorts;

}
