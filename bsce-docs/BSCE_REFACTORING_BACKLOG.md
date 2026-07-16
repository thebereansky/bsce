# BSCE Refactoring Backlog

Version: 1.0

Status: Active

---

# Purpose

Track technical debt, duplicate functionality, and architectural improvements.

---

# High Priority

## Governance Consolidation

Status:
In Progress

Goal:

Move all governance into:

- Governance Files
- GovernanceRepository.js

Remove governance duplication from prompts.

---

## Prompt Governance Audit

Status:
In Progress

Targets:

- master-study
- family-guide
- lesson-series
- lesson-script
- workbook

---

## Governance Injection

Status:
Planned

Target:

PromptDataBuilder.js

Goal:

Inject:

data.governance =
  buildGovernanceContext();

---

## AI QA Integration

Status:
Planned

Goal:

Evaluate generated assets against governance.

---

# Medium Priority

## Product Engine Review

Files:

- ProductFactory.js
- ProductFactoryEngine.js

Question:

Can these be consolidated?

---

## Packaging Review

Files:

- ProductAssemblyEngine.js
- ProductPackageEngine.js

Question:

Can responsibilities be clarified?

---

## Publishing Review

Files:

- PublishingEngine.js
- PublishingWorkflow.js

Question:

Should workflow orchestration be separated from publishing execution?

---

## Asset Management Review

Files:

- AssetBuilder.js
- AssetWriter.js
- AssetLoader.js

Goal:

Clarify ownership and lifecycle.

---

# Low Priority

## Utility Consolidation

Review:

- FileUtils.js
- Utilities.js
- JsonUtils.js

Goal:

Reduce duplication.

---

## Naming Standard Review

Review:

- NamingUtils.js
- AssetNaming.js

Goal:

Single naming authority.

---

# Completed

## GitHub Migration

Completed:
2026-07-15

Result:

GitHub is now the source of truth.

---

## Governance Repository

Completed:
2026-07-15

Result:

Central governance loading established.
