# GifExpert - React + Vite 

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- Tests JEST

# Configuracion del entorno de test

Instalación y configuracion de Jest + React Testing Library
En proyectos de React + Vite

    1.- Instalaciones:

yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom

    2.- Opcional: Si usamos Fetch API en el proyecto:

yarn add --dev whatwg-fetch

    3.- Actualizar los scripts del package.json

"scripts: {
  ...
  "test": "jest --watchAll"

    4.- Crear la configuración de babel babel.config.js

module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};

    5.- Opcional, pero eventualmente necesario, crear Jest config y setup:

jest.config.js

module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}

jest.setup.js

// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch

    6.- Añadir los propTypes --> yarn add prop-types
    - import PropTypes from 'prop-types'; - En las clases donde queramos usarlos
