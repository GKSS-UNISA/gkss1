# Getting Started GKSS (UNISA)

---

This project is built in React with Vite, using feature-based structure.
example of the structure:

### Project Structure

```
my-app/
├── public/               # Static assets (copied as-is)
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── app/              # App-wide setup
│   │   ├── layout/
│   │   ├── providers/    # Context providers
│   │   └── router/       # Routing configuration
│   │
│   ├── assets/           # Processed assets (images, fonts)
│   │   ├── images/
│   │   └── styles/       # Global styles
│   │
│   ├── components/       # Shared UI components
│   │   ├── ui/          # Primitive components (buttons, inputs)
│   │   ├── layout/      # Layout components
│   │   └── shared/      # App-wide shared components
│   │
│   ├── features/         # Feature-based modules
│   │   ├── auth/        # Example feature
│   │   │   ├── api/     # Feature-specific API calls
│   │   │   ├── components/
│   │   │   ├── hooks/   # Feature-specific hooks
│   │   │   └── types/   # Feature-specific types
│   │   └── ...         # Other features
│   │
│   ├── lib/              # Utilities/helpers
│   ├── pages/            # Page components (if using file-based routing)
│   ├── stores/           # State management (Zustand/Redux)
│   ├── types/            # Global TypeScript types
│   ├── App.tsx           # Main App component
│   └── main.tsx          # Entry point
│
├── .env                  # Environment variables
├── index.html            # Vite entry point
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript config
└── package.json
```

### Feature Structure

```
features/
└── auth/
    ├── components/     # Auth-specific components
    │   ├── LoginForm.tsx
    │   └── RegisterForm.jsx
    ├── hooks/         # Auth hooks
    │   └── useAuth.ts
    ├── services/      # Auth API calls
    │   └── authAPI.ts
    ├── types/         # Auth-related types
    │   └── authTypes.ts
    ├── context/       # Auth context
    │   └── AuthContext.tsx
    └── index.ts       # Public API of the feature
```

---

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Learn More

You can learn more in the [Create React Index documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---
