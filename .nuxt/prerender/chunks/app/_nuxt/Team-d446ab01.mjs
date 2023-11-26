import { p as publicAssetsURL } from '../../renderer.mjs';
import { mergeProps, useSSRContext } from 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _imports_0 = "" + publicAssetsURL("images/all-img/team1.jpg");
const _imports_1 = "" + publicAssetsURL("images/all-img/team2.jpg");
const _imports_2 = "" + publicAssetsURL("images/all-img/team3.jpg");
const _imports_3 = "" + publicAssetsURL("images/all-img/team4.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "team_home_area section-padding" }, _attrs))}><div class="container"><div class="section-title"><h2>Team Member</h2><p> Our Expert <span><u>Instructors</u></span></p></div><div class="row"><div class="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0"><div class="single-team-home"><div class="img"><img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt=""></div><div class="team-content-home"><h3>Marina Mojo</h3><p>Developer</p><div class="sth_det"><span class="ti-file"><u> 5 Course</u></span><span class="ti-user"><u> 12 Student</u></span></div><ul class="social-home"><li><a href="#" class="facebook-home"><i class="fa fa-facebook"></i></a></li><li><a href="#" class="twitter-home"><i class="fa fa-twitter"></i></a></li><li><a href="#" class="instagram-home"><i class="fa fa-instagram"></i></a></li></ul></div></div></div><div class="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0"><div class="single-team-home"><div class="img"><img${ssrRenderAttr("src", _imports_1)} class="img-fluid" alt=""></div><div class="team-content-home"><h3>Ayoub Fennouni</h3><p>Logo Expert</p><div class="sth_det"><span class="ti-file"><u> 5 Course</u></span><span class="ti-user"><u> 7 Student</u></span></div><ul class="social-home"><li><a href="#" class="facebook-home"><i class="fa fa-facebook"></i></a></li><li><a href="#" class="twitter-home"><i class="fa fa-twitter"></i></a></li><li><a href="#" class="instagram-home"><i class="fa fa-instagram"></i></a></li></ul></div></div></div><div class="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0"><div class="single-team-home"><div class="img"><img${ssrRenderAttr("src", _imports_2)} class="img-fluid" alt=""></div><div class="team-content-home"><h3>Mark Linomi</h3><p>Marketer</p><div class="sth_det"><span class="ti-file"><u> 9 Course</u></span><span class="ti-user"><u> 17 Student</u></span></div><ul class="social-home"><li><a href="#" class="facebook-home"><i class="fa fa-facebook"></i></a></li><li><a href="#" class="twitter-home"><i class="fa fa-twitter"></i></a></li><li><a href="#" class="instagram-home"><i class="fa fa-instagram"></i></a></li></ul></div></div></div><div class="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s" data-wow-offset="0"><div class="single-team-home"><div class="img"><img${ssrRenderAttr("src", _imports_3)} class="img-fluid" alt=""></div><div class="team-content-home"><h3>Amira Yerden</h3><p>UI/UX Designer</p><div class="sth_det"><span class="ti-file"><u> 15 Course</u></span><span class="ti-user"><u> 31 Student</u></span></div><ul class="social-home"><li><a href="#" class="facebook-home"><i class="fa fa-facebook"></i></a></li><li><a href="#" class="twitter-home"><i class="fa fa-twitter"></i></a></li><li><a href="#" class="instagram-home"><i class="fa fa-instagram"></i></a></li></ul></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Team.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Team-d446ab01.mjs.map
