<script setup lang="ts">
const { seo } = useAppConfig();

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  twitterCard: "summary_large_image",
});

const links = [
  {
    label: "Framework",
    to: "https://antelopejs.com",
    target: "_blank",
    external: true,
  },
  {
    label: "Github",
    to: "https://github.com/AntelopeJS/",
    target: "_blank",
    external: true,
  },
];
</script>

<template>
  <UApp :toaster="{ expand: false }">
    <AppHeader :links="links" />

    <div>
      <NuxtPage />
    </div>

    <AppFooter :links="links" />
  </UApp>
</template>
