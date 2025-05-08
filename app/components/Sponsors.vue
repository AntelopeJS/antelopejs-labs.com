<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

interface Props {
  title?: string;
  description?: string;
  links?: ButtonProps[];
}

defineProps<Props>();

const contributors = Array.from({ length: 18 }, (_, index) => ({
  name: `Contributor ${index + 1}`,
  logo: "https://i.pravatar.cc/" + 200 + index,
}));

const sponsors = [
  {
    label: "Gold Sponsors",
    items: [],
  },
  {
    label: "Silver Sponsors",
    items: [],
  },
  {
    label: "Bronze Sponsors",
    items: [],
  },
];
</script>

<template>
  <UPageSection :title="title" :description="description" :links="links" class="relative">
    <HeroBackground
      class="absolute inset-x-0 top-0 z-0 text-(--ui-primary)"
      direction="top-to-bottom"
    />

    <div v-for="(sponsor, index) in sponsors" :key="`sponsor-${index}`">
      <h2 class="mb-8 text-center text-lg font-bold">{{ sponsor.label }}</h2>

      <div class="flex flex-wrap items-center justify-center gap-6">
        <NuxtImg
          v-for="(sponsorInfo, infoIndex) in sponsor.items"
          :key="`sponsor-${index}-${infoIndex}`"
          :src="sponsorInfo.logo"
          :alt="sponsorInfo.name"
          :class="[{ 'h-12': index === 0, 'h-8': index === 1, 'h-6': index === 2 }, 'w-auto']"
        />
      </div>
    </div>
  </UPageSection>

  <UContainer class="flex flex-wrap justify-around gap-4 text-center lg:justify-between">
    <div>
      <h2 class="pb-2 font-semibold">Donations all time</h2>
      <p class="text-5xl font-bold text-(--ui-primary)">{{ 0 }} $</p>
    </div>

    <div>
      <h2 class="pb-2 font-semibold">Available for bounty</h2>
      <p class="text-5xl font-bold text-(--ui-primary)">{{ 0 }} $</p>
    </div>

    <div>
      <h2 class="pb-2 font-semibold">Open bounty</h2>
      <p class="text-5xl font-bold text-(--ui-primary)">{{ 0 }}</p>
    </div>
  </UContainer>

  <UPageSection
    orientation="horizontal"
    title="Contributors & Bounty Hunters"
    description="Antelope grows with its community. Every contribution strengthens the ecosystem and helps deliver a more stable and seamless experience for all."
  >
    <div class="grid grid-cols-6 gap-4">
      <UTooltip
        v-for="(contributor, index) in contributors"
        :key="`contributor-${index}`"
        :text="contributor.name"
        class="w-full"
      >
        <NuxtImg
          :src="contributor.logo"
          :alt="contributor.name"
          class="h-full w-full rounded-xl bg-(--ui-bg-muted) transition lg:hover:scale-105"
          provider="ipx"
          densities="x1 x2"
          height="80"
          format="auto"
          width="80"
          loading="lazy"
        />
      </UTooltip>
    </div>
  </UPageSection>
</template>
