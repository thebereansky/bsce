# ADR-001: JSON as the Canonical Study Source

## Status

Accepted

## Date

2026-07-11

## Context

The Berean Sky Content Engine needs to generate multiple content formats from a single Bible study.

Potential sources of truth considered:

- Google Docs
- Google Sheets
- Database
- JSON document

## Decision

Each study will be represented by a canonical JSON document.

Example:

study001.json

All generated content will be created from this structured data.

## Reasoning

JSON provides:

- machine readability
- validation capability
- portability
- version control
- easy integration with AI systems
- future website/application compatibility

Google Sheets will be used as an administrative interface, not the ultimate source of truth.

## Consequences

Benefits:

- consistent content generation
- easier automation
- easier migration to future systems

Tradeoff:

- requires schema design and validation
