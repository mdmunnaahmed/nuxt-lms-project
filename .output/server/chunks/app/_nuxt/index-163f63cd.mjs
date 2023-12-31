import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './InnerBanner-cc711ce9.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + publicAssetsURL("images/shop/1.jpg");
const _imports_1 = "" + publicAssetsURL("images/shop/2.jpg");
const _imports_2 = "" + publicAssetsURL("images/shop/3.jpg");
const _imports_3 = "" + publicAssetsURL("images/shop/4.jpg");
const _imports_4 = "" + publicAssetsURL("images/shop/5.jpg");
const _imports_5 = "" + publicAssetsURL("images/shop/6.jpg");
const _imports_6 = "" + publicAssetsURL("images/shop/7.jpg");
const _imports_7 = "" + publicAssetsURL("images/shop/8.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionInnerBanner = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_SectionInnerBanner, {
    title: "Shop wishes",
    slug: "shop"
  }, null, _parent));
  _push(`<section id="product_area" class="section-padding"><div class="container"><div class="row"><div class="col-md-12"><div class="section-title"><h2>Our Products</h2><p> Check Our <span><u>All Products</u></span></p></div></div></div><div class="text-center"><div class="product_filter"><ul><li class="active filter" data-filter="all">All</li><li class="filter" data-filter=".sale">Sale</li><li class="filter" data-filter=".bslr">Bestseller</li><li class="filter" data-filter=".ftrd">Featured</li></ul></div><div class="product_item"><div class="row"><div class="col-lg-3 col-md-4 col-sm-6 mix sale"><div class="product-grid"><div class="product-image"><a href="#"><img class="pic-1"${ssrRenderAttr("src", _imports_0)} alt="product image"><img class="pic-2"${ssrRenderAttr("src", _imports_1)} alt="product image"></a><ul class="social"><li><a href="#" data-tip="Quick View"><i class="ti-zoom-in"></i></a></li><li><a href="#" data-tip="Add to Wishlist"><i class="ti-bag"></i></a></li><li><a href="#" data-tip="Add to Cart"><i class="ti-shopping-cart"></i></a></li></ul><span class="product-new-label">Sale</span></div><ul class="rating"><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li></ul><div class="product-content"><h3 class="title"><a href="#">Product Title</a></h3><div class="price"> $16.00 <span>$20.00</span></div><a class="add-to-cart" href="#">+ Add To Cart</a></div></div></div><div class="col-lg-3 col-md-4 col-sm-6 mix ftrd"><div class="product-grid"><div class="product-image"><a href="#"><img class="pic-1"${ssrRenderAttr("src", _imports_2)} alt="product image"><img class="pic-2"${ssrRenderAttr("src", _imports_3)} alt="product image"></a><ul class="social"><li><a href="#" data-tip="Quick View"><i class="ti-zoom-in"></i></a></li><li><a href="#" data-tip="Add to Wishlist"><i class="ti-bag"></i></a></li><li><a href="#" data-tip="Add to Cart"><i class="ti-shopping-cart"></i></a></li></ul><span class="product-new-label">-20%</span></div><ul class="rating"><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li></ul><div class="product-content"><h3 class="title"><a href="#">Product Title</a></h3><div class="price"> $16.00 <span>$20.00</span></div><a class="add-to-cart" href="#">+ Add To Cart</a></div></div></div><div class="col-lg-3 col-md-4 col-sm-6 mix"><div class="product-grid"><div class="product-image"><a href="#"><img class="pic-1"${ssrRenderAttr("src", _imports_4)} alt="product image"><img class="pic-2"${ssrRenderAttr("src", _imports_5)} alt="product image"></a><ul class="social"><li><a href="#" data-tip="Quick View"><i class="ti-zoom-in"></i></a></li><li><a href="#" data-tip="Add to Wishlist"><i class="ti-bag"></i></a></li><li><a href="#" data-tip="Add to Cart"><i class="ti-shopping-cart"></i></a></li></ul><span class="product-new-label">Sale</span></div><ul class="rating"><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star disable"></li></ul><div class="product-content"><h3 class="title"><a href="#">Product Title</a></h3><div class="price"> $16.00 <span>$20.00</span></div><a class="add-to-cart" href="#">+ Add To Cart</a></div></div></div><div class="col-lg-3 col-md-4 col-sm-6 mix sale bslr"><div class="product-grid"><div class="product-image"><a href="#"><img class="pic-1"${ssrRenderAttr("src", _imports_6)} alt="product image"><img class="pic-2"${ssrRenderAttr("src", _imports_7)} alt="product image"></a><ul class="social"><li><a href="#" data-tip="Quick View"><i class="ti-zoom-in"></i></a></li><li><a href="#" data-tip="Add to Wishlist"><i class="ti-bag"></i></a></li><li><a href="#" data-tip="Add to Cart"><i class="ti-shopping-cart"></i></a></li></ul><span class="product-new-label">New</span></div><ul class="rating"><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li></ul><div class="product-content"><h3 class="title"><a href="#">Product Title</a></h3><div class="price"> $16.00 <span>$20.00</span></div><a class="add-to-cart" href="#">+ Add To Cart</a></div></div></div><div class="col-lg-3 col-md-4 col-sm-6 mix ftrd"><div class="product-grid"><div class="product-image"><a href="#"><img class="pic-1"${ssrRenderAttr("src", _imports_4)} alt="product image"><img class="pic-2"${ssrRenderAttr("src", _imports_5)} alt="product image"></a><ul class="social"><li><a href="#" data-tip="Quick View"><i class="ti-zoom-in"></i></a></li><li><a href="#" data-tip="Add to Wishlist"><i class="ti-bag"></i></a></li><li><a href="#" data-tip="Add to Cart"><i class="ti-shopping-cart"></i></a></li></ul><span class="product-new-label">Sale</span></div><ul class="rating"><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li></ul><div class="product-content"><h3 class="title"><a href="#">Product Title</a></h3><div class="price"> $16.00 <span>$20.00</span></div><a class="add-to-cart" href="#">+ Add To Cart</a></div></div></div><div class="col-lg-3 col-md-4 col-sm-6 mix sale bslr"><div class="product-grid"><div class="product-image"><a href="#"><img class="pic-1"${ssrRenderAttr("src", _imports_0)} alt="product image"><img class="pic-2"${ssrRenderAttr("src", _imports_1)} alt="product image"></a><ul class="social"><li><a href="#" data-tip="Quick View"><i class="ti-zoom-in"></i></a></li><li><a href="#" data-tip="Add to Wishlist"><i class="ti-bag"></i></a></li><li><a href="#" data-tip="Add to Cart"><i class="ti-shopping-cart"></i></a></li></ul><span class="product-new-label">-30%</span></div><ul class="rating"><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li></ul><div class="product-content"><h3 class="title"><a href="#">Product Title</a></h3><div class="price"> $16.00 <span>$20.00</span></div><a class="add-to-cart" href="#">+ Add To Cart</a></div></div></div><div class="col-lg-3 col-md-4 col-sm-6 mix sale bslr"><div class="product-grid"><div class="product-image"><a href="#"><img class="pic-1"${ssrRenderAttr("src", _imports_6)} alt="product image"><img class="pic-2"${ssrRenderAttr("src", _imports_7)} alt="product image"></a><ul class="social"><li><a href="#" data-tip="Quick View"><i class="ti-zoom-in"></i></a></li><li><a href="#" data-tip="Add to Wishlist"><i class="ti-bag"></i></a></li><li><a href="#" data-tip="Add to Cart"><i class="ti-shopping-cart"></i></a></li></ul><span class="product-new-label">Sale</span></div><ul class="rating"><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li></ul><div class="product-content"><h3 class="title"><a href="#">Product Title</a></h3><div class="price"> $16.00 <span>$20.00</span></div><a class="add-to-cart" href="#">+ Add To Cart</a></div></div></div><div class="col-lg-3 col-md-4 col-sm-6 mix sale bslr"><div class="product-grid"><div class="product-image"><a href="#"><img class="pic-1"${ssrRenderAttr("src", _imports_2)} alt="product image"><img class="pic-2"${ssrRenderAttr("src", _imports_3)} alt="product image"></a><ul class="social"><li><a href="#" data-tip="Quick View"><i class="ti-zoom-in"></i></a></li><li><a href="#" data-tip="Add to Wishlist"><i class="ti-bag"></i></a></li><li><a href="#" data-tip="Add to Cart"><i class="ti-shopping-cart"></i></a></li></ul><span class="product-new-label">-50%</span></div><ul class="rating"><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li><li class="fa fa-star"></li></ul><div class="product-content"><h3 class="title"><a href="#">Product Title</a></h3><div class="price"> $16.00 <span>$20.00</span></div><a class="add-to-cart" href="#">+ Add To Cart</a></div></div></div></div></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-163f63cd.mjs.map
