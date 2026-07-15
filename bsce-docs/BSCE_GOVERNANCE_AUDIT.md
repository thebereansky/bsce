# BSCE Governance Audit

Version: 1.0

Last Updated: 2026-07-14

Status: Initial Audit

---

# Purpose

This document identifies all governance sources within the BSCE platform.

Governance defines:

- What content may be created
- What content may not be created
- How content should be written
- How content is evaluated
- How content is approved
- How content is published

The purpose of this audit is to establish a single source of truth for all governance rules and prevent duplication across prompts, generators, validators, and publishing workflows.

---

# Governance Hierarchy

BSCE governance follows the hierarchy below.

Level 1 always overrides lower levels.

Level 4 never overrides higher levels.

Level 1
Mission
Vision
Purpose
Brand Identity

↓

Level 2
Content Boundaries
Cosmology Framework

↓

Level 3
Quality Standards
Publishing Standards
Approval Standards

↓

Level 4
Prompt Templates

---

# Governance Sources

## Brand Identity

Status:
Partially Implemented

Purpose:

Defines:

- Mission
- Vision
- Purpose
- Audience
- Voice
- Tone

Current Sources:

- Brand Identity Documentation
- Prompt Templates
- BrandVoiceManager.js

Recommended Authority:

config/brand-identity.json

Status:

Needs Consolidation

---

## Content Boundaries

Status:
Implemented

Authority:

config/content-boundaries.json

Purpose:

Defines:

- Preferred terminology
- Prohibited terminology
- Restricted concepts
- Language requirements

Consumers:

- Prompt Templates
- Future QA Engine
- Publishing Validation

Status:

Authoritative

---

## Cosmology Framework

Status:
Implemented

Authority:

config/cosmology-framework.md

Purpose:

Defines:

- Cosmology assumptions
- Creation language
- Terminology
- Interpretive framework

Consumers:

- Family Guide Prompt
- Master Study Prompt
- Lesson Prompts
- Future QA Engine

Status:

Authoritative

---

## Gospel Framework

Status:
Implemented

Authority:

config/gospel-theme-map.json

config/gospel-connections.json

config/gospel-verses.json

Purpose:

Defines:

- Gospel themes
- Gospel connections
- Gospel verse mapping

Consumers:

- PromptDataBuilder.js
- Prompt Templates

Status:

Authoritative

---

# Embedded Governance

Governance currently exists inside prompts.

Examples:

- family-guide-v1.1.md
- lesson-series prompts
- lesson-script prompts
- master-study prompts

Embedded Governance Includes:

- Voice
- Tone
- Educational philosophy
- Cosmology instructions
- Content requirements

Risk:

Governance changes require updating multiple prompts.

Recommended Future State:

Prompts consume governance.

Prompts do not define governance.

---

# Governance Consumers

Current Consumers:

- PromptBuilder.js
- PromptDataBuilder.js
- FamilyGuideBuilder.js
- LessonSeriesBuilder.js
- LessonScriptBuilder.js
- MarketingContentGenerator.js

Future Consumers:

- AIQualityAssuranceEngine.js
- ApprovalEngine.js
- PublishingReadinessValidator.js
- PublishingEngine.js

---

# Governance Gaps

Current Missing Governance:

## Quality Standards

Needed:

- Scoring thresholds
- Content completeness requirements
- Asset-specific standards

Recommended File:

config/quality-standards.json

Priority:

High

---

## Publishing Standards

Needed:

- Amazon requirements
- YouTube requirements
- Metadata requirements

Recommended File:

config/publishing-standards.json

Priority:

High

---

## Approval Thresholds

Needed:

- Auto-approve threshold
- Regeneration threshold
- Reject threshold

Recommended File:

config/approval-thresholds.json

Priority:

High

---

# Governance Roadmap

Phase 1

Centralize governance sources.

Create GovernanceRepository.js.

Status:

In Progress

---

Phase 2

Build Governance Context.

Example:

{
  brandIdentity,
  contentBoundaries,
  cosmologyFramework,
  qualityStandards,
  publishingStandards,
  approvalThresholds
}

Status:

Planned

---

Phase 3

Integrate Governance Context into generation.

Status:

Planned

---

Phase 4

Integrate Governance Context into QA.

Status:

Planned

---

Phase 5

Integrate Governance Context into publishing.

Status:

Planned

---

# End State

Every governance decision should originate from a single authoritative source.

Generation, QA, approval, and publishing should all evaluate content against the same governance context.

No governance rules should exist exclusively inside prompts.
