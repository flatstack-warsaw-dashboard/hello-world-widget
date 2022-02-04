# Hello World Widget

This repo provides an example of micro-frontend application.

## Structure

This repo consists of two part:
* Hello World Widget

  It is actual micro-frontend application.
* Dummy Host application

  It is application that simulates real-world host application. It is required only for development and the only thing it does is shows your widget.

## How to start development

1. Clone repo
2. `cd` into project directory
3. Switch to required Node.js version with `nvm use`
4. Install PNPM (package manager used in this project): `corepack enable && corepack prepare`
5. Install dependencies: `pnpm install`
6. Run dev env: `pnpm dev`
