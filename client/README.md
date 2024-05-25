# React + Vite

Project structure:
```
└── src/
    ├── assets/
    ├── api/
    ├── components/
    │  ├── SomeComponent.jsx
    │  ├── SomeComponent.jsx
    │  └── NAvbar.jsx
    ├── sections/
    │  ├── Hero.jsx
    │  └── AnotherPage.jsx
    ├── hooks/
    │  ├── useAuth.jsx
    ├── styles/
    │  ├── variables.css
    │  └── Hero.module.css
    └── utils/
```
src/
The root directory for the source code of the project.

assets/
This directory typically contains static files such as images, fonts, icons, and other media assets.

api/
This directory is usually used for API-related code, such as utility functions for making HTTP requests, handling API responses, or managing authentication tokens.

components/
This directory contains reusable components that can be used throughout the application. Components are often small, self-contained units of UI, such as Navbar , Card ...etc

sections/
This directory is for larger sections or pages of the application, which may be composed of multiple components.

hooks/
This directory contains custom hooks.

styles/
This directory contains stylesheets. It can include both global styles and module-specific styles:

utils/
This directory typically contains utility functions that are used across the application. it might include helper functions for data manipulation, formatting, or other common tasks.

install dependencies

`npm install`

run local server

`npm run dev`
