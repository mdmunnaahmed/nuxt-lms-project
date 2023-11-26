import { _ as __nuxt_component_0 } from './InnerBanner-cc711ce9.mjs';
import { useSSRContext, computed, ref, withCtx, createTextVNode, watch } from 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue/index.mjs';
import { u as useFrontStore } from './frontStore-3016d556.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-99c863e4.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/ofetch/dist/node.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/hookable/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unctx/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/defu/dist/defu.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unhead/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/h3/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/ufo/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/destr/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/scule/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/klona/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/ohash/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unstorage/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unstorage/drivers/fs.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unstorage/drivers/memory.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/pathe/dist/index.mjs';

const _sfc_main$1 = {
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
      const confirmed = window.confirm("Are you sure you want to delete the item?");
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
      removeItem
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<tr${ssrRenderAttrs(_attrs)} data-v-ee1c2502><td class="image text-center" data-title="No" data-v-ee1c2502><img${ssrRenderAttr("src", "/images/all-img/" + $props.thumb)} data-v-ee1c2502></td><td class="product-des text-center" data-title="Description" data-v-ee1c2502><p class="product-name" data-v-ee1c2502><a href="#" data-v-ee1c2502>${ssrInterpolate($props.title)}</a></p></td><td class="price" data-title="Price" data-v-ee1c2502><span data-v-ee1c2502>$ ${ssrInterpolate($setup.price)}</span></td><td class="qty" data-v-ee1c2502><div class="input-group" data-v-ee1c2502><div class="button minus" data-v-ee1c2502><button type="button" class="btn btn-primary btn-number" data-v-ee1c2502><i class="ti-minus" data-v-ee1c2502></i></button></div><input type="tel" class="input-number"${ssrRenderAttr("value", $setup.qty)} data-v-ee1c2502>`);
  if ($setup.qtyLimit) {
    _push(`<small class="text-xs text-danger" data-v-ee1c2502>${ssrInterpolate($setup.qtyLimit)}</small>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="button plus" data-v-ee1c2502><button type="button" class="btn btn-primary btn-number" data-v-ee1c2502><i class="ti-plus" data-v-ee1c2502></i></button></div></div></td><td class="total-amount" data-v-ee1c2502> $<span data-v-ee1c2502>${ssrInterpolate($setup.totalPrice)}</span></td><td class="action" data-title="Remove" data-v-ee1c2502><button data-v-ee1c2502><i class="ti-trash remove-icon" data-v-ee1c2502></i></button></td></tr>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CartItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ee1c2502"]]);
const _sfc_main = {
  setup() {
    const frontStore = useFrontStore();
    const uCart = computed(() => {
      return frontStore.getUCarts;
    });
    const coupon = ref("munns");
    const discount = () => {
      if (!coupon.value == "") {
        frontStore.applyCoupon({
          coupon: coupon.value,
          spend: youPay.value
        });
      }
    };
    const discountAmount = computed(() => {
      if (frontStore.appliedCoupon.length) {
        return frontStore.appliedCoupon[0].discount;
      }
    });
    const clearCoup = () => {
      frontStore.clearCoupon();
    };
    const clearCart = () => {
      const confirmed = window.confirm(
        "Are you sure you want to clear the entire cart?"
      );
      if (confirmed) {
        frontStore.clearCart();
      }
    };
    const youPay = computed(() => {
      if (frontStore.appliedCoupon.length) {
        return parseInt(frontStore.totalPrice) - parseInt(frontStore.appliedCoupon[0].discount);
      }
      return parseInt(frontStore.totalPrice);
    });
    return {
      frontStore,
      uCart,
      coupon,
      coupon,
      discount,
      youPay,
      discountAmount,
      clearCoup,
      clearCart
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionInnerBanner = __nuxt_component_0;
  const _component_CartItem = __nuxt_component_1;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_SectionInnerBanner, {
    title: "Cart Page",
    slug: "cart"
  }, null, _parent));
  _push(`<div class="shopping-cart section"><div class="container"><div class="row"><div class="col-12"><table class="table shopping-summery"><thead><tr class="main-hading"><th>PRODUCT</th><th>NAME</th><th class="text-center">UNIT PRICE</th><th class="text-center">QUANTITY</th><th class="text-center">TOTAL</th><th class="text-center"><i class="ti-trash remove-icon"></i></th></tr></thead><tbody><!--[-->`);
  ssrRenderList($setup.uCart, (c, index) => {
    _push(ssrRenderComponent(_component_CartItem, {
      key: index,
      title: c.title,
      price: c.price,
      thumb: c.thumb,
      ind: index + 1,
      id: c.id
    }, null, _parent));
  });
  _push(`<!--]--></tbody></table></div></div>`);
  if ($setup.frontStore.cart.length) {
    _push(`<div class="row"><div class="col-12"><div class="total-amount"><div class="row"><div class="col-lg-8 col-md-5 col-12"><div class="left"><div class="coupon"><form class="flex items-center"><input placeholder="Enter Your Coupon"${ssrRenderAttr("value", $setup.coupon)}>`);
    if (!$setup.frontStore.appliedCoupon.length) {
      _push(`<button class="btn px-4"> Apply </button>`);
    } else {
      _push(`<!---->`);
    }
    if ($setup.frontStore.appliedCoupon.length) {
      _push(`<button class="btn px-4"> clear </button>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</form>`);
    if ($setup.frontStore.success) {
      _push(`<small>${ssrInterpolate($setup.frontStore.success)}</small>`);
    } else {
      _push(`<!---->`);
    }
    if ($setup.frontStore.error) {
      _push(`<small class="text-danger">${ssrInterpolate($setup.frontStore.error)}</small>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></div><div class="col-lg-4 col-md-7 col-12"><div class="right"><ul><li> Cart Subtotal<span>${ssrInterpolate($setup.frontStore.totalPrice)}</span></li><li>Shipping<span>Free</span></li><li> Coupon<span>$${ssrInterpolate($setup.discountAmount ? $setup.discountAmount : 0)}</span></li><li class="last"> You Pay<span>$${ssrInterpolate($setup.youPay)}</span></li></ul><div class="button5"><a href="#" class="btn">Checkout</a><a href="/courses" class="btn">Continue shopping</a></div></div></div></div></div></div></div>`);
  } else {
    _push(`<div class="text-center"><span class="text-center">your cart is empty</span>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/courses",
      class: "ms-1 text-decoration-underline"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Go to Courses`);
        } else {
          return [
            createTextVNode("Go to Courses")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { cart as default };
//# sourceMappingURL=cart-bba95a1d.mjs.map
