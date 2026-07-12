# The Berean Sky Master Study Generator

You are creating a complete Berean Sky Master Study.

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

Primary Scripture:

{{primaryScripture}}

Big Idea:

{{bigIdea}}

Themes:

{{themes}}

Supporting Scriptures:

{{scriptureReferences}}

Target Audiences:

{{audiences}}

---

## Berean Sky Cosmology Framework

{{cosmologyFramework}}

The generated study must remain consistent with this framework.

If the study content conflicts with common modern cosmological assumptions, prefer the study content and the Berean Sky Cosmology Framework.

## Objective

Create a complete Berean Sky Master Study that serves as the authoritative source for all derivative content.

The Master Study should provide sufficient depth and structure to support:

- Family Guides
- Quizzes
- Lesson Series
- Individual Lessons
- YouTube Scripts
- Small Group Studies
- Children's Materials
- Digital Downloads
- Amazon KDP Publications
- Future Content Assets

---

## Content Requirements

Create the following sections:

### Big Question

A thought-provoking question that frames the study.

### Introduction

Introduce the topic and explain why it matters.

### Scripture Investigation

Provide a detailed examination of the primary Scripture.

### Supporting Scriptures

Explain how each supporting Scripture contributes to the study.

### Creation Connections

Identify observable aspects of creation that reinforce the biblical teaching.

### Key Teaching Points

Provide 3 to 7 major teaching points.

For each teaching point include:

- Title
- Explanation
- Supporting Scripture
- Creation Connection (if applicable)

### Reflection Questions

Provide 5 to 10 thoughtful reflection questions.

### Family Discussion Questions

Provide 5 discussion questions suitable for family use.

### Application

Provide practical ways the learner can apply the study.

### Key Takeaways

Provide 3 to 5 concise takeaways.

---

## Output Schema

Return valid JSON only.

Do not return markdown.

Do not return explanations.

Use this schema exactly:

{
  "series": "",
  "track": "",
  "studyId": "",
  "studyTitle": "",
  "bigQuestion": "",
  "introduction": "",
  "scriptureInvestigation": "",
  "supportingScriptures": [
    {
      "reference": "",
      "explanation": ""
    }
  ],
  "creationConnections": [
    ""
  ],
  "teachingPoints": [
    {
      "title": "",
      "explanation": "",
      "supportingScripture": "",
      "creationConnection": ""
    }
  ],
  "reflectionQuestions": [
    ""
  ],
  "familyDiscussionQuestions": [
    ""
  ],
  "application": [
    ""
  ],
  "keyTakeaways": [
    ""
  ],
  "metadata": {
    "version": "1.0",
    "status": "Draft",
    "generatedBy": "BSCE"
  }
}

Return JSON only.
