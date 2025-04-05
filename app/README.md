# Getting Started GKSS (UNISA) 

---

This project is built in reactjs, using Feature based structure.

example of the structure:

### Project Structure
```
src/
├── features/          # Feature modules
│   ├── auth/          # Authentication feature
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── index.ts
│   ├── dashboard/     # Dashboard feature
│   └── products/      # Products feature
├── lib/               # Reusable utilities/helpers
├── app/               # App configuration, routing
├── assets/            # Static assets
├── styles/            # Global styles
└── main.tsx           # App entry point
```

### Feature Structure
``` 
features/
└── auth/
    ├── components/     # Auth-specific components
    │   ├── LoginForm.tsx
    │   └── RegisterForm.tsx
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

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---
