// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

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
            to: '/extended-features/grabpass',
          },
          {
            from: '/grabpass',
            to: '/extended-features/grabpass',
          },
          {
            from: '/geometric-dissolve',
            to: '/extended-features/geometric-dissolve',
          },
          {
            from: "/color-and-normals/global-themes",
            to: "/modifiers/global-themes",
          },
          {
            from: '/outlines/main',
            to: '/outlines/',
          },
          //
          // HIDDEN PAGES COMMENTED OUT. RE-EXPOSE THESE WHEN THESE PAGES ARE COMPLETE.
          //
          //{
          //  from: "/modifiers/distortion-uv",
          //  to: "/modifiers/uvs/distortion-uv",
          //},
          //{
          //  from: "/modifiers/panosphere-uv",
          //  to: "/modifiers/uvs/panosphere-uv",
          //},
          //{
          //  from: "/modifiers/polar-uv",
          //  to: "/modifiers/uvs/polar-uv",
          //},
          //
          // END OF HIDDEN REDIRECTS
          //
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
          {
            // Redirect old VCC Webpage to new "Download & Install" page.
            from: "/poiyomitoonvcc",
            to: "/download/",
          }
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
          blogSidebarTitle: 'All Posts',
          blogSidebarCount: 'ALL',
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

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        indexDocs: true,
        indexBlog: true,
        indexPages: false,
        docsRouteBasePath: "/",
        blogRouteBasePath: "/blog",
        language: "en",
        hashed: true,
        searchBarPosition: "auto",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true
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
          height: 44,
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            to: "/download",
            label: "Download & Install",
            position: "left"
          },
          {
            to: "/blog",
            label: "Blog: Updates & Tips",
            position: "left"
          },
          {
            href: "https://x.com/poiyomi",
            label: "Twitter / X",
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
          {
            type: "search",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
      footer: {
        logo: {
          alt: "Poiyomi Logo",
          src: "img/circle_logo.svg",
          width: 80,
          height: 80,
        },
        links: [
          {
            title: "Featured Pages",
            items: [
              {
                label: "Download & Install",
                to: "/download",
              },
              {
                label: "Locking and Animation",
                to: "/general/locking",
              },
              {
                label: "Color & Normals",
                to: "/color-and-normals/main",
              },
              {
                label: "Shading",
                to: "/shading/main",
              },
              {
                label: "Reflections & Specular",
                to: "/shading/reflections-and-specular",
              },
              {
                label: "Outlines",
                to: "/outlines",
              },
              {
                label: "UV Tile Discard",
                to: "/special-fx/uv-tile-discard",
              },
              {
                label: "Emission",
                to: "/special-fx/emission",
              },
              {
                label: "Glitter / Sparkle",
                to: "/special-fx/glitter",
              },
              {
                label: "AudioLink",
                to: "/audio-link",
              },
              {
                label: "Global Masks",
                to: "/modifiers/global-masks",
              },
              {
                label: "Rendering",
                to: "/rendering/main"
              },
              {
                label: "Thry Editor",
                to: "/thryeditor/enduser",
              }
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/poiyomi",
              },
              {
                label: "Twitter / X",
                href: "https://x.com/poiyomi",
              },
              {
                label: "GitHub",
                href: "https://github.com/poiyomi",
              },
              {
                label: "BOOTH",
                href: "https://poiyomi.booth.pm/",
              },
            ],
          },
          {
            title: "Where to Download",
            items: [
              {
                label: "GitHub Repository",
                href: "https://github.com/poiyomi/PoiyomiToonShader",
              },
              {
                label: "BOOTH Listing",
                href: "https://poiyomi.booth.pm/items/4841309",
              },
              {
                label: "VCC Repository",
                href: "vcc://vpm/addRepo?url=https%3A%2F%2Fpoiyomi.github.io/vpm/index.json",
              },
            ],
          },
          {
            title: "About",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "FAQ / Troubleshooting",
                to: "/general/faq",
              },
              {
                label: "Terms of Service",
                to: "/terms-of-service",
              },
              {
                label: "Credits",
                to: "/credits",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Poiyomi Inc. Built with Docusaurus.`,
      }
    }),
};

module.exports = config;
