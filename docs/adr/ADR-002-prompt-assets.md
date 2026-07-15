# ADR-002: Prompts Are Versioned Project Assets

## Status

Accepted

## Decision

All AI prompts used by BSCE will be stored separately from application code.

## Reasoning

Prompts are a critical component of content quality.

They require:

- versioning
- review
- improvement
- testing

Keeping prompts separate allows the system to evolve without modifying application logic.

## Consequences

Benefits:

- easier experimentation
- consistent outputs
- reusable templates

Tradeoff:

- requires prompt management discipline
