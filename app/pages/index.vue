<script setup lang="ts">
import { joinURL } from "ufo";

const { data: page } = await useAsyncData("index", () => queryCollection("content").first());
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
}

const title = `${page.value.title} ${page.value.title_suffix}`;
const siteUrl = useRuntimeConfig().public.siteUrl;

useSeoMeta({
  title: title,
  ogTitle: title,
  description: page.value.description,
  ogDescription: page.value.description,
  ogImage: joinURL(siteUrl, "/social-card.png"),
  twitterImage: joinURL(siteUrl, "/social-card.png"),
});
</script>

<template>
  <UMain class="pb-12">
    <!-- Hero -->
    <UPageHero :description="page?.description" class="relative">
      <template #title>
        <LottieAnimation :loop="false" :autoplay="true" height="80" />

        <span class="block"> {{ page?.title }} </span>
        <span class="block text-(--ui-primary)">
          {{ page?.title_suffix }}
        </span>
      </template>

      <HeroBackground
        class="absolute inset-x-0 bottom-0 z-0 text-(--ui-primary)"
        direction="bottom-to-top"
      />

      <NuxtImg
        src="/images/meteor.png"
        alt="Meteor"
        class="absolute inset-0 -z-20 size-full object-cover object-bottom opacity-30"
      />
    </UPageHero>

    <!-- Features -->
    <UPageSection :description="page?.features?.description">
      <template #title>
        <span class="block">
          {{ page?.features?.title }}
        </span>
        <span class="block text-(--ui-primary)">
          {{ page?.features?.title_suffix }}
        </span>
      </template>

      <div class="grid gap-12 lg:grid-cols-3">
        <div
          v-for="(feature, index) in page?.features?.items"
          :key="`feature-${index}`"
          class="flex items-start gap-4 p-4 sm:gap-8 lg:flex-col lg:items-center"
        >
          <div
            class="shadow-primary-500/40 inline-flex items-center justify-center rounded-xl border border-(--ui-border) bg-(--ui-bg-muted) p-4 shadow-lg sm:p-6"
          >
            <UIcon :name="feature.icon" class="size-6 text-(--ui-primary) sm:size-12" />
          </div>

          <div class="lg:pt-10 lg:text-center">
            <div class="text-base font-semibold text-pretty text-(--ui-text-highlighted)">
              {{ feature.title }}
            </div>
            <div class="mt-1 text-[15px] text-pretty text-(--ui-text-muted)">
              {{ feature.description }}
            </div>
          </div>
        </div>
      </div>
    </UPageSection>

    <!-- Environnement -->
    <UPageSection :title="page?.ecosystem?.title" class="relative">
      <template #description>
        <EcosystemVisual />

        <p>
          {{ page?.ecosystem?.description }}
        </p>
      </template>

      <HeroBackground
        class="absolute inset-x-0 bottom-0 -z-10 text-(--ui-primary)"
        direction="bottom-to-top"
      />
    </UPageSection>

    <!-- Solutions -->
    <LazySolutionsViewer
      :title="page?.solutions?.title"
      :title-suffix="page?.solutions?.title_suffix"
      :items="page?.solutions?.items"
      hydrate-on-visible
    />

    <!-- Sponsors -->
    <!-- <LazySponsors
      :title="page?.sponsors?.title"
      :description="page?.sponsors?.description"
      :links="page?.sponsors?.links"
      hydrate-on-visible
    /> -->

    <!-- CTA -->
    <UContainer>
      <UPageCTA :description="page?.cta?.description" :links="page?.cta?.links" variant="subtle">
        <template #title>
          <span class="block"> {{ page?.cta?.title }} </span>
          <span class="block text-(--ui-primary)">
            {{ page?.cta?.title_suffix }}
          </span>
        </template>
      </UPageCTA>
    </UContainer>
  </UMain>
</template>
