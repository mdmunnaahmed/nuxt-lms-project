import { _ as __nuxt_component_0 } from './InnerBanner-cc711ce9.mjs';
import { _ as __nuxt_component_0$1 } from './Spinner-3d2f92c0.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-99c863e4.mjs';
import { useSSRContext, ref, computed, mergeProps, withCtx, createVNode, toDisplayString } from 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, u as useRoute } from '../server.mjs';
import { u as useSlug } from './useSlug-71b1c58b.mjs';
import { u as useFrontStore } from './frontStore-3016d556.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/ufo/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/ofetch/dist/node.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/hookable/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unctx/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/defu/dist/defu.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unhead/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/h3/dist/index.mjs';
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

const _sfc_main$2 = {
  props: ["date", "title", "tag"],
  setup(props) {
    const title = ref(props.title);
    const date = ref(props.date);
    const stitle = title.value.trim().toLowerCase().replaceAll(/[^\w\s]/gi, "");
    const slug = stitle.replaceAll(" ", "-").replaceAll("--", "-");
    function formatDate(inputDate) {
      const parts = inputDate.split("/");
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10);
      const year = parseInt(parts[2], 10);
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      const monthName = monthNames[month - 1];
      const formattedDate2 = `${day} ${monthName}, ${year}`;
      return formattedDate2;
    }
    const formattedDate = formatDate(date.value);
    return { slug, formattedDate };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: "/blog/" + $setup.slug,
    class: "single_blog mb-3 border-b"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="content_box p-4"${_scopeId}><span${_scopeId}>${ssrInterpolate($setup.formattedDate)} | ${ssrInterpolate($props.tag)}</span><h6${_scopeId}>${ssrInterpolate($props.title)}</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "content_box p-4" }, [
            createVNode("span", null, toDisplayString($setup.formattedDate) + " | " + toDisplayString($props.tag), 1),
            createVNode("h6", null, toDisplayString($props.title), 1)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogSearchItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  props: ["thumb", "title"],
  setup(props) {
    const { slug } = useSlug(props.title);
    return { slug };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ to: $setup.slug }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", "/images/blog/" + $props.thumb)} alt="" data-v-bbcb8e49${_scopeId}><h5 data-v-bbcb8e49${_scopeId}>${ssrInterpolate($props.title)}</h5>`);
      } else {
        return [
          createVNode("img", {
            src: "/images/blog/" + $props.thumb,
            alt: ""
          }, null, 8, ["src"]),
          createVNode("h5", null, toDisplayString($props.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SinglePopular.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-bbcb8e49"]]);
const _sfc_main = {
  setup() {
    const frontStore = useFrontStore();
    const route = useRoute();
    const loading = frontStore.loading;
    const error = ref(false);
    const error2 = ref(false);
    const success = ref(false);
    const searchTerm = ref("");
    const slug = route.params.id;
    const post = frontStore.getIdPost(slug);
    const comments = computed(
      () => frontStore.getIdComment.filter((c) => c.cid === slug)
    );
    const name = ref("");
    const email = ref("");
    const message = ref("");
    const commentLength = computed(() => {
      return message.value.length;
    });
    const submitForm = async () => {
      if (name.value === "" || email.value === "" || message.value === "" || message.value.length > 200) {
        error.value = true;
        if (message.value.length > 200) {
          error2.value = true;
        }
        return;
      }
      error.value = false;
      error2.value = false;
      await frontStore.addComment({
        cid: slug,
        name: name.value,
        email: email.value,
        message: message.value
      });
      name.value = "";
      email.value = "";
      message.value = "";
      success.value = true;
      await new Promise((resolve) => setTimeout(resolve, 5e3));
      success.value = false;
    };
    const arrayC = [...frontStore.posts];
    const popularPost = arrayC.sort(() => Math.random() - 0.5).slice(0, 5);
    const updateSearch = (event) => {
      frontStore.setSearchTerm(event.target.value);
    };
    const filteredSearchData = computed(() => {
      return frontStore.filteredSearchData.slice(0, 4);
    });
    return {
      frontStore,
      post,
      loading,
      error,
      error2,
      success,
      slug,
      comments,
      submitForm,
      name,
      email,
      message,
      commentLength,
      popularPost,
      updateSearch,
      searchTerm: frontStore.searchTerm,
      filteredSearchData,
      searchTerm
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionInnerBanner = __nuxt_component_0;
  const _component_UISpinner = __nuxt_component_0$1;
  const _component_BlogSearchItem = __nuxt_component_2;
  const _component_SinglePopular = __nuxt_component_3;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_SectionInnerBanner, {
    title: $setup.post.title,
    slug: "blog details"
  }, null, _parent));
  _push(`<section class="blog-page section-padding"><div class="container"><div class="row"><div class="col-lg-7 col-sm-12 col-xs-12"><div class="arti_single"><div class="arti_img_two"><img${ssrRenderAttr("src", "/images/blog/" + $setup.post.thumb)} class="img-fluid" alt="Blog image"></div><div class="arti_content"></div><div class="arti_sp"><h2>${ssrInterpolate($setup.post.title)}</h2><p>${ssrInterpolate($setup.post.pera)}</p></div></div><div class="pt-4"></div><div class="comments_part"><h3 class="blog_head_title">Comments</h3><!--[-->`);
  ssrRenderList($setup.comments, (comment, index) => {
    _push(`<div class="single_comment"><h4>${ssrInterpolate(comment.name)}</h4><p>${ssrInterpolate(comment.message)}</p></div>`);
  });
  _push(`<!--]--></div><div class="comment_form"><h3 class="blog_head_title">Add a Comment</h3><div class="contact comment-box"><form><div class="row"><div class="form-group col-md-6"><input type="text" class="form-control" placeholder="Name"${ssrRenderAttr("value", $setup.name)}></div><div class="form-group col-md-6"><input type="email" class="form-control" placeholder="Email"${ssrRenderAttr("value", $setup.email)}></div><div class="form-group col-md-12 pb-1"><textarea rows="6" class="form-control mb-1" placeholder="Your Message">${ssrInterpolate($setup.message)}</textarea><small class="${ssrRenderClass({ "text-danger": $setup.commentLength > 200 })}">${ssrInterpolate($setup.commentLength)} of 200</small></div><div class="col-md-12">`);
  if ($setup.loading) {
    _push(ssrRenderComponent(_component_UISpinner, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($setup.error && !$setup.error2) {
    _push(`<small class="text-danger mb-2 inline-block">Please input all the fields</small>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.success && !$setup.error2) {
    _push(`<small class="text-success mb-2 inline-block">Comment published</small>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.error2) {
    _push(`<small class="text-danger mb-2 inline-block">Message must be less than the specified letter </small>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="actions"><button class="btn btn_one">Submit Comment</button></div></div></div></form></div></div></div><div class="col-lg-5 col-sm-12 col-xs-12"><div class="sidebar-post"><div class="blog_search"><input type="text" class="form-control" placeholder="Type your keyword"${ssrRenderAttr("value", $setup.searchTerm)}>`);
  if ($setup.searchTerm) {
    _push(`<ul><!--[-->`);
    ssrRenderList($setup.filteredSearchData, (b, index) => {
      _push(`<li>`);
      _push(ssrRenderComponent(_component_BlogSearchItem, {
        title: b.title,
        thumb: b.thumb,
        tag: b.tag,
        date: b.date
      }, null, _parent));
      _push(`</li>`);
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="sidebar-post"><div class="sidebar_title"><h4>Popular post</h4></div><!--[-->`);
  ssrRenderList($setup.popularPost, (pp, index) => {
    _push(ssrRenderComponent(_component_SinglePopular, {
      class: "single_popular",
      key: index,
      title: pp.title,
      thumb: pp.thumb
    }, null, _parent));
  });
  _push(`<!--]--></div></div></div></div></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id_ as default };
//# sourceMappingURL=_id_-6d063794.mjs.map
