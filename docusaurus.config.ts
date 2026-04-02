import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Chemware Docs',
  tagline: 'Capstone documentation for industrial plant modeling and simulation workflows.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://connorzty001108.github.io',
  baseUrl: '/docusaurus/',
  trailingSlash: false,

  organizationName: 'ConnorZTY001108',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/ConnorZTY001108/docusaurus/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/showcase/dashboard.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Chemware Docs',
      logo: {
        alt: 'Chemware Docs logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          label: 'Home',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/capstone/Design',
          label: 'Design',
          position: 'left',
        },
        {
          to: '/docs/capstone/SRS',
          label: 'SRS',
          position: 'left',
        },
        {
          href: 'https://github.com/ConnorZTY001108/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Project',
          items: [
            {
              label: 'Documentation hub',
              to: '/docs/intro',
            },
            {
              label: 'Capstone archive',
              to: '/docs/capstone',
            },
          ],
        },
        {
          title: 'Key sections',
          items: [
            {
              label: 'Code explanation',
              to: '/docs/capstone/CodeExplanation',
            },
            {
              label: 'User guide',
              to: '/docs/capstone/UserGuide',
            },
            {
              label: 'Presentations',
              to: '/docs/capstone/Presentations',
            },
          ],
        },
        {
          title: 'Repository',
          items: [
            {
              label: 'GitHub repository',
              href: 'https://github.com/ConnorZTY001108/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} ConnorZTY001108. Rebuilt with Docusaurus for the Chemware Engineering capstone archive.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
