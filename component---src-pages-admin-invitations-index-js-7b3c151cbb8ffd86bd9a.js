(self.webpackChunkcorporate=self.webpackChunkcorporate||[]).push([[924],{9283:function(e,t,n){"use strict";var r=n(5318);t.Z=void 0;var a=r(n(2174)),i=n(5893),o=(0,a.default)((0,i.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout");t.Z=o},7499:function(e,t,n){"use strict";n.d(t,{Z:function(){return z}});var r=n(7294),a=n(5444);function i(e){this.message=e}i.prototype=new Error,i.prototype.name="InvalidCharacterError";var o="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new i("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,r,a=0,o=0,l="";r=t.charAt(o++);~r&&(n=a%4?64*n+r:r,a++%4)?l+=String.fromCharCode(255&n>>(-2*a&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return l};function l(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(o(e).replace(/(.)/g,(function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n})))}(t)}catch(e){return o(t)}}function c(e){this.message=e}c.prototype=new Error,c.prototype.name="InvalidTokenError";var s=function(e,t){if("string"!=typeof e)throw new c("Invalid token specified");var n=!0===(t=t||{}).header?0:1;try{return JSON.parse(l(e.split(".")[n]))}catch(e){throw new c("Invalid token specified: "+e.message)}},u=n(6320),d=n(4699),m=n(9756),p=n(2122),f=n(5505),v=n(9408),g=n(8348),Z=n(2371),h=n(2067),E=n(5893),b=(0,h.Z)((0,E.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),y=n(8416);function x(e){return(0,y.Z)("MuiAvatar",e)}(0,n(2194).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var w=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],S=(0,g.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],n.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,n=e.ownerState;return(0,p.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===n.variant&&{borderRadius:t.shape.borderRadius},"square"===n.variant&&{borderRadius:0},n.colorDefault&&{color:t.palette.background.default,backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]})})),k=(0,g.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),C=(0,g.ZP)(b,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var P=r.forwardRef((function(e,t){var n=(0,Z.Z)({props:e,name:"MuiAvatar"}),a=n.alt,i=n.children,o=n.className,l=n.component,c=void 0===l?"div":l,s=n.imgProps,u=n.sizes,g=n.src,h=n.srcSet,b=n.variant,y=void 0===b?"circular":b,P=(0,m.Z)(n,w),I=null,A=function(e){var t=e.crossOrigin,n=e.referrerPolicy,a=e.src,i=e.srcSet,o=r.useState(!1),l=(0,d.Z)(o,2),c=l[0],s=l[1];return r.useEffect((function(){if(a||i){s(!1);var e=!0,r=new Image;return r.onload=function(){e&&s("loaded")},r.onerror=function(){e&&s("error")},r.crossOrigin=t,r.referrerPolicy=n,r.src=a,i&&(r.srcset=i),function(){e=!1}}}),[t,n,a,i]),c}((0,p.Z)({},s,{src:g,srcSet:h})),M=g||h,j=M&&"error"!==A,D=(0,p.Z)({},n,{colorDefault:!j,component:c,variant:y}),R=function(e){var t=e.classes,n={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,v.Z)(n,x,t)}(D);return I=j?(0,E.jsx)(k,(0,p.Z)({alt:a,src:g,srcSet:h,sizes:u,ownerState:D,className:R.img},s)):null!=i?i:M&&a?a[0]:(0,E.jsx)(C,{className:R.fallback}),(0,E.jsx)(S,(0,p.Z)({as:c,ownerState:D,className:(0,f.Z)(R.root,o),ref:t},P,{children:I}))})),I=n(5190),A=n(9211),M=n(6968),j=n(5616),D=n(7098),R=n(9308),B=n(9283),N="com.daruma-inv.admin",z=function(e){var t=e.children,n=(0,r.useState)(!1),i=n[0],o=n[1],l=(0,r.useState)(!1),c=l[0],d=l[1],m=(0,r.useState)(""),p=m[0],f=m[1],v=(0,r.useState)(""),g=(v[0],v[1]),Z=(0,r.useState)(""),h=(Z[0],Z[1]),E=(0,r.useState)(""),b=E[0],y=E[1],x=(0,r.useState)(""),w=x[0],S=x[1],k=function(){f(""),g(""),h(""),y(""),S(""),e.setUsername&&e.setUsername("")};(0,r.useEffect)((function(){var t=function(){window.google.accounts.id.initialize({client_id:"137389090265-9p2asf68ustrc46nemdmmi8d4l5gnapm.apps.googleusercontent.com",callback:function(e){var t=e.credential,n=s(t).email;if(!/@daruma-inv.com$/.test(n)&&"koujirou0111@gmail.com"!==n&&"oxwm.system@gmail.com"!==n)return d(!0),void o(!1);window.localStorage.setItem(N,t),o(!0)}}),window.google.accounts.id.renderButton(document.getElementById("buttonDiv"),{theme:"outline",size:"large"}),window.google.accounts.id.prompt()},n=function(){var e=document.createElement("script");e.src="https://accounts.google.com/gsi/client",e.addEventListener("load",t),document.body.appendChild(e)},r=function(){var t=window.localStorage.getItem(N);if(!t)return k(),o(!1),void n();var r=s(t);if(!r)return k(),o(!1),void n();f(r.email),g(r.family_name),h(r.given_name),y(r.name),S(r.picture),d(!1),o(!0),e.setUsername&&e.setUsername(r.name)};return"complete"===document.readyState?r():window.addEventListener("load",r),function(){window.removeEventListener("load",r)}}),[i]);return i?r.createElement(r.Fragment,null,r.createElement(I.Z,{position:"fixed",sx:{backgroundColor:"#333"}},r.createElement(j.Z,{maxWidth:"xl"},r.createElement(D.Z,{disableGutters:!0},r.createElement(R.Z,{variant:"h6",noWrap:!0,component:"div",fontWeight:"bold",sx:{mr:2,display:"flex"},onClick:function(){return(0,a.navigate)("/admin/")}},"DARUMA ADMIN TOOLS"),r.createElement(A.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}},r.createElement(M.Z,{sx:{color:"#fff"},onClick:function(){return(0,a.navigate)("/admin/invitations/")}},"紹介システム")),r.createElement(M.Z,{variant:"contained",color:"error",startIcon:r.createElement(B.Z,null),onClick:function(){var e,t,n,r;null===(e=window)||void 0===e||null===(t=e.google)||void 0===t||null===(n=t.accounts)||void 0===n||null===(r=n.id)||void 0===r||r.disableAutoSelect(),window.localStorage.removeItem(N),k(),o(!1)},sx:{mx:2}},"ログアウト"),r.createElement(A.Z,{display:"flex",flexDirection:"row",alignItems:"center"},r.createElement(A.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},r.createElement(R.Z,{fontSize:14,fontWeight:"bold"},b),r.createElement(R.Z,{fontSize:10},"(",p,")")),r.createElement(P,{src:w,sx:{ml:1}}))))),r.createElement(j.Z,{maxWidth:"xl",sx:{mt:10}},t)):r.createElement(r.Fragment,null,r.createElement(j.Z,{sx:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},r.createElement(A.Z,{my:2},r.createElement(R.Z,{variant:"h6"},"DARUMA ADMIN TOOLS")),r.createElement(A.Z,null,r.createElement(A.Z,{id:"buttonDiv",sx:{display:"flex",justifyContent:"center"}}),r.createElement(u.Z,{severity:"error",sx:{opacity:c?1:0,pointerEvents:"none"}},"この Google アカウントのログインは許可していません。"))))}},5477:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return de}});var r=n(2137),a=n(7757),i=n.n(a),o=n(7294),l=n(4944),c=n.n(l),s=n(6320),u=n(9211),d=n(6968),m=n(3827),p=n(4334),f=n(5437),v=n(6156),g=n(9756),Z=n(2122),h=n(5505),E=n(9408),b=n(7663),y=n(8348),x=n(2371),w=n(8267),S=n(1919),k=n(4026),C=n(5973),P=n(2194);var I=(0,P.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var A=(0,P.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var M=(0,P.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),j=n(8416);function D(e){return(0,j.Z)("MuiMenuItem",e)}var R=(0,P.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),B=n(5893),N=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],z=(0,y.ZP)(S.Z,{shouldForwardProp:function(e){return(0,y.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,Z.Z)({},n.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.divider&&{borderBottom:"1px solid ".concat(n.palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:n.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,v.Z)(t,"&.".concat(R.selected),(0,v.Z)({backgroundColor:(0,b.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(R.focusVisible),{backgroundColor:(0,b.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,v.Z)(t,"&.".concat(R.selected,":hover"),{backgroundColor:(0,b.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,b.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),(0,v.Z)(t,"&.".concat(R.focusVisible),{backgroundColor:n.palette.action.focus}),(0,v.Z)(t,"&.".concat(R.disabled),{opacity:n.palette.action.disabledOpacity}),(0,v.Z)(t,"& + .".concat(I.root),{marginTop:n.spacing(1),marginBottom:n.spacing(1)}),(0,v.Z)(t,"& + .".concat(I.inset),{marginLeft:52}),(0,v.Z)(t,"& .".concat(M.root),{marginTop:0,marginBottom:0}),(0,v.Z)(t,"& .".concat(M.inset),{paddingLeft:36}),(0,v.Z)(t,"& .".concat(A.root),{minWidth:36}),t),!r.dense&&(0,v.Z)({},n.breakpoints.up("sm"),{minHeight:"auto"}),r.dense&&(0,Z.Z)({minHeight:32,paddingTop:4,paddingBottom:4},n.typography.body2,(0,v.Z)({},"& .".concat(A.root," svg"),{fontSize:"1.25rem"})))})),O=o.forwardRef((function(e,t){var n=(0,x.Z)({props:e,name:"MuiMenuItem"}),r=n.autoFocus,a=void 0!==r&&r,i=n.component,l=void 0===i?"li":i,c=n.dense,s=void 0!==c&&c,u=n.divider,d=void 0!==u&&u,m=n.disableGutters,p=void 0!==m&&m,f=n.focusVisibleClassName,v=n.role,b=void 0===v?"menuitem":v,y=n.tabIndex,S=(0,g.Z)(n,N),P=o.useContext(w.Z),I={dense:s||P.dense||!1,disableGutters:p},A=o.useRef(null);(0,k.Z)((function(){a&&A.current&&A.current.focus()}),[a]);var M,j=(0,Z.Z)({},n,{dense:I.dense,divider:d,disableGutters:p}),R=function(e){var t=e.disabled,n=e.dense,r=e.divider,a=e.disableGutters,i=e.selected,o=e.classes,l={root:["root",n&&"dense",t&&"disabled",!a&&"gutters",r&&"divider",i&&"selected"]},c=(0,E.Z)(l,D,o);return(0,Z.Z)({},o,c)}(n),O=(0,C.Z)(A,t);return n.disabled||(M=void 0!==y?y:-1),(0,B.jsx)(w.Z.Provider,{value:I,children:(0,B.jsx)(z,(0,Z.Z)({ref:O,role:b,tabIndex:M,component:l,focusVisibleClassName:(0,h.Z)(R.focusVisible,f)},S,{ownerState:j,classes:R}))})})),L=n(4983),F=n(5749),T=n(4382),U=n(2664),V=n(7783),G=n(943),W=n(5319),H=n(7708),q=n(3182),K=n(7216),_=n(9308),J=n(3015),$=n(7499),Q=n(1359),X=n(8599),Y=n(6763),ee=n(460),te=n(5497),ne=n(581),re=n(6190),ae=n(26),ie=n(5985),oe=n(9656),le=n(7962),ce=n(5421),se=n(631),ue=function(e){var t=(0,o.useState)(e.clientsPartner.name),n=t[0],a=t[1],l=(0,o.useState)(e.clientsPartner.partnerId),s=l[0],u=l[1],m=(0,o.useState)(e.clientsPartner.note),p=m[0],f=m[1],v=(0,o.useState)(e.clientsPartner.uuid),g=v[0],Z=v[1],h=(0,o.useState)(e.clientsPartner.name),E=h[0],b=h[1],y=(0,o.useState)(e.clientsPartner.partnerId),x=y[0],w=y[1],S=(0,o.useState)(e.clientsPartner.note),k=S[0],C=S[1],P=(0,o.useState)(!0),I=P[0],A=P[1],M=(0,o.useState)(!0),j=M[0],D=M[1],R=(0,o.useState)(e.clientsPartner.createdAt),B=R[0],N=R[1],z=(0,o.useState)(e.clientsPartner.updatedAt),F=z[0],U=z[1],V=(0,o.useState)(e.clientsPartner.createdBy),W=V[0],H=V[1],J=(0,o.useState)(e.clientsPartner.updatedBy),$=J[0],ue=J[1],de=(0,o.useState)(!1),me=de[0],pe=de[1],fe=(0,o.useState)(""),ve=fe[0],ge=fe[1],Ze=(0,o.useState)(""),he=Ze[0],Ee=Ze[1];(0,o.useEffect)((function(){var t="https://daruma-inv.com/invitations/?uuid="+e.clientsPartner.uuid;(function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,se.toDataURL(t);case 3:n=e.sent,Ee(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()(),ge(t),a(e.clientsPartner.name),u(e.clientsPartner.partnerId),f(e.clientsPartner.note),Z(e.clientsPartner.uuid),b(e.clientsPartner.name),w(e.clientsPartner.partnerId),C(e.clientsPartner.note),A(!0),D(!0),N(e.clientsPartner.createdAt),U(e.clientsPartner.updatedAt),H(e.clientsPartner.createdBy),ue(e.clientsPartner.updatedBy),pe(!1)}),[e.clientsPartner.uuid,e.clientsPartner.name,e.clientsPartner.partnerId,e.clientsPartner.note,e.clientsPartner.createdAt,e.clientsPartner.updatedAt,e.clientsPartner.createdBy,e.clientsPartner.updatedBy,e.username]);var be,ye=function(){var t=(0,r.Z)(i().mark((function t(){var n,r,o,l,s,d,m,p,v;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c()("https://api.eleven-cloud.com/api/partners/clients/"+g,{method:"PUT",body:JSON.stringify({name:E,partnerId:x,note:k,updatedBy:e.username})});case 3:if(!((n=t.sent).status>=400)){t.next=6;break}throw new Error("Bad response /api/partners/clients");case 6:return t.next=8,n.json();case 8:r=t.sent,o=r.name,l=r.partnerId,s=r.note,d=r.createdAt,m=r.updatedAt,p=r.createdBy,v=r.updatedBy,a(o),u(l),f(s),b(o),w(l),C(s),A(!0),D(!0),N(d),U(m),H(p),ue(v),t.next=34;break;case 30:t.prev=30,t.t0=t.catch(0),alert("error"),console.log(t.t0);case 34:case"end":return t.stop()}}),t,null,[[0,30]])})));return function(){return t.apply(this,arguments)}}(),xe=function(){var t=(0,r.Z)(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c()("https://api.eleven-cloud.com/api/partners/clients/"+e.clientsPartner.uuid,{method:"DELETE"});case 3:if(!(t.sent.status>=400)){t.next=6;break}throw new Error("Bad response /api/partners/clients");case 6:e.reload(),pe(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),we=function(){return pe(!1)};return o.createElement(o.Fragment,null,o.createElement(q.Z,{hover:!0,selected:!I||!j},o.createElement(G.Z,null,o.createElement(re.Z,{href:ve,target:"_blank"},o.createElement("img",{src:he,style:{width:"100px",height:"100px"}}))),o.createElement(G.Z,null,o.createElement(K.Z,{value:E,onChange:function(e){var t=e.target.value,r=t!==n||x!==s||k!==p;A(!(t&&r)),D(!r),b(t)}})),o.createElement(G.Z,null,o.createElement(L.Z,{value:x,onChange:function(e){var t=e.target.value,r=E!==n||t!==s||k!==p;A(!(E&&r)),D(!r),w(t)}},e.partners.map((function(e,t){var n=e.uuid,r=e.lastNameKanji,a=e.firstNameKanji;return o.createElement(O,{key:t,value:n},r," ",a)})))),o.createElement(G.Z,null,o.createElement(K.Z,{value:k,multiline:!0,onChange:function(e){var t=e.target.value,r=E!==n||x!==s||t!==p;A(!(E&&r)),D(!r),C(t)}})),o.createElement(G.Z,null,o.createElement(T.Z,{direction:"row",spacing:1},o.createElement(ae.Z,{title:"このレコードの変更を保存する"},o.createElement("span",null,o.createElement(ne.Z,{color:"primary","aria-label":"update",size:"large",disabled:I,onClick:ye},o.createElement(oe.Z,{fontSize:"inherit"})))),o.createElement(ae.Z,{title:"このレコードの変更を元に戻す"},o.createElement("span",null,o.createElement(ne.Z,{"aria-label":"undo",size:"large",disabled:j,onClick:function(){b(n),w(s),C(p),A(!0),D(!0)}},o.createElement(le.Z,{fontSize:"inherit"})))),o.createElement(ae.Z,{title:"このレコードを削除する"},o.createElement(ne.Z,{color:"error","aria-label":"delete",size:"large",onClick:function(){return pe(!0)}},o.createElement(ie.Z,{fontSize:"inherit"}))))),o.createElement(G.Z,null,o.createElement(_.Z,{variant:"body2"},(0,ce.Z)(B)," ",o.createElement("small",null,"作成 (",W,")")),o.createElement(_.Z,{variant:"body2"},(0,ce.Z)(F)," ",o.createElement("small",null,"更新 (",$,")")))),o.createElement(Q.Z,{open:me,onClose:we,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},o.createElement(te.Z,{id:"alert-dialog-title"},"このレコードの削除しますか？"),o.createElement(Y.Z,null,o.createElement(ee.Z,{id:"alert-dialog-description"},"顧客名　: ",n,o.createElement("br",null),"担当者　:"," ",(be=e.partners.filter((function(e){return e.uuid===s}))[0]).lastNameKanji+" "+be.firstNameKanji,o.createElement("br",null),"メモ　　: ",p,o.createElement("br",null),"作成日時: ",(0,ce.Z)(B)," (",W,")",o.createElement("br",null),"更新日時: ",(0,ce.Z)(F)," (",$,")")),o.createElement(X.Z,null,o.createElement(d.Z,{onClick:we},"キャンセル"),o.createElement(d.Z,{onClick:xe,autoFocus:!0},"削除する"))))},de=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1],a=(0,o.useState)("info"),l=a[0],v=a[1],g=(0,o.useState)(""),Z=g[0],h=g[1],E=(0,o.useState)([]),b=E[0],y=E[1],x=(0,o.useState)([]),w=x[0],S=x[1],k=(0,o.useState)(""),C=k[0],P=k[1],I=(0,o.useState)(""),A=I[0],M=I[1],j=(0,o.useState)(""),D=j[0],R=j[1],B=(0,o.useState)(!0),N=B[0],z=B[1],Q=(0,o.useState)(0),X=Q[0],Y=Q[1],ee=(0,o.useState)(""),te=ee[0],ne=ee[1];return(0,o.useEffect)((function(){(function(){var e=(0,r.Z)(i().mark((function e(){var t,n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c()("https://api.eleven-cloud.com/api/partners");case 3:return t=e.sent,e.next=6,c()("https://api.eleven-cloud.com/api/partners/clients");case 6:if(n=e.sent,!(t.status>=400)){e.next=9;break}throw new Error("Bad response /api/partners");case 9:if(!(n.status>=400)){e.next=11;break}throw new Error("Bad response /api/partners/clients");case 11:return e.next=13,t.json();case 13:return r=e.sent,e.next=16,n.json();case 16:a=e.sent,y(r),S(a),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}})()()}),[X]),o.createElement($.Z,{setUsername:ne},o.createElement(_.Z,{variant:"h6"},"紹介システム 権限付与",o.createElement("small",null,"（DARUMA → オーナー様）")),o.createElement(u.Z,{display:"flex",my:2,pl:2,py:4,sx:{border:"2px solid #ccc",borderRadius:2}},o.createElement(K.Z,{label:"顧客名",variant:"outlined",value:C,onChange:function(e){var t=e.target.value;P(t),z(!A||!t)}}),o.createElement(m.Z,{sx:{minWidth:120}},o.createElement(p.Z,null,"担当者"),o.createElement(L.Z,{label:"担当者",value:A,onChange:function(e){var t=e.target.value;M(t),z(!t||!C)}},b.map((function(e,t){var n=e.uuid,r=e.lastNameKanji,a=e.firstNameKanji,i=e.lastName,l=e.firstName,c=r&&a?r+" "+a:i+" "+l;return o.createElement(O,{key:t,value:n},c)})))),o.createElement(K.Z,{label:"メモ",variant:"outlined",multiline:!0,value:D,onChange:function(e){var t=e.target.value;return R(t)},sx:{minWidth:320}}),o.createElement(d.Z,{variant:"contained",color:"primary",startIcon:o.createElement(J.Z,null),disabled:N,onClick:(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c()("https://api.eleven-cloud.com/api/partners/clients",{method:"POST",body:JSON.stringify({name:C,partnerId:A,note:D,createdBy:te})});case 3:if(!(e.sent.status>=400)){e.next=6;break}throw new Error("Bad response /api/partners/clients");case 6:n(!0),v("success"),h(C+" 様の情報を追加しました"),P(""),M(""),R(""),z(!0),Y(X+1),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("error"),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})))},"新規作成")),o.createElement(W.Z,null,o.createElement(U.Z,null,o.createElement(H.Z,null,o.createElement(q.Z,null,o.createElement(G.Z,null,"URL"),o.createElement(G.Z,null,"顧客名"),o.createElement(G.Z,null,"担当者"),o.createElement(G.Z,null,"メモ"),o.createElement(G.Z,null,"操作"),o.createElement(G.Z,null,"タイムスタンプ"))),o.createElement(V.Z,null,w[0]?w.map((function(e,t){return o.createElement(ue,{key:t,clientsPartner:e,partners:b,username:te,reload:function(){return Y(X+1)}})})):o.createElement(q.Z,null,o.createElement(G.Z,{colSpan:6},o.createElement(_.Z,{align:"center"},"Loading..."),o.createElement(f.Z,null)))))),o.createElement(T.Z,{spacing:2,sx:{width:"100%"}},o.createElement(F.Z,{open:t,autoHideDuration:5e3,onClose:function(e,t){"clickaway"!==t&&n(!1)}},o.createElement(s.Z,{severity:l},Z))))}}}]);
//# sourceMappingURL=component---src-pages-admin-invitations-index-js-7b3c151cbb8ffd86bd9a.js.map