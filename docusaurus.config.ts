import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Documentation BarTime",
  tagline: "La buvette digitale de votre club — guides et aide",
  favicon: "img/logo.png",

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: "https://doc.bartime.app",
  baseUrl: "/",

  organizationName: "SGdevWeb",
  projectName: "Bartime-doc",

  onBrokenLinks: "throw",

  // Site entièrement en français.
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Pas de liens « Éditer cette page » : doc publique, sans édition
          // externe.
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        // Blog désactivé pour l'instant — documentation pure.
        // (Réactiver en retirant `false` + en restaurant le dossier blog/)
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: "/docs",
        language: ["fr"],
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: {
    image: "img/logo.png",
    colorMode: {
      // Deux états seulement : clair ↔ sombre (pas de mode « auto »).
      respectPrefersColorScheme: false,
      defaultMode: "light",
    },
    navbar: {
      title: "BarTime",
      logo: {
        alt: "Logo BarTime",
        src: "img/logo.png",
        href: "/",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://bartime.app",
          label: "Site web",
          position: "right",
        },
        {
          href: "mailto:hello@bartime.app",
          label: "Contact",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "BarTime",
          items: [
            {
              label: "Fonctionnalités",
              href: "https://bartime.app/#fonctionnalites",
            },
            {
              label: "Conditions d'utilisation",
              href: "https://bartime.app/terms/",
            },
            {
              label: "Politique de confidentialité",
              href: "https://bartime.app/privacy/",
            },
          ],
        },
        {
          title: "Documentation",
          items: [
            {
              label: "Démarrer ici",
              to: "/docs/intro",
            },
            {
              label: "Démarrage rapide",
              to: "/docs/quick-start",
            },
            {
              label: "FAQ",
              to: "/docs/faq",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "hello@bartime.app",
              href: "mailto:hello@bartime.app",
            },
            {
              label: "bartime.app",
              href: "https://bartime.app",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BarTime — Tous droits réservés.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
