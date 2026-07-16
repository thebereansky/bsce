# BSCE Architecture Overview

Version: 1.0

Status: Active

Last Updated: 2026-07-15

---

# Vision

The Berean Sky Content Engine (BSCE) is an AI-powered content production platform designed to generate, validate, package, and publish educational content derived from Scripture and creation studies.

---

# Core Principle

Single Source of Truth

Every study serves as the authoritative source for all derivative content.

---

# Architecture

GitHub
↓
Apps Script
↓
Google Drive
↓
Publishing Platforms

---

# Source of Truth Hierarchy

1. Governance Files
2. Study Definitions
3. Prompt Templates
4. Generated Assets

---

# Governance Layer

Files:

- brand-identity.json
- content-boundaries.json
- cosmology-framework.md
- quality-standards.json
- publishing-standards.json
- approval-thresholds.json

Loader:

GovernanceRepository.js

Output:

buildGovernanceContext()

---

# Study Layer

Study JSON

Contains:

- Metadata
- Scriptures
- Objectives
- Themes
- Activities
- Key Takeaways

Loader:

StudyRepository.js

---

# Prompt Layer

Prompt Templates

Contains:

- Asset instructions
- Output requirements

Should not contain duplicated governance.

---

# Generation Layer

Prompt
+
Study
+
Governance
        ↓
AI

Outputs:

- Master Study
- Family Guide
- Lesson Series
- Workbook
- Marketing Assets

---

# Quality Layer

Target State

Generated Asset
+
Governance Context
        ↓
AI QA

Outputs:

- Score
- Findings
- Recommendation

---

# Packaging Layer

Outputs:

- KDP Package
- YouTube Package
- Shorts Package
- Marketing Package

---

# Publishing Layer

Outputs:

- Amazon KDP
- YouTube
- Website
- Digital Products

---

# Long-Term Goal

Study Definition
↓
Generation
↓
AI QA
↓
Publishing Validation
↓
Packaging
↓
Publishing
↓
Revenue

with minimal human intervention.

Human review should be the exception rather than the primary quality-control mechanism.
