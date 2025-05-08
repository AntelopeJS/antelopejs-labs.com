<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

interface Props {
  links?: NavigationMenuItem[];
}

const props = defineProps<Props>();
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <UColorModeImage
          light="/images/light/logo.svg"
          dark="/images/dark/logo.svg"
          alt="Logo"
          class="h-6 w-auto shrink-0"
        />
      </NuxtLink>
    </template>

    <template #right>
      <UNavigationMenu :items="props.links" variant="link" class="hidden lg:block" />

      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="props.links" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
