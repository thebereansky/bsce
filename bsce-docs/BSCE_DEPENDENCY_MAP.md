# BSCE Dependency Map

Version: 1.0

Last Updated: 2026-07-14

Status: Initial Draft

---

# Purpose

This document describes the major dependencies within the BSCE platform.

It identifies:

- Build order
- Content dependencies
- Asset dependencies
- Product dependencies
- Publishing dependencies

The dependency map serves as the authoritative reference for orchestration and automation.

---

# High-Level Workflow

Study Definition

↓

Master Study

↓

Family Guide
Lesson Series

↓

Lesson Scripts

↓

Publishing Assets

↓

Product Packages

↓

Quality Assurance

↓

Publishing

↓

Revenue

---

# Study Layer

Primary Owner:

StudyRepository.js

Dependencies:

None

Outputs:

Study Definition

Consumers:

PromptBuilder.js
PromptDataBuilder.js

---

# Master Study Layer

Primary Owner:

MasterStudyLoader.js

Dependencies:

Study Definition

Outputs:

Master Study JSON

Consumers:

Family Guide
Lesson Series
Marketing Assets
Product Packages

---

# Family Guide Layer

Primary Owner:

FamilyGuideBuilder.js

Dependencies:

Master Study

Outputs:

Family Guide JSON

Consumers:

KDP Book
Workbook
Product Package

---

# Lesson Series Layer

Primary Owner:

LessonSeriesBuilder.js

Dependencies:

Master Study

Outputs:

Lesson Series JSON

Consumers:

Lesson Scripts
Video Assets
YouTube Assets

---

# Lesson Script Layer

Primary Owner:

LessonScriptBuilder.js

Dependencies:

Lesson Series

Outputs:

Lesson Scripts

Consumers:

Video Storyboards
Video Projects

---

# Video Layer

Primary Owners:

VideoStoryboardGenerator.js

VideoProjectGenerator.js

Dependencies:

Lesson Scripts

Outputs:

Storyboards
Video Projects

Consumers:

YouTube Packages

---

# Shorts Layer

Primary Owner:

ShortsBuilder.js

Dependencies:

Master Study

Outputs:

Short Scripts

Consumers:

Social Media Assets

---

# Marketing Layer

Primary Owners:

MarketingContentGenerator.js

OpenAIMarketingEngine.js

Dependencies:

Master Study

Outputs:

Descriptions
Landing Pages
Email Sequences
Campaign Assets

Consumers:

Product Packages
Publishing

---

# Publishing Asset Layer

Primary Owners:

PublishingAssetGenerator.js

YouTubeAssetPack.js

Dependencies:

Master Study
Lesson Series
Marketing Assets

Outputs:

Publishing Packages

Consumers:

Publishing Engine

---

# Product Layer

Primary Owner:

ProductPackageEngine.js

Dependencies:

Family Guide
Lesson Series
Marketing Assets
Publishing Assets

Outputs:

Complete Product Package

Consumers:

Publishing
Revenue

---

# KDP Layer

Primary Owners:

KDPBookGenerator.js

KDPMetadataGenerator.js

KDPPackageBuilder.js

Dependencies:

Master Study
Family Guide
Lesson Series

Outputs:

KDP Package

Consumers:

Amazon KDP

---

# QA Layer

Primary Owners:

ContentQualityEngine.js

QualityGate.js

PublishingReadinessValidator.js

Dependencies:

Generated Assets

Outputs:

Quality Reports

Consumers:

Publishing

Status:

Needs Expansion

---

# Publishing Layer

Primary Owners:

PublishingEngine.js

PublishingWorkflow.js

PublishingScheduler.js

Dependencies:

Validated Products

Outputs:

Published Assets

Consumers:

Revenue Systems

---

# Revenue Layer

Primary Owners:

RevenuePackageGenerator.js

SeriesRevenuePlanner.js

MonetizationDashboard.js

Dependencies:

Published Products

Outputs:

Revenue Reporting

Consumers:

Business Dashboard

---

# Future Governance Dependency

Governance

↓

Generation

↓

QA

↓

Approval

↓

Publishing

↓

Revenue

All future systems should consume GovernanceRepository.js.

Governance should never depend on downstream systems.

---

# Critical Dependency Chain

Study Definition

↓

Master Study

↓

Family Guide

↓

Lesson Series

↓

Lesson Scripts

↓

Publishing Assets

↓

Product Package

↓

QA

↓

Publishing

↓

Revenue

Failure at any stage invalidates downstream assets.

---

# Long-Term Goal

Enable:

generateCompleteProductPackage()

to automatically create:

- KDP Package
- Family Guide
- Workbook
- Lesson Series
- Lesson Scripts
- YouTube Package
- Shorts Package
- Marketing Package
- Publishing Package

with minimal human intervention.
