"use strict";(self.webpackChunkcorporate=self.webpackChunkcorporate||[]).push([[736],{9377:function(e,t,n){n.r(t);var r=n(5861),a=n(7757),o=n.n(a),l=n(7294),i=n(1597),c=n(5414),m=n(660),s=n(2349),d=n(396),p=n(6042),u=n.n(p),g=n(559),h=n(5668),E=n(9612),f=n(5190),y=n(9211),x=n(6968),Z=n(5616),b=n(4320),w=n(581),v=n(2664),k=n(7783),S=n(943),I=n(5319),C=n(3182),O=n(7098),W=n(9308),L=n(9915),z=n(9362),_=n(1106),H=n(189),D=n(4381),P=n(4155),T=n(6693),A=n(8855),M=n(3754),R=n(1675),U=n(6908),N=(n(9891),n(7361)),j=n(5050),B=n(6584),F=n(4149),Q=function(e){return void 0===e&&(e=500),new Promise((function(t){return setTimeout(t,e)}))},K=function(e){var t=e.children,n=e.name,r=e.subtitle,a=e.title,o=e.clientWidth,i=e.disableLine;return l.createElement(m.df,{triggerOnce:!0},(function(e){var c=e.inView,s=e.ref;return l.createElement(y.Z,{ref:s,name:n},l.createElement(y.Z,{bgcolor:"common.white"},l.createElement(Z.Z,{sx:{overflow:"hidden"}},l.createElement(b.ZP,{container:!0,py:"10vh",justifyContent:"center",spacing:8},l.createElement(b.ZP,{item:!0,md:4,xs:12},l.createElement(y.Z,{display:"flex",justifyContent:{md:"flex-start"}},l.createElement(y.Z,null,l.createElement(y.Z,{display:"flex",alignItems:"center"},l.createElement(y.Z,{width:40,height:1,mr:1,sx:{border:"1px solid #ef8468"}}),l.createElement(W.Z,{variant:"subtitle1",color:"text.primary",fontWeight:300},r)),l.createElement(W.Z,{variant:"h2",color:"text.primary"},a)))),l.createElement(b.ZP,{item:!0,md:6,xs:12},l.createElement(y.Z,{sx:{transition:"transform 2000ms ease-out 100ms",transform:"translateX("+(c?"0":"100")+"px)"}},t))))),!i&&l.createElement(m.df,null,(function(e){e.inView;var t=e.ref;return l.createElement(y.Z,{ref:t,position:"relative",width:"100%",height:240},l.createElement(y.Z,{position:"absolute",left:0,width:o/2-1,height:"100%",bgcolor:"common.white"}),l.createElement(y.Z,{position:"absolute",right:0,width:o/2-1,height:"100%",bgcolor:"common.white"}))})))}))};t.default=function(e){var t=e.location,a=(0,i.useStaticQuery)("3191925151").site.siteMetadata,m="/"===t.pathname,p=a.siteUrl+t.pathname,b=""+a.title,X=m?"website":"article",J=(0,l.useState)(void 0),V=J[0],Y=J[1],q=(0,l.useState)((0,j.Z)()||0),G=q[0],$=q[1],ee=(0,l.useState)(0),te=ee[0],ne=ee[1],re=(0,l.useState)(0),ae=re[0],oe=re[1];(0,l.useEffect)((function(){var e,t,n,a;if((new Image).src=B.Z,(new Image).src=F.Z,null!==(e=window)&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.search&&null!==(n=window)&&void 0!==n&&n.URLSearchParams){var l=new URLSearchParams(window.location.search).get("animationType"),i=document.getElementById("opening-animation"),c=document.getElementById("opening-animation__background");if(i)if(1==l){var m=u().loadAnimation({container:i,loop:!1,autoplay:!1,animationData:N});i.style.opacity=1,i.style.transition="all 500ms ease-out",m.addEventListener("DOMLoaded",(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=document.getElementById("opening-animation__background")).style.transition="none",t.style.transform="scale(1, 1)",e.next=5,Q();case 5:return t.style.transition="all 500ms ease-out",e.next=8,Q();case 8:return t.style.transformOrigin="bottom center",e.next=11,Q();case 11:m.play(),t.style.transform="scale(1, 0)";case 13:case"end":return e.stop()}}),e)})))),m.addEventListener("complete",(function(){i.addEventListener("transitionend",(function(){m.destroy(),i.parentNode.removeChild(i)})),i.style.opacity=0}))}else if(2==l||3==l||4==l||5==l){var s=u().loadAnimation({container:i,loop:!1,autoplay:!1,animationData:N});i.style.opacity=1,i.style.transition="all 500ms ease-out",c.style.transition="none",2==l?(c.style.transform="scale(1, 0)",c.style.transformOrigin="top center"):3==l?(c.style.transform="scale(1, 0)",c.style.transformOrigin="bottom center"):4==l?(c.style.transform="scale(0, 1)",c.style.transformOrigin="center left"):(c.style.transform="scale(0, 1)",c.style.transformOrigin="center right"),s.addEventListener("DOMLoaded",(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.style.transition="all 500ms ease-out",s.play();case 2:case"end":return e.stop()}}),e)})))),s.addEventListener("complete",(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.style.transform="scale(1, 1)",e.next=3,Q();case 3:return c.style.transformOrigin=2==l?"bottom center":3==l?"top center":4==l?"center right":"center left",e.next=6,Q();case 6:return c.style.transform=2==l||3==l?"scale(1, 0)":"scale(0, 1)",i.style.opacity=0,e.next=10,Q();case 10:s.destroy(),i.parentNode.removeChild(i);case 12:case"end":return e.stop()}}),e)}))))}}null!==(a=window)&&void 0!==a&&a.localStorage?Y(1===Number(window.localStorage.getItem("isDark"))):Y(!1),window&&(ne(document.documentElement.clientWidth),oe(document.documentElement.clientHeight),window.addEventListener("resize",(function(){$((0,j.Z)()),ne(document.documentElement.clientWidth),oe(document.documentElement.clientHeight)})),window.addEventListener("scroll",(function(){$((0,j.Z)()),ne(document.documentElement.clientWidth),oe(document.documentElement.clientHeight)})))}),[V]);var le="#151618",ie="#f4f4f4",ce=(0,g.Z)({palette:{mode:V?"dark":"light",common:{black:V?ie:le,white:V?le:ie},primary:{main:"#ef8468"},text:{primary:V?ie:le,secondary:"#dddddd"}},typography:{fontSize:14,fontFamily:['"Noto Serif JP"','"ヒラギノ明朝 Pro W3"','"Hiragino Mincho Pro"','"ＭＳ Ｐ明朝"','"MS PMincho"',"serif"].join(","),h1:{fontSize:42,lineHeight:1.4,letterSpacing:2},h2:{fontSize:32,lineHeight:1.4},h3:{fontWeight:500,fontSize:22,lineHeight:1.6},subtitle1:{fontSize:16,fontWeight:"bold",textAlign:"center"},body1:{fontSize:15,lineHeight:1.8},body2:{fontSize:12}}});return void 0===V?l.createElement(l.Fragment,null):l.createElement(h.Z,{theme:ce},l.createElement(c.q,null,l.createElement("html",{lang:a.lang}),l.createElement("meta",{name:"description",content:a.description}),l.createElement("title",null,b),l.createElement("link",{rel:"canonical",href:p}),l.createElement("meta",{property:"og:title",content:b}),l.createElement("meta",{property:"og:type",content:X}),l.createElement("meta",{property:"og:url",content:p}),l.createElement("meta",{property:"og:description",content:a.description}),l.createElement("meta",{property:"og:locale",content:a.locale}),l.createElement("meta",{property:"og:site_name",content:a.siteName}),l.createElement("meta",{property:"og:image",content:a.ogpUrl}),l.createElement("meta",{property:"og:image:secure_url",content:a.ogpUrl}),l.createElement("meta",{property:"og:image:type",content:"image/png"}),l.createElement("meta",{property:"og:image:width",content:"1200"}),l.createElement("meta",{property:"og:image:height",content:"630"}),l.createElement("meta",{property:"og:image:alt",content:b}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:b}),l.createElement("meta",{name:"twitter:description",content:a.description}),l.createElement("meta",{name:"twitter:image",content:a.ogpUrl}),l.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),l.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),l.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;700&display=swap"})),l.createElement(E.Z,{styles:{"*, html, body":{margin:0,padding:0},"html,body":{height:"100%"},body:{color:"yellow",transition:"background-color 1000ms ease-out"},"body::after":{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(#833ab4, #fd1d1d, #fcb045)",content:"''",zIndex:-1}}}),l.createElement(y.Z,{id:"opening-animation",sx:{transition:"all 500ms ease-out",position:"fixed",top:0,right:0,bottom:0,left:0,height:"100%",width:{md:"20%",xs:"50%"},paddingRight:{md:"40%",xs:"25%"},paddingLeft:{md:"40%",xs:"25%"},backgroundColor:ie,zIndex:1101}},l.createElement(y.Z,{id:"opening-animation__background",sx:{position:"absolute",width:"100%",height:"100%",top:0,left:0,right:0,backgroundColor:le}})),l.createElement(f.Z,{position:"fixed",sx:{bgcolor:"common.white",boxShadow:"none"}},l.createElement(Z.Z,null,l.createElement(O.Z,null,l.createElement(y.Z,{width:110,sx:{cursor:"pointer"},onClick:function(){s.OK.scrollTo("top",{duration:1500,smooth:"easeInOutQuart"})}},l.createElement(H.Z,{fill:ce.palette.common.black,style:{display:"block",width:"100%",height:"100%"}})),l.createElement(y.Z,{display:"flex",justifyContent:"flex-end",alignItems:"flex-end",width:"100%"},l.createElement(y.Z,{display:{sm:"none"}},l.createElement(x.Z,{variant:"outlined",sx:{textTransform:"none"},onClick:function(){s.OK.scrollTo("contact",{duration:1500,smooth:"easeInOutQuart",offset:-100})}},"contact")),l.createElement(y.Z,{display:{sm:"block",xs:"none"}},["about","compactoshi","service","company","contact"].map((function(e,t){return l.createElement(x.Z,{key:t,sx:{color:"text.primary",textTransform:"none"},onClick:function(){s.OK.scrollTo(""+e,{duration:1500,smooth:"easeInOutQuart",offset:-100})}},e)}))),l.createElement(w.Z,{onClick:function(){var e;null!==(e=window)&&void 0!==e&&e.localStorage&&window.localStorage.setItem("isDark",V?0:1),Y(!V)},sx:{ml:2}},V?l.createElement(U.Z,{sx:{color:"text.primary"}}):l.createElement(R.Z,{sx:{color:"text.primary"}})))))),l.createElement(y.Z,{name:"top",position:"relative",overflow:"hidden"},l.createElement(y.Z,{position:"absolute",sx:{top:0,left:0,width:"100%",height:{md:"60vh",xs:"80vh"},backgroundColor:"common.white"}}),l.createElement(y.Z,{position:"absolute",sx:{display:"flex",bottom:0,left:0,width:"100%",height:{md:"40vh",xs:"20vh"}}},l.createElement(y.Z,{sx:{bgcolor:"common.white",flexGrow:1}}),l.createElement(y.Z,{width:{md:640,xs:320},sx:{marginRight:{md:"-60px",xs:"-30px"},backgroundRepeat:"no-repeat",backgroundImage:"url("+(V?F.Z:B.Z)+")",backgroundSize:"cover"}})),l.createElement(Z.Z,null,l.createElement(y.Z,{display:"flex",alignItems:"center",height:"100vh",minHeight:"100%"},l.createElement(y.Z,null,l.createElement(W.Z,{variant:"h1",color:"text.primary",sx:{transition:"opacity 1000ms ease-out, transform 1000ms ease-out",opacity:1,transform:"translateX(0px)"}},"最高の時間を、",l.createElement("br",null),"最適な空間で。"),l.createElement(W.Z,{color:"common.black",mt:3,fontSize:22,letterSpacing:2,lineHeight:1.6,sx:{transition:"opacity 1000ms ease-out 500ms, transform 1000ms ease-out 500ms",opacity:1,transform:"translateX(0px)"}},"コンパクトウシ、",l.createElement(y.Z,{component:"span",display:{sm:"none"}},l.createElement("br",null)),"始めてみませんか？")))),l.createElement(y.Z,{position:"absolute",right:{md:-120,right:-60},bottom:0})),l.createElement(y.Z,null,l.createElement(K,{name:"about",clientWidth:te,subtitle:"who we are",title:l.createElement(l.Fragment,null,"はじめまして、",l.createElement("br",null),l.createElement(H.Z,{style:{fill:ce.palette.text.primary,display:"inline-block",width:160}}),l.createElement("br",null),"と申します。")},l.createElement(W.Z,{variant:"h3",color:"text.primary"},"ダルマ株式会社は都内を中心として、",l.createElement("br",null),"コンパクトマンションを販売する会社です。"),l.createElement(W.Z,{mt:4,color:"text.primary"},"はじめまして、ダルマ株式会社です。",l.createElement("br",null),"2020年7月に設立した新進気鋭のベンチャー会社です。"),l.createElement(W.Z,{mt:2,color:"text.primary"},"需要が上昇しているコンパクトマンション",l.createElement("small",null,"（一般的に30〜50m²程度のマンション）"),"に着目し、都内の不動産価格が下がりにくい点、国民の資産形成・投資に対する興味意欲が高まっている点を総合して鑑み、コンパクトマンションに特化した投資用不動産販売会社を立ち上げました。"),l.createElement(W.Z,{mt:2,color:"text.primary"},"お客様のお金の不安や心配を解決できる存在でありたいと考えています。")),l.createElement(K,{name:"compactoshi",clientWidth:te,subtitle:"about “コンパクトウシ”",title:l.createElement(l.Fragment,null,"“コンパクトウシ”",l.createElement("br",null),"とは？")},l.createElement(W.Z,{color:"text.primary"},"コンパクトマンションに特化した不動産投資を"," ",l.createElement("strong",null,"コンパクトウシ ",l.createElement(z.Z,null)),l.createElement("small",null,"（登録第6497512号）"),"と名付けて、より多くのお客様に不動産を通した経験価値と豊かさと付加価値を提供し、広めていきたいと考えております。"),l.createElement(W.Z,{mt:2,color:"text.primary"},"コンパクトマンションへの需要が高まっている点に着目し、コンパクトマンションに特価した不動産投資を通して、 お客様に長期的かつ安全な資産形成をご提案いたします。")),l.createElement(K,{name:"service",clientWidth:te,subtitle:"our service",title:"事業内容"},[{Icon:D.Z,title:"不動産の販売",description:"ダルマの不動産は、一般には流通していない厳選された資産価値の高い物件で投資に最適な物件のみを紹介しております。"},{Icon:P.Z,title:"不動産の売却",description:"ダルマでは、不動産の購入だけでなくご売却に関してもお手伝いさせていただいております。"},{Icon:T.Z,title:"賃貸管理業務及び賃貸仲介",description:"迅速かつきめ細かい賃貸管理サービスで、お客様の資産を守り、収益向上に貢献するよう努めます。"},{Icon:A.Z,title:"リノベーション及びリフォーム業務",description:"物件のリノベーション及びリフォーム等の業務も承ります。"},{Icon:M.Z,title:"損害保険の代理業務",description:"火災や地震、予期せぬ事故といった賃貸運営に伴うあらゆるリスクに備えるため、総合的な保険サービスをご案内します。"}].map((function(e,t){var n=e.Icon,r=e.title,a=e.description;return l.createElement(y.Z,{key:t},l.createElement(y.Z,{display:"flex",alignItems:"center"},l.createElement(W.Z,{fontWeight:"bold",color:"text.primary"},"0",t+1),l.createElement(y.Z,{width:"100%",height:1,ml:1,sx:{borderTopWidth:"1px",borderTopStyle:"solid",borderTopColor:"text.primary"},boxSizing:"border-box"})),l.createElement(y.Z,{display:"flex",alignItems:"center",py:3},l.createElement(y.Z,null,l.createElement("img",{src:n,alt:r,style:{filter:V&&"invert(1)",display:"block",width:"80px"}})),l.createElement(y.Z,{ml:4},l.createElement(W.Z,{color:"text.primary",fontSize:18,fontWeight:"bold",lineHeight:"28px"},r),l.createElement(W.Z,{color:"text.primary",lineHeight:"28px",mt:2},a))))}))),l.createElement(K,{name:"company",clientWidth:te,subtitle:"company",title:"会社概要"},l.createElement(I.Z,null,l.createElement(v.Z,null,l.createElement(k.Z,null,[{key:"会社名",val:"ダルマ株式会社"},{key:"設立",val:"2020年 7月"},{key:"資本金",val:"5,000千円"},{key:"主な事業内容",val:l.createElement(l.Fragment,null,"不動産の販売",l.createElement("br",null),"不動産の売却",l.createElement("br",null),"賃貸管理業務及び賃貸仲介",l.createElement("br",null),"リノベーション及びリフォーム業務",l.createElement("br",null),"損害保険の代理業務")},{key:"代表取締役",val:"工藤 雄二"}].map((function(e,t){var n=e.key,r=e.val,a=e.isMap;return l.createElement(C.Z,{key:t},l.createElement(S.Z,{padding:"none",sx:{borderBottom:"none"}},l.createElement(W.Z,{fontWeight:"bold",mr:1},n)),l.createElement(S.Z,{sx:{borderBottom:"none",borderLeft:"1px solid #707070"}},a?r:l.createElement(W.Z,null,r)))}))))),l.createElement(y.Z,null,l.createElement(y.Z,{mt:3,sx:{width:"100%"}},l.createElement(y.Z,{sx:{background:"linear-gradient(#833ab4, #fd1d1d, #fcb045)",backgroundAttachment:"fixed"}},l.createElement(y.Z,{display:V&&"none"},l.createElement(d.S,{src:"../images/map-light.png",alt:"Access",__imageData:n(5627)})),l.createElement(y.Z,{display:V||"none"},l.createElement(d.S,{src:"../images/map-dark.png",alt:"Access",__imageData:n(7138)})))),l.createElement(W.Z,{mt:1,color:"text.primary",variant:"body2",textAlign:"center"},"〒151-0051 東京都渋谷区千駄ヶ谷2-10-5"))),l.createElement(K,{name:"contact",clientWidth:te,subtitle:"contact",title:"お問い合わせ",disableLine:!0},l.createElement(L.Z,null)),l.createElement(y.Z,{component:"footer",height:80,display:"flex",alignItems:"center",justifyContent:"center"},l.createElement(W.Z,{color:"text.primary",variant:"body2"},"© 2022 DARUMA, Inc.")),l.createElement(y.Z,{sx:{transition:"all 500ms ease-out",position:"fixed",right:20,bottom:20,pointerEvents:G>ae?"auto":"none",opacity:G>ae?1:0,transform:G>ae?"translateY(0px)":"translateY(-100px)",borderRadius:"50%",overflow:"hidden",boxShadow:"0px 2px 4px "+ce.palette.common.black}},l.createElement(w.Z,{sx:{width:60,height:60,padding:1.5,display:"flex",flexDirection:"column"},onClick:function(e){e.preventDefault(),s.OK.scrollTo("top",{duration:1500,smooth:"easeInOutQuart"})}},l.createElement(_.Z,{fill:ce.palette.common.black,style:{width:40,height:40}})))))}}}]);
//# sourceMappingURL=component---src-pages-beta-js-67f41e2c9637b1e8f054.js.map