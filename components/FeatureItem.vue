<template>
  <div class="single_feature_one h-100">
    <div class="sf_top">
      <span :class="icon"></span>
      <h2>
        <a href="single-service.html" target="_blank">{{ title }}</a>
      </h2>
    </div>
    <p class="mt-3 mb-0">
      {{ pera }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
      default: null,
    },
    title: {
      type: String,
      required: true,
      default: 0,
    },
    pera: {
      type: String,
      required: true,
      default: null,
    },
  },
};
</script>
