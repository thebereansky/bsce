/**
 * Shorts Image Prompt Generator
 * Version 1.0
 */

function buildShortImagePrompts(
  shortObj
) {

  return {

    title:
      shortObj.title,

    prompts: [

      "Biblical scene illustrating: " +
      shortObj.hook,

      "Cinematic educational Christian illustration",

      "High quality YouTube short artwork",

      "The Berean Sky style"

    ]

  };

}
