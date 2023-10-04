<template>
  <div>
    <div class="base-card border border-gray-300">
      <div class="card-header border-b border-gray-300 py-2 px-4 bg-gray-100">
        <h5>{{ title }}</h5>
      </div>
      <div class="card-body py-3 px-4">
        <slot />
      </div>
      <!-- <div class="card-footer"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="scss" scoped>

</style>