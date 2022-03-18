"use strict";(self.webpackChunkcorporate=self.webpackChunkcorporate||[]).push([[838],{9612:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(7462),r=(t(7294),t(3431)),o=t(5893);function i(e){var n=e.styles,t=e.defaultTheme,a=void 0===t?{}:t,i="function"==typeof n?function(e){return n(null==(t=e)||0===Object.keys(t).length?a:e);var t}:n;return(0,o.jsx)(r.xB,{styles:i})}var c=t(9552);var l=function(e){return(0,o.jsx)(i,(0,a.Z)({},e,{defaultTheme:c.Z}))}},4320:function(e,n,t){t.d(n,{ZP:function(){return S}});var a=t(2982),r=t(4942),o=t(3366),i=t(7462),c=t(7294),l=t(5505),s=t(2692),u=t(8297),d=t(9408),m=t(8348),g=t(2371);var p=c.createContext(),f=t(8416);function v(e){return(0,f.Z)("MuiGrid",e)}var x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],Z=(0,t(2194).Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,a.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),(0,a.Z)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),(0,a.Z)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),(0,a.Z)(x.map((function(e){return"grid-xs-".concat(e)}))),(0,a.Z)(x.map((function(e){return"grid-sm-".concat(e)}))),(0,a.Z)(x.map((function(e){return"grid-md-".concat(e)}))),(0,a.Z)(x.map((function(e){return"grid-lg-".concat(e)}))),(0,a.Z)(x.map((function(e){return"grid-xl-".concat(e)}))))),h=t(5893),y=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function b(e){var n=parseFloat(e);return"".concat(n).concat(String(e).replace(String(n),"")||"px")}function M(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[t["spacing-xs-".concat(String(e))]||"spacing-xs-".concat(String(e))];var a=e.xs,r=e.sm,o=e.md,i=e.lg,c=e.xl;return[Number(a)>0&&(t["spacing-xs-".concat(String(a))]||"spacing-xs-".concat(String(a))),Number(r)>0&&(t["spacing-sm-".concat(String(r))]||"spacing-sm-".concat(String(r))),Number(o)>0&&(t["spacing-md-".concat(String(o))]||"spacing-md-".concat(String(o))),Number(i)>0&&(t["spacing-lg-".concat(String(i))]||"spacing-lg-".concat(String(i))),Number(c)>0&&(t["spacing-xl-".concat(String(c))]||"spacing-xl-".concat(String(c)))]}var k=(0,m.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState,r=t.container,o=t.direction,i=t.item,c=t.lg,l=t.md,s=t.sm,u=t.spacing,d=t.wrap,m=t.xl,g=t.xs,p=t.zeroMinWidth;return[n.root,r&&n.container,i&&n.item,p&&n.zeroMinWidth].concat((0,a.Z)(M(u,r,n)),["row"!==o&&n["direction-xs-".concat(String(o))],"wrap"!==d&&n["wrap-xs-".concat(String(d))],!1!==g&&n["grid-xs-".concat(String(g))],!1!==s&&n["grid-sm-".concat(String(s))],!1!==l&&n["grid-md-".concat(String(l))],!1!==c&&n["grid-lg-".concat(String(c))],!1!==m&&n["grid-xl-".concat(String(m))]])}})((function(e){var n=e.ownerState;return(0,i.Z)({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},"wrap"!==n.wrap&&{flexWrap:n.wrap})}),(function(e){var n=e.theme,t=e.ownerState,a=(0,s.P$)({values:t.direction,breakpoints:n.breakpoints.values});return(0,s.k9)({theme:n},a,(function(e){var n={flexDirection:e};return 0===e.indexOf("column")&&(n["& > .".concat(Z.item)]={maxWidth:"none"}),n}))}),(function(e){var n=e.theme,t=e.ownerState,a=t.container,o=t.rowSpacing,i={};if(a&&0!==o){var c=(0,s.P$)({values:o,breakpoints:n.breakpoints.values});i=(0,s.k9)({theme:n},c,(function(e){var t=n.spacing(e);return"0px"!==t?(0,r.Z)({marginTop:"-".concat(b(t))},"& > .".concat(Z.item),{paddingTop:b(t)}):{}}))}return i}),(function(e){var n=e.theme,t=e.ownerState,a=t.container,o=t.columnSpacing,i={};if(a&&0!==o){var c=(0,s.P$)({values:o,breakpoints:n.breakpoints.values});i=(0,s.k9)({theme:n},c,(function(e){var t=n.spacing(e);return"0px"!==t?(0,r.Z)({width:"calc(100% + ".concat(b(t),")"),marginLeft:"-".concat(b(t))},"& > .".concat(Z.item),{paddingLeft:b(t)}):{}}))}return i}),(function(e){var n,t=e.theme,a=e.ownerState;return t.breakpoints.keys.reduce((function(e,r){var o={};if(a[r]&&(n=a[r]),!n)return e;if(!0===n)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,s.P$)({values:a.columns,breakpoints:t.breakpoints.values}),l="object"==typeof c?c[r]:c;if(null==l)return e;var u="".concat(Math.round(n/l*1e8)/1e6,"%"),d={};if(a.container&&a.item&&0!==a.columnSpacing){var m=t.spacing(a.columnSpacing);if("0px"!==m){var g="calc(".concat(u," + ").concat(b(m),")");d={flexBasis:g,maxWidth:g}}}o=(0,i.Z)({flexBasis:u,flexGrow:0,maxWidth:u},d)}return 0===t.breakpoints.values[r]?Object.assign(e,o):e[t.breakpoints.up(r)]=o,e}),{})})),S=c.forwardRef((function(e,n){var t=(0,g.Z)({props:e,name:"MuiGrid"}),r=(0,u.Z)(t),s=r.className,m=r.columns,f=r.columnSpacing,x=r.component,Z=void 0===x?"div":x,b=r.container,S=void 0!==b&&b,w=r.direction,N=void 0===w?"row":w,T=r.item,I=void 0!==T&&T,E=r.lg,L=void 0!==E&&E,D=r.md,j=void 0!==D&&D,C=r.rowSpacing,z=r.sm,R=void 0!==z&&z,A=r.spacing,W=void 0===A?0:A,O=r.wrap,H=void 0===O?"wrap":O,P=r.xl,Y=void 0!==P&&P,G=r.xs,B=void 0!==G&&G,F=r.zeroMinWidth,Q=void 0!==F&&F,K=(0,o.Z)(r,y),U=C||W,J=f||W,X=c.useContext(p),V=S?m||12:X,_=(0,i.Z)({},r,{columns:V,container:S,direction:N,item:I,lg:L,md:j,sm:R,rowSpacing:U,columnSpacing:J,wrap:H,xl:Y,xs:B,zeroMinWidth:Q}),q=function(e){var n=e.classes,t=e.container,r=e.direction,o=e.item,i=e.lg,c=e.md,l=e.sm,s=e.spacing,u=e.wrap,m=e.xl,g=e.xs,p={root:["root",t&&"container",o&&"item",e.zeroMinWidth&&"zeroMinWidth"].concat((0,a.Z)(M(s,t)),["row"!==r&&"direction-xs-".concat(String(r)),"wrap"!==u&&"wrap-xs-".concat(String(u)),!1!==g&&"grid-xs-".concat(String(g)),!1!==l&&"grid-sm-".concat(String(l)),!1!==c&&"grid-md-".concat(String(c)),!1!==i&&"grid-lg-".concat(String(i)),!1!==m&&"grid-xl-".concat(String(m))])};return(0,d.Z)(p,v,n)}(_);return(0,h.jsx)(p.Provider,{value:V,children:(0,h.jsx)(k,(0,i.Z)({ownerState:_,className:(0,l.Z)(q.root,s),as:Z,ref:n},K))})}))},6190:function(e,n,t){t.d(n,{Z:function(){return w}});var a=t(885),r=t(4942),o=t(3366),i=t(7462),c=t(7294),l=t(5505),s=t(9408),u=t(5535),d=t(7663),m=t(9240),g=t(8348),p=t(2371),f=t(93),v=t(5973),x=t(9308),Z=t(8416);function h(e){return(0,Z.Z)("MuiLink",e)}var y=(0,t(2194).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),b=t(5893),M=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=(0,g.ZP)(x.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["underline".concat((0,m.Z)(t.underline))],"button"===t.component&&n.button]}})((function(e){var n=e.theme,t=e.ownerState,a=(0,u.D)(n,"palette.".concat(function(e){return k[e]||e}(t.color)))||t.color;return(0,i.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==a?(0,d.Fq)(a,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===t.component&&(0,r.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(y.focusVisible),{outline:"auto"}))})),w=c.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiLink"}),r=t.className,u=t.color,d=void 0===u?"primary":u,g=t.component,x=void 0===g?"a":g,Z=t.onBlur,y=t.onFocus,k=t.TypographyClasses,w=t.underline,N=void 0===w?"always":w,T=t.variant,I=void 0===T?"inherit":T,E=(0,o.Z)(t,M),L=(0,f.Z)(),D=L.isFocusVisibleRef,j=L.onBlur,C=L.onFocus,z=L.ref,R=c.useState(!1),A=(0,a.Z)(R,2),W=A[0],O=A[1],H=(0,v.Z)(n,z),P=(0,i.Z)({},t,{color:d,component:x,focusVisible:W,underline:N,variant:I}),Y=function(e){var n=e.classes,t=e.component,a=e.focusVisible,r=e.underline,o={root:["root","underline".concat((0,m.Z)(r)),"button"===t&&"button",a&&"focusVisible"]};return(0,s.Z)(o,h,n)}(P);return(0,b.jsx)(S,(0,i.Z)({className:(0,l.Z)(Y.root,r),classes:k,color:d,component:x,onBlur:function(e){j(e),!1===D.current&&O(!1),Z&&Z(e)},onFocus:function(e){C(e),!0===D.current&&O(!0),y&&y(e)},ref:H,ownerState:P,variant:I},E))}))},2664:function(e,n,t){t.d(n,{Z:function(){return x}});var a=t(3366),r=t(7462),o=t(7294),i=t(5505),c=t(9408),l=t(694),s=t(2371),u=t(8348),d=t(8416);function m(e){return(0,d.Z)("MuiTable",e)}(0,t(2194).Z)("MuiTable",["root","stickyHeader"]);var g=t(5893),p=["className","component","padding","size","stickyHeader"],f=(0,u.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.stickyHeader&&n.stickyHeader]}})((function(e){var n=e.theme,t=e.ownerState;return(0,r.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,r.Z)({},n.typography.body2,{padding:n.spacing(2),color:n.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})})),v="table",x=o.forwardRef((function(e,n){var t=(0,s.Z)({props:e,name:"MuiTable"}),u=t.className,d=t.component,x=void 0===d?v:d,Z=t.padding,h=void 0===Z?"normal":Z,y=t.size,b=void 0===y?"medium":y,M=t.stickyHeader,k=void 0!==M&&M,S=(0,a.Z)(t,p),w=(0,r.Z)({},t,{component:x,padding:h,size:b,stickyHeader:k}),N=function(e){var n=e.classes,t={root:["root",e.stickyHeader&&"stickyHeader"]};return(0,c.Z)(t,m,n)}(w),T=o.useMemo((function(){return{padding:h,size:b,stickyHeader:k}}),[h,b,k]);return(0,g.jsx)(l.Z.Provider,{value:T,children:(0,g.jsx)(f,(0,r.Z)({as:x,role:x===v?null:"table",ref:n,className:(0,i.Z)(N.root,u),ownerState:w},S))})}))},694:function(e,n,t){var a=t(7294).createContext();n.Z=a},473:function(e,n,t){var a=t(7294).createContext();n.Z=a},7783:function(e,n,t){t.d(n,{Z:function(){return Z}});var a=t(7462),r=t(3366),o=t(7294),i=t(5505),c=t(9408),l=t(473),s=t(2371),u=t(8348),d=t(8416);function m(e){return(0,d.Z)("MuiTableBody",e)}(0,t(2194).Z)("MuiTableBody",["root"]);var g=t(5893),p=["className","component"],f=(0,u.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,n){return n.root}})({display:"table-row-group"}),v={variant:"body"},x="tbody",Z=o.forwardRef((function(e,n){var t=(0,s.Z)({props:e,name:"MuiTableBody"}),o=t.className,u=t.component,d=void 0===u?x:u,Z=(0,r.Z)(t,p),h=(0,a.Z)({},t,{component:d}),y=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},m,n)}(h);return(0,g.jsx)(l.Z.Provider,{value:v,children:(0,g.jsx)(f,(0,a.Z)({className:(0,i.Z)(y.root,o),as:d,ref:n,role:d===x?null:"rowgroup",ownerState:h},Z))})}))},943:function(e,n,t){t.d(n,{Z:function(){return b}});var a=t(4942),r=t(3366),o=t(7462),i=t(7294),c=t(5505),l=t(9408),s=t(7663),u=t(9240),d=t(694),m=t(473),g=t(2371),p=t(8348),f=t(8416);function v(e){return(0,f.Z)("MuiTableCell",e)}var x=(0,t(2194).Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),Z=t(5893),h=["align","className","component","padding","scope","size","sortDirection","variant"],y=(0,p.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],n["size".concat((0,u.Z)(t.size))],"normal"!==t.padding&&n["padding".concat((0,u.Z)(t.padding))],"inherit"!==t.align&&n["align".concat((0,u.Z)(t.align))],t.stickyHeader&&n.stickyHeader]}})((function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({},n.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===n.palette.mode?(0,s.$n)((0,s.Fq)(n.palette.divider,1),.88):(0,s._j)((0,s.Fq)(n.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===t.variant&&{color:n.palette.text.primary,lineHeight:n.typography.pxToRem(24),fontWeight:n.typography.fontWeightMedium},"body"===t.variant&&{color:n.palette.text.primary},"footer"===t.variant&&{color:n.palette.text.secondary,lineHeight:n.typography.pxToRem(21),fontSize:n.typography.pxToRem(12)},"small"===t.size&&(0,a.Z)({padding:"6px 16px"},"&.".concat(x.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:n.palette.background.default})})),b=i.forwardRef((function(e,n){var t,a=(0,g.Z)({props:e,name:"MuiTableCell"}),s=a.align,p=void 0===s?"inherit":s,f=a.className,x=a.component,b=a.padding,M=a.scope,k=a.size,S=a.sortDirection,w=a.variant,N=(0,r.Z)(a,h),T=i.useContext(d.Z),I=i.useContext(m.Z),E=I&&"head"===I.variant;t=x||(E?"th":"td");var L=M;!L&&E&&(L="col");var D=w||I&&I.variant,j=(0,o.Z)({},a,{align:p,component:t,padding:b||(T&&T.padding?T.padding:"normal"),size:k||(T&&T.size?T.size:"medium"),sortDirection:S,stickyHeader:"head"===D&&T&&T.stickyHeader,variant:D}),C=function(e){var n=e.classes,t=e.variant,a=e.align,r=e.padding,o=e.size,i={root:["root",t,e.stickyHeader&&"stickyHeader","inherit"!==a&&"align".concat((0,u.Z)(a)),"normal"!==r&&"padding".concat((0,u.Z)(r)),"size".concat((0,u.Z)(o))]};return(0,l.Z)(i,v,n)}(j),z=null;return S&&(z="asc"===S?"ascending":"descending"),(0,Z.jsx)(y,(0,o.Z)({as:t,ref:n,className:(0,c.Z)(C.root,f),"aria-sort":z,scope:L,ownerState:j},N))}))},5319:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(7462),r=t(3366),o=t(7294),i=t(5505),c=t(9408),l=t(2371),s=t(8348),u=t(8416);function d(e){return(0,u.Z)("MuiTableContainer",e)}(0,t(2194).Z)("MuiTableContainer",["root"]);var m=t(5893),g=["className","component"],p=(0,s.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,n){return n.root}})({width:"100%",overflowX:"auto"}),f=o.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiTableContainer"}),o=t.className,s=t.component,u=void 0===s?"div":s,f=(0,r.Z)(t,g),v=(0,a.Z)({},t,{component:u}),x=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},d,n)}(v);return(0,m.jsx)(p,(0,a.Z)({ref:n,as:u,className:(0,i.Z)(x.root,o),ownerState:v},f))}))},3182:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(4942),r=t(7462),o=t(3366),i=t(7294),c=t(5505),l=t(9408),s=t(7663),u=t(473),d=t(2371),m=t(8348),g=t(8416);function p(e){return(0,g.Z)("MuiTableRow",e)}var f=(0,t(2194).Z)("MuiTableRow",["root","selected","hover","head","footer"]),v=t(5893),x=["className","component","hover","selected"],Z=(0,m.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.head&&n.head,t.footer&&n.footer]}})((function(e){var n,t=e.theme;return n={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},(0,a.Z)(n,"&.".concat(f.hover,":hover"),{backgroundColor:t.palette.action.hover}),(0,a.Z)(n,"&.".concat(f.selected),{backgroundColor:(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}),n})),h=i.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiTableRow"}),a=t.className,s=t.component,m=void 0===s?"tr":s,g=t.hover,f=void 0!==g&&g,h=t.selected,y=void 0!==h&&h,b=(0,o.Z)(t,x),M=i.useContext(u.Z),k=(0,r.Z)({},t,{component:m,hover:f,selected:y,head:M&&"head"===M.variant,footer:M&&"footer"===M.variant}),S=function(e){var n=e.classes,t={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return(0,l.Z)(t,p,n)}(k);return(0,v.jsx)(Z,(0,r.Z)({as:m,ref:n,className:(0,c.Z)(S.root,a),role:"tr"===m?null:"row",ownerState:k},b))}))},5668:function(e,n,t){t.d(n,{Z:function(){return g}});var a=t(7294),r=t(7462),o=t(5793),i=t(1758),c="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",l=t(5893);var s=function(e){var n=e.children,t=e.theme,s=(0,i.Z)(),u=a.useMemo((function(){var e=null===s?t:function(e,n){return"function"==typeof n?n(e):(0,r.Z)({},e,n)}(s,t);return null!=e&&(e[c]=null!==s),e}),[t,s]);return(0,l.jsx)(o.Z.Provider,{value:u,children:n})},u=t(4043),d=t(8377);function m(e){var n=(0,d.Z)();return(0,l.jsx)(u.T.Provider,{value:"object"==typeof n?n:{},children:e.children})}var g=function(e){var n=e.children,t=e.theme;return(0,l.jsx)(s,{theme:t,children:(0,l.jsx)(m,{children:n})})}},5008:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var a,r=t(7294),o=t(5414),i=t(1597),c=t(9339),l=t(559),s=t(5668),u=t(9612),d=t(9211),m=t(5616),g=t(4320),p=t(6190),f=t(2664),v=t(7783),x=t(943),Z=t(5319),h=t(3182),y=t(9308),b=t.p+"static/character-01-180x492-aafbd8f548caec734301ef719b67d141.png",M=t.p+"static/icon-670x560-e2fda9f21511ad6ddc146afb9b305982.png",k=[{uuid:"ea4a1c2a-58ff-4b93-9f6c-36f96436381d",image:M,role:"営業",name:"杉岡 邦昭",name_en:"Kuniaki Sugioka",contacts:[{key:"電話番号",value:"080-7231-9777",link:"tel:080-7231-9777"},{key:"メール",value:"sugioka@daruma-inv.com",link:"mailto:sugioka@daruma-inv.com"}],message:"仕入・開発と携わっておりますので不動産の入口から出口まで多岐にわたりご提案・問題解決が出来ると思います。",infos:[{key:"出身地",value:"福岡県"},{key:"趣味・特技",value:"剣道・ゴルフ"},{key:"保有資格",value:"宅地建物取引士"},{key:"座右の銘",value:"選択と集中そして決断"},{key:"尊敬する人",value:"父親"}]},{uuid:"7dda53bf-57cb-4ce9-b874-fbc69783b6b6",image:M,role:"営業",name:"細谷 拓己",name_en:"Takumi Hosoya",contacts:[{key:"電話番号",value:"080-7231-9860",link:"tel:080-7231-9860"},{key:"メール",value:"hosoya@daruma-inv.com",link:"mailto:hosoya@daruma-inv.com"}],message:"お客様からのご紹介でのみ営業活動を行なっており「誰かに自慢したくなる営業マン」を理想に「誰かに自慢したくなる不動産」をご提案させていただきます。",infos:[{key:"出身地",value:"静岡県熱海市"},{key:"趣味・特技",value:"野球・ゴルフ・スポーツ観戦"},{key:"保有資格",value:"投資不動産取引士"},{key:"座右の銘",value:"未練とご飯は残さない"},{key:"尊敬する人",value:"イチロー選手"}]},{uuid:"27735f02-92bb-4df1-8dde-ee1599987c49",image:M,role:"営業",name:"三日月 祐亮",name_en:"Yusuke Mikazuki",contacts:[{key:"メール",value:"mikazuki@daruma-inv.com",link:"mailto:mikazuki@daruma-inv.com"}],message:"",infos:[{key:"出身地",value:"滋賀県"},{key:"保有資格",value:"投資不動産取引士"}]},{uuid:"31154cf8-a69f-43da-b225-167377f9f023",image:M,role:"営業",name:"菅野 史仁",name_en:"Fumihito Kanno",contacts:[{key:"電話番号",value:"080-7231-9804",link:"tel:080-7231-9804"},{key:"メール",value:"kanno@daruma-inv.com",link:"mailto:kanno@daruma-inv.com"}],message:"お客様皆様に寄り添い、多くの時間共有と傾聴・承認し、資産運用の方向性を導き出します",infos:[{key:"出身地",value:"神奈川県"},{key:"趣味・特技",value:"ゴルフ・お酒・サッカー"},{key:"保有資格",value:"投資不動産取引士"},{key:"座右の銘",value:"寄り添い・傾聴・承認・継続する"},{key:"尊敬する人",value:"古畑任三郎（田村正和）"}]}],S=function(e){return k.find((function(n){return n.uuid===e}))},w=["Noto Sans JP","Helvetica Neue","Arial","Hiragino Kaku Gothic ProN","Hiragino Sans","Meiryo","sans-serif"].map((function(e){return'"'+e+'"'})).join(","),N="#ef8468",T=(0,l.Z)({palette:{primary:{main:N}},typography:{fontFamily:w,h3:{color:"#403939",fontFamily:w,fontSize:24,lineHeight:"36px",fontWeight:"bold"},body1:{fontFamily:w,fontSize:16,lineHeight:"30px"}}});T.typography.h2=((a={color:N,fontFamily:w,fontSize:28,lineHeight:"42px",fontWeight:"bold"})[T.breakpoints.up("sm")]={fontSize:32},a);var I=function(e){var n=e.datas;return r.createElement(Z.Z,null,r.createElement(f.Z,null,r.createElement(v.Z,null,n.map((function(e,n){var t=e.key,a=e.value,o=e.link;return r.createElement(h.Z,{key:n},r.createElement(x.Z,{sx:{p:0}},r.createElement(y.Z,{fontWeight:"bold"},t)),r.createElement(x.Z,null,o?r.createElement(p.Z,{href:o,color:"primary"},r.createElement(y.Z,{color:"primary"},a)):r.createElement(y.Z,null,a)))})))))},E=function(){var e=(0,c.Wd)("uuid",c.Zp)[0],n=(0,r.useState)("init"),t=n[0],a=n[1];return(0,r.useEffect)((function(){a(S(e))}),[e]),"init"===t?r.createElement("p",null,"Loading..."):void 0===t?((0,i.navigate)("/"),r.createElement(r.Fragment,null)):r.createElement(s.Z,{theme:T},r.createElement(u.Z,{styles:{"*, html, body":{margin:0,padding:0}}}),r.createElement(o.q,null,r.createElement("html",{lang:"ja"}),r.createElement("meta",{"http-equiv":"content-language",content:"ja"}),r.createElement("meta",{name:"robots",content:"noindex"}),r.createElement("meta",{name:"googlebot",content:"notranslate"}),r.createElement("meta",{name:"google",content:"notranslate"}),r.createElement("title",null,"PARTNERS | DARUMA, Inc.")),r.createElement(m.Z,{maxWidth:!1,sx:{bgcolor:"#3c3c3c",px:{xs:0,sm:3,md:4}}},r.createElement(i.Link,{to:"/"},r.createElement(d.Z,{pt:5,sx:{m:{xs:"0 auto 40px",sm:"0 0 0 40px"},width:{xs:54,sm:108},height:{xs:28,sm:56},backgroundImage:"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgiIGhlaWdodD0iNTYuNDE0IiB2aWV3Qm94PSIwIDAgMTA4IDU2LjQxNCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPGcgaWQ9IuOCsOODq+ODvOODl185MiIgZGF0YS1uYW1lPSLjgrDjg6vjg7zjg5cgOTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNi4wMDQgLTc2LjUyKSI+CiAgICA8cGF0aCBpZD0i44OR44K5XzEiIGRhdGEtbmFtZT0i44OR44K5IDEiIGNsYXNzPSJjbHMtMSIgZD0iTTE3OS41MTMsMTM0LjhhMTkuOCwxOS44LDAsMSwxLDE5LjgtMTkuOEExOS44MTksMTkuODE5LDAsMCwxLDE3OS41MTMsMTM0LjhabTAtMzYuNTk1YTE2LjgsMTYuOCwwLDEsMCwxNi44LDE2LjhBMTYuODE2LDE2LjgxNiwwLDAsMCwxNzkuNTEzLDk4LjIwN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NS4zMDYgLTguOTg3KSIvPgogICAgPHBhdGggaWQ9IuODkeOCuV8yIiBkYXRhLW5hbWU9IuODkeOCuSAyIiBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDQuNDIyLDg5LjkyM2E2LjkxNSw2LjkxNSwwLDAsMS02Ljc1Ny03LjEzOCw2LjE2Niw2LjE2NiwwLDAsMSw2LjQyMS02LjI2NWM1LjQ1LDAsNy4yLDUuMzQ0LDQuNjQ3LDguNjA2LDIuOC0uNzgxLDUuMjE0LTMuNjg5LDUuNjE2LTcuNTU4aDIuNTFDMTU2LjIxNyw4NC4xMzIsMTUyLjM4Niw4OS45MjMsMTQ0LjQyMiw4OS45MjNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTQuNjA2IDApIi8+CiAgICA8Y2lyY2xlIGlkPSLmpZXlhoblvaJfMSIgZGF0YS1uYW1lPSLmpZXlhoblvaIgMSIgY2xhc3M9ImNscy0xIiBjeD0iMTIuMzQ0IiBjeT0iMTIuMzQ0IiByPSIxMi4zNDQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMS44NjMgOTMuNTg1KSIvPgogICAgPHJlY3QgaWQ9IumVt+aWueW9ol8yIiBkYXRhLW5hbWU9IumVt+aWueW9oiAyIiBjbGFzcz0iY2xzLTEiIHdpZHRoPSIzLjIyNCIgaGVpZ2h0PSIxNC44ODYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg3LjE2NyAxMjIuNDA4KSByb3RhdGUoLTQ0Ljk5OSkiLz4KICAgIDxwYXRoIGlkPSLjg5HjgrlfMyIgZGF0YS1uYW1lPSLjg5HjgrkgMyIgY2xhc3M9ImNscy0xIiBkPSJNMjYsMTE1YTE5LjgsMTkuOCwwLDEsMSwxOS44LDE5LjhBMTkuODE5LDE5LjgxOSwwLDAsMSwyNiwxMTVabTMsMGExNi44LDE2LjgsMCwxLDAsMTYuOC0xNi44QTE2LjgxNiwxNi44MTYsMCwwLDAsMjksMTE1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtOC45ODcpIi8+CiAgICA8cGF0aCBpZD0i44OR44K5XzQiIGRhdGEtbmFtZT0i44OR44K5IDQiIGNsYXNzPSJjbHMtMSIgZD0iTTEwMC41ODEsODkuOTIzYTYuOTE0LDYuOTE0LDAsMCwwLDYuNzU2LTcuMTM4LDYuMTY2LDYuMTY2LDAsMCwwLTYuNDItNi4yNjVjLTUuNDUsMC03LjIsNS4zNDQtNC42NDcsOC42MDYtMi44LS43ODEtNS4yMTQtMy42ODktNS42MTYtNy41NThoLTIuNTFDODguNzg1LDg0LjEzMiw5Mi42MTYsODkuOTIzLDEwMC41ODEsODkuOTIzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMwLjM4OCAwKSIvPgogICAgPHJlY3QgaWQ9IumVt+aWueW9ol8zIiBkYXRhLW5hbWU9IumVt+aWueW9oiAzIiBjbGFzcz0iY2xzLTEiIHdpZHRoPSIxNC44ODYiIGhlaWdodD0iMy4yMjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYwLjAzNSAxMzAuNjU0KSByb3RhdGUoLTQ1LjAwMSkiLz4KICA8L2c+Cjwvc3ZnPgo=)",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"contain"}})),r.createElement(d.Z,{ml:2},r.createElement(y.Z,{color:"#f0f0f0",fontSize:24},"担当者紹介"),r.createElement(y.Z,{variant:"h1",color:"#f0f0f0",fontWeight:"bold",mb:{xs:"-12px",md:"-28px"},fontSize:{xs:50,md:106}},"PARTNER")),r.createElement(d.Z,{position:"relative",bgcolor:"#f0f0f0",py:12,borderRadius:4},r.createElement(d.Z,{position:"absolute",sx:{top:{xs:"-75px",sm:"-150px"},right:{xs:10,sm:30,md:200},width:{xs:45,sm:90},height:{xs:123,sm:246},backgroundImage:"url("+b+")",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}),r.createElement(m.Z,{maxWidth:"md"},r.createElement(d.Z,{sx:{margin:"0 auto",width:{xs:"100%",sm:"500px"}}},r.createElement(y.Z,{variant:"h2",align:"center",mb:4,sx:{fontSize:{xs:18,sm:32},lineHeight:2}},"私たちプロフェッショナルに、",r.createElement("br",null),"なんでもご相談ください。"),r.createElement(y.Z,null,"ダルマでは一人一人に、不動産投資のプロフェッショナルがつきます。わからないこと、聞きたいことがあれば気軽にご相談ください。担当者が、お客さまに合わせた最適な提案をさせていただきます。")),r.createElement(g.ZP,{container:!0,spacing:2,mt:8},r.createElement(g.ZP,{item:!0,xs:12},r.createElement(d.Z,{sx:{padding:{xs:"20px",sm:"40px"},backgroundColor:"#fff",borderRadius:"8px"}},r.createElement(g.ZP,{container:!0},r.createElement(g.ZP,{item:!0,xs:12,sm:12,md:6},r.createElement(d.Z,{sx:{margin:"0 auto",width:{xs:"100%",sm:"335px"},height:{xs:"auto",sm:"280px"}}},r.createElement("img",{src:t.image,alt:"Icon",width:"100%"}))),r.createElement(g.ZP,{item:!0,xs:12,sm:12,md:6},r.createElement(y.Z,{color:"#3b4043"},t.role),r.createElement(y.Z,{variant:"h2"},t.name),r.createElement(y.Z,{color:"#3b4043",sx:{mt:"-6px !important"}},t.name_en),r.createElement(I,{datas:t.contacts})))))),r.createElement(g.ZP,{container:!0,spacing:2,mt:0},r.createElement(g.ZP,{item:!0,xs:12,md:6,display:"flex",alignSelf:"stretch"},r.createElement(d.Z,{width:"100%",sx:{padding:{xs:"20px",sm:"40px"},backgroundColor:"#fff",borderRadius:"8px"}},r.createElement(y.Z,{variant:"h2",mb:3},"担当者から一言"),t.copy&&r.createElement(y.Z,{variant:"h3",mb:3},t.copy),r.createElement(y.Z,null,t.message))),r.createElement(g.ZP,{item:!0,xs:12,md:6,display:"flex",alignSelf:"stretch"},r.createElement(d.Z,{width:"100%",sx:{padding:{xs:"20px",sm:"40px"},backgroundColor:"#fff",borderRadius:"8px"}},r.createElement(y.Z,{variant:"h2",mb:3},"基本情報"),r.createElement(I,{datas:t.infos})))))),r.createElement(d.Z,{component:"footer",display:"flex",alignItems:"center",justifyContent:"center",height:80},r.createElement(y.Z,{color:"#fff",fontSize:12},"© 2022 DARUMA, Inc."))))}}}]);
//# sourceMappingURL=component---src-pages-partners-index-js-e592bc877be6ad849eab.js.map