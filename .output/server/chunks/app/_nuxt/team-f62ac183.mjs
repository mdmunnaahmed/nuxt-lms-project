import { _ as __nuxt_component_0 } from './InnerBanner-cc711ce9.mjs';
import { _ as __nuxt_component_1 } from './Team-d446ab01.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import '../../handlers/renderer.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionInnerBanner = __nuxt_component_0;
  const _component_SectionTeam = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_SectionInnerBanner, {
    title: "Our Instructors",
    slug: "instructors"
  }, null, _parent));
  _push(ssrRenderComponent(_component_SectionTeam, null, null, _parent));
  _push(`<div class="pb-5"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/team.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const team = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { team as default };
//# sourceMappingURL=team-f62ac183.mjs.map
