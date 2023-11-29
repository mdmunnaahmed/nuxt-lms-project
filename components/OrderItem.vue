<template>
  <tr>
    <td class="image text-center" data-title="No">
      <img :src="'/images/all-img/' + thumb"  style="object-fit: cover"/>
    </td>
    <td class="product-des text-center" data-title="Description">
      <p class="product-name">
        <NuxtLink :to="'courses/' + slug">{{ title }}</NuxtLink>
      </p>
      <!-- <p class="product-des">
        Maboriosam in a tonto nesciung eget distingy magndapibus.
      </p> -->
    </td>
    <td class="price" data-title="Price">
      <span>${{ price }} </span>
    </td>
    <td class="qty text-center">
      <span>{{ quantity }}</span>
    </td>
    <td class="total-amount">
      $<span>{{ totalPrice }}</span>
    </td>
    <td class="text-center">
      <span class="badge" :class="{'bg-success' : status ==='delivered', 'bg-warning' : status === 'pending', 'bg-danger': status ==='cancled' }">{{ status }}</span>
    </td>
  </tr>
</template>

<script>
import { ref } from "vue";
import useSlug from "~/composables/useSlug";
import { useFrontStore } from "~/stores/frontStore";
export default {
  props: ["thumb", "title", "price", "quantity", "ind", "id", "sku", 'status'],
  setup(props) {
    const frontStore = useFrontStore();
    const { slug } = useSlug(props.title);
    const price = ref(props.price);
    const qty = ref(props.quantity);

    const totalPrice = computed(() => {
      return qty.value * price.value;
    });

    return {
      frontStore,
      price,
      totalPrice,
      slug,
    };
  },
};
</script>

<style scoped>
.total-amount {
  width: 100px;
}
.product-des {
  width: 300px;
}
</style>