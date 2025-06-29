// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Poiyomi Shaders",
  tagline: "Toon Shaders for Unity and VRChat",
  url: "https://www.poiyomi.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenAnchors: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "poiyomi", // Usually your GitHub org/user name.
  projectName: "PoiyomiDocs", // Usually your repo name.

  future: {
    experimental_faster: true,
    v4: true,
  },

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
          {
            from: '/modifiers/parallax',
            to: '/modifiers/uvs/parallax',
          },
          {
            from: '/post-processing/pp-animations',
            to: '/modifiers/post-processing/pp-animations',
          },
          {
            from: '/post-processing/main',
            to: '/modifiers/post-processing/main',
          },
          {
            // Redirect old VCC Webpage to new "Download & Install" page.
            from: '/poiyomitoonvcc',
            to: '/download/',
          },
          {
            from: '/general/v7-upgrade',
            to: '/general/upgrade/v7-upgrade',
          },
          {
            from: '/general/v8-to-v9-upgrade',
            to: '/general/upgrade/v8-upgrade',
          },
          {
            // Stylized Specular renamed to Stylized Reflections in 9.2.10
            from: '/shading/stylized-specular',
            to: '/shading/stylized-reflections',
          },
          {
            // Vertex Options moved to new category in 9.3 release cycle.
            from: '/color-and-normals/vertex-options',
            to: '/vertex-options/basics',
          },
          {
            // Vertex Glitching moved to new category in 9.3 release cycle.
            from: '/color-and-normals/vertex-glitching',
            to: '/vertex-options/glitching',
          },
          {
            // Vertex Colors moved to new category in 9.3 release cycle.
            from: '/color-and-normals/vertex-colors',
            to: '/vertex-options/vertex-colors',
          }
          // Redirect from multiple old paths to the new path
          // {
          //   to: '/docs/newDoc2',
          //   from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
          // },
        ],
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'second-blog',
        routeBasePath: 'changelog',
        path: './changelog',
        blogTitle: 'Changelog',
        blogDescription: 'All Changelogs from the latest versions of Poiyomi Shaders.',
        showReadingTime: true,
        blogSidebarTitle: 'All Changelogs',
        blogSidebarCount: 'ALL',
        onUntruncatedBlogPosts: 'ignore',
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
          // editUrl: 'https://github.com/poiyomi/PoiyomiDocs',
          showLastUpdateTime: true,
        },
        // blog: true,

        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All Posts',
          blogSidebarCount: 'ALL',
          onUntruncatedBlogPosts: 'ignore',
          // Please change this to your repo.
          // editUrl:
          // 'https://github.com/poiyomi/PoiyomiDocs',
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
        indexPages: true,
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
      metadata: [
        // Place global <meta> tags here!
        {name: 'keywords', content: 'poiyomi, shaders, shader, vrchat, poiyomi shaders, blog, docs, documentation, toon, realistic, unity'}, // IMPORTANT SEO KEYWORDS! DO NOT REMOVE!
        {name: 'twitter:card', content: 'summary_large_image'}, // Used for Twitter Cards.
        {name: 'apple-mobile-web-app-title', content: 'Poiyomi'}, // Used for Apple Devices.
      ],
      headTags: [
        // Place global <link> tags here!
        {
          tagName: 'link',
          attributes: {
            rel: 'preconnect', // Hints to Browsers to preload resources from the origin during search.
            href: 'https://www.poiyomi.com',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'canonical', // Broadcasts the canonical URL of the website.
            href: 'https://www.poiyomi.com',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'apple-touch-icon', // Used for Apple Devices because Apple is very petty with their WebKit.
            href: '/img/apple-touch-icon.png',
          }
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'manifest', // Used for Favicon Manifest. Common on Android.
            href: '/img/site.webmanifest',
          },
        },
      ],
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
      // announcementBar: {
      //  id: 'alert_critical',
      //  content: 'Global Announcement goes here.',
      //  backgroundColor: '#ff0033',
      //  textColor: '#ffffff',
      //  isCloseable: true,
      // },
      navbar: {
        title: "Poiyomi Shaders",
        logo: {
          alt: "Poiyomi Circle Logo",
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
            type: "dropdown",
            label: "Blog & Updates",
            position: "left",
            items: [
              {
                label: "Blog: Tips & Tricks",
                to: "/blog",
              },
              {
                label: "Changelogs",
                to: "/changelog",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Community",
            position: "right",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/poiyomi",
              },
              {
                label: "Bluesky",
                href: "https://bsky.app/profile/poiyomi.com",
              },
              {
                label: "Twitter / X",
                href: "https://x.com/poiyomi",
              },
              {
                label: "GitHub",
                href: "https://github.com/poiyomi/PoiyomiToonShader",
              },
              {
                label: "BOOTH",
                href: "https://poiyomi.booth.pm/",
              }
            ],
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
                label: "Screen Space Ambient Occlusion",
                to: "/shading/ssao",
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
                label: "Bluesky",
                href: "https://bsky.app/profile/poiyomi.com",
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
