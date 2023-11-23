<template>
  <NuxtLink :to="slug"
    ><img :src="'/images/blog/' + thumb" alt="" />
    <h5>
      {{ title }}
    </h5>
  </NuxtLink>
</template>

<script>
import useSlug from "~/composables/useSlug";
export default {
  props: ["thumb", "title"],
  setup(props) {
    const { slug } = useSlug(props.title);
    return { slug };
  },
};
</script>

<style scoped>
a {
  display: flex;
  align-items: center;
  gap: 20px;
}
a img {
  max-width: 120px;
}
a h5 {
  font-size: 18px;

}
</style>