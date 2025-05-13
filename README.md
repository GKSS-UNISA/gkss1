# GKSS1 Monorepo 🚀

## What is a Monorepo? 📚

A monorepo (monolithic repository) is a version control repository that contains multiple projects or applications within a single repository. This approach offers several benefits:

- Shared code and dependencies
- Consistent tooling and configurations
- Easier collaboration across projects
- Simplified dependency management
- Unified version control

## Repository Structure 📁

```
gkss1/
├── apps/                  # Contains all applications
│   ├── site/              # Main website (Vite + HTML/CSS/JS)
│   └── react-site/        # React-based website
├── packages/              # Shared packages and utilities
├── package.json           # Root package.json for workspace management
└── turbo.json             # Turborepo configuration
```

## Prerequisites 🛠️

Before you start development, ensure you have the following software installed:

### Node.js and npm

- Node.js 18.x or later
- npm 9.x or later

To install Node.js and npm:

1. Visit [Node.js official website](https://nodejs.org/)
2. Download and install the LTS version
3. Verify installation:

```bash
node --version
npm --version
```

##### Turborepo (Build tool)

```bash
npm install -g turbo@2.5
```

### Python 3.10+

Required for various development tools and scripts.

#### Linux (Ubuntu/Debian):

> If you are using linux, you probably know what you're doing so the Linux docs will be centered around Ubuntu Linux. Feel free to reach out in the whatsapp group for help though. If, you aren't in the group, feel free to create an issue and someone will attend to you.

```bash
sudo apt update
sudo apt install python
```

#### macOS:

```bash
brew install python
```

#### Windows:

1. Visit [Python Downloads](https://www.python.org/downloads/)
2. Download Python 3.10 or later
3. Run the installer (make sure to check "Add Python to PATH")

Verify Python installation:

```bash
# Linux & macOS
python3 --version

# Windows
python --version
```

### Git

- Git 2.x or later

Installation:

- **Linux**: `sudo apt install git`
- **macOS**: `brew install git`
- **Windows**: Download from [Git website](https://git-scm.com/download/win)

Verify Git installation:

```bash
# Linux & macOS
git --version

# Windows
git --version
```

## Getting Started 🚀

1. First create your fork of the [gkss1 repo](https://github.com/GKSS-UNISA/gkss1).

2. Clone the repository:

```bash
git clone https://github.com/<your-github-username>/gkss1.git
cd gkss1
```

3. Install dependencies:

```bash
npm install
```

4. Start development:

> This command will run all apps' development servers and might make your machine slower. Rather navigation to the app your want to work on and run this command.

```bash
npm run dev
```

## Where to? 🧭

### Frontend Development

- Main website: [apps/site/](./apps/site/) - Built with Vite, HTML, CSS, and JavaScript
- React website: [apps/react-site/](./apps/react-site/)

### Shared Packages

- Check the [packages/](packages/) directory for shared utilities and components

## Development Guidelines 📝

1. Always create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
```

2. Follow the existing code style and formatting rules
3. Write meaningful commit messages
4. Test your changes before submitting a pull request

## Contributing 🤝

Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting pull requests.

## Support 💬

For any questions or issues:

1. Check the documentation in each app's README
2. Create an issue in the repository
3. Reach out to the maintainers

---

<p align="center">Made with ❤️ by GKSS UNISA Team</p>
