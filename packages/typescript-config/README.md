# 🧰 TypeScript Configuration

This package contains all the TypeScript configuration files used throughout the monorepo.

## 🚀 Usage

To use one of the configurations in your package:

1. Include this package in the package.json file of the app/package you are working with.

```json
{
  "@repo/typescript-config": "*"
}
```

2. reference your desired config in app/package's `tsconfig.json`

```json
{
  "extends": "@repo/typescript-config/<desired-config>.json",
  "compilerOptions": {
    // Configs special to that app/package
  }
}
```

## 📚 Available Configurations

- 🔧 `base.json`: Base configuration for TypeScript projects

## 🤔 Why Centralized Configuration?

Maintaining TypeScript configurations in a single package helps ensure consistency across the monorepo and makes it easier to update configurations as needed without having to modify multiple files.
