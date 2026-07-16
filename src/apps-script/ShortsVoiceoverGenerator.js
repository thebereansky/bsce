/**
 * Shorts Voiceover Generator
 * Version 1.0
 */

function generateShortVoiceover(
  shortObj
) {

  Logger.log(
    "Generating narration..."
  );

  const narration =
    generateShortNarration(
      shortObj
    );

  Logger.log(
    "Generating audio..."
  );

  const blob =
    generateSpeech(

      narration,

      "short-" +

      String(
        shortObj.shortNumber
      ).padStart(
        3,
        "0"
      ) +

      ".mp3"

    );

  return {

    narration:
      narration,

    audioBlob:
      blob

  };

}
