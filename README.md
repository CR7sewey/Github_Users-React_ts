# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Project Setup

```sh
npm create vite@latest github_project -- --template react-ts
```

## Remove Boilerplate

## React Icons

[React Icons - Main Docs](https://react-icons.github.io/react-icons/)

```sh
npm install react-icons --save
```

## React Router Dom

- [react-router-dom - Main Docs](https://reactrouter.com/web/guides/quick-start)

```sh
npm i react-router-dom
```

## Gihthub API

- [Root Endpoint](https://api.github.com)
- [Get User](https://api.github.com/users/wesbos)
- [Repos](https://api.github.com/users/CR7sewey/repos?per_page=100)
- [Followers](https://api.github.com/users/CR7sewey/followers)
- [Rate Limit](https://api.github.com/rate_limit)

For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

## Tailwind

[Tailwind Docs](https://tailwindcss.com/docs/guides/vite)

- add tailwind

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- rename to tailwind.config.cjs
- add following content

tailwind.config.cjs

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- [DaisyUI](https://daisyui.com/)

- add and configure daisyui to our project
- add TailwindCSS Typography plugin

```sh
npm i  -D daisyui@latest @tailwindcss/typography
```

tailwind.config.js

```js
{
 plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
```

## Pages

- Login
- LandingPage
- HomeLayout
- Error
- Dashboard

## Components

- NavSearch
- UserInformations

## React Router Dom

## 1- Error: Completed

```js
export const Error = () => {
  const error = useRouteError();
  if (error?.status === 404) {
    return (
      <div className="error">
        <div>
          <h1 className="animate-pulse">404</h1>
          <h3>Page not found</h3>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary ">
              <IoIosArrowDropleft />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="grid min-h-[100vh] place-items-center px-8 ">
      <h4 className="text-center font-bold text-4xl">There was an error... </h4>
    </main>
  );
};
```

## 2 - Login: Partial

```js
import loginImg from "../assets/login-img.svg";

export const Login = () => {
  return (
    <div className="min-h-screen grid place-items-center bg-slate-200">
      <section className="w-screen max-w-screen-sm text-center ">
        <img src={loginImg} alt="login" className="mb-8" />
        <h1>
          <button className="btn">Login</button>
        </h1>
      </section>
    </div>
  );
};
```

## 3 - NavSearch: Partial

```js
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

export const NavSearch = () => {
const [searchUser, setSearchUser] = useState("");

return (
<div className="navsearch">
<form method="GET" className="bg-slate-100">
        <MdSearch />

        <input
          type="search"
          name="search"
          value={searchUser}
          className="outline-gray-400 text-gray-600 placeholder:text-gray-800"
          onChange={(e) => setSearchUser(e.target.value as string)}
          placeholder={`Enter a Github User...`}
        />
        <button
          type="submit"
          className="bg-cyan-600 text-white hover:bg-cyan-700 hover:text-zinc-200 transition"
        >
          search
        </button>
      </form>
      <h3 className="text-gray ">Requests: 60 / 60</h3>
    </div>
);
};
```

## 4 - UserInformation: Partial

```js
import { items } from "../utils/infos";
import { Info } from "../utils/types";

export const UserInformations = () => {
  return (
    <section className="section ">
      <div className="section-center info">
        {items.map((val) => {
          return <Item key={val.id} {...val} />;
        })}
      </div>
    </section>
  );
};

export const Item = ({ label, icon, color, value }: Info) => {
  return (
    <article className="item">
      <span className={color}>{icon}</span>
      <div>
        <h3 className="text-gray-950 font-bold text-4xl">{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );
};
```

## 5 - User

```js
import { useState } from "react";
import mockUser from "../utils/mockData/userData";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

export const User = () => {
  const [user, setUser] = useState(mockUser);
  console.log(user);
  return (
    <section className="section">
      <section className="section-center pt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
        <article className="card">
          <header>
            <img
              src={user.avatar_url}
              alt={user.name}
              className="hover:w-32 hover:h-32"
            />
            <div>
              <h4 className="font-bold">{user.name}</h4>
              <p>@{user.twitter_username || "miguel"}</p>
            </div>
            <a href={user.html_url}>Follow</a>
          </header>
          <p className="bio mb-5">{user.bio}</p>
          <div className="links">
            <p>
              <MdBusiness /> {user.company || "No Company"}
            </p>
            <p>
              <MdLocationOn />
              {user.location || "Earth"}
            </p>
            <a href={`https://${user.blog}`}>
              <MdLink />
              {user.blog || "No blog"}
            </a>
          </div>
        </article>
      </section>
    </section>
  );
};
```

## Fusion Charts

- [Fusion Charts - Main Docs](https://www.fusioncharts.com/)
- [First React Chart](https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react)
- [List Of Charts](https://www.fusioncharts.com/dev/chart-guide/list-of-charts)
- [Themes](https://www.fusioncharts.com/dev/themes/introduction-to-themes)
