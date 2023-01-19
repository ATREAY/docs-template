/**
 * Copyright (c) ConsenSys Software, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docSidebar: [
    "intro",
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "generated-index", // Specifing this without additional parameters here will default to _category_.json in each folder
      },
      items: [
        {
          type: "autogenerated",
          dirName: "getting-started", // '.' means the current docs folder
        },
      ],
    },
    {
      type: "category",
      label: "Advanced",
      link: {
        type: "generated-index", // Specifing this without additional parameters here will default to _category_.json in each folder
      },
      items: [
        {
          type: "autogenerated",
          dirName: "advanced", // '.' means the current docs folder
        },
      ],
    },
    {
      type: "category",
      label: "Tutorial - Basics",
      link: {
        type: "generated-index", // Specifing this without additional parameters here will default to _category_.json in each folder
      },
      items: [
        {
          type: "autogenerated",
          dirName: "tutorial-basics", // '.' means the current docs folder
        },
      ],
    },
    {
      type: "category",
      label: "Tutorial - Extras",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "tutorial-extras", // '.' means the current docs folder
        },
      ],
    },
  ],
  apiSidebar: [
    {
      type: "category",
      label: "Teku",
      link: {
        type: "generated-index",
        title: "Test API",
        slug: "/category/test-api",
      },
      // @ts-ignore
      // eslint-disable-next-line global-require
      items: require("./docs/test-api/sidebar.js"),
      // items: [
      //   {
      //     type: "autogenerated",
      //     dirName: "test-api", // '.' means the current docs folder
      //   },
      // ],
    },
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
