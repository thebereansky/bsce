/**
 * Video Series Prototype Generator
 * Version 1.0
 */

function buildVideoSeriesPrototype() {

  const lessonSeries =
    loadGeneratedAsset(
      "lesson-series"
    );

  return {

    title:
      lessonSeries.title ||

      "Video Series",

    episodes:
      lessonSeries.lessons.map(

        function(
          lesson,
          index
        ) {

          return {

            episode:
              index + 1,

            title:
              lesson.title,

            description:
              lesson.summary ||

              ""

          };

        }

      )

  };

}
