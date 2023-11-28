<template>
  <div class="d-flex align-items-center gap-3">
    <div class="thumb">
      <img
        :src="'/images/all-img/' + thumb"
        alt=""
        style="width: 110px; max-width: unset"
      />
    </div>
    <div class="content">
      <h6 class="mb-2">
        <NuxtLink to="slug">{{ title }}</NuxtLink>
      </h6>
      <div class="d-flex align-items-center gap-3">
        <h6>
          Price:
          <span class="font-bold text-success">{{ price }}</span>
        </h6>
        <h6>
          Quantity:
          <span class="font-bold text-success">{{ quantity }}</span>
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
import useSlug from "~/composables/useSlug";
export default {
  props: ["thumb", "title", "price", "quantity"],
  setup(props) {
    const title = ref(props.title)
    const { slug } = useSlug(title.value);
    return {
      slug,
    };
  },
};
</script>

<style lang="scss" scoped>
a {
  color: rgb(53, 54, 53);
  font-weight: 500;
  &:hover {
    color: green;
  }
}
</style>