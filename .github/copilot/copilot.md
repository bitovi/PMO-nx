# PMO-NX Project Guidelines

## Project Description

PMO-NX Place my order app using Nx, is a restaurant management app where clients can place orders and restaurants can update their status

### Technical Stack

- UI apps
  - Angular 19+ with standalone components
  - SCSS for styling
  - Jest for unit testing
- API apps:
  - NestJS
  - Jest for unit testing
  - Mocking DB with JSON
- Nx workspace for monorepo management

## Commits conventions:

- Use conventional commits pattern
- Use (feat,fix,refactor,chore)

## Development Conventions

- UI apps
  - Use standalone components with Angular's new control flow syntax
  - Follow Angular style guide for naming and structure.
  - Keep components small and focused on a single responsibility.
  - Prefer new Signals in templates and components.ts
  - Prefer `inject` function rather than constructor injection
