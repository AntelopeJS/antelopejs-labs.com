<script setup lang="ts">
import { motion } from "motion-v";
import type { ButtonProps } from "@nuxt/ui";

interface Props {
  title?: string;
  titleSuffix?: string;
  items?: {
    title: string;
    description: string;
    light_image: string;
    dark_image: string;
    features: {
      icon: string;
      description: string;
    }[];
    links: ButtonProps[];
  }[];
}

defineProps<Props>();

const activeView = ref(0);
</script>

<template>
  <UPageSection>
    <template #title>
      <span class="block">
        {{ title }}
      </span>
      <span class="block text-(--ui-primary)">
        {{ titleSuffix }}
      </span>
    </template>

    <div class="grid gap-4 lg:flex">
      <motion.article
        v-for="(item, index) in items"
        :key="`view-${index}`"
        :class="[
          activeView === index ? 'bg-primary-500/20 flex-2' : 'flex-1 bg-(--ui-bg-muted)',
          'cursor-pointer rounded-xl px-5 py-8 transition-all lg:flex lg:h-[600px] lg:flex-col lg:justify-between',
        ]"
        @click="activeView = index"
      >
        <div>
          <h2 class="font-secondary pb-4 text-3xl font-bold text-(--ui-primary)">
            {{ item.title }}
          </h2>

          <div class="overflow-hidden transition-none">
            <motion.div
              v-if="activeView === index"
              class="mb-5 text-base text-balance text-(--ui-text-muted)"
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
            >
              <p class="mb-4">
                {{ item.description }}
              </p>

              <UPageFeature
                v-for="(feature, featureIndex) in item.features"
                :key="`feature-${featureIndex}`"
                :description="feature.description"
                :icon="feature.icon"
              />

              <div class="flex gap-4 pt-4">
                <UButton
                  v-for="(link, linkIndex) in item.links"
                  :key="`link-${linkIndex}`"
                  :to="link.to"
                  :icon="link.icon"
                  :label="link.label"
                  :color="link.color"
                  :variant="link.variant"
                  :target="link.target"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div class="relative mt-auto h-full w-full lg:w-auto">
          <UColorModeImage
            :light="item.light_image"
            :dark="item.dark_image"
            :alt="item.title"
            class="aspect-[16/9] w-full max-w-md lg:absolute lg:bottom-0 lg:left-0 lg:h-72 lg:max-w-none lg:object-cover lg:object-left-bottom"
          />
        </div>
      </motion.article>
    </div>
  </UPageSection>
</template>
