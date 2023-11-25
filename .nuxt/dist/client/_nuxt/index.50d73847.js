import{_ as b}from"./nuxt-link.1d026cfb.js";import{u as U}from"./AuthStore.23ceb01e.js";import{u as f}from"./frontStore.9b87303a.js";import{_ as m,o as e,c,F as v,q as $,a as t,t as d,b as _,w as S,B as y,d as h,r as x,y as E,z as F,s as P,x as V,n as D,D as g}from"./entry.4cd6fcee.js";import{_ as J,a as W,c as z,b as R}from"./Partner.d8e4c1b6.js";import{_ as Z}from"./Counter.883f0c09.js";import{_ as j}from"./CourseItem.ef2fb140.js";import{_ as q}from"./Team.14b3cf4b.js";import{_ as X}from"./BlogItem.1a65b2b7.js";import"./useSlug.031da9d4.js";const G=""+globalThis.__publicAssetsURL("images/icon/user2.svg"),H=""+globalThis.__publicAssetsURL("images/icon/file2.svg"),K={setup(){const a=U(),i=f();return{authStore:a,frontStore:i}}},Q={id:"home",class:"home_bg",style:{"background-image":"url(images/banner/home.png)","background-size":"cover","background-position":"center center"}},Y={class:"row"},tt={class:"col-lg-6 col-sm-6 col-xs-12"},nt={class:"home_content"},st={class:"home_btn"},ot=t("svg",{width:"13px",height:"10px",viewBox:"0 0 13 10"},[t("path",{d:"M1,5 L11,5"}),t("polyline",{points:"8 1 12 5 8 9"})],-1),et={class:"col-lg-6 col-sm-6 col-xs-12"},ct={class:"home_me_img"},it=["src"],at={class:"home_ps"},lt=t("img",{src:G,alt:""},null,-1),_t=t("span",null,"Active students",-1),rt=t("div",{class:"home_ps2"},[t("img",{src:H,alt:""}),t("h2",null,"4500+"),t("span",null,"Online Courses")],-1);function dt(a,i,s,o,u,p){const r=b;return e(),c("section",Q,[(e(!0),c(v,null,$(o.frontStore.banner,(n,l)=>(e(),c("div",{class:"container",key:l},[t("div",Y,[t("div",tt,[t("div",nt,[t("h1",null,d(n.title),1),t("p",null,d(n.pera),1)]),t("div",st,[_(r,{to:n.btnLink,class:"cta inline-flex gap-2 items-center"},{default:S(()=>[t("span",null,d(n.btnText),1),ot]),_:2},1032,["to"])])]),t("div",et,[t("div",ct,[t("img",{src:n.thumb,class:"img-fluid",alt:""},null,8,it),t("div",at,[lt,t("h2",null,d(o.authStore.studentAccounts.length)+" +",1),_t]),rt])])])]))),128))])}const ut=m(K,[["render",dt]]),mt={props:["sectionTitle","sectionSubtitle"],setup(){return{frontStore:f()}}},pt={class:"best-cpurse section-padding"},ht={class:"container"},ft={key:0,class:"section-title"},vt={key:0},$t={class:"row"},gt={class:"col-lg-12 text-center"},xt={class:"cc_btn"};function bt(a,i,s,o,u,p){const r=j,n=b;return e(),c("div",pt,[t("div",ht,[s.sectionTitle||s.sectionSubtitle?(e(),c("div",ft,[s.sectionTitle?(e(),c("h2",vt,d(s.sectionTitle),1)):y("",!0),t("p",null,d(s.sectionSubtitle),1)])):y("",!0),t("div",$t,[(e(!0),c(v,null,$(o.frontStore.courses,(l,w)=>(e(),c("div",{class:"col-lg-4 col-sm-6 col-xs-12 wow fadeInUp",key:w},[_(r,{thumb:l.thumb,price:l.price,tag:l.tag,title:l.title,lesson:l.lesson,duration:l.duration,rating:l.rating,seats:l.seats},null,8,["thumb","price","tag","title","lesson","duration","rating","seats"])]))),128)),t("div",gt,[t("div",xt,[_(n,{class:"btn_one",to:"/courses"},{default:S(()=>[h("View All Course")]),_:1})])])])])])}const St=m(mt,[["render",bt]]),wt={setup(){return{frontStore:f()}}},yt={class:"course_promo section-padding"},kt={class:"container"},Tt={class:"row"},Ct={class:"col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"},At={class:"cp_content"},Nt=t("span",{class:"ti-check"},null,-1),It={class:"cp_btn"},Lt=t("span",null,"Explore Our Courses",-1),Bt=t("svg",{width:"13px",height:"10px",viewBox:"0 0 13 10"},[t("path",{d:"M1,5 L11,5"}),t("polyline",{points:"8 1 12 5 8 9"})],-1),Mt={class:"col-lg-6 col-sm-12 col-xs-12 wow fadeInUp","data-wow-duration":"1s","data-wow-delay":"0.2s","data-wow-offset":"0"},Ot={class:"cp_img"},Ut=["src"];function Et(a,i,s,o,u,p){const r=b;return e(),c("section",yt,[t("div",kt,[t("div",Tt,[t("div",Ct,[t("div",At,[t("h4",null,d(o.frontStore.promotion.subtitle),1),t("h2",null,d(o.frontStore.promotion.title),1),t("p",null,d(o.frontStore.promotion.pera),1),t("ul",null,[(e(!0),c(v,null,$(o.frontStore.promotion.promo,(n,l)=>(e(),c("li",{key:l},[Nt,h(" "+d(n),1)]))),128))])]),t("div",It,[_(r,{to:"/courses",class:"cta d-inline-flex align-items-center"},{default:S(()=>[Lt,Bt]),_:1})])]),t("div",Mt,[t("div",Ot,[t("img",{src:o.frontStore.promotion.thumb,class:"img-fluid",alt:"image"},null,8,Ut)])])])])])}const Ft=m(wt,[["render",Et]]),Pt={},Vt={class:"text-center"},Dt=t("svg",{class:"mx-auto",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},[t("path",{fill:"#fff",d:"M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",opacity:".25"}),t("path",{fill:"#fff",d:"M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"},[t("animateTransform",{attributeName:"transform",dur:"0.75s",repeatCount:"indefinite",type:"rotate",values:"0 12 12;360 12 12"})])],-1),Jt=[Dt];function Wt(a,i){return e(),c("div",Vt,Jt)}const zt=m(Pt,[["render",Wt]]),Rt={setup(){const a=f(),i=x(""),s=x(null);return{frontStore:a,email:i,formSubmit:async()=>{i.value.includes("@")&&i.value!==""&&(await a.addSubscription({email:i.value}),s.value=i.value,console.log(i.value),i.value="",setTimeout(()=>{s.value=null},5e3))},success:s}}},Zt={class:"subscribe__btn"},jt={key:1,class:"fa fa-paper-plane-o"},qt={key:0,class:"text-green-600 position-absolute left-50",style:{transform:"translateX(-50%)"}},Xt={class:"text-green-700 font-bold"};function Gt(a,i,s,o,u,p){const r=zt;return e(),c("form",{onSubmit:i[1]||(i[1]=V((...n)=>o.formSubmit&&o.formSubmit(...n),["prevent"])),class:"home_subs"},[E(t("input",{type:"email",class:"subscribe__input text-lowercase",placeholder:"Enter your Email Address","onUpdate:modelValue":i[0]||(i[0]=n=>o.email=n)},null,512),[[F,o.email]]),t("button",Zt,[o.frontStore.loading?(e(),P(r,{key:0})):(e(),c("i",jt))]),o.success?(e(),c("small",qt,[t("span",Xt,d(o.success),1),h(" is now subscribed.")])):y("",!0)],32)}const Ht=m(Rt,[["render",Gt]]),Kt={},Qt={class:"newsletter_area section-padding"},Yt={class:"container"},tn={class:"row text-center"},nn={class:"col-lg-6 offset-lg-3 col-sm-12 col-xs-12"},sn={class:"subs_form"},on=t("h3",null,"Subscripbe to our newsletter, We don't make any spam.",-1);function en(a,i){const s=Ht;return e(),c("section",Qt,[t("div",Yt,[t("div",tn,[t("div",nn,[t("div",sn,[on,_(s)])])])])])}const cn=m(Kt,[["render",en]]),an={props:["icon","title","courseCount"]},ln={class:"single_tca"},_n=["src"];function rn(a,i,s,o,u,p){const r=b;return e(),c("div",ln,[t("img",{src:s.icon,alt:""},null,8,_n),t("h2",null,[_(r,{to:"/"},{default:S(()=>[h(d(s.title),1)]),_:1})]),t("span",null,d(s.courseCount)+" Courses",1)])}const dn=m(an,[["render",rn]]),un={setup(){return{frontStore:f()}}},mn={class:"topic_content_area section-padding"},pn={class:"container"},hn=t("div",{class:"section-title"},[t("h2",null,"Start Learning"),t("p",null,[h(" Popular "),t("span",null,[t("u",null,"Topics To Learn")]),h(" From Today. ")])],-1),fn={class:"row"};function vn(a,i,s,o,u,p){const r=dn;return e(),c("section",mn,[t("div",pn,[hn,t("div",fn,[(e(!0),c(v,null,$(o.frontStore.topics,(n,l)=>(e(),c("div",{class:"col-lg-4 col-sm-6 col-xs-12",key:l},[_(r,{icon:n.icon,title:n.title,courseCount:n.courseCount},null,8,["icon","title","courseCount"])]))),128))])])])}const $n=m(un,[["render",vn]]),gn={props:["thumb","title","time","location","pera","date","time"],setup(a){const i=x(a.date),o=x(a.time).value.join(" - "),u=i.value.split("/"),p=parseInt(u[1],10),r=parseInt(u[0],10),l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][r-1];return{day:p,monthName:l,timeF:o}}},xn={class:"event-slide mb-0"},bn={class:"event-img"},Sn=["src"],wn={class:"event-date"},yn={class:"date"},kn={class:"month"},Tn={class:"event-content"},Cn={href:"event.html"},An=t("i",{class:"fa fa-clock-o"},null,-1),Nn=t("i",{class:"fa fa-table"},null,-1);function In(a,i,s,o,u,p){return e(),c("div",xn,[t("div",bn,[t("img",{src:s.thumb,alt:""},null,8,Sn),t("div",wn,[t("span",yn,d(o.day),1),t("span",kn,d(o.monthName),1)])]),t("div",Tn,[t("h3",null,[t("a",Cn,d(s.title),1)]),t("span",null,[An,(e(!0),c(v,null,$(o.timeF,(r,n)=>(e(),c("span",{key:n},d(r),1))),128))]),t("span",null,[Nn,t("strong",null,d(s.location),1)]),t("p",null,d(s.pera),1)])])}const Ln=m(gn,[["render",In]]),Bn={setup(){return{frontStore:f()}}},Mn={class:"our-event section-padding"},On={class:"container"},Un=t("div",{class:"section-title"},[t("h2",null,"Upcoming Events"),t("p",null,[h(" Join With Us "),t("span",null,[t("u",null,"Our Events")])])],-1),En={class:"row"},Fn=D('<div class="col-lg-4 col-sm-6 col-xs-12 d-none"><div class="event-slide es"><div class="ed_mb"><span class="date">26</span><span class="month">Oct</span></div><div class="event-content ec_pd"><h3><a href="event.html">Chiter astana event</a></h3><span><i class="fa fa-clock-o"></i>10.00AM - 12.00PM</span><span><i class="fa fa-table"></i><strong>At Penn School</strong></span><p> Lorem ipsum dolor sit amet magna consectetur adipisicing elit. </p></div></div><div class="event-slide es"><div class="ed_mb"><span class="date">29</span><span class="month">Oct</span></div><div class="event-content ec_pd"><h3><a href="event.html">Dasel Bhai Program</a></h3><span><i class="fa fa-clock-o"></i>10.00AM - 12.00PM</span><span><i class="fa fa-table"></i><strong>At Penn School</strong></span><p> Lorem ipsum dolor sit amet magna consectetur adipisicing elit. </p></div></div></div>',1);function Pn(a,i,s,o,u,p){const r=Ln;return e(),c("section",Mn,[t("div",On,[Un,t("div",En,[(e(!0),c(v,null,$(o.frontStore.events,(n,l)=>(e(),c("div",{class:"col-lg-4 col-sm-6 col-xs-12",key:l},[_(r,{thumb:n.thumb,title:n.title,pera:n.pera,date:n.date,time:n.time,location:n.location},null,8,["thumb","title","pera","date","time","location"])]))),128)),Fn])])])}const Vn=m(Bn,[["render",Pn]]),Dn=""+globalThis.__publicAssetsURL("images/all-img/t1.png"),Jn={props:["pera","rating"],setup(){return{frontStore:f()}}},Wn={class:"testimonial"},zn={class:"testimonial_content"},Rn=t("div",{class:"testi_pic_title tpt_one"},[t("div",{class:"pic"},[t("img",{src:Dn,alt:""})]),t("h4",null,"James Clayton"),t("small",{class:"post"},"- Design Expert")],-1);function Zn(a,i,s,o,u,p){return e(),c("div",Wn,[t("div",zn,[t("i",{class:"fa fa-star",style:g({color:parseInt(s.rating)>=1?"#ffbd35":""})},null,4),t("i",{class:"fa fa-star",style:g({color:parseInt(s.rating)>=2?"#ffbd35":""})},null,4),t("i",{class:"fa fa-star",style:g({color:parseInt(s.rating)>=3?"#ffbd35":""})},null,4),t("i",{class:"fa fa-star",style:g({color:parseInt(s.rating)>=4?"#ffbd35":""})},null,4),t("i",{class:"fa fa-star",style:g({color:parseInt(s.rating)>=5?"#ffbd35":""})},null,4),t("p",null,d(s.pera),1)]),Rn])}const jn=m(Jn,[["render",Zn]]),qn={setup(){return{frontStore:f()}}},Xn={class:"testi_home_area section-padding"},Gn={class:"container"},Hn=t("div",{class:"section-title"},[t("h2",null,"Testimonial"),t("p",null,[h(" What Says "),t("span",null,[t("u",null,"Our Students")])])],-1),Kn={class:"row"};function Qn(a,i,s,o,u,p){const r=jn;return e(),c("section",Xn,[t("div",Gn,[Hn,t("div",Kn,[(e(!0),c(v,null,$(o.frontStore.testimonials,(n,l)=>(e(),c("div",{class:"col-lg-4 col-md-6",key:l},[_(r,{pera:n.pera,rating:n.rating},null,8,["pera","rating"])]))),128))])])])}const Yn=m(qn,[["render",Qn]]),ts={setup(){return{frontStore:f()}}},ns={id:"blog",class:"blog_area section-padding"},ss={class:"container"},os=t("div",{class:"section-title"},[t("h2",null,"News"),t("p",null,[h(" Our Latest "),t("span",null,[t("u",null,"Blogs")])])],-1),es={class:"row"};function cs(a,i,s,o,u,p){const r=X;return e(),c("section",ns,[t("div",ss,[os,t("div",es,[(e(!0),c(v,null,$(o.frontStore.posts,(n,l)=>(e(),c("div",{class:"col-lg-4 col-sm-4 col-xs-12 wow fadeInUp",key:l},[_(r,{title:n.title,thumb:n.thumb,tag:n.tag,date:n.date},null,8,["title","thumb","tag","date"])]))),128))])])])}const is=m(ts,[["render",cs]]),as={};function ls(a,i,s,o,u,p){const r=ut,n=J,l=W,w=Z,k=z,T=R,C=St,A=Ft,N=cn,I=$n,L=Vn,B=Yn,M=q,O=is;return e(),c(v,null,[_(r),_(n),_(l),_(w),_(k),_(T),_(C,{sectionSubtitle:"Choose Our Top Courses",sectionTitle:"Browse our Courses"}),_(A),_(N),_(I),_(L),_(B),_(M),_(O)],64)}const gs=m(as,[["render",ls]]);export{gs as default};
