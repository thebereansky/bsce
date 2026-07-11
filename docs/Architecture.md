# The Berean Sky Content Engine (BSCE)

## System Architecture v1.0

**Project:** The Berean Sky Content Engine (BSCE)

**Purpose:** AI-powered Christian publishing platform for generating Bible study resources from a single source of truth.

---

# 1. Vision

The Berean Sky Content Engine (BSCE) is designed to automate the creation of Biblically faithful educational content for all ages.

Rather than creating individual documents manually, BSCE maintains a structured representation of each study and automatically generates all supporting materials.

Every study should require only:

* Human selection of the topic
* Human review for theological accuracy and quality
* Human approval before publication

Everything else should be automated whenever practical.

---

# 2. Guiding Principles

## 2.1 Single Source of Truth

Every study exists as one canonical data object.

All published materials are generated from this source.

No information should ever need to be maintained in multiple locations.

---

## 2.2 Automation First

Whenever a task can be automated reliably, it should be.

Examples:

* Folder creation
* Document generation
* Prompt generation
* Image prompt creation
* Video scene generation
* Metadata generation
* File naming
* Version tracking

---

## 2.3 Human Approval

Artificial Intelligence assists.

People approve.

Every study is reviewed before publication.

---

## 2.4 Consistency

Every study should feel like it belongs to The Berean Sky.

Readers should immediately recognize:

* writing style
* formatting
* educational approach
* theological consistency
* visual identity

---

## 2.5 Reusability

Every piece of information should be reusable.

One approved study should generate:

* Master Study
* Children's Study
* Family Study
* Leader Guide
* Discussion Questions
* Workbook
* Coloring Pages
* Posters
* PowerPoint
* YouTube Script
* Narration Script
* Thumbnail Prompts
* Website Article
* KDP Chapter
* Social Media Content
* Future formats

without rewriting content.

---

# 3. System Architecture

```
                    User
                      │
                      ▼
           Content Database
             (Google Sheets)
                      │
                      ▼
           Apps Script Orchestrator
                      │
                      ▼
              Prompt Builder
                      │
                      ▼
               AI Generation
                      │
                      ▼
           Structured Study JSON
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
  Google Docs     Google Slides    Image Prompts
        │             │             │
        └─────────────┼─────────────┘
                      ▼
             Publishing Outputs
```

---

# 4. Core Components

## 4.1 Content Database

Stores editable metadata.

Examples:

* Study titles
* Scripture references
* Themes
* Vocabulary
* Activities
* Learning objectives

The database is not the final source of truth.

It provides structured inputs.

---

## 4.2 Prompt Engine

Constructs AI prompts using reusable templates.

Prompts are never hard-coded inside Apps Script.

Prompt templates are versioned.

---

## 4.3 AI Generation Layer

Produces structured JSON only.

It does **not** create final documents.

This keeps outputs consistent and reusable.

---

## 4.4 Canonical Study Object

Every study is represented by one master JSON file.

Example:

```
study001.json
```

This becomes the authoritative representation of the study.

---

## 4.5 Rendering Layer

Transforms JSON into finished assets.

Examples:

* Google Docs
* PDFs
* PowerPoint presentations
* Image prompts
* Video scripts
* KDP manuscripts

---

## 4.6 Publishing Layer

Distributes approved content.

Examples:

* YouTube
* Website
* Amazon KDP
* Downloadable PDFs
* Study Packs
* Email newsletters

---

# 5. Data Flow

```
Topic Selected
      │
      ▼
Validate Database
      │
      ▼
Load Prompt Templates
      │
      ▼
Generate AI Prompt
      │
      ▼
AI Response
      │
      ▼
Validate JSON
      │
      ▼
Create Study Package
      │
      ▼
Generate All Assets
      │
      ▼
Human Review
      │
      ▼
Publish
```

---

# 6. Repository Structure

```
bsce/

docs/
schemas/
prompts/
apps-script/
templates/
assets/
scripts/
examples/
archive/
```

---

# 7. Development Roadmap

## Phase 1

Foundation

* Repository
* Architecture
* Content Database
* Folder automation

---

## Phase 2

Core Engine

* Study JSON schema
* Prompt library
* Prompt engine
* Validation

---

## Phase 3

Content Generation

* AI integration
* Google Docs generation
* PDF generation
* Study package creation

---

## Phase 4

Media Generation

* Thumbnail prompts
* Poster prompts
* Coloring page prompts
* Presentation generation
* Video scene generation

---

## Phase 5

Publishing

* YouTube workflow
* Amazon KDP workflow
* Website integration
* Download center

---

# 8. Long-Term Vision

BSCE is intended to become a complete Christian publishing platform capable of producing consistent, high-quality educational resources from a single approved study.

The architecture is designed to support hundreds of studies while minimizing repetitive work through structured data, reusable prompts, automated rendering, and human quality assurance.

Every enhancement to BSCE should support the core principles of:

* Scriptural faithfulness
* Educational clarity
* Automation
* Reusability
* Maintainability
* Scalability
* Consistency

These principles guide all future architectural and implementation decisions.
