(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{GCnl:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),r=t.n(l),n=t("zAZ9");a.default=function(){var e,a,t="contact__formClientname",c="contact__formEmail",m="contact__formEmail2",i="contact__formAddress",s="contact__formInquiry",o=Object(l.useState)(((e={})[t]="",e[c]="",e[m]="",e[i]="",e[s]="",e)),d=o[0],u=o[1],p=Object(l.useState)(((a={})[c]=!1,a[m]=!1,a)),f=p[0],b=p[1],g=Object(l.useState)(!0),v=g[0],E=g[1];Object(l.useEffect)((function(){var e,a,l;a=!1,l=!1,d[c]&&d[m]&&d[c]!==d[m]&&(a=!0,l=!0),E(!d[t]||!d[c]||!d[m]||!d[s]||a||l),b(Object.assign({},f,((e={})[c]=a,e[m]=l,e)))}),[d]);var h=function(e,a){var t;u(Object.assign({},d,((t={})[e]=a,t)))};return r.a.createElement("section",{id:"contact"},r.a.createElement("div",{className:"container bg-gray p-5"},r.a.createElement("h1",null,n.a.contact.title),r.a.createElement("div",{className:"contact-background"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 offset-1 col-lg-8 offset-lg-2"},r.a.createElement("p",{className:"text-center mb-5"},"不動産の購入、売却、賃貸管理、その他お気軽にお問い合わせください。"),r.a.createElement("form",{action:"https://docs.google.com/forms/u/2/d/e/1FAIpQLSezATzl5zb4rVgOMdghXC1LhyhzXYIVaytaFpF0Qh4d_fi1_Q/formResponse",method:"POST"},[{name:"entry.1650788426",id:t,type:"text",required:!0,label:"お名前",example:"例：達磨 大志"},{id:c,type:"email",required:!0,label:"メールアドレス",example:"例：taishi@daruma-inv.com"},{name:"entry.1696363940",id:m,type:"email",required:!0,label:"メールアドレス",description:"（確認用）",example:"例：taishi@daruma-inv.com",invalidMessage:"メールアドレスが一致していません。",invalidPaste:!0},{name:"entry.1411341641",id:i,type:"text",label:"ご住所",example:"例：東京都渋谷区千駄ヶ谷2-10-5"},{name:"entry.881256958",id:s,required:!0,label:"お問い合わせ内容",example:"※ 不動産の購入・売却、などなどお気軽にお問い合わせください。",textarea:!0,rows:3}].map((function(e,a){var t=e.name||"",l=e.description||"",n=e.placeholder||"";return r.a.createElement("div",{className:"form-group row",key:a},r.a.createElement("label",{htmlFor:e.id,className:"col-md-4 col-form-label"},r.a.createElement("span",{className:"badge rounded-0 "+(e.required?"badge-danger":"badge-secondary")},e.required?"必須":"任意"),r.a.createElement("span",{className:"ml-2"},e.label),l&&r.a.createElement("small",{className:"text-muted"},l)),r.a.createElement("div",{className:"col-md-8"},e.textarea?r.a.createElement("textarea",{name:t,className:"form-control form-control-lg "+(f[e.id]&&"is-invalid"),id:e.id,rows:3,required:!!e.required,placeholder:n,value:d[e.id],onChange:function(a){return h(e.id,a.target.value)}}):r.a.createElement("input",{name:t,className:"form-control form-control-lg "+(f[e.id]&&"is-invalid"),id:e.id,type:e.type,required:!!e.required,placeholder:n,value:d[e.id],onChange:function(a){return h(e.id,a.target.value)},onPaste:function(a){if(e.invalidPaste)return a.preventDefault(),!1}}),e.example&&r.a.createElement("small",{className:"text-muted"},e.example),r.a.createElement("div",{className:"invalid-feedback"},e.invalidMessage)))})),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block mt-4 py-3",disabled:v},"上記の内容で送信する"),r.a.createElement("p",{className:"mt-4 text-center"},r.a.createElement("small",{className:"text-muted"},"※上記フォームからの送信がうまくいかない場合は"," ",r.a.createElement("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSezATzl5zb4rVgOMdghXC1LhyhzXYIVaytaFpF0Qh4d_fi1_Q/viewform",target:"_blank",className:"text-muted",style:{textDecoration:"underline"}},"こちらをクリック")," ","してください。"))))))))))}}}]);
//# sourceMappingURL=10-d3abd3106d5ab72ca7f9.js.map