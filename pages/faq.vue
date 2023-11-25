<template>
  <div>
    <SectionInnerBanner title="Frequently Asked Questions" slug="faq" />
    <div class="container faq_area section-padding">
      <FaqItem
        v-for="(f, index) in frontStore.faqs"
        :key="index"
        :title="f.title"
        :pera="f.pera"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import { useFrontStore } from "~/stores/frontStore";

export default {
  setup() {
    const frontStore = useFrontStore();
    return {
      frontStore,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>