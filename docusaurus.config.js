// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Poiyomi Shaders",
  tagline: "Free Shaders for Unity and VRChat",
  url: "https://poiyomi.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "poiyomi", // Usually your GitHub org/user name.
  projectName: "PoiyomiToonShader", // Usually your repo name.

  plugins: [
    [
      require.resolve("@docusaurus/plugin-client-redirects"),
      {
        fromExtensions: ["html", "htm"], // /myPage.html -> /myPage
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            from: "/special-fx/udim-discard",
            to: "/special-fx/uv-tile-discard",
          },
          {
            from: "/general/substance-export",
            to: "/general/substance-painter",
          },
          {
            from: '/grab-pass/grabpass',
            to: '/grabpass/',
          },
          {
            from: "/color-and-normals/global-themes",
            to: "/modifiers/global-themes",
          },
          {
            from: '/outlines/main',
            to: '/outlines/',
          },
          {
            from: "/modifiers/distortion-uv",
            to: "/modifiers/uvs/distortion-uv",
          },
          {
            from: "/modifiers/panosphere-uv",
            to: "/modifiers/uvs/panosphere-uv",
          },
          {
            from: "/modifiers/polar-uv",
            to: "/modifiers/uvs/polar-uv",
          },
          {
            from: "/modifiers/parallax",
            to: "/modifiers/uvs/parallax",
          },
          {
            from: "/post-processing/pp-animations",
            to: "/modifiers/post-processing/pp-animations",
          },
          {
            from: "/post-processing/main",
            to: "/modifiers/post-processing/main",
          },
          // Redirect from multiple old paths to the new path
          // {
          //   to: '/docs/newDoc2',
          //   from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
          // },
        ],
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          showLastUpdateTime: true,
        },
        // blog: true,

        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      colorMode: {
        defaultMode: "dark",
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      navbar: {
        logo: {
          alt: "Poiyomi Text Logo",
          src: "img/logo.svg",
          width: 44,
          height: 32
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog: Updates & Tips", position: "left" },
          {
            to: "poiyomitoonvcc", 
            label: "Poiyomi Toon VCC",
            position: "left",
          },
          {
            href: "https://twitter.com/poiyomi",
            label: "Twitter",
            position: "right",
          },
          {
            href: "https://discord.gg/poiyomi",
            label: "Discord",
            position: "right",
          },
          {
            href: "https://github.com/poiyomi/PoiyomiToonShader",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
