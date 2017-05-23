# PAS-MVP
Park and Sleep production


## Setup:

##### package.json

```json
"dependencies": {
  "babel-core": "^6.24.1",
  "babel-preset-env": "^1.5.1",
  "babel-loader": "^7.0.0",
  "babel-preset-react": "^6.24.1",
  "express": "^4.15.3",
  "mongodb": "^2.2.26",
  "react": "^15.5.4",
  "react-dom": "^15.5.4",
  "webpack": "^2.5.1",
  "webpack-dev-middleware": "^1.10.2"
},
"devDependencies": {
  "babel-eslint": "^7.2.3",
  "eslint": "^3.19.0",
  "eslint-config-airbnb": "^14.1.0",
  "eslint-plugin-import": "^2.2.0",
  "eslint-plugin-jsx-a11y": "^4.0.0",
  "eslint-plugin-react": "^6.10.3",
  "pre-commit": "^1.2.2",
  "react-hot-loader": "^1.3.1"
}
```
**babel-core:** installs babel so we can use es6 and jsx.

**babel-preset-env:**A Babel preset that can automatically determine the Babel plugins and polyfills you need based on your supported environments.

**babel-loader:** allows trans-piling of javascript files using babel and webpack

**babel-preset-react:** transform jsx into createElement calls.

**react:** gives you access to react javascript framework

**react-dom:** provides DOM specific react methods.

**webpack:** bundles all your files together into 1 file and works with babel to convert es6 to es5.

**webpack-dev-middleware:** its a small middleware for a connect bases middleware stack (allows you to run webpack with a server). Recompiles your bundle.js on every file change and serves them from memory.

**react-hot-loader:** allows you to tweak react components in real time.

##### package.json scripts

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "compile": "webpack",
  "start": "node server.js",
  "precommit-msg": "echo 'Pre-commit checks..' && exit 0",
  "lint": "eslint ./ --ignore-pattern .gitignore"
},
```
**compile:** running this script bundles all your code into 1 file.

##### .babelrc
```json
{
  "presets": [
    "env",
    "react"
  ]
}
```

##### webpack.config.js
```javascript
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader'
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
```

**context:** path to your client side js folder.

**entry:** entry point for your application.

**output:** tells webpack where to output your bundle.js file.

**module.rules:** specifies how each file need to be processed before it is combined into your bundle.js

**resolve:** this where webpack should look for files referenced by and `import` or `require()` statement.

##### .eslintrc

```json
{
  parser: "babel-eslint",
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
  "extends": ["airbnb-base"],
  "globals": {
    "document": true,
    "done": true,
    },
  "plugins": [
    "react"
  ],
}
```
**Lints react and jsx**
