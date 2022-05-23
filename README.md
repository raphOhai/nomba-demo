# Table of Contents

1. [Overview](#overview)
2. [Folder Structure](#folder-structure)
3. [Creating Pages](#creating-pages)
4. [Deployment](#deployment)
5. [Any questions](#any-questions)

## Overview

This project was bootstrapped using **GatsbyJS** as a static site generator and **tailwindcss** for styling. If you are already comfortable writing ReactJS, you shouldn't have any problem(s) finding your way around the codebase.

In building this website, we have tried to keep things as atomic as possible which we hope will make it easy to create new pages and serve as a solid foundation to building new components.

## Folder Structure

The `src` folder contains all the source code for this project. We have setup absolute paths to make it easy to import stuffs and avoid the menace of using relative paths. You can find all absolute paths in `gatsby-config.js` and add new ones as you deem fit; this was made possible using [gatsby-plugin-root-import](https://www.gatsbyjs.com/plugins/gatsby-plugin-root-import/?=root)

A brief description is given about each folder below

- ##### assets

Images, svgs, pdfs, videos, any `asset` or any static resources go in here. For now, there are two major folders in here

| Folder | Description/Subdirectory         |
| ------ | -------------------------------- |
| Fonts  | Brand typography                 |
| images | gifs, illustrations, jpegs, svgs |

`gifs`, `svgs` and `illustrations` are deliberately not categorized within their folders because they tend to be used across multiple pages and parts of the website while jpegs are categorized based on the pages they appear on. Images that appear on mulitple pages or components live in the root of the `jpegs` folder.

- #### components

This refers to anything at the atomic level, think: button, input, link, even breaks, etc. We have done a detailed breakdown of the various components in [src/components/README.md](src/components/README.md)

- #### config

Basically contains data used to feed various sections of the website.

- #### mocks

Anything that should be in a CMS currently on the website

- #### style

Contains `global.css` for global stylings

- #### templates

This is used to hold the various sections of each page of the website. Kindly refer to the [Creating Pages](#creating-pages) for more information about this

- #### utils

Currently only holds `validators`

#### Working with SVG

We import svg directly as components in order to save us the hassle converting the svg to `jsx`. We have also setup absolute paths for the svg, so you can do something like:

```jsx
import Logo from "svgs/logo.svg";

const Component = () => {
  return <Logo />;
};

export default Component;
```

This was made possible using [gatsby-plugin-react-svg](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-svg/)

## Creating Pages

All pages are in `src/pages` directory. A file in this directory stands for a page `e.g about-us.js`. All the components/sections of a page are stored in a template folder for that page that can be found in `src/templates/page-name`. If you want to create a new page say `/test`. Here is the ideal step you should follow:

1. Create a folder for `test` in `src/templates`
2. Create an `index.js` file that will be used to export the various components/sections
3. Create a folder for each section of the page inside `test` folder which will contain the following files:

| File               | Description                             |
| ------------------ | --------------------------------------- |
| `section-name.jsx` | The code for the component goes in here |
| `index.js`         | To export the component                 |

Why use a folder for each section? Well, in case you need to add subcomponents to your component, you want to ensure that related things are close to each other.

4. Create `test.js` in `src/pages` with the following boilerplate code:

```js
import React from "react";
import Layout from "components/layout";

const TestPage = () => {
  return (
    <Layout title="Test Page">
      <div></div>
    </Layout>
  );
};

export default TestPage;
```

This was made possible using [gatsby-plugin-react-svg](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-svg/)

## Creating Pages

All pages are in `src/pages` directory. A file in this directory stands for a page `e.g about-us.js`. All the components/sections of a page are stored in a template folder for that page that can be found in `src/templates/page-name`. If you want to create a new page say `/test`. Here is the ideal step you should follow:

1. Create a folder for `test` in `src/templates`
2. Create an `index.js` file that will be used to export the various components/sections
3. Create a folder for each section of the page inside `test` folder which will contain the following files:

| File               | Description                             |
| ------------------ | --------------------------------------- |
| `section-name.jsx` | The code for the component goes in here |
| `index.js`         | To export the component                 |

Why use a folder for each section? Well, in case you need to add subcomponents4 to your component, you want to ensure that related things are close to each other.

4. Create `test.js` in `src/pages` with the following boilerplate code:

```js
import React from "react";
import Layout from "components/layout";

const TestPage = () => {
  return (
    <Layout title="Test Page">
      <div></div>
    </Layout>
  );
};

export default TestPage;
```

_If you are on Vscode, you can use `nwp` to generate a snippet we have for created for this boilerplate code. If VScode doesn't auto suggest `nwp`, press `ctrl + space` and press `nwp`_

This is the starting point for all pages containing a `Layout` component which accepts the page title as a `prop`.
You can also pass an additional `prop` of `ignoreSiteName` if you don't want the brand name to be automatically appended to the page title. See `src/pages/index.js` for reference

5. Import the various sections for the page from its template folder as shown below:

```
import {
Section1,
Section2,
Section3
} from "templates/test";
```

N/B Because of the way `gatsby` routing works, pages with parents should be put in a parent folder

### Deployment

We deploy to `gatsby-cloud` because it supports a lot of `gatsbyJS` features out of the box. However, depending on your infrastructure (Digital Ocean, AWS, etc) you deploy the application and set up a CI/CD pipeline.

### Any questions

Please send a mail to dev@fourthcanvas.co
