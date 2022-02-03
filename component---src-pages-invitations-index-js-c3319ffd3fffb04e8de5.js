"use strict";(self.webpackChunkcorporate=self.webpackChunkcorporate||[]).push([[659],{5985:function(e,t,n){var r=n(8580);t.Z=void 0;var a=r(n(2174)),l=n(5893),i=(0,a.default)((0,l.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");t.Z=i},6190:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(1245),a=n(5774),l=n(1531),i=n(4038),o=n(7294),c=n(5505),s=n(9408),u=n(5535),d=n(7663),m=n(9240),p=n(8348),f=n(2371),E=n(93),Z=n(5973),v=n(9308),h=n(8416);function y(e){return(0,h.Z)("MuiLink",e)}var x=(0,n(2194).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),b=n(5893),g=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],F={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=(0,p.ZP)(v.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat((0,m.Z)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,r=(0,u.D)(t,"palette.".concat(function(e){return F[e]||e}(n.color)))||n.color;return(0,i.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?(0,d.Fq)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&(0,a.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(x.focusVisible),{outline:"auto"}))})),w=o.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiLink"}),a=n.className,u=n.color,d=void 0===u?"primary":u,p=n.component,v=void 0===p?"a":p,h=n.onBlur,x=n.onFocus,F=n.TypographyClasses,w=n.underline,k=void 0===w?"always":w,A=n.variant,C=void 0===A?"inherit":A,N=(0,l.Z)(n,g),B=(0,E.Z)(),D=B.isFocusVisibleRef,z=B.onBlur,R=B.onFocus,L=B.ref,M=o.useState(!1),I=(0,r.Z)(M,2),U=I[0],W=I[1],P=(0,Z.Z)(t,L),V=(0,i.Z)({},n,{color:d,component:v,focusVisible:U,underline:k,variant:C}),j=function(e){var t=e.classes,n=e.component,r=e.focusVisible,a=e.underline,l={root:["root","underline".concat((0,m.Z)(a)),"button"===n&&"button",r&&"focusVisible"]};return(0,s.Z)(l,y,t)}(V);return(0,b.jsx)(S,(0,i.Z)({className:(0,c.Z)(j.root,a),classes:F,color:d,component:v,onBlur:function(e){z(e),!1===D.current&&W(!1),h&&h(e)},onFocus:function(e){R(e),!0===D.current&&W(!0),x&&x(e)},ref:P,ownerState:V,variant:C},N))}))},1623:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var r=n(8634),a=n(2656),l=n.n(a),i=n(7294),o=n(5414),c=n(4944),s=n.n(c),u=n(6320),d=n(5190),m=n(9211),p=n(6968),f=n(5616),E=n(8423),Z=n(5437),v=n(5749),h=n(4382),y=n(2664),x=n(7783),b=n(943),g=n(5319),F=n(7708),S=n(3182),w=n(7216),k=n(7098),A=n(9308),C=n(3015),N=n(1359),B=n(8599),D=n(6763),z=n(460),R=n(5497),L=n(581),M=n(6190),I=n(26),U=n(5985),W=n(9656),P=n(7962),V=n(5421),j=n(631),T=function(e){var t=(0,i.useState)(e.clientsFriend.friendName),n=t[0],a=t[1],o=(0,i.useState)(e.clientsFriend.yourName),c=o[0],u=o[1],d=(0,i.useState)(e.clientsFriend.note),m=d[0],f=d[1],Z=(0,i.useState)(e.clientsFriend.uuid),v=Z[0],y=Z[1],x=(0,i.useState)(e.clientsFriend.friendName),g=x[0],F=x[1],k=(0,i.useState)(e.clientsFriend.yourName),C=k[0],T=k[1],H=(0,i.useState)(e.clientsFriend.note),O=H[0],q=H[1],G=(0,i.useState)(!0),J=G[0],K=G[1],_=(0,i.useState)(!0),Q=_[0],X=_[1],Y=(0,i.useState)(e.clientsFriend.createdAt),$=Y[0],ee=Y[1],te=(0,i.useState)(e.clientsFriend.updatedAt),ne=te[0],re=te[1],ae=(0,i.useState)(e.clientsFriend.createdBy),le=ae[0],ie=ae[1],oe=(0,i.useState)(e.clientsFriend.updatedBy),ce=oe[0],se=oe[1],ue=(0,i.useState)(!1),de=ue[0],me=ue[1],pe=(0,i.useState)(""),fe=pe[0],Ee=pe[1],Ze=(0,i.useState)(""),ve=Ze[0],he=Ze[1];(0,i.useEffect)((function(){var t="https://daruma-inv.com/foryou/?uuid="+e.clientsFriend.uuid,n=function(){var e=(0,r.Z)(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.toDataURL(t);case 3:n=e.sent,he(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();n(),Ee(t),a(e.clientsFriend.friendName),u(e.clientsFriend.yourName),f(e.clientsFriend.note),y(e.clientsFriend.uuid),F(e.clientsFriend.friendName),T(e.clientsFriend.yourName),q(e.clientsFriend.note),K(!0),X(!0),ee(e.clientsFriend.createdAt),re(e.clientsFriend.updatedAt),ie(e.clientsFriend.createdBy),se(e.clientsFriend.updatedBy),me(!1)}),[e.clientsFriend.uuid,e.clientsFriend.friendName,e.clientsFriend.yourName,e.clientsFriend.note,e.clientsFriend.createdAt,e.clientsFriend.updatedAt,e.clientsFriend.createdBy,e.clientsFriend.updatedBy]);var ye=function(){var e=(0,r.Z)(l().mark((function e(){var t,n,r,i,o,c,d,m,p;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s()("https://api.eleven-cloud.com/api/partners/clients/friends/"+v,{method:"PUT",body:JSON.stringify({friendName:g,yourName:C,note:O,updatedBy:"user"})});case 3:if(!((t=e.sent).status>=400)){e.next=6;break}throw new Error("Bad response /api/partners/clients");case 6:return e.next=8,t.json();case 8:n=e.sent,r=n.friendName,i=n.yourName,o=n.note,c=n.createdAt,d=n.updatedAt,m=n.createdBy,p=n.updatedBy,a(r),u(i),f(o),F(r),T(i),q(o),K(!0),X(!0),ee(c),re(d),ie(m),se(p),e.next=34;break;case 30:e.prev=30,e.t0=e.catch(0),alert("error"),console.log(e.t0);case 34:case"end":return e.stop()}}),e,null,[[0,30]])})));return function(){return e.apply(this,arguments)}}(),xe=function(){var t=(0,r.Z)(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s()("https://api.eleven-cloud.com/api/partners/clients/friends/"+v,{method:"DELETE"});case 3:if(!(t.sent.status>=400)){t.next=6;break}throw new Error("Bad response /api/partners/clients/friends");case 6:e.reload(),me(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),be=function(){return me(!1)};return i.createElement(i.Fragment,null,i.createElement(S.Z,{hover:!0,selected:!J||!Q},i.createElement(b.Z,null,i.createElement(M.Z,{href:fe,target:"_blank"},i.createElement("img",{src:ve,style:{width:"100px",height:"100px"}}))),i.createElement(b.Z,null,i.createElement(w.Z,{value:g,onChange:function(e){var t=e.target.value,r=t!==n||C!==c||O!==m;K(!(t&&r)),X(!r),F(t)},InputProps:{endAdornment:i.createElement(E.Z,{position:"end"},"様")}})),i.createElement(b.Z,null,i.createElement(w.Z,{value:C,onChange:function(e){var t=e.target.value,r=g!==n||t!==c||O!==m;K(!(g&&r)),X(!r),T(t)},InputProps:{endAdornment:i.createElement(E.Z,{position:"end"},"様")}})),i.createElement(b.Z,null,i.createElement(w.Z,{value:O,multiline:!0,onChange:function(e){var t=e.target.value,r=g!==n||C!==c||t!==m;K(!(g&&r)),X(!r),q(t)}})),i.createElement(b.Z,null,i.createElement(h.Z,{direction:"row",spacing:1},i.createElement(I.Z,{title:"このレコードの変更を保存する"},i.createElement("span",null,i.createElement(L.Z,{color:"primary","aria-label":"update",size:"large",disabled:J,onClick:ye},i.createElement(W.Z,{fontSize:"inherit"})))),i.createElement(I.Z,{title:"このレコードの変更を元に戻す"},i.createElement("span",null,i.createElement(L.Z,{"aria-label":"undo",size:"large",disabled:Q,onClick:function(){F(n),T(c),q(m),K(!0),X(!0)}},i.createElement(P.Z,{fontSize:"inherit"})))),i.createElement(I.Z,{title:"このレコードを削除する"},i.createElement(L.Z,{color:"error","aria-label":"delete",size:"large",onClick:function(){return me(!0)}},i.createElement(U.Z,{fontSize:"inherit"}))))),i.createElement(b.Z,null,i.createElement(A.Z,{variant:"body2"},(0,V.Z)($)," ",i.createElement("small",null,"作成 (",le,")")),i.createElement(A.Z,{variant:"body2"},(0,V.Z)(ne)," ",i.createElement("small",null,"更新 (",ce,")")))),i.createElement(N.Z,{open:de,onClose:be,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},i.createElement(R.Z,{id:"alert-dialog-title"},"このレコードの削除しますか？"),i.createElement(D.Z,null,i.createElement(z.Z,{id:"alert-dialog-description"},"ご友人、ご知人のお名前　: ",n,i.createElement("br",null),"お名前　: ",c,i.createElement("br",null),"メモ　　: ",m,i.createElement("br",null),"作成日時: ",(0,V.Z)($)," (",le,")",i.createElement("br",null),"更新日時: ",(0,V.Z)(ne)," (",ce,")")),i.createElement(B.Z,null,i.createElement(p.Z,{onClick:be},"キャンセル"),i.createElement(p.Z,{onClick:xe,autoFocus:!0},"削除する"))))},H=n(9339),O=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1],a=(0,i.useState)("info"),c=a[0],N=a[1],B=(0,i.useState)(""),D=B[0],z=B[1],R=(0,i.useState)(""),L=R[0],M=R[1],I=(0,i.useState)(""),U=I[0],W=I[1],P=(0,i.useState)(""),V=P[0],j=P[1],O=(0,i.useState)(!0),q=O[0],G=O[1],J=(0,H.Wd)("uuid",H.Zp)[0],K=(0,i.useState)(),_=K[0],Q=K[1],X=(0,i.useState)(""),Y=X[0],$=X[1],ee=(0,i.useState)(""),te=ee[0],ne=ee[1],re=(0,i.useState)(!1),ae=re[0],le=re[1],ie=(0,i.useState)(0),oe=ie[0],ce=ie[1];return(0,i.useEffect)((function(){if(J){var e=function(){var e=(0,r.Z)(l().mark((function e(){var t,n,r,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s()("https://api.eleven-cloud.com/api/partners/clients/"+J);case 3:if(404!==(t=e.sent).status){e.next=7;break}throw le(!0),new Error("Bad response /api/partners/clients/{uuid}");case 7:return e.next=9,s()("https://api.eleven-cloud.com/api/partners/clients/friends?partners-client-uuid="+J);case 9:if(!((n=e.sent).status>=400)){e.next=12;break}throw new Error("Bad response /api/partners/clients/friends{uuid}");case 12:return e.next=14,t.json();case 14:return r=e.sent,e.next=17,n.json();case 17:a=e.sent,$(r.name),ne(r.partner.lastNameKanji),Q(a),W(r.name),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(0),console.log(e.t0);case 27:case"end":return e.stop()}}),e,null,[[0,24]])})));return function(){return e.apply(this,arguments)}}();e()}}),[oe,J,ae]),ae?i.createElement(A.Z,{align:"center",mt:5},"お探しのページは削除されたか見つかりません。",i.createElement("br",null),i.createElement("a",{href:"https://daruma-inv.com/"},"https://daruma-inv.com/")):J?i.createElement(i.Fragment,null,i.createElement(o.q,null,i.createElement("title",null,"お客様ご紹介ページ | DARUMA, Inc.")),i.createElement(d.Z,{position:"fixed",sx:{backgroundColor:"#ef8468"}},i.createElement(f.Z,{maxWidth:"xl"},i.createElement(k.Z,{disableGutters:!0},i.createElement(A.Z,{variant:"h6",noWrap:!0,fontWeight:"bold",sx:{mr:2,display:"flex",alignItems:"center"}},Y," 様専用 お客様ご紹介ページ ",i.createElement("small",null,"(by DARUMA)")),i.createElement(m.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}}),i.createElement(m.Z,{display:"flex",flexDirection:"row",alignItems:"center"},i.createElement(m.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},i.createElement(A.Z,{fontSize:14,fontWeight:"bold"},"DARUMA, Inc."),i.createElement(A.Z,{fontSize:10},"[お客様限定]")))))),i.createElement(f.Z,{maxWidth:"xl",sx:{mt:10}},i.createElement(A.Z,null,i.createElement("strong",null,Y),"様、DARUMAの ",te," ","です。いつもお世話になっております。"),i.createElement(A.Z,null,"この機会にぜひご友人、ご知人に DARUMA をご紹介くださいませ。"),i.createElement(m.Z,{display:"flex",my:2,pl:2,py:4,sx:{border:"2px solid #ccc",borderRadius:2}},i.createElement(w.Z,{label:"ご友人・ご知人のお名前（ニックネーム可）",variant:"outlined",value:L,sx:{width:320},InputProps:{endAdornment:i.createElement(E.Z,{position:"end"},"様")},onChange:function(e){var t=e.target.value;M(t),G(!U||!t)}}),i.createElement(w.Z,{label:"お客様のご氏名（ニックネーム可）",variant:"outlined",value:U,InputProps:{endAdornment:i.createElement(E.Z,{position:"end"},"様")},sx:{width:240},onChange:function(e){var t=e.target.value;W(t),G(!t||!L)}}),i.createElement(w.Z,{label:"ご関係",variant:"outlined",multiline:!0,value:V,onChange:function(e){var t=e.target.value;return j(t)},sx:{minWidth:320}}),i.createElement(p.Z,{variant:"contained",color:"primary",startIcon:i.createElement(C.Z,null),disabled:q,onClick:(0,r.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s()("https://api.eleven-cloud.com/api/partners/clients/friends",{method:"POST",body:JSON.stringify({partnersClientUuid:J,friendName:L,yourName:U,note:V,createdBy:"user"})});case 3:if(!(e.sent.status>=400)){e.next=6;break}throw new Error("Bad response /api/partners/clients");case 6:n(!0),N("success"),z(L+" 様の情報を追加しました"),M(""),W(""),j(""),G(!0),ce(oe+1),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("error"),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})))},"新規作成")),i.createElement(g.Z,null,i.createElement(y.Z,null,i.createElement(F.Z,null,i.createElement(S.Z,null,i.createElement(b.Z,null,"URL"),i.createElement(b.Z,null,"ご友人・ご知人のお名前"),i.createElement(b.Z,null,"お客様の氏名（ニックネーム可）"),i.createElement(b.Z,null,"ご関係"),i.createElement(b.Z,null,"操作"),i.createElement(b.Z,null,"タイムスタンプ"))),i.createElement(x.Z,null,void 0!==_&&_[0]?_.map((function(e,t){return i.createElement(T,{key:t,clientsFriend:e,reload:function(){return ce(oe+1)}})})):i.createElement(S.Z,null,i.createElement(b.Z,{colSpan:6},i.createElement(A.Z,{align:"center"},void 0===_?i.createElement(i.Fragment,null,"Loading...",i.createElement(Z.Z,null)):"まだご紹介データがありません。『新規作成』より作成ください。")))))),i.createElement(h.Z,{spacing:2,sx:{width:"100%"}},i.createElement(v.Z,{open:t,autoHideDuration:5e3,onClose:function(e,t){"clickaway"!==t&&n(!1)}},i.createElement(u.Z,{severity:c},D))))):i.createElement(i.Fragment,null)}}}]);
//# sourceMappingURL=component---src-pages-invitations-index-js-c3319ffd3fffb04e8de5.js.map