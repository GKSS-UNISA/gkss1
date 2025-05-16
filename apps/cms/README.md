# CMS App 🚀

This is the Content Management System (CMS) for the GKSS1 project. It's built using Payload CMS with Next.js, providing a flexible way to manage the website's content.

## Table of Contents 📑

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Documentation](#documentation)
- [Common Tasks](#common-tasks)
- [Troubleshooting](#troubleshooting)

## Overview 🔎

This CMS app allows you to manage users, media, and other content for the GKSS1 platform. It's built with:

- **Payload CMS**: Headless CMS framework
- **PostgreSQL**: Database for storing content
- **TypeScript**: For type safety and better developer experience

## Features ✨

- **User Management**: Create and manage user accounts
- **Media Library**: Upload and organize images and other media files
- **Content Editing**: Rich text editor using Lexical
- **API Access**: GraphQL and REST APIs for content delivery
- **Admin Dashboard**: User-friendly interface for content management

## Getting Started 🏁

### Prerequisites

- Node.js 18+ and npm
- A PostgreSQL database

### Installation

1. From the root of the monorepo, install dependencies:

   ```bash
   npm install
   ```

2. Set up your environment variables (see [Environment Variables](#environment-variables) section)

3. Start the development server:

   ```bash
   # From the monorepo root
   npm run --workspace=cms dev

   # Or from the cms directory
   cd apps/cms
   npm run dev
   ```

4. Access the CMS at `http://localhost:8080/admin`

> make sure you navigate straight to `/admin` a 404 Not Found page will be displayed for all other routes. All except `/api` since the REST API is expose at that route.

## Project Structure 📁

```
apps/cms/
├── src/                  # Source code
│   ├── app/              # Next.js app directory
│   │   └── admin/        # Admin panel routes
│   ├── collections/      # Payload collections (Users, Media, etc.)
│   ├── styles/           # CSS styles
│   └── payload.config.ts # Payload CMS configuration
├── package.json          # Package dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## Environment Variables 🔐

Create a `.env.local` file in the `apps/cms` directory with the following variables:

```
DATABASE_URI=postgres://<username>:<password>@localhost:5432/<databasename>
PAYLOAD_SECRET=<your-secure-secret-key>
```

- `DATABASE_URI`: Connection string for your **running** PostgreSQL database
- `PAYLOAD_SECRET`: A secure random string used for encrypting sensitive information

  > You can generate one using this command:

  ```bash
  # On windows, use the git bash terminal and not the normal CMD or Powershell

  openssl rand -base64 20 # Copy the random value that's printed and paste it in the `.env` file
  ```

## Documentation 📚

### Official Documentation

- [Payload CMS Documentation](https://payloadcms.com/docs)

### Internal Documentation

- For project-specific documentation, check the `docs/` directory in the monorepo root
- API endpoints are automatically documented at `/admin/api-docs` when running the CMS

## Common Tasks 🛠️

### Adding a New Collection

1. Create a new file in `src/collections/`
2. Define your collection schema
3. Export it in `src/collections/index.ts`
4. Update the [Payload config](./src/payload.config.ts) to include your new collection

### Generating TypeScript Types

After making changes to your collections, generate updated TypeScript types:

```bash
npm run generate:types
```

## Troubleshooting 🔧

### Common Issues

#### Database Connection Errors

- Verify your `DATABASE_URI` environment variable
- Ensure PostgreSQL is running and accessible

#### Build Errors

- Check that you're using compatible Node.js version
- Run `npm install` from the monorepo root to ensure all dependencies are installed
- Try again with `npm run devsafe`

#### Admin UI Not Loading

- Check browser console for errors
- Verify that `PAYLOAD_SECRET` is set correctly

### Getting Help

If you encounter any issues that aren't covered here:

1. Check the existing issues in the GitHub repository
2. Ask in the Help category in discussions
3. Create a new issue with detailed information about your problem

---

<p align="center">Made with ❤️ by GKSS UNISA Team</p>
