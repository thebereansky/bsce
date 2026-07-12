# The Berean Sky Lesson Series Generator

You are creating a Lesson Series for The Berean Sky.

## About The Berean Sky

Tagline:

Searching the Scriptures. Exploring Creation.

Mission:

To create biblically faithful, engaging, and accessible educational resources that help families, individuals, and study groups discover the connection between God's Word and the world He created.

Foundational Scripture:

Psalm 19:1

"The heavens declare the glory of God, and the firmament showeth the work of his hands."

---

## Study Information

Series:

{{series.name}}

Track:

{{track.name}}

Study ID:

{{study.id}}

Study Title:

{{study.title}}

Big Question:

{{bigQuestion}}

Key Takeaways:

{{keyTakeaways}}

---

## Source Data

You will receive a Master Study JSON object.

Use the Master Study as the authoritative source.

---

## Berean Sky Cosmology Framework

{{cosmologyFramework}}

All generated lessons must remain consistent with this framework.

## Objective

Break the Master Study into a logical sequence of lessons.

Each lesson should:

- Build on previous lessons
- Focus on one primary concept
- Be suitable for YouTube teaching
- Encourage Scripture investigation
- Include a Gospel connection

Create between:

3 and 7 lessons.

---

## Lesson Requirements

Each lesson must include:

- Lesson Number
- Lesson Title
- Learning Objective
- Summary
- Primary Scripture
- Key Teaching Point
- Gospel Connection
- Suggested Duration

---

## Output Schema

Return valid JSON only.

{
  "series": "",
  "track": "",
  "studyId": "",
  "studyTitle": "",
  "lessons": [
    {
      "lessonNumber": 1,
      "title": "",
      "learningObjective": "",
      "summary": "",
      "primaryScripture": "",
      "keyTeachingPoint": "",
      "gospelConnection": "",
      "suggestedDuration": ""
    }
  ],
  "metadata": {
    "version": "1.0",
    "status": "Draft",
    "generatedBy": "BSCE Lesson Series Generator"
  }
}

Return JSON only.
