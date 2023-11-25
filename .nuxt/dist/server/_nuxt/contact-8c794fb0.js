import { _ as __nuxt_component_0 } from "./InnerBanner-cc711ce9.js";
import { ref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "@vue/devtools-api";
const _sfc_main = {
  setup() {
    const name = ref("");
    const submitForm = () => {
      console.log(name.value);
    };
    return {
      submitForm
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionInnerBanner = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_SectionInnerBanner, {
    title: "Contact Us",
    slug: "contact"
  }, null, _parent));
  _push(`<section class="address_area section-padding"><div class="container"><div class="row text-center"><div class="col-lg-4 col-sm-4 col-xs-12"><div class="single_address"><i class="ti-map"></i><h4>Our Location</h4><p> 3481 Melrose Place, Beverly Hills <br> CA 90210 </p></div></div><div class="col-lg-4 col-sm-4 col-xs-12"><div class="single_address sabr"><i class="ti-mobile"></i><h4>Telephone</h4><p>(+1) 517 397 7100</p><p>(+1) 411 315 8138</p></div></div><div class="col-lg-4 col-sm-4 col-xs-12"><div class="single_address"><i class="ti-email"></i><h4>Send email</h4><p>msdmunna77@gmail.com</p><p>msdmunna77@gmail.com</p></div></div></div></div></section><div id="contact" class="contact_area section-padding"><div class="container"><div class="section-title-two"><h2>Send your message.</h2></div><div class="row"><div class="offset-lg-1 col-lg-10 col-sm-12 col-xs-12"><div class="contact"><form><div class="row"><div class="form-group col-md-6"><label for="">Name</label><input${ssrRenderAttr("value", _ctx.name)} type="text" class="form-control name"></div><div class="form-group col-md-6"><label for="">Your Email</label><input type="email" class="form-control"></div><div class="form-group col-md-12"><label for="">Your Subject</label><input type="text" class="form-control"></div><div class="form-group col-md-12"><label for="">Your Message</label><textarea rows="6" class="form-control"></textarea></div><div class="col-md-12 text-center"><button class="btn_one">Send Message</button></div></div></form></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  contact as default
};
//# sourceMappingURL=contact-8c794fb0.js.map
