"use strict";(self.webpackChunkcorporate=self.webpackChunkcorporate||[]).push([[385],{9127:function(e,t,n){var a=n(8580);t.Z=void 0;var r=a(n(2174)),c=n(5893),i=(0,r.default)((0,c.jsx)("path",{d:"m10 17 5-5-5-5v10z"}),"ArrowRight");t.Z=i},4320:function(e,t,n){n.d(t,{ZP:function(){return y}});var a=n(3427),r=n(5774),c=n(1531),i=n(4038),l=n(7294),s=n(5505),o=n(2692),m=n(8297),d=n(9408),p=n(8348),f=n(2371);var g=l.createContext(),u=n(8416);function x(e){return(0,u.Z)("MuiGrid",e)}var b=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],h=(0,n(2194).Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,a.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),(0,a.Z)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),(0,a.Z)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),(0,a.Z)(b.map((function(e){return"grid-xs-".concat(e)}))),(0,a.Z)(b.map((function(e){return"grid-sm-".concat(e)}))),(0,a.Z)(b.map((function(e){return"grid-md-".concat(e)}))),(0,a.Z)(b.map((function(e){return"grid-lg-".concat(e)}))),(0,a.Z)(b.map((function(e){return"grid-xl-".concat(e)}))))),w=n(5893),E=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function v(e){var t=parseFloat(e);return"".concat(t).concat(String(e).replace(String(t),"")||"px")}function Z(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[n["spacing-xs-".concat(String(e))]||"spacing-xs-".concat(String(e))];var a=e.xs,r=e.sm,c=e.md,i=e.lg,l=e.xl;return[Number(a)>0&&(n["spacing-xs-".concat(String(a))]||"spacing-xs-".concat(String(a))),Number(r)>0&&(n["spacing-sm-".concat(String(r))]||"spacing-sm-".concat(String(r))),Number(c)>0&&(n["spacing-md-".concat(String(c))]||"spacing-md-".concat(String(c))),Number(i)>0&&(n["spacing-lg-".concat(String(i))]||"spacing-lg-".concat(String(i))),Number(l)>0&&(n["spacing-xl-".concat(String(l))]||"spacing-xl-".concat(String(l)))]}var S=(0,p.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState,r=n.container,c=n.direction,i=n.item,l=n.lg,s=n.md,o=n.sm,m=n.spacing,d=n.wrap,p=n.xl,f=n.xs,g=n.zeroMinWidth;return[t.root,r&&t.container,i&&t.item,g&&t.zeroMinWidth].concat((0,a.Z)(Z(m,r,t)),["row"!==c&&t["direction-xs-".concat(String(c))],"wrap"!==d&&t["wrap-xs-".concat(String(d))],!1!==f&&t["grid-xs-".concat(String(f))],!1!==o&&t["grid-sm-".concat(String(o))],!1!==s&&t["grid-md-".concat(String(s))],!1!==l&&t["grid-lg-".concat(String(l))],!1!==p&&t["grid-xl-".concat(String(p))]])}})((function(e){var t=e.ownerState;return(0,i.Z)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"nowrap"===t.wrap&&{flexWrap:"nowrap"},"reverse"===t.wrap&&{flexWrap:"wrap-reverse"})}),(function(e){var t=e.theme,n=e.ownerState,a=(0,o.P$)({values:n.direction,breakpoints:t.breakpoints.values});return(0,o.k9)({theme:t},a,(function(e){var t={flexDirection:e};return 0===e.indexOf("column")&&(t["& > .".concat(h.item)]={maxWidth:"none"}),t}))}),(function(e){var t=e.theme,n=e.ownerState,a=n.container,c=n.rowSpacing,i={};if(a&&0!==c){var l=(0,o.P$)({values:c,breakpoints:t.breakpoints.values});i=(0,o.k9)({theme:t},l,(function(e){var n=t.spacing(e);return"0px"!==n?(0,r.Z)({marginTop:"-".concat(v(n))},"& > .".concat(h.item),{paddingTop:v(n)}):{}}))}return i}),(function(e){var t=e.theme,n=e.ownerState,a=n.container,c=n.columnSpacing,i={};if(a&&0!==c){var l=(0,o.P$)({values:c,breakpoints:t.breakpoints.values});i=(0,o.k9)({theme:t},l,(function(e){var n=t.spacing(e);return"0px"!==n?(0,r.Z)({width:"calc(100% + ".concat(v(n),")"),marginLeft:"-".concat(v(n))},"& > .".concat(h.item),{paddingLeft:v(n)}):{}}))}return i}),(function(e){var t,n=e.theme,a=e.ownerState;return n.breakpoints.keys.reduce((function(e,r){var c={};if(a[r]&&(t=a[r]),!t)return e;if(!0===t)c={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)c={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var l=(0,o.P$)({values:a.columns,breakpoints:n.breakpoints.values}),s="object"==typeof l?l[r]:l;if(null==s)return e;var m="".concat(Math.round(t/s*1e8)/1e6,"%"),d={};if(a.container&&a.item&&0!==a.columnSpacing){var p=n.spacing(a.columnSpacing);if("0px"!==p){var f="calc(".concat(m," + ").concat(v(p),")");d={flexBasis:f,maxWidth:f}}}c=(0,i.Z)({flexBasis:m,flexGrow:0,maxWidth:m},d)}return 0===n.breakpoints.values[r]?Object.assign(e,c):e[n.breakpoints.up(r)]=c,e}),{})})),y=l.forwardRef((function(e,t){var n,r=(0,f.Z)({props:e,name:"MuiGrid"}),o=(0,m.Z)(r),p=o.className,u=o.columns,b=o.columnSpacing,h=o.component,v=void 0===h?"div":h,y=o.container,z=void 0!==y&&y,k=o.direction,P=void 0===k?"row":k,j=o.item,W=void 0!==j&&j,N=o.lg,A=void 0!==N&&N,R=o.md,C=void 0!==R&&R,_=o.rowSpacing,M=o.sm,D=void 0!==M&&M,I=o.spacing,O=void 0===I?0:I,F=o.wrap,G=void 0===F?"wrap":F,B=o.xl,H=void 0!==B&&B,J=o.xs,K=void 0!==J&&J,T=o.zeroMinWidth,X=void 0!==T&&T,L=(0,c.Z)(o,E),$=_||O,U=b||O,Y=l.useContext(g),Q=u||Y||12,q=(0,i.Z)({},o,{columns:Q,container:z,direction:P,item:W,lg:A,md:C,sm:D,rowSpacing:$,columnSpacing:U,wrap:G,xl:H,xs:K,zeroMinWidth:X}),V=function(e){var t=e.classes,n=e.container,r=e.direction,c=e.item,i=e.lg,l=e.md,s=e.sm,o=e.spacing,m=e.wrap,p=e.xl,f=e.xs,g={root:["root",n&&"container",c&&"item",e.zeroMinWidth&&"zeroMinWidth"].concat((0,a.Z)(Z(o,n)),["row"!==r&&"direction-xs-".concat(String(r)),"wrap"!==m&&"wrap-xs-".concat(String(m)),!1!==f&&"grid-xs-".concat(String(f)),!1!==s&&"grid-sm-".concat(String(s)),!1!==l&&"grid-md-".concat(String(l)),!1!==i&&"grid-lg-".concat(String(i)),!1!==p&&"grid-xl-".concat(String(p))])};return(0,d.Z)(g,x,t)}(q);return n=(0,w.jsx)(S,(0,i.Z)({ownerState:q,className:(0,s.Z)(V.root,p),as:v,ref:t},L)),12!==Q?(0,w.jsx)(g.Provider,{value:Q,children:n}):n}))},5668:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7294),r=(n(5697),n(4038)),c=n(5793),i=n(1758),l="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",s=n(5893);var o=function(e){var t=e.children,n=e.theme,o=(0,i.Z)(),m=a.useMemo((function(){var e=null===o?n:function(e,t){return"function"==typeof t?t(e):(0,r.Z)({},e,t)}(o,n);return null!=e&&(e[l]=null!==o),e}),[n,o]);return(0,s.jsx)(c.Z.Provider,{value:m,children:t})},m=n(5341),d=n(8377);function p(e){var t=(0,d.Z)();return(0,s.jsx)(m.T.Provider,{value:"object"==typeof t?t:{},children:e.children})}var f=function(e){var t=e.children,n=e.theme;return(0,s.jsx)(o,{theme:n,children:(0,s.jsx)(p,{children:t})})}},7186:function(e,t,n){n.r(t);var a=n(8634),r=n(2656),c=n.n(r),i=n(7294),l=n(5414),s=n(6125),o=n(9339),m=n(8790),d=n(5668),p=n(9211),f=n(6968),g=n(5616),u=n(4320),x=n(9308),b=n(9127),h="#ef8468",w="#f7f2ec",E=(0,m.Z)({palette:{primary:{main:h},secondary:{main:"#5f95b2"}},typography:{fontSize:14,fontFamily:['"Noto Sans JP"','"Helvetica Neue"',"Arial",'"Hiragino Kaku Gothic ProN"','"Hiragino Sans"',"Meiryo","sans-serif"].join(","),h1:{fontSize:32,fontWeight:500,letterSpacing:1.4},h2:{fontSize:24,letterSpacing:.5,lineHeight:"42px",fontWeight:"bold",color:"#403939"},body1:{color:"#403939",fontSize:14,letterSpacing:0,lineHeight:"28px"},body2:{fontSize:11,color:"#403939"}}}),v=function(e){return i.createElement(p.Z,Object.assign({component:"span",color:h},e),e.children)},Z=function(e){return i.createElement(x.Z,Object.assign({},e,{variant:"h2",sx:Object.assign({fontSize:{md:32},lineHeight:{md:"56px"}},e.sx)}),e.children)},S=function(e){return i.createElement(x.Z,Object.assign({},e,{sx:Object.assign({fontSize:{md:16}},e.sx)}),e.children)},y=function(e){return i.createElement(u.ZP,{container:!0,my:10,spacing:{md:8,sm:2,xs:8},sx:Object.assign({},e.sx)},i.createElement(u.ZP,{item:!0,sm:6,xs:12,sx:{order:{sm:e.isReverse?2:1,xs:e.isReverseXs?2:1}}},i.createElement(p.Z,{display:"flex",height:"100%",alignItems:"center",justifyContent:{sm:e.isReverse?"flex-end":"flex-start"}},i.createElement(p.Z,{display:"flex",sx:{width:440}},i.createElement(s.G,{image:(0,s.d)(e.image)})))),i.createElement(u.ZP,{item:!0,sm:6,xs:12,sx:{order:{sm:e.isReverse?1:2,xs:e.isReverseXs?1:2}}},i.createElement(p.Z,{display:"flex",flexDirection:"column",justifyContent:{sm:"center",xs:"flex-start"},height:"100%"},i.createElement(Z,{sx:{fontSize:{sm:24,xs:20}}},e.h2),i.createElement(S,{mt:3},e.p))))};t.default=function(e){var t=e.data,r=(0,o.Wd)("uuid",o.Zp)[0],m=(0,i.useState)(!1),z=m[0],k=m[1],P=(0,i.useState)(""),j=P[0],W=P[1],N=(0,i.useState)(""),A=N[0],R=N[1],C=(0,i.useState)(""),_=(C[0],C[1]),M=(0,i.useState)(""),D=(M[0],M[1]),I=(0,i.useState)(""),O=I[0],F=I[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.eleven-cloud.com/api/partners/clients/friends/"+r);case 3:if(404!==(t=e.sent).status){e.next=7;break}throw k(!0),new Error("Bad response /api/partners/clients/friends/{uuid}");case 7:return e.next=9,t.json();case 9:n=e.sent,W(n.friendName),R(n.yourName),_(n.partnersClient.partner.lastNameKanji),D(n.partnersClient.partner.firstNameKanji),F(n.partnersClient.partnerId),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();e()})),z?i.createElement(x.Z,{align:"center",mt:5},"お探しのページは削除されたか見つかりません。",i.createElement("br",null),i.createElement("a",{href:"https://daruma-inv.com/"},"https://daruma-inv.com/")):i.createElement(d.Z,{theme:E},i.createElement(l.q,null,i.createElement("style",null,"\n        *,html,body{\n          margin: 0;\n          padding: 0;\n        }\n        a {\n          color: #fff !important;\n        }\n        ")),i.createElement(g.Z,{maxWidth:!1,disableGutters:!0},i.createElement(p.Z,{bgcolor:h},i.createElement(g.Z,null,i.createElement(u.ZP,{container:!0},i.createElement(u.ZP,{item:!0,md:6,xs:12},i.createElement(p.Z,{position:"relative"},i.createElement(p.Z,{position:{sm:"absolute",xs:"relative"},sx:{top:20,left:0,margin:"0 auto",width:72}},i.createElement(s.S,{src:"../../images/logo-fff.svg",placeholder:"none",__imageData:n(6761)})),i.createElement(p.Z,{sx:{display:"flex",justifyContent:{md:"center",xs:"center"}}},i.createElement(p.Z,{pt:{md:22,xs:10},pb:{md:22,xs:0}},i.createElement(x.Z,{color:"#fff",fontWeight:"bold",fontSize:{md:40,xs:32},lineHeight:{md:"70px",xs:"52.5px"},letterSpacing:2},"こんにちは",i.createElement("br",null),j," 様。"),i.createElement(x.Z,{mt:2,color:"#fff",fontSize:{md:24,xs:20},lineHeight:{md:"42px",xs:"35px"},letterSpacing:2},A," より",i.createElement("br",null),"コンパクトウシ",i.createElement("small",{style:{verticalAlign:"super"}},"®"),"のご案内が",i.createElement("br",null),"届いております。"))))),i.createElement(u.ZP,{item:!0,xs:12,md:6},i.createElement(p.Z,{sx:{display:"flex",justifyContent:{md:"center",xs:"center"},alignItems:"center"}},i.createElement(p.Z,{sx:{width:{md:300,xs:180},transform:{md:"translateY(150px)",xs:"translateY(50px)"}}},i.createElement(s.S,{src:"../../images/foryou/1.png",placeholder:"none",__imageData:n(3984)}))))))),i.createElement(p.Z,{bgcolor:w,pt:22},i.createElement(g.Z,null,i.createElement(u.ZP,{container:!0,spacing:8},i.createElement(u.ZP,{item:!0,xs:12,sm:6},i.createElement(p.Z,{display:"flex",alignItems:"center",height:"100%"},i.createElement(s.S,{src:"../../images/foryou/2.png",placeholder:"none",__imageData:n(6865)}))),i.createElement(u.ZP,{item:!0,xs:12,sm:6},i.createElement(p.Z,{display:"flex",alignItems:"center",height:"100%"},i.createElement(p.Z,null,i.createElement(Z,null,i.createElement(v,null,"不動産投資"),"、",i.createElement("br",null),"一緒に始めてみませんか？"),i.createElement(S,{mt:3},"はじめまして、ダルマ株式会社です。2020年7月に設立した新進気鋭のベンチャー会社です。需要が上昇しているコンパクトマンションに着目し、都内の不動産価格が下がりにくい点、国民の資産形成・投資に対する興味意欲が高まっている点を総合して鑑み、コンパクトマンションに特化した投資用不動産販売会社を立ち上げました。お客様のお金の不安心配を解決できる存在でありたいと考えています。")))),i.createElement(u.ZP,{item:!0,xs:12},i.createElement(p.Z,{display:"flex",justifyContent:"flex-end",alignItems:"flex-end"},i.createElement(p.Z,{sx:{width:{md:526,xs:210},marginBottom:{xs:8}}},i.createElement(s.S,{src:"../../images/what.png",placeholder:"none",__imageData:n(8688)})))))),i.createElement(g.Z,{maxWidth:"xl"},i.createElement(p.Z,{bgcolor:"#fff",borderRadius:"8px",pb:4},i.createElement(g.Z,null,i.createElement(u.ZP,{container:!0,spacing:8},i.createElement(u.ZP,{item:!0,sm:6,xs:12},i.createElement(p.Z,{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",height:"100%"},i.createElement(Z,null,"そもそも",i.createElement(v,null,"不動産投資"),"とは？"),i.createElement(S,{mt:3},"不動産投資とは、不動産を購入し、それを入居者に貸すことで収益を確保することができる資産運用のひとつです。不動産投資で収益を得る方法として、２つの種類があります。 １つ目は、オーナー様が購入した不動産を他社に貸して家賃収入（インカムゲイン）を得る方法。２つ目は、購入した不動産を売却して売却益（キャピタルゲイン）を得る方法があります。"))),i.createElement(u.ZP,{item:!0,sm:6,xs:12},i.createElement(p.Z,{display:"flex",alignItems:"center",height:"100%"},i.createElement(s.S,{src:"../../images/foryou/3.png",placeholder:"none",__imageData:n(6794)})))),i.createElement(u.ZP,{container:!0,pt:10,spacing:{md:8,sm:2,xs:8}},i.createElement(u.ZP,{item:!0,sm:6,xs:12},i.createElement(s.S,{src:"../../images/foryou/4.png",placeholder:"none",__imageData:n(3209)})),i.createElement(u.ZP,{item:!0,sm:6,xs:12},i.createElement(s.S,{src:"../../images/foryou/5.png",placeholder:"none",__imageData:n(6907)}))),i.createElement(u.ZP,{container:!0,spacing:8},i.createElement(u.ZP,{item:!0,xs:12},i.createElement(p.Z,{mt:12,mb:4},i.createElement(v,{component:"p",fontSize:{md:20,xs:16},fontWeight:"bold",textAlign:"center"},"＼DARUMAのプロが教える／"),i.createElement(Z,{textAlign:"center"},"不動産投資の",i.createElement(v,null,"４"),"つのメリット")))),[{image:t.image6,h2:"物件を担保に資金調達が可能です。",p:i.createElement(i.Fragment,null,"投資の中で唯一、融資を組んで投資をすることが出来るのは不動産投資です。例えば株式や投資信託などの金融商品を購入する場合には、購入費用を自己資金で用意しなければならず、投資に費やせる金額に限界があります。不動産投資は、自己資金をかけなくてもレバレッジを効かせたお金で投資が可能です。")},{isReverse:!0,image:t.image7,h2:"家賃収入を得ることが出来ます。",p:i.createElement(i.Fragment,null,"会社員の場合、60歳で定年を迎え65歳の年金受給までの生活費は自助努力する時代となりました。ただ貯金を崩すだけの生活より、家賃収入という不労所得があれば、毎月一定の収入があり安心な生活を送ることができます。")},{image:t.image8,h2:"生命保険代わりになります。",p:i.createElement(i.Fragment,null,"不動産購入の際に、住宅ローンの契約と一緒に団体信用生命保険に加入していただきます。ローン返済期間中に万が一が起きた場合、残債は保険会社が負担し、残されたご家族にはローン完済済みのマンションが残ります。")},{isReverse:!0,image:t.image9,h2:"確定申告により、節税効果があります。",p:i.createElement(i.Fragment,null,"不動産投資をすると、毎月の家賃収入がある傍ら、管理費、修繕積立金、固定資産税、都市計画税、管理委託手数料、火災保険、借入利息（土地代は含めず）、減価償却費などの経費が発生します。確定申告の際にこれらの経費により、給与所得と損益通算をした結果、給与所得から源泉徴収された税金を還付することができます。",i.createElement(x.Z,{variant:"body2",mt:2},"※上記の節税効果を得られるのは給与所得者に限ります。また、節税効果には限度がありますのでご注意ください。",i.createElement("br",null),"※減価償却費とは、価格が大きく長期間使用可能な物品を、購入年に全額費用計上するのではなく何年かに分けて費用計上していく方法のことです。",i.createElement("br",null),"※確定申告は納税者本人か有資格者のみが行うことができます。"))}].map((function(e,t){var n=e.isReverse,a=e.image,r=e.h2,c=e.p;return i.createElement(y,{key:t,image:a,isReverse:n,h2:i.createElement(v,null,r),p:c})})),i.createElement(p.Z,{bgcolor:"#fff8f0",my:8,pt:10,pb:{md:10,xs:20},borderRadius:"8px",position:"relative",sx:{overflow:"hidden"}},i.createElement(u.ZP,{container:!0,justifyContent:"center"},i.createElement(u.ZP,{item:!0,xs:12},i.createElement(p.Z,{sx:{textAlign:"center"}},i.createElement(x.Z,{sx:{fontWeight:"bold",fontSize:{md:20,xs:16}}},i.createElement(v,null,"＼不動産投資をするなら今！／")),i.createElement(Z,null,"低金利時代の今がチャンスです！"))),i.createElement(u.ZP,{item:!0,md:6,sm:8,xs:10,mt:4},i.createElement(S,null,"また現在、金融緩和により類を見ない低金利時代となり、ご検討いただくタイミングとしてとても魅力的な時期でもあります。超低金利時代と言われて長いこの日本で、不動産投資の融資に特化したサービスを提唱する金融機関が増加してきていますし、時代の流れとして不動産投資を始めるのは今がチャンスです。"))),i.createElement(p.Z,{sx:{position:"absolute",left:0,bottom:0,width:{md:246,xs:170}}},i.createElement(s.G,{image:(0,s.d)(t.image10),placeholder:"none"})),i.createElement(p.Z,{sx:{position:"absolute",right:0,bottom:0,width:{md:246,xs:170}}},i.createElement(s.G,{image:(0,s.d)(t.image11),placeholder:"none"}))))),i.createElement(g.Z,null,i.createElement(u.ZP,{container:!0,spacing:8,py:8},i.createElement(u.ZP,{item:!0,sm:6,xs:12},i.createElement(p.Z,{display:"flex",alignItems:"center",height:"100%",justifyContent:{sm:"flex-start",xs:"center"}},i.createElement(Z,null,"そんな時代に、",i.createElement("br",null),"私たちが提案するのは",i.createElement("br",null),"“",i.createElement(v,null,"コンパクトウシ",i.createElement("small",{style:{verticalAlign:"super"}},"®")),"”です。"))),i.createElement(u.ZP,{item:!0,sm:6,xs:12},i.createElement(p.Z,{display:"flex",alignItems:"center",height:"100%"},i.createElement(s.G,{image:(0,s.d)(t.image12)}))))))),i.createElement(g.Z,{sx:{mt:8}},[{isReverseXs:!0,image:t.image13,h2:i.createElement(i.Fragment,null,i.createElement(v,null,"“コンパクトウシ",i.createElement("small",{style:{verticalAlign:"super"}},"®"),"”"),"ってなに？"),p:i.createElement(i.Fragment,null,"コンパクトマンションに特化した不動産投資を「コンパクトウシ",i.createElement("small",{style:{verticalAlign:"super"}},"®"),"」と名付けて、より多くのお客様に不動産を通した経験価値と豊かさと付加価値を提供し、広めていきたいと考えております。",i.createElement("br",null),i.createElement("br",null),"コンパクトマンションへの需要が高まっている点に着目し、コンパクトマンションに特価した不動産投資を通して、 お客様に長期的かつ安全な資産形成をご提案いたします。")},{isReverse:!0,isReverseXs:!0,image:t.image14,h2:i.createElement(i.Fragment,null,i.createElement(v,null,"コンパクトマンション"),"とは？"),p:i.createElement(i.Fragment,null,"コンパクトマンションとは一般的に、専有面積が 30~50㎡程度のマンションのことを指します。これまで都内で提供してきたマンションのサイズは、 ワンルームマンションや、70㎡前後の広いサイズに二極化する傾向が見られ、主に単身者や4人以上の家族をターゲット層としていました。ですが近年、 所得の高い単身者や共働き世帯、子供が独立したシニア世帯などの生活の場として、30~50㎡ 程度のサイズの住居への需要が増加しています。このような社会の変化により、今コンパクトマンションは非常に注目されています。")}].map((function(e,t){var n=e.isReverse,a=e.isReverseXs,r=e.image,c=e.h2,l=e.p;return i.createElement(y,{key:t,image:r,isReverse:n,isReverseXs:a,h2:c,p:l})}))),i.createElement(g.Z,null,i.createElement(p.Z,{sx:{my:8,textAlign:"center"}},i.createElement(x.Z,{sx:{fontWeight:"bold",fontSize:{md:20,xs:16}}},i.createElement(v,null,"＼DARUMAのプロが教える！／")),i.createElement(Z,null,"コンパクトマンションのメリット")),i.createElement(u.ZP,{container:!0,spacing:8},[{image:t.image16,title:"希少性が高い",description:"需要に対してコンパクトマンションの供給数がまだまだ少ないため、賃貸においても安定した運用が可能です"},{image:t.image17,title:"流動性に優れてる",description:i.createElement(i.Fragment,null,"売却する際に投資商品としてだけではなく、実需用としても売却が可能です。",i.createElement("br",null),i.createElement("small",null,"住宅取得控除の緩和によってよりその傾向が想定されます。"))},{image:t.image18,title:"インフレ対策に",description:i.createElement(i.Fragment,null,"貨幣価値の変動に対して現物資産を保有することで資産形成のリスク分散につながります。")}].map((function(e){var t=e.image,n=e.title,a=e.description;return i.createElement(u.ZP,{item:!0,sm:4,xs:12},i.createElement(p.Z,{display:"flex",justifyContent:"center"},i.createElement(p.Z,{width:214},i.createElement(s.G,{image:(0,s.d)(t)}))),i.createElement(x.Z,{mt:2,color:h,textAlign:"center",fontWeight:"bold",fontSize:{md:24,xs:20}},n),i.createElement(x.Z,{mt:3,lineHeight:"28px",fontSize:{md:16,xs:14}},a))})))),i.createElement(p.Z,{bgcolor:w,mt:12},i.createElement(g.Z,null,i.createElement(u.ZP,{container:!0,spacing:8,pb:8},i.createElement(u.ZP,{item:!0,sm:6,xs:12},i.createElement(p.Z,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},i.createElement(p.Z,{width:520},i.createElement(s.G,{image:(0,s.d)(t.image15)})))),i.createElement(u.ZP,{item:!0,sm:6,xs:12},i.createElement(p.Z,{display:"flex",alignItems:"center",height:"100%"},i.createElement(p.Z,null,i.createElement(Z,null,i.createElement(v,null,"コンパクトウシ",i.createElement("small",{style:{verticalAlign:"super"}},"®")),"、",i.createElement("br",null),"一緒に始めてみませんか？"),i.createElement(S,{mt:3},"いかがでしたか？的な文章を入れるといいかもです。もっと詳しく知りたい方は、アンケートに答えていただくとより詳しく書かれた資料をダウンロードすることができます。（この様に、案内の文があるといいと思います）"),i.createElement(p.Z,{mt:2},i.createElement(f.Z,{variant:"outlined",startIcon:i.createElement(b.Z,null),sx:{backgroundColor:"#fff",width:"100%",maxWidth:{sm:"220px",xs:"100%"},height:"40px"},onClick:function(){window.open("/partners?uuid="+O,"_blank","noreferrer")}},"担当者紹介")),i.createElement(p.Z,{mt:2},i.createElement(f.Z,{variant:"outlined",startIcon:i.createElement(b.Z,null),color:"secondary",sx:{backgroundColor:"#fff",width:"100%",maxWidth:{sm:"220px",xs:"100%"},height:"40px"},onClick:function(){window.open("https://docs.google.com/forms/d/e/1FAIpQLSezEaJLpOx2dWliCwVAbsAayBCZY_TbKab7ZKhQlKDFkNRAlg/viewform?usp=pp_url&entry.369165505=30%E4%BB%A3&entry.828871606=%E6%9D%B1%E4%BA%AC%E9%83%BD&entry.1551052245=%E3%81%AF%E3%81%84","_blank","noreferrer")}},"資料ダウンロード")))))))),i.createElement(p.Z,{component:"footer",height:"80px",bgcolor:h,display:"flex",alignItems:"center",justifyContent:"center"},i.createElement(x.Z,{color:"#fff"},"© 2022 DARUMA, Inc."))))}},6794:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/e97962eb23cd1bbf23f65e221866adcd/7a612/3.png","srcSet":"/static/e97962eb23cd1bbf23f65e221866adcd/de90b/3.png 240w,\\n/static/e97962eb23cd1bbf23f65e221866adcd/c0220/3.png 480w,\\n/static/e97962eb23cd1bbf23f65e221866adcd/7a612/3.png 960w","sizes":"(min-width: 960px) 960px, 100vw"},"sources":[{"srcSet":"/static/e97962eb23cd1bbf23f65e221866adcd/b21d0/3.webp 240w,\\n/static/e97962eb23cd1bbf23f65e221866adcd/b5660/3.webp 480w,\\n/static/e97962eb23cd1bbf23f65e221866adcd/e5056/3.webp 960w","type":"image/webp","sizes":"(min-width: 960px) 960px, 100vw"}]},"width":960,"height":947.9999999999999}')},6907:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/89bed86f24fe4b65e0d82e048731d577/81e4a/5.png","srcSet":"/static/89bed86f24fe4b65e0d82e048731d577/e24b0/5.png 220w,\\n/static/89bed86f24fe4b65e0d82e048731d577/bb764/5.png 440w,\\n/static/89bed86f24fe4b65e0d82e048731d577/81e4a/5.png 880w","sizes":"(min-width: 880px) 880px, 100vw"},"sources":[{"srcSet":"/static/89bed86f24fe4b65e0d82e048731d577/e6aba/5.webp 220w,\\n/static/89bed86f24fe4b65e0d82e048731d577/8853a/5.webp 440w,\\n/static/89bed86f24fe4b65e0d82e048731d577/c3777/5.webp 880w","type":"image/webp","sizes":"(min-width: 880px) 880px, 100vw"}]},"width":880,"height":708}')},3984:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/d75b5842641e5f0a61573745cea5e3e1/5bfcd/1.png","srcSet":"/static/d75b5842641e5f0a61573745cea5e3e1/7bfc7/1.png 150w,\\n/static/d75b5842641e5f0a61573745cea5e3e1/238c9/1.png 300w,\\n/static/d75b5842641e5f0a61573745cea5e3e1/5bfcd/1.png 600w","sizes":"(min-width: 600px) 600px, 100vw"},"sources":[{"srcSet":"/static/d75b5842641e5f0a61573745cea5e3e1/f3f9d/1.webp 150w,\\n/static/d75b5842641e5f0a61573745cea5e3e1/9cfab/1.webp 300w,\\n/static/d75b5842641e5f0a61573745cea5e3e1/213bb/1.webp 600w","type":"image/webp","sizes":"(min-width: 600px) 600px, 100vw"}]},"width":600,"height":1124}')},3209:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/830f4a874da55c4a5cde87ac02a81738/81e4a/4.png","srcSet":"/static/830f4a874da55c4a5cde87ac02a81738/e24b0/4.png 220w,\\n/static/830f4a874da55c4a5cde87ac02a81738/bb764/4.png 440w,\\n/static/830f4a874da55c4a5cde87ac02a81738/81e4a/4.png 880w","sizes":"(min-width: 880px) 880px, 100vw"},"sources":[{"srcSet":"/static/830f4a874da55c4a5cde87ac02a81738/e6aba/4.webp 220w,\\n/static/830f4a874da55c4a5cde87ac02a81738/8853a/4.webp 440w,\\n/static/830f4a874da55c4a5cde87ac02a81738/c3777/4.webp 880w","type":"image/webp","sizes":"(min-width: 880px) 880px, 100vw"}]},"width":880,"height":708}')},6761:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/5c44f86ba5391bba4ffa20251986b39d/ec680/logo-fff.svg","srcSet":"/static/5c44f86ba5391bba4ffa20251986b39d/0d956/logo-fff.svg 27w,\\n/static/5c44f86ba5391bba4ffa20251986b39d/7018a/logo-fff.svg 54w,\\n/static/5c44f86ba5391bba4ffa20251986b39d/ec680/logo-fff.svg 108w","sizes":"(min-width: 108px) 108px, 100vw"},"sources":[{"srcSet":"/static/5c44f86ba5391bba4ffa20251986b39d/e0a76/logo-fff.webp 27w,\\n/static/5c44f86ba5391bba4ffa20251986b39d/2aa9c/logo-fff.webp 54w,\\n/static/5c44f86ba5391bba4ffa20251986b39d/0fd2a/logo-fff.webp 108w","type":"image/webp","sizes":"(min-width: 108px) 108px, 100vw"}]},"width":108,"height":56}')},6865:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/2a43dd874cd136c83f665f0c34175363/f5dda/2.png","srcSet":"/static/2a43dd874cd136c83f665f0c34175363/9dbc7/2.png 240w,\\n/static/2a43dd874cd136c83f665f0c34175363/a83ab/2.png 480w,\\n/static/2a43dd874cd136c83f665f0c34175363/f5dda/2.png 960w","sizes":"(min-width: 960px) 960px, 100vw"},"sources":[{"srcSet":"/static/2a43dd874cd136c83f665f0c34175363/bdc52/2.webp 240w,\\n/static/2a43dd874cd136c83f665f0c34175363/65fdf/2.webp 480w,\\n/static/2a43dd874cd136c83f665f0c34175363/8498f/2.webp 960w","type":"image/webp","sizes":"(min-width: 960px) 960px, 100vw"}]},"width":960,"height":986}')},8688:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/66e927a0d85c1f682cb83602347ad036/8126d/what.png","srcSet":"/static/66e927a0d85c1f682cb83602347ad036/1d710/what.png 259w,\\n/static/66e927a0d85c1f682cb83602347ad036/ef9c2/what.png 518w,\\n/static/66e927a0d85c1f682cb83602347ad036/8126d/what.png 1036w","sizes":"(min-width: 1036px) 1036px, 100vw"},"sources":[{"srcSet":"/static/66e927a0d85c1f682cb83602347ad036/bdaba/what.webp 259w,\\n/static/66e927a0d85c1f682cb83602347ad036/9322e/what.webp 518w,\\n/static/66e927a0d85c1f682cb83602347ad036/bc0bf/what.webp 1036w","type":"image/webp","sizes":"(min-width: 1036px) 1036px, 100vw"}]},"width":1036,"height":261}')}}]);
//# sourceMappingURL=component---src-pages-foryou-index-js-c73bb4eb37eca1c11cb8.js.map