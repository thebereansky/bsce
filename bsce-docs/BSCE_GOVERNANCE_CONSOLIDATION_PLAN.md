# BSCE Governance Consolidation Plan

Version: 1.0

Status: Active

Owner: BSCE

Last Updated: 2026-07-15

---

# Objective

Create a single authoritative governance system that is consumed by:

- Content Generation
- Prompt Generation
- AI Quality Assurance
- Publishing Validation
- Product Packaging

while eliminating duplicated governance rules throughout the repository.

---

# Current State

Governance currently exists in three locations:

1. Governance Files
2. Prompt Templates
3. Source Code

Governance Files are intended to be authoritative but significant duplication remains in prompts.

---

# Authoritative Governance Sources

## Brand Identity

config/governance/brand-identity.json

Contains:

- Mission
- Vision
- Purpose
- Voice
- Tone
- Audience

Status:
Authoritative

---

## Content Boundaries

config/content-boundaries.json

Contains:

- Allowed content
- Restricted content
- Terminology guidance

Status:
Authoritative

---

## Cosmology Framework

config/cosmology-framework.md

Contains:

- Cosmology standards
- Scripture authority
- Terminology standards
- Creation guidance

Status:
Authoritative

Decision:
cosmology-framework.json is deprecated.

---

## Quality Standards

config/governance/quality-standards.json

Status:
Authoritative

---

## Publishing Standards

config/governance/publishing-standards.json

Status:
Authoritative

---

## Approval Thresholds

config/governance/approval-thresholds.json

Status:
Authoritative

---

# Governance Registry

Authoritative file:

config/governance/governance-registry.json

All governance sources must be registered here.

No governance file should exist outside the registry.

---

# Governance Repository

Authoritative loader:

src/apps-script/GovernanceRepository.js

Responsibilities:

- Load registry
- Load governance files
- Build governance context

No other source file should directly load governance assets.

---

# Governance Context

Authoritative object:

buildGovernanceContext()

Expected structure:

{
  brandIdentity,
  contentBoundaries,
  cosmologyFramework,
  qualityStandards,
  publishingStandards,
  approvalThresholds
}

---

# Phase 1

Repository Governance Audit

Goal:

Identify every governance source and consumer.

Deliverables:

- BSCE_FILE_INVENTORY.md
- BSCE_DEPENDENCY_MAP.md
- BSCE_PROMPT_GOVERNANCE_AUDIT.md

Status:
In Progress

---

# Phase 2

Prompt Governance Consolidation

Goal:

Remove duplicated governance from prompts.

Prompts should consume governance context instead of embedding governance.

Targets:

- master-study
- family-guide
- lesson-series
- lesson-script
- workbook
- marketing

---

# Phase 3

Governance Injection

Goal:

Governance automatically injected into prompt data.

Target:

PromptDataBuilder.js

Expected:

data.governance =
  buildGovernanceContext();

---

# Phase 4

AI QA Integration

Goal:

QA evaluates content against governance.

Inputs:

- Governance Context
- Generated Asset

Outputs:

- Score
- Findings
- Recommendation

---

# Phase 5

Publishing Validation

Goal:

Validate assets before publication.

Checks:

- Governance Compliance
- Quality Standards
- Publishing Standards

---

# Success Criteria

Governance exists only in:

- Governance Files
- Governance Repository

Prompts contain only:

- Asset instructions
- Output requirements

Governance duplication is eliminated.

All content generation, QA, and publishing consume the same governance context.
