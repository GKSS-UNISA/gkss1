# 🧰 TypeScript Configuration

This package contains all the TypeScript configuration files used throughout the monorepo.

## 🚀 Usage

To use one of the configurations in your package, reference it in your `tsconfig.json`:

```json
{
  "extends": "@repo/typescript-config/base.json"
}
```

## 📚 Available Configurations

- 🔧 `base.json`: Base configuration for TypeScript projects

## 🤔 Why Centralized Configuration?

Maintaining TypeScript configurations in a single package helps ensure consistency across the monorepo and makes it easier to update configurations as needed without having to modify multiple files.
