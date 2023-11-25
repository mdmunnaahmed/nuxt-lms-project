<template>
  <div class="accordion-item px-4">
    <h2 class="accordion-header py-3" @click="toggleOpen">
      <button class="accordion-button">{{ title }}</button>
    </h2>
    <div class="accordion-collapse" :class="{ 'active': faqOpen }">
      <div class="accordion-body">{{ pera }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["title", "pera", "index"],
  setup() {
    const faqOpen = ref(false);
    const toggleOpen = () => {
      faqOpen.value = !faqOpen.value;
    };
    return {
      faqOpen,
      toggleOpen,
    };
  },
};
</script>

<style lang="scss" scoped>
.accordion-collapse {
  max-height: 0;
  opacity: 0;
  visibility: hidden;
  transition: .5s;
  &.active {
    padding-bottom: 18px;
    max-height: 200px;
    visibility: visible;
    opacity: 1;
  }
}

</style>