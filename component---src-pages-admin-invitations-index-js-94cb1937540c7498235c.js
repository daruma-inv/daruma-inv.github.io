"use strict";(self.webpackChunkcorporate=self.webpackChunkcorporate||[]).push([[924],{9283:function(e,t,n){var r=n(5318);t.Z=void 0;var a=r(n(2174)),l=n(5893),o=(0,a.default)((0,l.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout");t.Z=o},8249:function(e,t,n){n.d(t,{Z:function(){return U}});var r=n(7294),a=n(1597);function l(e){this.message=e}l.prototype=new Error,l.prototype.name="InvalidCharacterError";var o="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new l("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,r,a=0,o=0,c="";r=t.charAt(o++);~r&&(n=a%4?64*n+r:r,a++%4)?c+=String.fromCharCode(255&n>>(-2*a&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return c};function c(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(o(e).replace(/(.)/g,(function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n})))}(t)}catch(e){return o(t)}}function i(e){this.message=e}i.prototype=new Error,i.prototype.name="InvalidTokenError";var s=function(e,t){if("string"!=typeof e)throw new i("Invalid token specified");var n=!0===(t=t||{}).header?0:1;try{return JSON.parse(c(e.split(".")[n]))}catch(e){throw new i("Invalid token specified: "+e.message)}},u=n(6320),m=n(885),d=n(3366),p=n(7462),f=n(5505),v=n(9408),E=n(8348),Z=n(2371),h=n(2067),g=n(5893),w=(0,h.Z)((0,g.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),x=n(8416);function y(e){return(0,x.Z)("MuiAvatar",e)}(0,n(2194).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var b=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],S=(0,E.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],n.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,n=e.ownerState;return(0,p.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===n.variant&&{borderRadius:t.shape.borderRadius},"square"===n.variant&&{borderRadius:0},n.colorDefault&&{color:t.palette.background.default,backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]})})),k=(0,E.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),P=(0,E.ZP)(w,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var A=r.forwardRef((function(e,t){var n=(0,Z.Z)({props:e,name:"MuiAvatar"}),a=n.alt,l=n.children,o=n.className,c=n.component,i=void 0===c?"div":c,s=n.imgProps,u=n.sizes,E=n.src,h=n.srcSet,w=n.variant,x=void 0===w?"circular":w,A=(0,d.Z)(n,b),C=null,I=function(e){var t=e.crossOrigin,n=e.referrerPolicy,a=e.src,l=e.srcSet,o=r.useState(!1),c=(0,m.Z)(o,2),i=c[0],s=c[1];return r.useEffect((function(){if(a||l){s(!1);var e=!0,r=new Image;return r.onload=function(){e&&s("loaded")},r.onerror=function(){e&&s("error")},r.crossOrigin=t,r.referrerPolicy=n,r.src=a,l&&(r.srcset=l),function(){e=!1}}}),[t,n,a,l]),i}((0,p.Z)({},s,{src:E,srcSet:h})),D=E||h,j=D&&"error"!==I,z=(0,p.Z)({},n,{colorDefault:!j,component:i,variant:x}),R=function(e){var t=e.classes,n={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,v.Z)(n,y,t)}(z);return C=j?(0,g.jsx)(k,(0,p.Z)({alt:a,src:E,srcSet:h,sizes:u,ownerState:z,className:R.img},s)):null!=l?l:D&&a?a[0]:(0,g.jsx)(P,{className:R.fallback}),(0,g.jsx)(S,(0,p.Z)({as:i,ownerState:z,className:(0,f.Z)(R.root,o),ref:t},A,{children:C}))})),C=n(5190),I=n(9211),D=n(6968),j=n(5616),z=n(7098),R=n(9308),N=n(9283),B="com.daruma-inv.admin",U=function(e){var t=e.children,n=(0,r.useState)(!1),l=n[0],o=n[1],c=(0,r.useState)(!1),i=c[0],m=c[1],d=(0,r.useState)(""),p=d[0],f=d[1],v=(0,r.useState)(""),E=(v[0],v[1]),Z=(0,r.useState)(""),h=(Z[0],Z[1]),g=(0,r.useState)(""),w=g[0],x=g[1],y=(0,r.useState)(""),b=y[0],S=y[1],k=function(){f(""),E(""),h(""),x(""),S(""),e.setUsername&&e.setUsername("")};(0,r.useEffect)((function(){var t=function(){window.google.accounts.id.initialize({client_id:"137389090265-9p2asf68ustrc46nemdmmi8d4l5gnapm.apps.googleusercontent.com",callback:function(e){var t=e.credential,n=s(t).email;if(!/@daruma-inv.com$/.test(n)&&"koujirou0111@gmail.com"!==n&&"oxwm.system@gmail.com"!==n)return m(!0),void o(!1);window.localStorage.setItem(B,t),o(!0)}}),window.google.accounts.id.renderButton(document.getElementById("buttonDiv"),{theme:"outline",size:"large"}),window.google.accounts.id.prompt()},n=function(){var e=document.createElement("script");e.src="https://accounts.google.com/gsi/client",e.addEventListener("load",t),document.body.appendChild(e)},r=function(){var t=window.localStorage.getItem(B);if(!t)return k(),o(!1),void n();var r=s(t);if(!r)return k(),o(!1),void n();f(r.email),E(r.family_name),h(r.given_name),x(r.name),S(r.picture),m(!1),o(!0),e.setUsername&&e.setUsername(r.name)};return"complete"===document.readyState?r():window.addEventListener("load",r),function(){window.removeEventListener("load",r)}}),[l]);return l?r.createElement(r.Fragment,null,r.createElement(C.Z,{position:"fixed",sx:{backgroundColor:"#333"}},r.createElement(j.Z,{maxWidth:"xl"},r.createElement(z.Z,{disableGutters:!0},r.createElement(R.Z,{variant:"h6",noWrap:!0,component:"div",fontWeight:"bold",sx:{mr:2,display:"flex"},onClick:function(){return(0,a.navigate)("/admin/")}},"DARUMA ADMIN TOOLS"),r.createElement(I.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}},r.createElement(D.Z,{sx:{color:"#fff"},onClick:function(){return(0,a.navigate)("/admin/invitations/")}},"紹介システム"),r.createElement(D.Z,{sx:{color:"#fff",textTransform:"none"},onClick:function(){window.open("https://analytics.google.com/analytics/web/#/p299554539/reports/intelligenthome","_blank","noreferrer")}},"Google Analytics",r.createElement("small",null,"（アクセス解析）")),r.createElement(D.Z,{sx:{color:"#fff",textTransform:"none"},onClick:function(){window.open("https://search.google.com/search-console?resource_id=sc-domain:daruma-inv.com","_blank","noreferrer")}},"Google Search Console",r.createElement("small",null,"（SEO解析）"))),r.createElement(D.Z,{variant:"contained",color:"error",startIcon:r.createElement(N.Z,null),onClick:function(){var e,t,n,r;null===(e=window)||void 0===e||null===(t=e.google)||void 0===t||null===(n=t.accounts)||void 0===n||null===(r=n.id)||void 0===r||r.disableAutoSelect(),window.localStorage.removeItem(B),k(),o(!1)},sx:{mx:2}},"ログアウト"),r.createElement(I.Z,{display:"flex",flexDirection:"row",alignItems:"center"},r.createElement(I.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},r.createElement(R.Z,{fontSize:14,fontWeight:"bold"},w),r.createElement(R.Z,{fontSize:10},"(",p,")")),r.createElement(A,{src:b,sx:{ml:1}}))))),r.createElement(j.Z,{maxWidth:"xl",sx:{mt:10}},t)):r.createElement(r.Fragment,null,r.createElement(j.Z,{sx:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},r.createElement(I.Z,{my:2},r.createElement(R.Z,{variant:"h6"},"DARUMA ADMIN TOOLS")),r.createElement(I.Z,null,r.createElement(I.Z,{id:"buttonDiv",sx:{display:"flex",justifyContent:"center"}}),r.createElement(u.Z,{severity:"error",sx:{opacity:i?1:0,pointerEvents:"none"}},"この Google アカウントのログインは許可していません。"))))}},318:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var r=n(5861),a=n(7757),l=n.n(a),o=n(7294),c=n(4944),i=n.n(c),s=n(6320),u=n(9211),m=n(6968),d=n(3827),p=n(8423),f=n(4334),v=n(5437),E=n(9077),Z=n(4202),h=n(5749),g=n(4382),w=n(2664),x=n(7783),y=n(943),b=n(5319),S=n(7708),k=n(3182),P=n(7216),A=n(9308),C=n(3015),I=n(8249),D=n(1359),j=n(8599),z=n(6763),R=n(460),N=n(5497),B=n(581),U=n(26),L=n(8115),M=n(7485),O=n(8679),W=n(9656),T=n(3741),F=n(7962),_=n(4093),K=n(8430),G=n(631),H=n(8552),J=function(e){var t=(0,o.useState)(e.clientsPartner.name),n=t[0],a=t[1],c=(0,o.useState)(e.clientsPartner.partnerId),s=c[0],d=c[1],f=(0,o.useState)(e.clientsPartner.note),v=f[0],E=f[1],Z=(0,o.useState)(e.clientsPartner.uuid),h=Z[0],w=Z[1],x=(0,o.useState)(e.clientsPartner.name),b=x[0],S=x[1],C=(0,o.useState)(e.clientsPartner.partnerId),I=C[0],J=C[1],q=(0,o.useState)(e.clientsPartner.note),V=q[0],Q=q[1],$=(0,o.useState)(!0),X=$[0],Y=$[1],ee=(0,o.useState)(!0),te=ee[0],ne=ee[1],re=(0,o.useState)(e.clientsPartner.createdAt),ae=re[0],le=re[1],oe=(0,o.useState)(e.clientsPartner.updatedAt),ce=oe[0],ie=oe[1],se=(0,o.useState)(e.clientsPartner.createdBy),ue=se[0],me=se[1],de=(0,o.useState)(e.clientsPartner.updatedBy),pe=de[0],fe=de[1],ve=(0,o.useState)(!1),Ee=ve[0],Ze=ve[1],he=(0,o.useState)(!1),ge=he[0],we=he[1],xe=(0,o.useState)(""),ye=xe[0],be=xe[1],Se=(0,o.useState)(""),ke=Se[0],Pe=Se[1];(0,o.useEffect)((function(){var t="https://daruma-inv.com/invitations/?uuid="+e.clientsPartner.uuid,n=function(){var e=(0,r.Z)(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.toDataURL(t);case 3:n=e.sent,Pe(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();n(),be(t),a(e.clientsPartner.name),d(e.clientsPartner.partnerId),E(e.clientsPartner.note),w(e.clientsPartner.uuid),S(e.clientsPartner.name),J(e.clientsPartner.partnerId),Q(e.clientsPartner.note),Y(!0),ne(!0),le(e.clientsPartner.createdAt),ie(e.clientsPartner.updatedAt),me(e.clientsPartner.createdBy),fe(e.clientsPartner.updatedBy)}),[e.clientsPartner.uuid,e.clientsPartner.name,e.clientsPartner.partnerId,e.clientsPartner.note,e.clientsPartner.createdAt,e.clientsPartner.updatedAt,e.clientsPartner.createdBy,e.clientsPartner.updatedBy,e.username]);var Ae=function(){var t=(0,r.Z)(l().mark((function t(){var n,r,o,c,s,u,m,p,f;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i()("https://api.eleven-cloud.com/api/partners/clients/"+h,{method:"PUT",body:JSON.stringify({name:b,partnerId:I,note:V,updatedBy:e.username})});case 3:if(!((n=t.sent).status>=400)){t.next=6;break}throw new Error("Bad response /api/partners/clients");case 6:return t.next=8,n.json();case 8:r=t.sent,o=r.name,c=r.partnerId,s=r.note,u=r.createdAt,m=r.updatedAt,p=r.createdBy,f=r.updatedBy,a(o),d(c),E(s),S(o),J(c),Q(s),Y(!0),ne(!0),le(u),ie(m),me(p),fe(f),t.next=34;break;case 30:t.prev=30,t.t0=t.catch(0),alert("error"),console.log(t.t0);case 34:case"end":return t.stop()}}),t,null,[[0,30]])})));return function(){return t.apply(this,arguments)}}(),Ce=function(){var t=(0,r.Z)(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i()("https://api.eleven-cloud.com/api/partners/clients/"+e.clientsPartner.uuid,{method:"DELETE"});case 3:if(!(t.sent.status>=400)){t.next=6;break}throw new Error("Bad response /api/partners/clients");case 6:e.reload(),Ze(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),Ie=function(){return Ze(!1)},De=e.partners.find((function(e){return e.uuid===I})),je=De.lastNameKanji+" "+De.firstNameKanji,ze=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1];return o.createElement(H.CopyToClipboard,{text:ye,onCopy:function(){return n(!0)}},o.createElement(U.Z,{onClose:function(){return n(!1)},open:t,title:"コピーしました"},o.createElement(m.Z,{fullWidth:!0,variant:"outlined",size:"small",startIcon:o.createElement(L.Z,null)},"URLをコピーする")))};return o.createElement(o.Fragment,null,o.createElement(k.Z,{hover:!0,selected:!X||!te},o.createElement(y.Z,null,o.createElement(u.Z,{display:"flex",flexDirection:"column"},o.createElement(u.Z,null,o.createElement(m.Z,{fullWidth:!0,variant:"outlined",size:"small",startIcon:o.createElement(_.Z,null),onClick:function(){return we(!0)}},"QRを表示する")),o.createElement(u.Z,{mt:1},o.createElement(ze,null)),o.createElement(u.Z,{mt:1},o.createElement(m.Z,{fullWidth:!0,variant:"outlined",size:"small",startIcon:o.createElement(T.Z,null),onClick:function(){window.location.href="mailto:?subject=【DARUMA】"+b+"様専用 お客様ご紹介ページ&body="+b+"様%0D%0A%0D%0Aいつもお世話になっております。ダルマ株式会社の"+je+"です。%0D%0A"+b+"様専用のお客様ご紹介ページをご用意しましたので、ご活用いただければ幸いです。%0D%0A%0D%0A【お客様ご紹介ページ】%0D%0A"+ye+"%0D%0A%0D%0Aご紹介システムの使い方などでご不明な点がございましたらお気軽にお問い合わせください。%0D%0Aよろしくお願いいたします。%0D%0A%0D%0Aダルマ株式会社%0D%0A"+je}},"メールで送る")),o.createElement(u.Z,{mt:1},o.createElement(m.Z,{fullWidth:!0,variant:"outlined",size:"small",color:"success",startIcon:o.createElement(M.Z,null),onClick:function(){var e="https://social-plugins.line.me/lineit/share?url="+ye;window.open(e,"_blank","noreferrer")}},"LINEで送る")),o.createElement(u.Z,{mt:1},o.createElement(m.Z,{fullWidth:!0,size:"small",color:"warning",endIcon:o.createElement(O.Z,null),onClick:function(){return window.open(ye,"_blank","noreferrer")}},"お客様用ページを開く"))),o.createElement(D.Z,{open:ge,onClose:function(){return we(!1)}},o.createElement(N.Z,null,o.createElement(A.Z,{variant:"h6",textAlign:"center"},b,"様専用 お客様ご紹介ページURL")),o.createElement(z.Z,null,o.createElement(R.Z,null,o.createElement("img",{src:ke,style:{display:"block",margin:"0 auto",width:"100px",height:"100px"}}),ye,o.createElement(ze,null))))),o.createElement(y.Z,null,o.createElement(P.Z,{value:b,onChange:function(e){var t=e.target.value,r=t!==n||I!==s||V!==v;Y(!(t&&r)),ne(!r),S(t)},InputProps:{endAdornment:o.createElement(p.Z,{position:"end"},"様")}})),o.createElement(y.Z,null,o.createElement(A.Z,null,je)),o.createElement(y.Z,null,o.createElement(P.Z,{value:V,multiline:!0,onChange:function(e){var t=e.target.value,r=b!==n||I!==s||t!==v;Y(!(b&&r)),ne(!r),Q(t)}})),o.createElement(y.Z,null,o.createElement(g.Z,{direction:"column",spacing:1},o.createElement(U.Z,{title:"このレコードの変更を保存する"},o.createElement("span",null,o.createElement(B.Z,{color:"primary","aria-label":"update",size:"large",disabled:X,onClick:Ae},o.createElement(W.Z,{fontSize:"inherit"})))),o.createElement(U.Z,{title:"このレコードの変更を元に戻す"},o.createElement("span",null,o.createElement(B.Z,{color:"warning","aria-label":"undo",size:"large",disabled:te,onClick:function(){S(n),J(s),Q(v),Y(!0),ne(!0)}},o.createElement(F.Z,{fontSize:"inherit"})))))),o.createElement(y.Z,null,o.createElement(A.Z,{variant:"body2"},(0,K.Z)(ae)," ",o.createElement("small",null,"作成 (",ue,")")),o.createElement(A.Z,{variant:"body2"},(0,K.Z)(ce)," ",o.createElement("small",null,"更新 (",pe,")")))),o.createElement(D.Z,{open:Ee,onClose:Ie,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},o.createElement(N.Z,{id:"alert-dialog-title"},"このレコードの削除しますか？"),o.createElement(z.Z,null,o.createElement(R.Z,{id:"alert-dialog-description"},"顧客名　: ",n,o.createElement("br",null),"担当者　:"," ",function(){var t=e.partners.filter((function(e){return e.uuid===s}))[0];return t.lastNameKanji+" "+t.firstNameKanji}(),o.createElement("br",null),"メモ　　: ",v,o.createElement("br",null),"作成日時: ",(0,K.Z)(ae)," (",ue,")",o.createElement("br",null),"更新日時: ",(0,K.Z)(ce)," (",pe,")")),o.createElement(j.Z,null,o.createElement(m.Z,{onClick:Ie},"キャンセル"),o.createElement(m.Z,{onClick:Ce,autoFocus:!0},"削除する"))))},q=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1],a=(0,o.useState)("info"),c=a[0],D=a[1],j=(0,o.useState)(""),z=j[0],R=j[1],N=(0,o.useState)([]),B=N[0],U=N[1],L=(0,o.useState)([]),M=L[0],O=L[1],W=(0,o.useState)(""),T=W[0],F=W[1],_=(0,o.useState)(""),K=_[0],G=_[1],H=(0,o.useState)(""),q=H[0],V=H[1],Q=(0,o.useState)(!0),$=Q[0],X=Q[1],Y=(0,o.useState)(0),ee=Y[0],te=Y[1],ne=(0,o.useState)(""),re=ne[0],ae=ne[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(l().mark((function e(){var t,n,r,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()("https://api.eleven-cloud.com/api/partners");case 3:return t=e.sent,e.next=6,i()("https://api.eleven-cloud.com/api/partners/clients");case 6:if(n=e.sent,!(t.status>=400)){e.next=9;break}throw new Error("Bad response /api/partners");case 9:if(!(n.status>=400)){e.next=11;break}throw new Error("Bad response /api/partners/clients");case 11:return e.next=13,t.json();case 13:return r=e.sent,e.next=16,n.json();case 16:a=e.sent,U(r),O(a),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();e()}),[ee]),o.createElement(I.Z,{setUsername:ae},o.createElement(A.Z,{variant:"h6"},"紹介システム 権限付与",o.createElement("small",null,"（DARUMA → オーナー様）")),o.createElement(u.Z,{display:"flex",my:2,pl:2,py:4,sx:{border:"2px solid #ccc",borderRadius:2}},o.createElement(P.Z,{label:"顧客名",variant:"outlined",value:T,InputProps:{endAdornment:o.createElement(p.Z,{position:"end"},"様")},onChange:function(e){var t=e.target.value;F(t),X(!K||!t)}}),o.createElement(d.Z,{sx:{minWidth:120}},o.createElement(f.Z,null,"担当者"),o.createElement(Z.Z,{label:"担当者",value:K,onChange:function(e){var t=e.target.value;G(t),X(!t||!T)}},B.map((function(e,t){var n=e.uuid,r=e.lastNameKanji,a=e.firstNameKanji,l=e.lastName,c=e.firstName,i=r&&a?r+" "+a:l+" "+c;return o.createElement(E.Z,{key:t,value:n},i)})))),o.createElement(P.Z,{label:"メモ",variant:"outlined",multiline:!0,value:q,onChange:function(e){var t=e.target.value;return V(t)},sx:{minWidth:320}}),o.createElement(m.Z,{variant:"contained",color:"primary",startIcon:o.createElement(C.Z,null),disabled:$,onClick:(0,r.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()("https://api.eleven-cloud.com/api/partners/clients",{method:"POST",body:JSON.stringify({name:T,partnerId:K,note:q,createdBy:re})});case 3:if(!(e.sent.status>=400)){e.next=6;break}throw new Error("Bad response /api/partners/clients");case 6:n(!0),D("success"),R(T+" 様の情報を追加しました"),F(""),G(""),V(""),X(!0),te(ee+1),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("error"),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})))},"新規作成")),o.createElement(b.Z,null,o.createElement(w.Z,null,o.createElement(S.Z,null,o.createElement(k.Z,null,o.createElement(y.Z,null,"URL"),o.createElement(y.Z,null,"顧客名"),o.createElement(y.Z,null,"担当者"),o.createElement(y.Z,null,"メモ"),o.createElement(y.Z,null,"操作"),o.createElement(y.Z,null,"タイムスタンプ"))),o.createElement(x.Z,null,M[0]?M.map((function(e,t){return o.createElement(J,{key:t,clientsPartner:e,partners:B,username:re,reload:function(){return te(ee+1)}})})):o.createElement(k.Z,null,o.createElement(y.Z,{colSpan:6},o.createElement(A.Z,{align:"center"},"Loading..."),o.createElement(v.Z,null)))))),o.createElement(g.Z,{spacing:2,sx:{width:"100%"}},o.createElement(h.Z,{open:t,autoHideDuration:5e3,onClose:function(e,t){"clickaway"!==t&&n(!1)}},o.createElement(s.Z,{severity:c},z))))}}}]);
//# sourceMappingURL=component---src-pages-admin-invitations-index-js-94cb1937540c7498235c.js.map