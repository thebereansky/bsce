/**
 * Content Calendar
 * Version 1.0
 */

function buildContentCalendar() {

  const queue =
    getProductionQueue();

  const readyItems =
    queue.filter(
      item =>
        item.status ===
        PRODUCTION_STATUSES.READY_FOR_PRODUCTION
    );

  const calendar = [];

  let publishDate =
    new Date();

  readyItems.forEach(
    item => {

      calendar.push({

        studyId:
          item.studyId,

        studyTitle:
          item.studyTitle,

        publishDate:
          publishDate
            .toISOString(),

        contentPlan: {

          lessonVideo: 1,

          shorts: 5,

          facebookPosts: 3,

          instagramPosts: 3,

          xPosts: 3,

          emailCampaigns: 1

        }

      });

      publishDate.setDate(
        publishDate.getDate() + 7
      );

    }
  );

  return calendar;

}


/**
 * Save Content Calendar
 */
function saveContentCalendar(
  calendar
) {

  const root =
    getEngineRootFolder();

  const filename =
    "content-calendar.json";

  const files =
    root.getFilesByName(
      filename
    );

  const content =
    JSON.stringify(
      calendar,
      null,
      2
    );

  if (
    files.hasNext()
  ) {

    files.next()
      .setContent(
        content
      );

    return;

  }

  root.createFile(
    filename,
    content,
    MimeType.PLAIN_TEXT
  );

}


/**
 * Generate Calendar
 */
function generateContentCalendar() {

  const calendar =
    buildContentCalendar();

  saveContentCalendar(
    calendar
  );

  return calendar;

}