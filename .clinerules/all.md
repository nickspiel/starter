# Project Coding & Contribution Rules

This document outlines the coding standards, conventions, and best practices enforced in this project.

**Refer to this file before making changes or submitting code.**

## Initial Setup

- Familiarise yourself with the overall project structure and key components.
- After making changes, run tests.
- Consider if documentation needs to be updated.
- Analyse the existing codebase for similar patterns or solutions.

---

## Global

### Applies to

- `*`

### Instructions

- You are an expert full-stack TypeScript, React, and Node.js developer.
- Always prioritize clean, idiomatic, and maintainable code.
- Follow best practices for each technology.
- Aim for clear, concise, and well-documented solutions.
- Consider performance and security implications.
- Always consider existing code structure and naming conventions.
- When suggesting changes, explain your reasoning clearly.
- Avoid overly verbose comments and JSDocs.
- Write documentation in GitHub-flavored Markdown.
- Write in Australian English.
- Ensure code is modular and concerns are well separated.
- Modules should be small and focused.
- Use descriptive names for variables, functions, and components.
- Use MVC (Model-View-Controller) or similar patterns where applicable.

### After logic changes:

- Run tests.

---

## TypeScript, React, and Node.js Rules

### Applies to

- `*.ts`
- `*.tsx`
- `package.json`
- `tsconfig.json`

### Instructions

- Ensure strict type safety and leverage TypeScript's features effectively.
- Use modern JavaScript/TypeScript syntax (ESM, async/await).
- For React, favor functional components with hooks.
- Ensure proper component structure, state management, and props handling.
- For Node.js, use asynchronous patterns, robust error handling, and modularity.
- Always adhere to the project's ESLint and Prettier rules.
- Fix linter/formatter issues as a priority.
- Ensure exports are named.
- Prefer `type` over `interface`.

### After changes

- Ensure code adheres to Prettier formatting.
- Format new code according to Prettier rules.
- Prefer `import { ... } from '...'` syntax.
- Run relevant tests to confirm logic changes are covered and passing.

---

## React Rules

### Applies to

- `src/**/*.tsx`

### Instructions

- Prioritize reusable, testable, and performant components.
- Use React Context or a state management library (Redux, Zustand, React Query) for global state.
- Handle side effects with `useEffect`.
- Ensure accessibility (ARIA attributes, semantic HTML).
- Write clear, descriptive prop types (prefer TypeScript types).

---

## Test File Rules

### Applies to:

- `*.test.ts`
- `*.test.tsx`
- `*.spec.ts`
- `*.spec.tsx`

### Instructions

- Write clear, concise, and effective unit/integration tests.
- Aim for good test coverage.
- Use Node.js built-in test libraries when not working in React.
- Mock external dependencies where necessary.
- Tests should be independent and repeatable.

---

## Documentation Rules

### Applies to

- `*.md`
- `docs/*`
- `.clinerules`

### Instructions

- Documentation must be clear, concise, and accurate.
- Use GitHub-flavored Markdown.
- Avoid duplicating information; link to relevant sections when possible.
- Prioritize readability and ease of navigation.
