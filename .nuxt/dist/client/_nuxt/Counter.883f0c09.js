import{_ as a,o as n,c as o,a as t,A as f,t as u,F as m,q as h,b,d as x}from"./entry.4cd6fcee.js";import{u as S}from"./frontStore.9b87303a.js";const $={props:{icon:{type:String,required:!0,default:null},count:{type:Number,required:!0,default:0},subtitle:{type:String,required:!0,default:null}}},g={class:"count-box"},v={class:"purecounter"};function y(c,l,e,r,i,_){return n(),o("div",g,[t("i",{style:{color:"#2eca7f"},class:f(e.icon)},null,2),t("div",null,[t("span",v,u(e.count),1),t("p",null,u(e.subtitle),1)])])}const F=a($,[["render",y]]),q={setup(){return{frontStore:S()}}},N={id:"counts",class:"counts section-padding"},k={class:"container","data-aos":"fade-up"},B=t("div",{class:"section-title"},[t("h2",null,"Some Fun Fact"),t("p",null,[x(" Our Great "),t("span",null,[t("u",null,"Achievement")])])],-1),V={class:"row gy-4"};function A(c,l,e,r,i,_){const d=F;return n(),o("section",N,[t("div",k,[B,t("div",V,[(n(!0),o(m,null,h(r.frontStore.counter,(s,p)=>(n(),o("div",{class:"col-lg-3 col-md-6",key:p},[b(d,{icon:s.icon,count:s.count,subtitle:s.subtitle},null,8,["icon","count","subtitle"])]))),128))])])])}const z=a(q,[["render",A]]);export{z as _};
