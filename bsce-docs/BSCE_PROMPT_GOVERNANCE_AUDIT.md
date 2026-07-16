# BSCE Prompt Governance Audit

Version: 1.1

Status: Active

---

# Objective

Identify governance currently embedded within prompt templates.

Move governance into centralized governance files whenever possible.

Prompts should contain:

- Asset instructions
- Output requirements
- Formatting requirements

Prompts should not contain:

- Brand identity duplication
- Cosmology duplication
- Quality standards duplication
- Publishing standards duplication

---

# Governance Sources

## brand-identity.json

Authoritative source for:

- Mission
- Vision
- Purpose
- Tagline
- Foundational Scripture
- Brand Voice
- Educational Methodology

---

## content-boundaries.json

Authoritative source for:

- Allowed content
- Restricted content
- Content guardrails
- Terminology guidance

---

## cosmology-framework.md

Authoritative source for:

- Scripture authority
- Cosmology standards
- Creation guidance
- Terminology standards
- Creation-related compliance requirements

---

## quality-standards.json

Authoritative source for:

- Content quality expectations
- Educational standards
- Family-friendly requirements
- Completeness requirements

---

## publishing-standards.json

Authoritative source for:

- Publication readiness requirements
- Publishing standards

---

## approval-thresholds.json

Authoritative source for:

- QA scoring thresholds
- Approval criteria

---

# Master Study

## Embedded Governance

### About The Berean Sky

Source:
brand-identity.json

Action:
Replace with governance reference.

---

### Cosmology Compliance

Source:
cosmology-framework.md

Action:
Replace with governance reference.

---

### Scripture Authority

Source:
cosmology-framework.md

Action:
Replace with governance reference.

---

### Quality Standards

Source:
quality-standards.json

Action:
Replace with governance reference.

---

## Keep In Prompt

- Study Information
- Objective
- Content Requirements
- Output Schema

---

# Family Guide

## Embedded Governance

### About The Berean Sky

Source:
brand-identity.json

Action:
Replace with governance reference.

---

### Brand Voice

Source:
brand-identity.json

Action:
Replace with governance reference.

---

### Educational Philosophy

Source:
brand-identity.json (future enhancement)

Action:
Move into governance.

Notes:

Current methodology:

- Ask
- Search
- Explore
- Reflect

Should become part of the Berean Sky brand identity.

---

### Cosmology Framework

Source:
cosmology-framework.md

Action:
Replace with governance reference.

---

### Cosmology Compliance Requirement

Source:
cosmology-framework.md

Action:
Remove from prompt after governance injection.

---

### Quality Standards

Source:
quality-standards.json

Action:
Replace with governance reference.

---

## Keep In Prompt

- Source Data
- Objective
- Family Guide Requirements
- Creation Connection Guidance
- Family Activity Guidance
- Internal Guidance Rule
- Output Schema

---

# Lesson Series

Status:
Pending Audit

---

# Lesson Script

Status:
Pending Audit

---

# Workbook

Status:
Pending Audit

---

# Marketing

Status:
Pending Audit

---

# Governance Consolidation Progress

## Completed

- Governance Registry
- Governance Repository
- Governance Context
- GitHub Governance Loading
- PromptDataBuilder Governance Injection

---

## In Progress

- Prompt Governance Audit

---

## Planned

- Governance-Aware Prompt Templates
- AI QA Governance Validation
- Publishing Governance Validation

---

# Migration Strategy

## Phase 1

Audit all prompt templates.

Status:
In Progress

---

## Phase 2

Move duplicated governance into governance files.

Status:
Planned

---

## Phase 3

Update prompts to consume:

- {{governance.brandIdentity}}
- {{governance.contentBoundaries}}
- {{governance.cosmologyFramework}}
- {{governance.qualityStandards}}
- {{governance.publishingStandards}}
- {{governance.approvalThresholds}}

Status:
Planned

---

## Phase 4

Governance-driven QA validation.

Status:
Planned

---

## Success Criteria

Governance exists only in:

- Governance files
- Governance repository
- Governance context

Prompts contain only:

- Asset-specific instructions
- Output requirements
- Formatting requirements

Governance duplication is eliminated throughout BSCE.
