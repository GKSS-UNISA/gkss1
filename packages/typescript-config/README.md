# TypeScript Configuration

Shared TypeScript configuration for the monorepo.

## Overview

This package contains shared TypeScript configurations used across the monorepo to ensure consistent TypeScript settings across all packages and applications.

## Usage

### Installing

Reference this configuration in your `package.json` devDependencies section:

```json
"dependencies": {
  "typescript-config": "workspace:*"
}
```

### In Your tsconfig.json

Extend the base configuration in your package's `tsconfig.json`:

```json
{
  "extends": "@repo/typescript-config/base.json",
  "compilerOptions": {
    // Add your package-specific options here
  }
}
```

## Available Configurations

- `base.json`: Base configuration for TypeScript projects
