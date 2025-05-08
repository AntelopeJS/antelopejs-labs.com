export default defineAppConfig({
  ui: {
    colors: {
      primary: "antelope",
      neutral: "slate",
    },
  },
  uiPro: {
    pageSection: {
      slots: {
        title: "font-secondary",
      },
    },
    pageCTA: {
      slots: {
        title: "font-secondary",
      },
    },
    pageHero: {
      slots: {
        title: "font-secondary",
      },
    },
  },
  seo: {
    siteName: "Antelope JS",
  },
  footer: {
    credits: `© ${new Date().getFullYear()} antelope srl. all rights reserved`,
    colorMode: true,
    links: [
      {
        icon: "i-simple-icons-discord",
        to: "https://discord.gg/yS53x6FXQj",
        target: "_blank",
        label: "Discord",
      },
      {
        icon: "i-simple-icons-github",
        to: "https://github.com/AntelopeJS",
        target: "_blank",
        label: "GitHub",
      },
    ],
    addresses: [
      {
        name: "Antelope S.R.L.",
        street: "Rue de Loncin 234",
        city: "4460, Grâce-Hollogne, Belgium",
        vat: "BE 1003.929.214",
      },
    ],
  },
});
