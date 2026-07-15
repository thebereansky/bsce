/**
 * Workbook DOCX Generator
 * Version 1.0
 */

function buildWorkbookDocument() {

  const workbook =
    buildWorkbook();

  let content = "";

  content +=
    workbook.title +
    "\n\n";

  workbook.lessons.forEach(
    lesson => {

      lesson.questions.forEach(
        question => {

          content +=
            "Question:\n";

          content +=
            question +
            "\n\n";

          content +=
            "Answer:\n\n\n\n";

        }
      );

    }
  );

  return content;

}