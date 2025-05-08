<script setup lang="ts">
import lottie from "lottie-web";
import { onMounted, ref } from "vue";
import animation from "../assets/lottie/logo-animation.json";

const animationContainer = ref<HTMLElement | null>(null);
let animationInstance: any = null;

interface Props {
  height?: string | number;
  width?: string | number;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
}

const props = withDefaults(defineProps<Props>(), {
  height: "auto",
  width: "100%",
  loop: false,
  autoplay: true,
  speed: 1,
});

onMounted(() => {
  if (animationContainer.value) {
    animationInstance = lottie.loadAnimation({
      container: animationContainer.value,
      renderer: "svg",
      loop: props.loop,
      autoplay: props.autoplay,
      animationData: animation,
    });

    // Set animation speed
    if (props.speed !== 1) {
      animationInstance.setSpeed(props.speed);
    }

    // If not looping, we can add a completion callback
    if (!props.loop) {
      animationInstance.addEventListener("complete", () => {
        // Animation complete, you can add any additional logic here
      });
    }
  }
});
</script>

<template>
  <div ref="animationContainer" class="h-28 w-full" />
</template>
