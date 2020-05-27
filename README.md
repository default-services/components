# Default Component Library

> Default component library for React

[![NPM](https://img.shields.io/npm/v/default-component-library?color=%2357a9a9&style=for-the-badge)](https://www.npmjs.com/package/default-component-library)
[![Build](https://img.shields.io/badge/build-passing-%2357a9a9?style=for-the-badge)](https://github.com/Default-Component-Library/default-component-library)
[![License](https://img.shields.io/github/license/Default-Component-Library/default-component-library?color=%2357a9a9&style=for-the-badge)](https://github.com/Default-Component-Library/default-component-library/blob/master/LICENSE)

## Demo
See our Storybook demo, hosted right here on GitHub pages.<br>
[Default Component Library](https://default-component-library.github.io/default-component-library)

## Install
```bash
npm i default-component-library
```

**or..**

```bash
yarn add default-component-library
```

## Usage

```jsx
import React, { Component } from 'react';
import Button from 'default-component-library';
import 'default-component-library/dist/index.css';

const MyComponent = props => {
  return (
    <div>
      <Button />
    </div>
  );
};
```

# For Developers

## Storybook
Default component library is equipped with [Storybook](https://storybook.js.org/) to assist with developing and viewing components. Starting storybook will allow you to view your current work on `localhost`.

## Scripts
See `script-comments` in `package.json` for scripts and usage details.

## License

MIT © [Default Component Library](https://github.com/Default-Component-Library)