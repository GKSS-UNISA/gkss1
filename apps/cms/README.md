# 🚀 CMS (Content Management System)

## 📋 Overview

This CMS app serves as the backend content management system for our project. It allows you to create, edit, and manage all the content that appears on the website without needing to modify code.

## 🤔 What is a CMS?

A Content Management System (CMS) is a software application that allows users to:

- ✏️ Create and edit digital content
- 🗄️ Store content in an organized way
- 📱 Publish content to a website
- 👥 Manage multiple users and their permissions
- 🎨 Control how content is displayed

Think of it like a special dashboard where non-technical team members can update the website content without touching any code!

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or later)
- pnpm
- Database (as configured in the project)

### Installation

1. Install dependencies:

> Run this from the root of the repo

```
pnpm install
```

2. Set up environment variables:

> Look through [.env.example](./.env.example) for the available fields with descriptions.

```
cp .env.example .env
```

Then edit the `.env` file with your configuration.

3. Start the development server:

```
pnpm dev
```

## 🔍 Key Features

- **Content Types**: Define different types of content (articles, products, etc.)
- **Media Library**: Upload and manage images and other media
- **User Management**: Control who can edit what
- **API Access**: Connect your frontend to fetch content

## 💡 Tips for New Developers

- Always create a new branch before making major changes
- Check the documentation when you're unsure about a feature
- Reach out for help in the [discussions](https://github.com/GKSS-UNISA/gkss1/discussions) forum.

## 📚 Additional Resources

- [Documentation](https://payloadcms.com)
- [Support](https://github.com/GKSS-UNISA/gkss1/discussions)

## 🤝 Contributing

See our [Contributing Guide](../../CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.
