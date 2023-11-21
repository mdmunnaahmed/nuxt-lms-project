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
          <button type="button" class="btn btn-primary btn-number" @click="dec">
            <i class="ti-minus"></i>
          </button>
        </div>
        <input
          type="tel"
          class="input-number"
          v-model="qty"
          @input="checkLimit"
        />
        <small class="text-xs text-danger" v-if="qtyLimit">{{
          qtyLimit
        }}</small>
        <div class="button plus">
          <button type="button" class="btn btn-primary btn-number" @click="inc">
            <i class="ti-plus"></i>
          </button>
        </div>
      </div>
      <!--/ End Input Order -->
    </td>
    <td class="total-amount">
      <span ref="totalP">${{ totalPrice }}</span>
    </td>
    <td class="action" data-title="Remove">
      <button><i class="ti-trash remove-icon"></i></button>
    </td>
  </tr>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["thumb", "title", "price"],
  setup(props) {
    const price = ref(props.price);
    const qty = ref(1);
    const qtyLimit = ref("");
    const inc = () => {
      if (qty.value < 10) {
        qty.value += 1;
      } else if (qty.value == 10) {
        qtyLimit.value = "you can't buy more than 10";
      }
    };
    const dec = () => {
      if (qty.value > 1) {
        qty.value -= 1;
        qtyLimit.value = "";
      }
    };
    const checkLimit = () => {
      if (qty.value > 10) {
        qty.value = "10";
      }
      if (qty.value < 1) {
        qty.value = 1;
      }
      qtyLimit.value = "";
    };
    const totalPrice = computed(() => {
      return qty.value * price.value;
    });
    return {
      price,
      qty,
      inc,
      dec,
      qtyLimit,
      checkLimit,
      totalPrice,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>