"use strict";(self.webpackChunkcorporate=self.webpackChunkcorporate||[]).push([[659],{1623:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var r=n(8634),a=n(2656),l=n.n(a),c=n(7294),i=n(5414),s=n(4944),u=n.n(s),o=n(6320),d=n(5190),m=n(9211),p=n(6968),E=n(5616),f=n(8423),Z=n(5437),v=n(5749),h=n(4382),x=n(2664),y=n(7783),g=n(943),b=n(5319),F=n(7708),S=n(3182),w=n(7216),k=n(7098),A=n(9308),C=n(3015),N=n(1359),B=n(8599),D=n(6763),I=n(460),U=n(5497),z=n(581),R=n(6190),W=n(26),P=n(5985),j=n(9656),M=n(7962),L=n(5421),O=n(631),T=function(e){var t=(0,c.useState)(e.clientsFriend.friendName),n=t[0],a=t[1],i=(0,c.useState)(e.clientsFriend.yourName),s=i[0],o=i[1],d=(0,c.useState)(e.clientsFriend.note),m=d[0],E=d[1],Z=(0,c.useState)(e.clientsFriend.uuid),v=Z[0],x=Z[1],y=(0,c.useState)(e.clientsFriend.friendName),b=y[0],F=y[1],k=(0,c.useState)(e.clientsFriend.yourName),C=k[0],T=k[1],G=(0,c.useState)(e.clientsFriend.note),J=G[0],q=G[1],H=(0,c.useState)(!0),K=H[0],_=H[1],Q=(0,c.useState)(!0),V=Q[0],X=Q[1],Y=(0,c.useState)(e.clientsFriend.createdAt),$=Y[0],ee=Y[1],te=(0,c.useState)(e.clientsFriend.updatedAt),ne=te[0],re=te[1],ae=(0,c.useState)(e.clientsFriend.createdBy),le=ae[0],ce=ae[1],ie=(0,c.useState)(e.clientsFriend.updatedBy),se=ie[0],ue=ie[1],oe=(0,c.useState)(!1),de=oe[0],me=oe[1],pe=(0,c.useState)(""),Ee=pe[0],fe=pe[1],Ze=(0,c.useState)(""),ve=Ze[0],he=Ze[1];(0,c.useEffect)((function(){var t="https://daruma-inv.com/foryou/?uuid="+e.clientsFriend.uuid,n=function(){var e=(0,r.Z)(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.toDataURL(t);case 3:n=e.sent,he(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();n(),fe(t),a(e.clientsFriend.friendName),o(e.clientsFriend.yourName),E(e.clientsFriend.note),x(e.clientsFriend.uuid),F(e.clientsFriend.friendName),T(e.clientsFriend.yourName),q(e.clientsFriend.note),_(!0),X(!0),ee(e.clientsFriend.createdAt),re(e.clientsFriend.updatedAt),ce(e.clientsFriend.createdBy),ue(e.clientsFriend.updatedBy),me(!1)}),[e.clientsFriend.uuid,e.clientsFriend.friendName,e.clientsFriend.yourName,e.clientsFriend.note,e.clientsFriend.createdAt,e.clientsFriend.updatedAt,e.clientsFriend.createdBy,e.clientsFriend.updatedBy]);var xe=function(){var e=(0,r.Z)(l().mark((function e(){var t,n,r,c,i,s,d,m,p;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u()("https://api.eleven-cloud.com/api/partners/clients/friends/"+v,{method:"PUT",body:JSON.stringify({friendName:b,yourName:C,note:J,updatedBy:"user"})});case 3:if(!((t=e.sent).status>=400)){e.next=6;break}throw new Error("Bad response /api/partners/clients");case 6:return e.next=8,t.json();case 8:n=e.sent,r=n.friendName,c=n.yourName,i=n.note,s=n.createdAt,d=n.updatedAt,m=n.createdBy,p=n.updatedBy,a(r),o(c),E(i),F(r),T(c),q(i),_(!0),X(!0),ee(s),re(d),ce(m),ue(p),e.next=34;break;case 30:e.prev=30,e.t0=e.catch(0),alert("error"),console.log(e.t0);case 34:case"end":return e.stop()}}),e,null,[[0,30]])})));return function(){return e.apply(this,arguments)}}(),ye=function(){var t=(0,r.Z)(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u()("https://api.eleven-cloud.com/api/partners/clients/friends/"+v,{method:"DELETE"});case 3:if(!(t.sent.status>=400)){t.next=6;break}throw new Error("Bad response /api/partners/clients/friends");case 6:e.reload(),me(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),ge=function(){return me(!1)};return c.createElement(c.Fragment,null,c.createElement(S.Z,{hover:!0,selected:!K||!V},c.createElement(g.Z,null,c.createElement(R.Z,{href:Ee,target:"_blank"},c.createElement("img",{src:ve,style:{width:"100px",height:"100px"}}))),c.createElement(g.Z,null,c.createElement(w.Z,{value:b,onChange:function(e){var t=e.target.value,r=t!==n||C!==s||J!==m;_(!(t&&r)),X(!r),F(t)},InputProps:{endAdornment:c.createElement(f.Z,{position:"end"},"様")}})),c.createElement(g.Z,null,c.createElement(w.Z,{value:C,onChange:function(e){var t=e.target.value,r=b!==n||t!==s||J!==m;_(!(b&&r)),X(!r),T(t)},InputProps:{endAdornment:c.createElement(f.Z,{position:"end"},"様")}})),c.createElement(g.Z,null,c.createElement(w.Z,{value:J,multiline:!0,onChange:function(e){var t=e.target.value,r=b!==n||C!==s||t!==m;_(!(b&&r)),X(!r),q(t)}})),c.createElement(g.Z,null,c.createElement(h.Z,{direction:"row",spacing:1},c.createElement(W.Z,{title:"このレコードの変更を保存する"},c.createElement("span",null,c.createElement(z.Z,{color:"primary","aria-label":"update",size:"large",disabled:K,onClick:xe},c.createElement(j.Z,{fontSize:"inherit"})))),c.createElement(W.Z,{title:"このレコードの変更を元に戻す"},c.createElement("span",null,c.createElement(z.Z,{"aria-label":"undo",size:"large",disabled:V,onClick:function(){F(n),T(s),q(m),_(!0),X(!0)}},c.createElement(M.Z,{fontSize:"inherit"})))),c.createElement(W.Z,{title:"このレコードを削除する"},c.createElement(z.Z,{color:"error","aria-label":"delete",size:"large",onClick:function(){return me(!0)}},c.createElement(P.Z,{fontSize:"inherit"}))))),c.createElement(g.Z,null,c.createElement(A.Z,{variant:"body2"},(0,L.Z)($)," ",c.createElement("small",null,"作成 (",le,")")),c.createElement(A.Z,{variant:"body2"},(0,L.Z)(ne)," ",c.createElement("small",null,"更新 (",se,")")))),c.createElement(N.Z,{open:de,onClose:ge,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},c.createElement(U.Z,{id:"alert-dialog-title"},"このレコードの削除しますか？"),c.createElement(D.Z,null,c.createElement(I.Z,{id:"alert-dialog-description"},"ご友人、ご知人のお名前　: ",n,c.createElement("br",null),"お名前　: ",s,c.createElement("br",null),"メモ　　: ",m,c.createElement("br",null),"作成日時: ",(0,L.Z)($)," (",le,")",c.createElement("br",null),"更新日時: ",(0,L.Z)(ne)," (",se,")")),c.createElement(B.Z,null,c.createElement(p.Z,{onClick:ge},"キャンセル"),c.createElement(p.Z,{onClick:ye,autoFocus:!0},"削除する"))))},G=n(9339),J=function(){var e=(0,c.useState)(!1),t=e[0],n=e[1],a=(0,c.useState)("info"),s=a[0],N=a[1],B=(0,c.useState)(""),D=B[0],I=B[1],U=(0,c.useState)(""),z=U[0],R=U[1],W=(0,c.useState)(""),P=W[0],j=W[1],M=(0,c.useState)(""),L=M[0],O=M[1],J=(0,c.useState)(!0),q=J[0],H=J[1],K=(0,G.Wd)("uuid",G.Zp)[0],_=(0,c.useState)(),Q=_[0],V=_[1],X=(0,c.useState)(""),Y=X[0],$=X[1],ee=(0,c.useState)(""),te=ee[0],ne=ee[1],re=(0,c.useState)(!1),ae=re[0],le=re[1],ce=(0,c.useState)(0),ie=ce[0],se=ce[1];return(0,c.useEffect)((function(){if(K){var e=function(){var e=(0,r.Z)(l().mark((function e(){var t,n,r,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u()("https://api.eleven-cloud.com/api/partners/clients/"+K);case 3:if(404!==(t=e.sent).status){e.next=7;break}throw le(!0),new Error("Bad response /api/partners/clients/{uuid}");case 7:return e.next=9,u()("https://api.eleven-cloud.com/api/partners/clients/friends?partners-client-uuid="+K);case 9:if(!((n=e.sent).status>=400)){e.next=12;break}throw new Error("Bad response /api/partners/clients/friends{uuid}");case 12:return e.next=14,t.json();case 14:return r=e.sent,e.next=17,n.json();case 17:a=e.sent,$(r.name),ne(r.partner.lastNameKanji),V(a),j(r.name),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(0),console.log(e.t0);case 27:case"end":return e.stop()}}),e,null,[[0,24]])})));return function(){return e.apply(this,arguments)}}();e()}}),[ie,K,ae]),ae?c.createElement(A.Z,{align:"center",mt:5},"お探しのページは削除されたか見つかりません。",c.createElement("br",null),c.createElement("a",{href:"https://daruma-inv.com/"},"https://daruma-inv.com/")):K?c.createElement(c.Fragment,null,c.createElement(i.q,null,c.createElement("title",null,"お客様ご紹介ページ | DARUMA, Inc.")),c.createElement(d.Z,{position:"fixed",sx:{backgroundColor:"#ef8468"}},c.createElement(E.Z,{maxWidth:"xl"},c.createElement(k.Z,{disableGutters:!0},c.createElement(A.Z,{variant:"h6",noWrap:!0,fontWeight:"bold",sx:{mr:2,display:"flex",alignItems:"center"}},Y," 様専用 お客様ご紹介ページ ",c.createElement("small",null,"(by DARUMA)")),c.createElement(m.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}}),c.createElement(m.Z,{display:"flex",flexDirection:"row",alignItems:"center"},c.createElement(m.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},c.createElement(A.Z,{fontSize:14,fontWeight:"bold"},"DARUMA, Inc."),c.createElement(A.Z,{fontSize:10},"[お客様限定]")))))),c.createElement(E.Z,{maxWidth:"xl",sx:{mt:10}},c.createElement(A.Z,null,c.createElement("strong",null,Y),"様、DARUMAの ",te," ","です。いつもお世話になっております。"),c.createElement(A.Z,null,"この機会にぜひご友人、ご知人に DARUMA をご紹介くださいませ。"),c.createElement(m.Z,{display:"flex",my:2,pl:2,py:4,sx:{border:"2px solid #ccc",borderRadius:2}},c.createElement(w.Z,{label:"ご友人・ご知人のお名前（ニックネーム可）",variant:"outlined",value:z,sx:{width:320},InputProps:{endAdornment:c.createElement(f.Z,{position:"end"},"様")},onChange:function(e){var t=e.target.value;R(t),H(!P||!t)}}),c.createElement(w.Z,{label:"お客様のご氏名（ニックネーム可）",variant:"outlined",value:P,InputProps:{endAdornment:c.createElement(f.Z,{position:"end"},"様")},sx:{width:240},onChange:function(e){var t=e.target.value;j(t),H(!t||!z)}}),c.createElement(w.Z,{label:"メモ",variant:"outlined",multiline:!0,value:L,onChange:function(e){var t=e.target.value;return O(t)},sx:{minWidth:320}}),c.createElement(p.Z,{variant:"contained",color:"primary",startIcon:c.createElement(C.Z,null),disabled:q,onClick:(0,r.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u()("https://api.eleven-cloud.com/api/partners/clients/friends",{method:"POST",body:JSON.stringify({partnersClientUuid:K,friendName:z,yourName:P,note:L,createdBy:"user"})});case 3:if(!(e.sent.status>=400)){e.next=6;break}throw new Error("Bad response /api/partners/clients");case 6:n(!0),N("success"),I(z+" 様の情報を追加しました"),R(""),j(""),O(""),H(!0),se(ie+1),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("error"),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})))},"新規作成")),c.createElement(b.Z,null,c.createElement(x.Z,null,c.createElement(F.Z,null,c.createElement(S.Z,null,c.createElement(g.Z,null,"URL"),c.createElement(g.Z,null,"ご友人・ご知人のお名前"),c.createElement(g.Z,null,"お客様の氏名（ニックネーム可）"),c.createElement(g.Z,null,"メモ"),c.createElement(g.Z,null,"操作"),c.createElement(g.Z,null,"タイムスタンプ"))),c.createElement(y.Z,null,void 0!==Q&&Q[0]?Q.map((function(e,t){return c.createElement(T,{key:t,clientsFriend:e,reload:function(){return se(ie+1)}})})):c.createElement(S.Z,null,c.createElement(g.Z,{colSpan:6},c.createElement(A.Z,{align:"center"},void 0===Q?c.createElement(c.Fragment,null,"Loading...",c.createElement(Z.Z,null)):"まだご紹介データがありません。『新規作成』より作成ください。")))))),c.createElement(h.Z,{spacing:2,sx:{width:"100%"}},c.createElement(v.Z,{open:t,autoHideDuration:5e3,onClose:function(e,t){"clickaway"!==t&&n(!1)}},c.createElement(o.Z,{severity:s},D))))):c.createElement(c.Fragment,null)}}}]);
//# sourceMappingURL=component---src-pages-invitations-index-js-05d8132fb78b0b82fc2a.js.map