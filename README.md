# ANEW INC

This project is a starter template using **Vite**, **TypeScript**, **React**, **ESLint**, **Prettier**, and **Husky** for fast development, clean code, and type checking. It includes pre-configured setups for linting, formatting, and type checking, along with Git hooks for quality control before commits.

## Features

- **Vite**: Fast development server and build tool.
- **TypeScript**: Strongly typed JavaScript for safer code.
- **ESLint**: Enforces code quality and consistency.
- **Prettier**: Automatically formats code to a standard style.
- **Husky**: Adds Git hooks for linting and formatting checks before commits.
- **React**: UI library for building component-based user interfaces.
- **React Router**: For navigation between pages in your React application.

## Config Prettier/Eslint

```bash
yarn create vite
yarn vite-tsconfig-paths
yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier
yarn add husky lint-staged --dev

tsconfig.json/eslint.config/prettierrc/
```


### Prerequisites

- **Node.js** (v14 or higher)
- **Yarn** (recommended) or **npm**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hi991016/anew-inc
   cd anew-inc
   yarn
   ```

   Start the development server:
   ```bash
   yarn dev
   yarn build
   serve -s dist
   ```