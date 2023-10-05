<template>
  <div class="count-box">
    <i style="color: #2eca7f" :class="icon"></i>
    <div>
      <span class="purecounter">{{ count }}</span>
      <p>{{ subtitle }}</p>
    </div>
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
    count: {
      type: Number,
      required: true,
      default: 0,
    },
    subtitle: {
      type: String,
      required: true,
      default: null,
    },
  },
};
</script>
