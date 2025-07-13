# Project Tech Context

- **Language:** TypeScript (main code in `src/`)
- **Runtime:** Node.js 20 (as specified in `.nvmrc`)
- **Package Manager:** npm
- **Build Tool:** TypeScript (assumed build script in `package.json`)
- **Test Framework:** Jest (based on `jest.config.js`/`jest.config.cjs`)
- **Entrypoint:** Compiled output, typically `dist/index.js`
- **Docker:** Uses Node.js 20 base image, installs dependencies with npm, builds TypeScript, runs app with `node dist/index.js`
