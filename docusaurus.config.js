module.exports = {
  title: 'Bit Integrations | Connect 3rd party platfroms with WordPress',
  tagline: 'Integration plugin for WordPress',
  url: 'https://docs.bit-integrations.bitapps.pro/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Bit-Apps-Pro',
  projectName: 'bit-integrations-doc',
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: '💡',
        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '🌑',

        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    navbar: {
      title: 'Bit Integrations',
      logo: {
        alt: 'Bit Integrations Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          activeBaseRegex: '^((?!changelog).)*$',
          label: 'Docs',
          position: 'left',
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          to: '/changelog/bit-integrations-changelog-timeline',
          label: 'Changelogs',
          position: 'left',
          activeBasePath: '/changelog'
        },
        {
          href: 'https://tawk.to/chat/60eac4b6d6e7610a49aab375/1faah0r3e',
          label: 'Support',
          position: 'left',
        },
        {
          href: 'https://downloads.wordpress.org/plugin/bit-integrations.zip',
          label: 'Free Download',
          position: 'right',
          className: 'download-btn'
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'left',
        // },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Install & Activate',
              to: 'install-activate-bit-integrations',
            },
            {
              label: 'Trigger',
              to: 'trigger/trigger-wpcf7',
            },
            {
              label: 'Actions',
              to: 'integrations/wpcf7-activecampaign',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/groups/bitcommunityusers',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCjUl8UGn-G6zXZ-Wpd7Sc3g',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Changelog',
              to: 'changelog/bit-integrations-changelog-timeline/',
            },
            {
              label: 'GitHub',
              href: '/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bit Apps.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          // path: './docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Bit-Apps-Pro/bit-integrations-doc/blob/main',
        },
        blog: false,
        pages: false,
        // changelog: {
        //   path: 'changelog',
        //   sidebarPath: require.resolve('./sidebars.clog.js'),
        //   // routeBasePath: '/wp-bit-form-changelog',
        // },
        // blog: {
        //   showReadingTime: true,
        //   editUrl: 'https://github.com/Bit-Apps/bitform-documentation',
        // },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/utility.css'),
          ]
        },
      },
    ],
  ],
  plugins: [
    '@docusaurus/plugin-ideal-image',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexPages: true,
        // indexBlog: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ]
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700;800&display=swap',
    { href: '/css/lite-yt-embed.css' }
  ],
  scripts: [
    { src: '/scripts/custom.js', defer: true },
    { src: '/scripts/lite-yt-embed.js', defer: true },
    { src: 'https://browser.sentry-cdn.com/6.11.0/bundle.tracing.min.js', defer: true }
  ],
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'fr', 'fa'],
  //   localeConfigs: {
  //     en: {
  //       htmlLang: 'en-GB',
  //     },
  //     // You can omit a locale (e.g. fr) if you don't need to override the defaults
  //     fa: {
  //       direction: 'rtl',
  //     },
  //   },
  // },
}
