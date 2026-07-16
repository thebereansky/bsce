# BSCE Dependency Map

Version: 1.0

Status: Active

Last Updated: 2026-07-15

---

# Purpose

This document identifies the major dependencies within BSCE.

It answers:

- What consumes what?
- What breaks if a component changes?
- Where should new functionality be added?

---

# Governance Layer

governance-registry.json
        ↓
GovernanceRepository.js
        ↓
buildGovernanceContext()

Produces:

{
  brandIdentity,
  contentBoundaries,
  cosmologyFramework,
  qualityStandards,
  publishingStandards,
  approvalThresholds
}

Consumers:

- PromptDataBuilder.js
- AIQualityAssuranceEngine.js (future)
- PublishingReadinessValidator.js
- PublishingEngine.js

---

# Study Layer

Study Definitions
        ↓
StudyRepository.js
        ↓
getCurrentStudy()

Consumers:

- PromptDataBuilder.js
- ProductionEngine.js
- AssetBuilder.js

---

# Prompt Layer

Prompt Templates
        ↓
PromptLoader.js
        ↓
PromptBuilder.js

Consumers:

- MasterStudyBuilder
- FamilyGuideBuilder
- LessonSeriesBuilder
- LessonScriptBuilder
- WorkbookGenerator

---

# Prompt Data Layer

Study Data
+
Governance Context
+
Gospel Context
        ↓
PromptDataBuilder.js

Consumers:

- PromptBuilder.js

---

# Content Generation Layer

PromptBuilder
        ↓
AI Connector
        ↓
Generated Content

Outputs:

- Master Study
- Family Guide
- Lesson Series
- Lesson Scripts
- Workbook
- Marketing Assets

---

# Asset Layer

Generated Assets
        ↓
AssetWriter.js

Stored In:

Google Drive

---

# Product Layer

Generated Assets
        ↓
ProductPackageEngine.js

Outputs:

- KDP Package
- YouTube Package
- Marketing Package
- Revenue Package

---

# QA Layer (Target State)

Generated Asset
+
Governance Context
        ↓
AIQualityAssuranceEngine.js

Outputs:

- Pass
- Regenerate
- Reject

---

# Publishing Layer

Validated Assets
        ↓
PublishingEngine.js

Outputs:

- Amazon KDP
- YouTube
- Website
- Digital Downloads

---

# Future State

Study
 ↓
Governance
 ↓
Prompt
 ↓
Generation
 ↓
QA
 ↓
Packaging
 ↓
Publishing
 ↓
Revenue
