/*! For license information please see component---src-pages-privacy-js-76c6f3abbfa8604e999a.js.LICENSE.txt */
"use strict";(self.webpackChunkcorporate=self.webpackChunkcorporate||[]).push([[844],{2234:function(e,t){t.Z=function(e){return"string"==typeof e}},6190:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(1245),o=n(5774),a=n(1531),i=n(4038),s=n(7294),c=n(5505),l=n(9408),d=n(5535),u=n(7663),m=n(9240),p=n(8348),f=n(2371),Z=n(93),g=n(5973),v=n(9308),b=n(8416);function y(e){return(0,b.Z)("MuiLink",e)}var h=(0,n(2194).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),x=n(5893),S=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=(0,p.ZP)(v.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat((0,m.Z)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,r=(0,d.D)(t,"palette.".concat(function(e){return C[e]||e}(n.color)))||n.color;return(0,i.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?(0,u.Fq)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&(0,o.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(h.focusVisible),{outline:"auto"}))})),E=s.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiLink"}),o=n.className,d=n.color,u=void 0===d?"primary":d,p=n.component,v=void 0===p?"a":p,b=n.onBlur,h=n.onFocus,C=n.TypographyClasses,E=n.underline,k=void 0===E?"always":E,P=n.variant,R=void 0===P?"inherit":P,I=(0,a.Z)(n,S),M=(0,Z.Z)(),N=M.isFocusVisibleRef,A=M.onBlur,L=M.onFocus,j=M.ref,T=s.useState(!1),G=(0,r.Z)(T,2),B=G[0],F=G[1],V=(0,g.Z)(t,j),_=(0,i.Z)({},n,{color:u,component:v,focusVisible:B,underline:k,variant:R}),D=function(e){var t=e.classes,n=e.component,r=e.focusVisible,o=e.underline,a={root:["root","underline".concat((0,m.Z)(o)),"button"===n&&"button",r&&"focusVisible"]};return(0,l.Z)(a,y,t)}(_);return(0,x.jsx)(w,(0,i.Z)({className:(0,c.Z)(D.root,o),classes:C,color:u,component:v,onBlur:function(e){A(e),!1===N.current&&F(!1),b&&b(e)},onFocus:function(e){L(e),!0===N.current&&F(!0),h&&h(e)},ref:V,ownerState:_,variant:R},I))}))},9644:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(1531),o=n(4038),a=n(7294),i=n(5505),s=n(9408),c=n(8348),l=n(2371),d=n(8267),u=n(8416);function m(e){return(0,u.Z)("MuiList",e)}(0,n(2194).Z)("MuiList",["root","padding","dense","subheader"]);var p=n(5893),f=["children","className","component","dense","disablePadding","subheader"],Z=(0,c.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})((function(e){var t=e.ownerState;return(0,o.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!t.disablePadding&&{paddingTop:8,paddingBottom:8},t.subheader&&{paddingTop:0})})),g=a.forwardRef((function(e,t){var n=(0,l.Z)({props:e,name:"MuiList"}),c=n.children,u=n.className,g=n.component,v=void 0===g?"ul":g,b=n.dense,y=void 0!==b&&b,h=n.disablePadding,x=void 0!==h&&h,S=n.subheader,C=(0,r.Z)(n,f),w=a.useMemo((function(){return{dense:y}}),[y]),E=(0,o.Z)({},n,{component:v,dense:y,disablePadding:x}),k=function(e){var t=e.classes,n={root:["root",!e.disablePadding&&"padding",e.dense&&"dense",e.subheader&&"subheader"]};return(0,s.Z)(n,m,t)}(E);return(0,p.jsx)(d.Z.Provider,{value:w,children:(0,p.jsxs)(Z,(0,o.Z)({as:v,className:(0,i.Z)(k.root,u),ref:t,ownerState:E},C,{children:[S,c]}))})}))},8267:function(e,t,n){var r=n(7294).createContext({});t.Z=r},8041:function(e,t,n){n.d(t,{L:function(){return o}});var r=n(8416);function o(e){return(0,r.Z)("MuiListItemText",e)}var a=(0,n(2194).Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=a},4817:function(e,t){var n=60103,r=60106,o=60107,a=60108,i=60114,s=60109,c=60110,l=60112,d=60113,u=60120,m=60115,p=60116,f=60121,Z=60122,g=60117,v=60129,b=60131;if("function"==typeof Symbol&&Symbol.for){var y=Symbol.for;n=y("react.element"),r=y("react.portal"),o=y("react.fragment"),a=y("react.strict_mode"),i=y("react.profiler"),s=y("react.provider"),c=y("react.context"),l=y("react.forward_ref"),d=y("react.suspense"),u=y("react.suspense_list"),m=y("react.memo"),p=y("react.lazy"),f=y("react.block"),Z=y("react.server.block"),g=y("react.fundamental"),v=y("react.debug_trace_mode"),b=y("react.legacy_hidden")}function h(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case o:case i:case a:case d:case u:return e;default:switch(e=e&&e.$$typeof){case c:case l:case p:case m:case s:return e;default:return t}}case r:return t}}}},4162:function(e,t,n){n(4817)},6162:function(e,t,n){n.r(t),n.d(t,{default:function(){return ue}});var r=n(7294),o=n(156),a=n(9211),i=n(3427),s=n(1245),c=n(5774),l=n(4038),d=n(1531),u=(n(4162),n(5505)),m=n(9408),p=n(8348),f=n(2371),Z=n(9308),g=(n(5697),n(7663)),v=n(2067),b=n(5893),y=(0,v.Z)((0,b.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),h=n(1919),x=(0,p.ZP)(h.Z,{skipSx:!0})((function(e){var t=e.theme;return(0,l.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,l.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,l.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,g._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,g._4)(t.palette.grey[600],.12)})})})),S=(0,p.ZP)(y)({width:24,height:16});var C=function(e){var t=e;return(0,b.jsx)("li",{children:(0,b.jsx)(x,(0,l.Z)({focusRipple:!0},e,{ownerState:t,children:(0,b.jsx)(S,{ownerState:t})}))})},w=n(8416),E=n(2194);function k(e){return(0,w.Z)("MuiBreadcrumbs",e)}var P=(0,E.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),R=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],I=(0,p.ZP)(Z.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,c.Z)({},"& .".concat(P.li),t.li),t.root]}})({}),M=(0,p.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),N=(0,p.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function A(e,t,n,r){return e.reduce((function(o,a,i){return i<e.length-1?o=o.concat(a,(0,b.jsx)(N,{"aria-hidden":!0,className:t,ownerState:r,children:n},"separator-".concat(i))):o.push(a),o}),[])}var L=r.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiBreadcrumbs"}),o=n.children,a=n.className,c=n.component,p=void 0===c?"nav":c,Z=n.expandText,g=void 0===Z?"Show path":Z,v=n.itemsAfterCollapse,y=void 0===v?1:v,h=n.itemsBeforeCollapse,x=void 0===h?1:h,S=n.maxItems,w=void 0===S?8:S,E=n.separator,P=void 0===E?"/":E,N=(0,d.Z)(n,R),L=r.useState(!1),j=(0,s.Z)(L,2),T=j[0],G=j[1],B=(0,l.Z)({},n,{component:p,expanded:T,expandText:g,itemsAfterCollapse:y,itemsBeforeCollapse:x,maxItems:w,separator:P}),F=function(e){var t=e.classes;return(0,m.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,t)}(B),V=r.useRef(null),_=r.Children.toArray(o).filter((function(e){return r.isValidElement(e)})).map((function(e,t){return(0,b.jsx)("li",{className:F.li,children:e},"child-".concat(t))}));return(0,b.jsx)(I,(0,l.Z)({ref:t,component:p,color:"text.secondary",className:(0,u.Z)(F.root,a),ownerState:B},N,{children:(0,b.jsx)(M,{className:F.ol,ref:V,ownerState:B,children:A(T||w&&_.length<=w?_:function(e){return x+y>=e.length?e:[].concat((0,i.Z)(e.slice(0,x)),[(0,b.jsx)(C,{"aria-label":g,onClick:function(){G(!0);var e=V.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,i.Z)(e.slice(e.length-y,e.length)))}(_),F.separator,P,B)})}))})),j=n(5616),T=n(9644),G=n(2234),B=n(3128),F=n(4026),V=n(5973),_=n(8267);function D(e){return(0,w.Z)("MuiListItem",e)}var O=(0,E.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var z=(0,E.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function q(e){return(0,w.Z)("MuiListItemSecondaryAction",e)}(0,E.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var $=["className"],W=(0,p.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,l.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),H=r.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiListItemSecondaryAction"}),o=n.className,a=(0,d.Z)(n,$),i=r.useContext(_.Z),s=(0,l.Z)({},n,{disableGutters:i.disableGutters}),c=function(e){var t=e.disableGutters,n=e.classes,r={root:["root",t&&"disableGutters"]};return(0,m.Z)(r,q,n)}(s);return(0,b.jsx)(W,(0,l.Z)({className:(0,u.Z)(c.root,o),ownerState:s,ref:t},a))}));H.muiName="ListItemSecondaryAction";var Y=H,J=["className"],K=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],Q=(0,p.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,l.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!r.disablePadding&&(0,l.Z)({paddingTop:8,paddingBottom:8},r.dense&&{paddingTop:4,paddingBottom:4},!r.disableGutters&&{paddingLeft:16,paddingRight:16},!!r.secondaryAction&&{paddingRight:48}),!!r.secondaryAction&&(0,c.Z)({},"& > .".concat(z.root),{paddingRight:48}),(t={},(0,c.Z)(t,"&.".concat(O.focusVisible),{backgroundColor:n.palette.action.focus}),(0,c.Z)(t,"&.".concat(O.selected),(0,c.Z)({backgroundColor:(0,g.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(O.focusVisible),{backgroundColor:(0,g.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,c.Z)(t,"&.".concat(O.disabled),{opacity:n.palette.action.disabledOpacity}),t),"flex-start"===r.alignItems&&{alignItems:"flex-start"},r.divider&&{borderBottom:"1px solid ".concat(n.palette.divider),backgroundClip:"padding-box"},r.button&&(0,c.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:n.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(O.selected,":hover"),{backgroundColor:(0,g.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,g.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),r.hasSecondaryAction&&{paddingRight:48})})),U=(0,p.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),X=r.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiListItem"}),o=n.alignItems,a=void 0===o?"center":o,i=n.autoFocus,s=void 0!==i&&i,c=n.button,p=void 0!==c&&c,Z=n.children,g=n.className,v=n.component,y=n.components,x=void 0===y?{}:y,S=n.componentsProps,C=void 0===S?{}:S,w=n.ContainerComponent,E=void 0===w?"li":w,k=n.ContainerProps,P=(k=void 0===k?{}:k).className,R=n.dense,I=void 0!==R&&R,M=n.disabled,N=void 0!==M&&M,A=n.disableGutters,L=void 0!==A&&A,j=n.disablePadding,T=void 0!==j&&j,z=n.divider,q=void 0!==z&&z,$=n.focusVisibleClassName,W=n.secondaryAction,H=n.selected,X=void 0!==H&&H,ee=(0,d.Z)(n.ContainerProps,J),te=(0,d.Z)(n,K),ne=r.useContext(_.Z),re={dense:I||ne.dense||!1,alignItems:a,disableGutters:L},oe=r.useRef(null);(0,F.Z)((function(){s&&oe.current&&oe.current.focus()}),[s]);var ae=r.Children.toArray(Z),ie=ae.length&&(0,B.Z)(ae[ae.length-1],["ListItemSecondaryAction"]),se=(0,l.Z)({},n,{alignItems:a,autoFocus:s,button:p,dense:re.dense,disabled:N,disableGutters:L,disablePadding:T,divider:q,hasSecondaryAction:ie,selected:X}),ce=function(e){var t=e.alignItems,n=e.button,r=e.classes,o=e.dense,a=e.disabled,i={root:["root",o&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",a&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,m.Z)(i,D,r)}(se),le=(0,V.Z)(oe,t),de=x.Root||Q,ue=C.root||{},me=(0,l.Z)({className:(0,u.Z)(ce.root,ue.className,g),disabled:N},te),pe=v||"li";return p&&(me.component=v||"div",me.focusVisibleClassName=(0,u.Z)(O.focusVisible,$),pe=h.Z),ie?(pe=me.component||v?pe:"div","li"===E&&("li"===pe?pe="div":"li"===me.component&&(me.component="div")),(0,b.jsx)(_.Z.Provider,{value:re,children:(0,b.jsxs)(U,(0,l.Z)({as:E,className:(0,u.Z)(ce.container,P),ref:le,ownerState:se},ee,{children:[(0,b.jsx)(de,(0,l.Z)({},ue,!(0,G.Z)(de)&&{as:pe,ownerState:(0,l.Z)({},se,ue.ownerState)},me,{children:ae})),ae.pop()]}))})):(0,b.jsx)(_.Z.Provider,{value:re,children:(0,b.jsxs)(de,(0,l.Z)({},ue,{as:pe,ref:le,ownerState:se},!(0,G.Z)(de)&&{ownerState:(0,l.Z)({},se,ue.ownerState)},me,{children:[ae,W&&(0,b.jsx)(Y,{children:W})]}))})})),ee=n(8041),te=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],ne=(0,p.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,c.Z)({},"& .".concat(ee.Z.primary),t.primary),(0,c.Z)({},"& .".concat(ee.Z.secondary),t.secondary),t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,l.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),re=r.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiListItemText"}),o=n.children,a=n.className,i=n.disableTypography,s=void 0!==i&&i,c=n.inset,p=void 0!==c&&c,g=n.primary,v=n.primaryTypographyProps,y=n.secondary,h=n.secondaryTypographyProps,x=(0,d.Z)(n,te),S=r.useContext(_.Z).dense,C=null!=g?g:o,w=y,E=(0,l.Z)({},n,{disableTypography:s,inset:p,primary:!!C,secondary:!!w,dense:S}),k=function(e){var t=e.classes,n=e.inset,r=e.primary,o=e.secondary,a={root:["root",n&&"inset",e.dense&&"dense",r&&o&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,m.Z)(a,ee.L,t)}(E);return null==C||C.type===Z.Z||s||(C=(0,b.jsx)(Z.Z,(0,l.Z)({variant:S?"body2":"body1",className:k.primary,component:"span",display:"block"},v,{children:C}))),null==w||w.type===Z.Z||s||(w=(0,b.jsx)(Z.Z,(0,l.Z)({variant:"body2",className:k.secondary,color:"text.secondary",display:"block"},h,{children:w}))),(0,b.jsxs)(ne,(0,l.Z)({className:(0,u.Z)(k.root,a),ownerState:E,ref:t},x,{children:[C,w]}))})),oe=n(7198),ae=n(5444),ie=n(6190),se=function(e){var t=e.children||e.href;return"_blank"===e.target?r.createElement(ie.Z,Object.assign({},e,{rel:"noopener noreferrer"}),t):/^(http:|https:)?\/\/.+$/.test(e.href)?r.createElement(ie.Z,e,t):r.createElement(ie.Z,Object.assign({},e,{onClick:function(t){t.preventDefault(),(0,ae.navigate)(e.href)}}),t)},ce=n(1139),le=(0,o.ZP)((function(){return n.e(610).then(n.bind(n,5610))})),de=function(e){var t=e.children;return r.createElement(Z.Z,{variant:"h2",my:6,textAlign:"left"},t)},ue=function(e){var t=e.location;return r.createElement(oe.Z,{location:t,title:"プライバシーポリシー"},r.createElement(a.Z,{component:"section",py:5,sx:{backgroundAttachment:"fixed",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundImage:"url("+ce.Z+")",backgroundSize:"cover"}},r.createElement(j.Z,null,r.createElement(L,{"aria-label":"breadcrumb",bgcolor:"#fff",mb:4,px:5,py:2},r.createElement(se,{underline:"hover",href:"/"},"トップページ"),r.createElement(Z.Z,null,"プライバシーポリシー ",r.createElement("small",null,"(Privacy Policy)"))),r.createElement(a.Z,{p:5,bgcolor:"#fff"},r.createElement(a.Z,{mb:5},r.createElement(Z.Z,{variant:"h1",mb:1,textAlign:"center"},"Privacy Policy"),r.createElement(Z.Z,{textAlign:"center"},"プライバシーポリシー")),r.createElement(Z.Z,null,"ダルマ株式会社（以下「当社」という）は不動産、マンションなどの共同住戸、家屋などの売買及び管理業務等の事業を行っております。",r.createElement("br",null),"当社サービスにおいて、お客様個人に関する情報（以下「個人情報」と言います）をお預かりするにあたり、個人情報を大切に保護することを企業の重要な社会的使命と認識し、役員はじめ役職員すべてが個人情報保護に関する法令、国が定める指針およびその他の規範を遵守いたします。"),r.createElement(de,null,"当社方針"),r.createElement(Z.Z,{my:2},"1. お客様から個人情報を収集させていただく場合は、目的を明確にしたうえ目的の範囲内にて収集し、利用についてはその目的から逸脱しない範囲で利用いたします。"),r.createElement(Z.Z,{my:2},"2. 当社は、取扱う個人情報（特定個人情報を含む）の全てにおき個人情報の取扱いに関する法令、国が定める指針及びその他の規範を遵守いたします。"),r.createElement(Z.Z,{my:2},"3. お客様の個人情報は適切な方法で厳重に管理し、正確かつ最新の状態に保ち個人情報への不正アクセス、紛失、破壊、改ざん及び漏えい等の防止に努め、お客様の承諾なく第三者に開示・提示することはありません。但し、お客様個人を特定・選別できない方法で利用する場合、利用目的を達成する為、弊社との間で機密保持(守秘義務)を締結した企業(業務委託など)において必要最低限の範囲で利用する場合、人の生命・身体または財産の保護のために必要な場合であって緊急の場合、金融機関等との間でお客様の入出金等の業務上必要となる最低限の範囲で使用する場合、法令上守秘義務を課せられた裁判所や政府系機関などから開示依頼があった場合を除く。"),r.createElement(Z.Z,{my:2},"4. お客様がお客様の個人情報の確認・訂正等を希望される場合には、お客様に対する弊社各窓口までご連絡いただければ、合理的な範囲内で速やかに対応させていただきます。"),r.createElement(Z.Z,{my:2},"5. 個人情報の利用は、収集目的の範囲内で、具体的な業務に応じ権限を与えられた者のみが、業務の遂行上必要な限りにおいて行うものとします。",r.createElement("br",null),"当社ではお客様から収集した個人情報を、以下の目的のために利用させていただきます。",r.createElement(T.Z,null,["不動産の売買、賃貸、仲介に関する契約等の履行","上記事業に関する情報・サービス等の提供や営業・提案活動（電話でのご連絡、電子メール又はダイレクトメール配信、資料請求者への資料送付、希望物件のご連絡等）","商品・サービス等の改善・企画・開発を行うためのアンケート調査活動および調査分析","その他、前各号に附帯・関連する事項のため"].map((function(e,t){return r.createElement(X,{key:t,sx:{py:0}},r.createElement(re,null,"- ",e))})))),r.createElement(Z.Z,{my:2},"6. 弊社が保有する個人情報に関しては、法令に基づき規範を厳守し、保護活動に取り組み維持、改善してまいります。"),r.createElement(de,null,"利用目的"),r.createElement(Z.Z,{my:2},"- 本ウェブサイトの利用状況を分析し、ウェブサイトの機能改善や表示内容の最適化を行うため。"),r.createElement(Z.Z,{my:2},"- 個人を識別できない状態で統計資料として、マーケティング・調査・研究に利用するため。"),r.createElement(Z.Z,{my:2},"- お問い合わせフォームから送信された情報を組み合わせることで、当社に関わるご案内をメールやお電話等で行うため。"),r.createElement(de,null,"クッキーの設定と拒否"),r.createElement(Z.Z,{my:2},"- 本サイトでは、アクセス解析ツール「Google アナリティクス」を利用しています。これらのツールによってお客様のウェブブラウザにクッキーを送信し、その情報を利用します。"),r.createElement(Z.Z,{my:2},"- Google によるクッキー情報の取得方法、利用方法については「ユーザーが Google パートナーのサイトやアプリを使用する際の Google によるデータ使用（",r.createElement(se,{href:"https://policies.google.com/technologies/partner-sites",target:"_blank"}),"）」、「Google アナリティクス利用規約（",r.createElement(se,{href:"https://policies.google.com/terms",target:"_blank"}),"）」、「Google のプライバシーポリシー」をご確認ください。"),r.createElement(Z.Z,{my:2},"- お客様はお使いのウェブブラウザの設定を変更することで、クッキー情報の利用を拒否することができます。"),r.createElement(Z.Z,{my:2},"- 当社は、当社が保有する個人情報について、お客様ご本人からの開示・訂正等のご請求があった場合は、適切に対応いたします。ご請求の方法につきましては、下記窓口までお問い合わせください。"),r.createElement(a.Z,{component:"address",mt:5},r.createElement(T.Z,null,["ダルマ株式会社","〒151-0051","東京都渋谷区千駄ヶ谷2-10-5","宅建業免許番号 東京都知事（1）第105391号"].map((function(e,t){return r.createElement(X,{key:t,sx:{py:0}},r.createElement(re,null,e))}))))))),r.createElement(le,null))}}}]);
//# sourceMappingURL=component---src-pages-privacy-js-76c6f3abbfa8604e999a.js.map