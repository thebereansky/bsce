/**
 * KDP Book Generator
 * Version 3.0
 *
 * Generates a complete
 * KDP-ready book object.
 */

function buildKDPBook() {

  const study =
    getActiveStudy();

  Logger.log(
    "Building KDP Book..."
  );

  const masterStudy =
    loadOrGenerateAsset(
      "master-study"
    );

  const familyGuide =
    loadOrGenerateAsset(
      "family-guide"
    );

  return {

    title:
      study.study.title,

    subtitle:
      "A Berean Sky Study",

    introduction:
      masterStudy
        .introduction || "",

    bigQuestion:
      masterStudy
        .bigQuestion || "",

    chapters:
      buildRichKDPChapters(
        masterStudy
      ),

    familyGuide:
      familyGuide,

    metadata: {

      generatedOn:
        new Date()
          .toISOString(),

      generatedBy:
        "BSCE",

      studyId:
        study.study.id,

      studyTitle:
        study.study.title,

      series:
        study.series.name,

      track:
        study.track.name

    }

  };

}


/**
 * Builds richer chapter structure
 * from Master Study content.
 */
function buildRichKDPChapters(
  masterStudy
) {

  return [

    {

      chapterNumber: 1,

      title:
        "The Big Question",

      content:
        masterStudy
          .bigQuestion || ""

    },

    {

      chapterNumber: 2,

      title:
        "Scripture Investigation",

      content:
        masterStudy
          .scriptureInvestigation || ""

    },

    {

      chapterNumber: 3,

      title:
        "Supporting Scriptures",

      content:
        formatSupportingScriptures(
          masterStudy
            .supportingScriptures
        )

    },

    {

      chapterNumber: 4,

      title:
        "Creation Connections",

      content:
        (
          masterStudy
            .creationConnections || []
        ).join("\n\n")

    },

    {

      chapterNumber: 5,

      title:
        "Teaching Points",

      content:
        formatTeachingPoints(
          masterStudy
            .teachingPoints
        )

    },

    {

      chapterNumber: 6,

      title:
        "Reflection Questions",

      content:
        (
          masterStudy
            .reflectionQuestions || []
        ).join("\n\n")

    },

    {

      chapterNumber: 7,

      title:
        "Family Discussion",

      content:
        (
          masterStudy
            .familyDiscussionQuestions || []
        ).join("\n\n")

    },

    {

      chapterNumber: 8,

      title:
        "Application",

      content:
        (
          masterStudy
            .application || []
        ).join("\n\n")

    },

    {

      chapterNumber: 9,

      title:
        "Key Takeaways",

      content:
        (
          masterStudy
            .keyTakeaways || []
        ).join("\n\n")

    }

  ];

}


/**
 * Formats teaching points.
 */
function formatTeachingPoints(
  teachingPoints
) {

  if (
    !teachingPoints ||
    !teachingPoints.length
  ) {

    return "";

  }

  let content = "";

  teachingPoints.forEach(
    function(point) {

      content +=
        point.title +
        "\n\n";

      content +=
        (
          point.explanation ||
          ""
        ) +
        "\n\n";

      content +=
        "Supporting Scripture:\n";

      content +=
        (
          point.supportingScripture ||
          ""
        ) +
        "\n\n";

      content +=
        "Creation Connection:\n";

      content +=
        (
          point.creationConnection ||
          ""
        ) +
        "\n\n";

    }
  );

  return content;

}


/**
 * Formats supporting scriptures.
 */
function formatSupportingScriptures(
  scriptures
) {

  if (
    !scriptures ||
    !scriptures.length
  ) {

    return "";

  }

  let content = "";

  scriptures.forEach(
    function(scripture) {

      content +=
        scripture.reference +
        "\n";

      content +=
        (
          scripture.explanation ||
          ""
        ) +
        "\n\n";

    }
  );

  return content;

}


/**
 * Returns estimated page count.
 */
function estimateKDPPageCount(
  kdpBook
) {

  let wordCount = 0;

  kdpBook.chapters.forEach(
    function(chapter) {

      const content =
        chapter.content || "";

      wordCount +=
        content
          .split(/\s+/)
          .length;

    }
  );

  return Math.ceil(
    wordCount / 300
  );

}
