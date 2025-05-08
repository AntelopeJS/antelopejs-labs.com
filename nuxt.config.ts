// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui-pro", "@nuxt/content", "motion-v/nuxt"],

  devtools: {
    enabled: true,
  },

  runtimeConfig: {
    public: {
      siteUrl: "https://antelopejs-labs.com/",
    },
  },

  css: ["~/assets/css/main.css"],

  mdc: {
    highlight: {
      noApiRoute: false,
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2025-01-15",

  nitro: {
    prerender: {
      routes: ["/"],
    },
  },

  icon: {
    customCollections: [
      {
        prefix: "antelope",
        dir: "./app/assets/icons",
        normalizeIconName: true,
      },
    ],
  },

  eslint: {
    config: {
      stylistic: {
        semi: true,
        braceStyle: "1tbs",
        quotes: "double",
        commaDangle: "only-multiline",
        quoteProps: "as-needed",
      },
    },
  },
});
