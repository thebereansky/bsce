/**
 * KDP Metadata Generator
 * Version 1.0
 */

function buildKDPMetadata() {

  const study =
    getActiveStudy();

  return {

    title:
      study.study.title,

    subtitle:
      "A Berean Sky Study",

    author:
      "The Berean Sky",

    categories: [

      "Christian Education",
      "Bible Study"

    ],

    keywords: [

      "Bible",
      "Creation",
      "Genesis",
      "Christian"

    ]

  };

}