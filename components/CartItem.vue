<template>
  <tr>
    <td class="image text-center" data-title="No">
      <img :src="'/images/all-img/' + thumb" style="object-fit: cover" />
    </td>
    <td class="product-des text-center" data-title="Description">
      <p class="product-name">
        <NuxtLink :to="'/courses/' + slug">{{ title }}</NuxtLink>
      </p>
      <!-- <p class="product-des">
        Maboriosam in a tonto nesciung eget distingy magndapibus.
      </p> -->
    </td>
    <td class="price" data-title="Price">
      <span>${{ price }} </span>
    </td>
    <td class="qty">
      <div class="input-group mx-auto d-block" v-if="!(type === 'course')">
        <div class="button minus">
          <button
            type="button"
            class="btn btn-primary btn-number"
            @click="dec(sku)"
          >
            <i class="ti-minus"></i>
          </button>
        </div>
        <input
          type="number"
          class="input-number"
          v-model.number="qty"
          @input="checkLimit(sku)"
        />
        <small class="text-xs text-danger" v-if="qtyLimit">{{
          qtyLimit
        }}</small>
        <div class="button plus">
          <button
            type="button"
            class="btn btn-primary btn-number"
            @click="inc(sku)"
          >
            <i class="ti-plus"></i>
          </button>
        </div>
      </div>
      <span class="d-block text-center" v-else>Null</span>
    </td>
    <td class="total-amount">
      $<span>{{ totalPrice }}</span>
    </td>
    <td class="action" data-title="Remove">
      <button @click="removeItem(id)">
        <i class="ti-trash remove-icon"></i>
      </button>
    </td>
  </tr>
</template>

<script>
import { ref } from "vue";
import useSlug from "~/composables/useSlug";
import { useFrontStore } from "~/stores/frontStore";
export default {
  props: ["thumb", "title", "price", "quantity", "ind", "id", "sku", "type"],
  setup(props) {
    const frontStore = useFrontStore();
    const { slug } = useSlug(props.title);
    const price = ref(props.price);
    const qty = ref(1);
    const qtyLimit = ref("");
    const inc = (sku) => {
      if (qty.value < 10) {
        qty.value += 1;
        frontStore.updateQuantity(sku, qty.value);
      } else if (qty.value == 10) {
        qtyLimit.value = "you can't buy more than 10";
      }
    };
    const dec = (sku) => {
      if (qty.value > 1) {
        qty.value -= 1;
        qtyLimit.value = "";
        frontStore.updateQuantity(sku, qty.value);
      }
    };
    const checkLimit = (sku) => {
      if (qty.value > 10) {
        qty.value = "10";
      }
      if (qty.value < 1) {
        qty.value = 1;
      }
      frontStore.updateQuantity(sku, qty.value);
      qtyLimit.value = "";
    };

    const totalPrice = computed(() => {
      return (qty.value ? qty.value : 1) * price.value;
    });
    const onSubtotalChange = () => {
      if (frontStore.appliedCoupon.length) {
        if (totalPrice.value < frontStore.appliedCoupon[0].minSpend) {
          frontStore.clearCoupon();
        }
      }
    };

    watch(totalPrice, onSubtotalChange);

    const removeItem = (item) => {
      const confirmed = window.confirm(
        "Are you sure you want to delete the item?"
      );
      if (confirmed) {
        frontStore.removeItem(item);
      }
    };

    return {
      frontStore,
      price,
      qty,
      inc,
      dec,
      qtyLimit,
      checkLimit,
      totalPrice,
      removeItem,
      slug,
    };
  },
};
</script>

<style scoped>
.total-amount {
  width: 100px;
}
</style>