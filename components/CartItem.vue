<template>
  <tr>
    <td class="image text-center" data-title="No">
      <img :src="'/images/all-img/' + thumb" />
    </td>
    <td class="product-des text-center" data-title="Description">
      <p class="product-name">
        <a href="#">{{ title }}</a>
      </p>
      <!-- <p class="product-des">
        Maboriosam in a tonto nesciung eget distingy magndapibus.
      </p> -->
    </td>
    <td class="price" data-title="Price">
      <span>$ {{ price }} </span>
    </td>
    <td class="qty">
      <!-- Input Order -->
      <div class="input-group">
        <div class="button minus">
          <button
            type="button"
            class="btn btn-primary btn-number"
            @click="dec(ind)"
          >
            <i class="ti-minus"></i>
          </button>
        </div>
        <input
          type="tel"
          class="input-number"
          v-model="qty"
          @input="checkLimit(ind)"
        />
        <small class="text-xs text-danger" v-if="qtyLimit">{{
          qtyLimit
        }}</small>
        <div class="button plus">
          <button
            type="button"
            class="btn btn-primary btn-number"
            @click="inc(ind)"
          >
            <i class="ti-plus"></i>
          </button>
        </div>
      </div>
      <!--/ End Input Order -->
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
import { useFrontStore } from "~/stores/frontStore";
export default {
  props: ["thumb", "title", "price", "quantity", "ind", "id"],
  setup(props) {
    const frontStore = useFrontStore();
    const price = ref(props.price);
    const qty = ref(1);
    const qtyLimit = ref("");
    const inc = (id) => {
      if (qty.value < 10) {
        qty.value += 1;
        frontStore.updateQuantity(id, qty.value);
      } else if (qty.value == 10) {
        qtyLimit.value = "you can't buy more than 10";
      }
    };
    const dec = (id) => {
      if (qty.value > 1) {
        qty.value -= 1;
        qtyLimit.value = "";
        frontStore.updateQuantity(id, qty.value);
      }
    };
    const checkLimit = (id) => {
      if (qty.value > 10) {
        qty.value = "10";
      }
      if (qty.value < 1) {
        qty.value = 1;
      }
      frontStore.updateQuantity(id, qty.value);
      qtyLimit.value = "";
    };

    const totalPrice = computed(() => {
      return qty.value * price.value;
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
      const confirmed = window.confirm('Are you sure you want to delete the item?');
      if(confirmed) {
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
    };
  },
};
</script>

<style scoped>
.total-amount {
  width: 100px;
}
</style>