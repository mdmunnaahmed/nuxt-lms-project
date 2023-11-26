import{_ as M}from"./InnerBanner.a67e250b.js";import{_ as V}from"./Spinner.bc79d4ab.js";import{_ as B}from"./nuxt-link.75ea86cd.js";import{_ as I,r as m,o as l,s as k,w as P,a as t,t as d,u as U,v as C,c,b as T,F as x,q as D,x as J,y,z as S,A as z,B as f}from"./entry.7fda6bbc.js";import{u as E}from"./useSlug.031da9d4.js";import{u as q}from"./frontStore.2c86b3b0.js";const O={props:["date","title","tag"],setup(n){const o=m(n.title),r=m(n.date),_=o.value.trim().toLowerCase().replaceAll(/[^\w\s]/gi,"").replaceAll(" ","-").replaceAll("--","-");function u(h){const p=h.split("/"),v=parseInt(p[0],10),s=parseInt(p[1],10),a=parseInt(p[2],10),w=["January","February","March","April","May","June","July","August","September","October","November","December"][s-1];return`${v} ${w}, ${a}`}const i=u(r.value);return{slug:_,formattedDate:i}}},R={class:"content_box p-4"};function Y(n,o,r,e,_,u){const i=B;return l(),k(i,{to:"/blog/"+e.slug,class:"single_blog mb-3 border-b"},{default:P(()=>[t("div",R,[t("span",null,d(e.formattedDate)+" | "+d(r.tag),1),t("h6",null,d(r.title),1)])]),_:1},8,["to"])}const j=I(O,[["render",Y]]);const G={props:["thumb","title"],setup(n){const{slug:o}=E(n.title);return{slug:o}}},H=["src"];function K(n,o,r,e,_,u){const i=B;return l(),k(i,{to:e.slug},{default:P(()=>[t("img",{src:"/images/blog/"+r.thumb,alt:""},null,8,H),t("h5",null,d(r.title),1)]),_:1},8,["to"])}const Q=I(G,[["render",K],["__scopeId","data-v-bbcb8e49"]]),W={setup(){const n=q(),o=U(),r=n.loading,e=m(!1),_=m(!1),u=m(!1),i=m(""),h=o.params.id,p=n.getIdPost(h),v=C(()=>n.getIdComment.filter(b=>b.cid===h)),s=m(""),a=m(""),g=m(""),w=C(()=>g.value.length),N=async()=>{if(s.value===""||a.value===""||g.value===""||g.value.length>200){e.value=!0,g.value.length>200&&(_.value=!0);return}e.value=!1,_.value=!1,await n.addComment({cid:h,name:s.value,email:a.value,message:g.value}),s.value="",a.value="",g.value="",u.value=!0,await new Promise(b=>setTimeout(b,5e3)),u.value=!1},A=[...n.posts].sort(()=>Math.random()-.5).slice(0,5),F=b=>{n.setSearchTerm(b.target.value)},L=C(()=>n.filteredSearchData.slice(0,4));return{frontStore:n,post:p,loading:r,error:e,error2:_,success:u,slug:h,comments:v,submitForm:N,name:s,email:a,message:g,commentLength:w,popularPost:A,updateSearch:F,searchTerm:n.searchTerm,filteredSearchData:L,searchTerm:i}}},X={class:"blog-page section-padding"},Z={class:"container"},$={class:"row"},tt={class:"col-lg-7 col-sm-12 col-xs-12"},et={class:"arti_single"},st={class:"arti_img_two"},ot=["src"],nt=t("div",{class:"arti_content"},null,-1),lt={class:"arti_sp"},at=t("div",{class:"pt-4"},null,-1),rt={class:"comments_part"},ct=t("h3",{class:"blog_head_title"},"Comments",-1),it={class:"comment_form"},mt=t("h3",{class:"blog_head_title"},"Add a Comment",-1),dt={class:"contact comment-box"},_t={class:"row"},ut={class:"form-group col-md-6"},ht={class:"form-group col-md-6"},gt={class:"form-group col-md-12 pb-1"},pt={class:"col-md-12"},vt={key:1,class:"text-danger mb-2 inline-block"},bt={key:2,class:"text-success mb-2 inline-block"},ft={key:3,class:"text-danger mb-2 inline-block"},xt=t("div",{class:"actions"},[t("button",{class:"btn btn_one"},"Submit Comment")],-1),yt={class:"col-lg-5 col-sm-12 col-xs-12"},St={class:"sidebar-post"},kt={class:"blog_search"},wt={key:0},Ct={class:"sidebar-post"},Dt=t("div",{class:"sidebar_title"},[t("h4",null,"Popular post")],-1);function It(n,o,r,e,_,u){const i=M,h=V,p=j,v=Q;return l(),c(x,null,[T(i,{title:e.post.title,slug:"blog details"},null,8,["title"]),t("section",X,[t("div",Z,[t("div",$,[t("div",tt,[t("div",et,[t("div",st,[t("img",{src:"/images/blog/"+e.post.thumb,class:"img-fluid",alt:"Blog image"},null,8,ot)]),nt,t("div",lt,[t("h2",null,d(e.post.title),1),t("p",null,d(e.post.pera),1)])]),at,t("div",rt,[ct,(l(!0),c(x,null,D(e.comments,(s,a)=>(l(),c("div",{class:"single_comment",key:a},[t("h4",null,d(s.name),1),t("p",null,d(s.message),1)]))),128))]),t("div",it,[mt,t("div",dt,[t("form",{onSubmit:o[3]||(o[3]=J((...s)=>e.submitForm&&e.submitForm(...s),["prevent"]))},[t("div",_t,[t("div",ut,[y(t("input",{type:"text",class:"form-control",placeholder:"Name","onUpdate:modelValue":o[0]||(o[0]=s=>e.name=s)},null,512),[[S,e.name,void 0,{trim:!0}]])]),t("div",ht,[y(t("input",{type:"email",class:"form-control",placeholder:"Email","onUpdate:modelValue":o[1]||(o[1]=s=>e.email=s)},null,512),[[S,e.email,void 0,{trim:!0}]])]),t("div",gt,[y(t("textarea",{rows:"6",class:"form-control mb-1",placeholder:"Your Message","onUpdate:modelValue":o[2]||(o[2]=s=>e.message=s)},null,512),[[S,e.message,void 0,{trim:!0}]]),t("small",{class:z({"text-danger":e.commentLength>200})},d(e.commentLength)+" of 200",3)]),t("div",pt,[e.loading?(l(),k(h,{key:0})):f("",!0),e.error&&!e.error2?(l(),c("small",vt,"Please input all the fields")):f("",!0),e.success&&!e.error2?(l(),c("small",bt,"Comment published")):f("",!0),e.error2?(l(),c("small",ft,"Message must be less than the specified letter ")):f("",!0),xt])])],32)])])]),t("div",yt,[t("div",St,[t("div",kt,[y(t("input",{type:"text",class:"form-control",placeholder:"Type your keyword","onUpdate:modelValue":o[4]||(o[4]=s=>e.searchTerm=s),onInput:o[5]||(o[5]=(...s)=>e.updateSearch&&e.updateSearch(...s))},null,544),[[S,e.searchTerm]]),e.searchTerm?(l(),c("ul",wt,[(l(!0),c(x,null,D(e.filteredSearchData,(s,a)=>(l(),c("li",{key:a},[T(p,{title:s.title,thumb:s.thumb,tag:s.tag,date:s.date},null,8,["title","thumb","tag","date"])]))),128))])):f("",!0)])]),t("div",Ct,[Dt,(l(!0),c(x,null,D(e.popularPost,(s,a)=>(l(),k(v,{class:"single_popular",key:a,title:s.title,thumb:s.thumb},null,8,["title","thumb"]))),128))])])])])])],64)}const Mt=I(W,[["render",It]]);export{Mt as default};