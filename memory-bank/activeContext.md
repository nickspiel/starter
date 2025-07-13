# Active Context

This document tracks the current work focus, recent changes, next steps, active decisions, important patterns, and project insights.

## Current Work Focus

- Transitioning from npm to npm for package management.
- Updating all dependencies to be compatible with Node.js 24.

## Recent Changes

- Cleaned up `package.json` by removing unnecessary React-related packages.
- Updated all dependencies to their latest compatible versions.
- Added a Node.js engine requirement (`>=24.0.0`) in `package.json`.

## Next Steps

- Verify that all scripts (build, start, test, lint) work correctly with the updated setup.
- Document any issues or additional changes required for npm compatibility.

## Active Decisions

- Use npm as the default package manager for this project.
- Maintain compatibility with Node.js 24 as specified in `.nvmrc`.

## Insights

- The project is a simple TypeScript starter with Jest for testing, rspack for bundling, and ESLint/Prettier for code quality.
- Removing unnecessary dependencies has streamlined the project and reduced potential conflicts.
