<template>
  <tr>
    <td class="image text-center" data-title="No">
      <img :src="'/images/shop/' + thumb" />
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
    <td class="qty" data-title="Qty">
      <!-- Input Order -->
      <div class="input-group">
        <div class="button minus">
          <button type="button" class="btn btn-primary btn-number" disabled>
            <i class="ti-minus"></i>
          </button>
        </div>
        <input type="tel" class="input-number" value="1" />
        <div class="button plus">
          <button type="button" class="btn btn-primary btn-number">
            <i class="ti-plus"></i>
          </button>
        </div>
      </div>
      <!--/ End Input Order -->
    </td>
    <td class="total-amount" data-title="Total">
      <span>${{ cartTotal }}</span>
    </td>
    <td class="action" data-title="Remove">
      <button><i class="ti-trash remove-icon"></i></button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["thumb", "title", "price"],
  setup(props) {},
};
</script>

<style lang="scss" scoped>
</style>