# BSCE Development Workflow

Version: 1.0

Last Updated: 2026-07-15

Status: Active

---

# Purpose

This document defines the official BSCE development workflow.

The goal is to ensure:

- GitHub remains the source of truth
- Apps Script remains the execution environment
- Google Drive remains the content storage platform
- All source code, prompts, studies, governance files, and documentation remain version controlled

---

# Architecture

GitHub
↓
Apps Script
↓
Google Drive
↓
Published Content

---

# System Responsibilities

## GitHub

GitHub is the authoritative source for:

- Source Code
- Prompt Templates
- Governance Files
- Study Definitions
- Configuration Files
- Documentation

Examples:

/src/apps-script
/prompts
/config
/studies
/bsce-docs

No authoritative content should exist only in Apps Script.

---

## Google Apps Script

Apps Script is the runtime environment.

Responsibilities:

- Execute generation workflows
- Load prompts
- Load governance
- Load study data
- Call AI services
- Save generated assets
- Execute publishing workflows

Apps Script is not the source of truth.

Apps Script receives code from GitHub.

---

## Google Drive

Google Drive stores generated content.

Examples:

- Master Studies
- Family Guides
- Lesson Series
- Lesson Scripts
- Marketing Assets
- KDP Packages
- Publishing Packages

Generated content may be regenerated at any time.

Source code should not be stored in Drive.

---

# Repository Structure

bsce/

├── src/
│   └── apps-script/
│
├── config/
│
├── prompts/
│
├── studies/
│
├── schemas/
│
├── assets/
│
└── bsce-docs/

---

# Development Workflow

## Step 1

Make changes locally.

Examples:

- Source code
- Prompts
- Governance
- Studies
- Documentation

Files should be edited from:

src/apps-script

not directly in Apps Script.

---

## Step 2

Review changes.

Example:

git status

Verify all intended changes are present.

---

## Step 3

Commit changes.

Example:

git add .

git commit -m "Update Product Package Engine"

Commit messages should clearly describe the change.

---

## Step 4

Push changes to GitHub.

Example:

git push

GitHub becomes the permanent record of the change.

---

## Step 5

Deploy to Apps Script.

Example:

clasp push

This publishes the latest source code to Apps Script.

---

## Step 6

Execute tests.

Examples:

testCompleteProductPackage()

testGovernanceContext()

testFamilyGuidePromptBuilder()

All new functionality should include a test function.

---

## Step 7

Verify generated assets.

Review:

- Output JSON
- Generated content
- Validation reports
- Drive artifacts

---

# Test Function Standards

Every major feature should include:

- Build Test
- Validation Test
- Integration Test

Test functions belong in:

Code.js

Examples:

testCompleteProductPackage()

testGovernanceContext()

testPublishingReadiness()

---

# Governance Workflow

Governance files live in:

config/

Examples:

brand-identity.json

content-boundaries.json

cosmology-framework.md

quality-standards.json

publishing-standards.json

approval-thresholds.json

Governance changes should never require source code changes when possible.

Governance should be data-driven.

---

# Prompt Workflow

Prompt templates live in:

prompts/

Prompts should:

- Consume governance
- Consume study data
- Consume content boundaries

Prompts should not duplicate governance rules.

---

# Study Workflow

Studies live in:

studies/

Each study is the canonical source for:

- Study metadata
- Objectives
- Scriptures
- Key takeaways
- Activities
- Supporting content

Generated assets should derive from study data.

---

# AI Generation Workflow

Study
↓
Prompt
↓
Governance Context
↓
AI Generation
↓
Validation
↓
Approval
↓
Publishing

All generated content should pass validation before publishing.

---

# Source Control Rules

Always commit before deployment.

Preferred sequence:

git add .

git commit -m "Description"

git push

clasp push

Never deploy uncommitted code.

---

# Prohibited Practices

Do not edit production code directly in Apps Script.

Do not maintain duplicate governance sources.

Do not store source code in Google Drive.

Do not manually modify generated assets unless necessary.

Do not bypass validation workflows.

---

# Disaster Recovery

GitHub is the recovery source.

If Apps Script becomes corrupted:

clasp push

will restore the latest deployed version.

If generated assets are lost:

regenerate from studies and prompts.

---

# Long-Term Vision

BSCE should eventually support:

Study Definition
↓
AI Content Generation
↓
AI Quality Assurance
↓
Publishing Validation
↓
Product Packaging
↓
Publishing
↓
Revenue Generation

with minimal human intervention.

Human review should become the exception rather than the primary quality control mechanism.

---

# Official Source Hierarchy

1. GitHub
2. Apps Script
3. Google Drive
4. Published Platforms

GitHub is the authoritative source of truth for the BSCE platform.
