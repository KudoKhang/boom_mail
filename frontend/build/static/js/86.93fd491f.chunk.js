"use strict";(self.webpackChunkboom_mail=self.webpackChunkboom_mail||[]).push([[86],{2394:function(t,n,e){e.d(n,{q:function(){return s}});var a=e(4942),r=e(1413),o=e(885),i=e(2791),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,i.useState)(t),e=(0,o.Z)(n,2),s=e[0],p=e[1],l=function(t){p((0,r.Z)((0,r.Z)({},s),{},(0,a.Z)({},t.target.name,t.target.value)))};return{formData:s,onInputChange:l}}},4086:function(t,n,e){e.r(n),e.d(n,{default:function(){return O}});var a=e(885),r=e(2791),o=e(803),i=e(5953),s=e(6015),p=e(3148),l=e(7205),c=e(4942),d=e(3366),h=e(7462),u=e(8182),m=e(4419),v=e(9853),g=e(4565),f=e(1211),Z=e(529),y=e(277),b=e(5878),E=e(1217);function x(t){return(0,E.Z)("MuiInputAdornment",t)}var M,P=(0,b.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),T=e(5513),A=e(184),N=["children","className","component","disablePointerEvents","disableTypography","position","variant"],S=(0,y.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(t,n){var e=t.ownerState;return[n.root,n["position".concat((0,v.Z)(e.position))],!0===e.disablePointerEvents&&n.disablePointerEvents,n[e.variant]]}})((function(t){var n=t.theme,e=t.ownerState;return(0,h.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===e.variant&&(0,c.Z)({},"&.".concat(P.positionStart,"&:not(.").concat(P.hiddenLabel,")"),{marginTop:16}),"start"===e.position&&{marginRight:8},"end"===e.position&&{marginLeft:8},!0===e.disablePointerEvents&&{pointerEvents:"none"})})),_=r.forwardRef((function(t,n){var e=(0,T.Z)({props:t,name:"MuiInputAdornment"}),a=e.children,o=e.className,i=e.component,s=void 0===i?"div":i,p=e.disablePointerEvents,l=void 0!==p&&p,c=e.disableTypography,y=void 0!==c&&c,b=e.position,E=e.variant,P=(0,d.Z)(e,N),_=(0,Z.Z)()||{},j=E;E&&_.variant,_&&!j&&(j=_.variant);var w=(0,h.Z)({},e,{hiddenLabel:_.hiddenLabel,size:_.size,disablePointerEvents:l,position:b,variant:j}),O=function(t){var n=t.classes,e=t.disablePointerEvents,a=t.hiddenLabel,r=t.position,o=t.size,i=t.variant,s={root:["root",e&&"disablePointerEvents",r&&"position".concat((0,v.Z)(r)),i,a&&"hiddenLabel",o&&"size".concat((0,v.Z)(o))]};return(0,m.Z)(s,x,n)}(w);return(0,A.jsx)(f.Z.Provider,{value:null,children:(0,A.jsx)(S,(0,h.Z)({as:s,ownerState:w,className:(0,u.Z)(O.root,o),ref:n},P,{children:"string"!==typeof a||y?(0,A.jsxs)(r.Fragment,{children:["start"===b?M||(M=(0,A.jsx)("span",{className:"notranslate",children:"\u200b"})):null,a]}):(0,A.jsx)(g.Z,{color:"text.secondary",children:a})}))})})),j=e(2394),w={PAYEE_ACCOUNT:"U14526665",PAYEE_NAME:"boomcheck.io",PAYMENT_ID:"BOOMCHECK",PAYMENT_UNITS:"USD",STATUS_URL:"https://boomcheck.io/handlers/paymentHandler.php?for=k",PAYMENT_URL:"https://boomcheck.io/handlers/paymentHandler.php?for=k",PAYMENT_URL_METHOD:"POST",NOPAYMENT_URL:"http://0.0.0.0:8001/payment",NOPAYMENT_URL_METHOD:"GET",SUGGESTED_MEMO:"",BAGGAGE_FIELDS:"",PAYMENT_METHOD:"PerfectMoney account"};function O(){var t=(0,j.q)({PAYMENT_AMOUNT:""}),n=t.formData,e=t.onInputChange;return(0,A.jsx)(o.Z,{maxWidth:"xs",sx:{mt:8},children:(0,A.jsx)(i.ZP,{container:!0,spacing:2,children:(0,A.jsx)(i.ZP,{item:!0,xs:12,children:(0,A.jsx)(s.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:(0,A.jsxs)(s.Z,{component:"form",action:"https://perfectmoney.com/api/step1.asp",sx:{width:"100%"},method:"POST",children:[(0,A.jsx)(i.ZP,{container:!0,spacing:2,children:(0,A.jsxs)(i.ZP,{item:!0,xs:12,children:[Object.entries(w).map((function(t){var n=(0,a.Z)(t,2),e=n[0],r=n[1];return(0,A.jsx)("input",{name:e,value:r,type:"hidden"},e)})),(0,A.jsx)(p.Z,{id:"input-amount",name:"PAYMENT_AMOUNT",type:"number",label:"S\u1ed1 ti\u1ec1n c\u1ea7n n\u1ea1p",required:!0,fullWidth:!0,onChange:e,value:n.PAYMENT_AMOUNT,InputProps:{startAdornment:(0,A.jsx)(_,{position:"start",children:"$"})}})]})}),(0,A.jsxs)(l.Z,{component:"label",variant:"contained",sx:{my:3},fullWidth:!0,children:[(0,A.jsx)("input",{hidden:!0,type:"submit",name:"PAYMENT_METHOD",value:"PerfectMoney account"}),"Th\u1ef1c hi\u1ec7n"]})]})})})})})}},4565:function(t,n,e){e.d(n,{Z:function(){return b}});var a=e(3366),r=e(7462),o=e(2791),i=e(8182),s=e(8519),p=e(4419),l=e(277),c=e(5513),d=e(9853),h=e(5878),u=e(1217);function m(t){return(0,u.Z)("MuiTypography",t)}(0,h.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var v=e(184),g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,l.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(t,n){var e=t.ownerState;return[n.root,e.variant&&n[e.variant],"inherit"!==e.align&&n["align".concat((0,d.Z)(e.align))],e.noWrap&&n.noWrap,e.gutterBottom&&n.gutterBottom,e.paragraph&&n.paragraph]}})((function(t){var n=t.theme,e=t.ownerState;return(0,r.Z)({margin:0},e.variant&&n.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})})),Z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=o.forwardRef((function(t,n){var e=(0,c.Z)({props:t,name:"MuiTypography"}),o=function(t){return y[t]||t}(e.color),l=(0,s.Z)((0,r.Z)({},e,{color:o})),h=l.align,u=void 0===h?"inherit":h,b=l.className,E=l.component,x=l.gutterBottom,M=void 0!==x&&x,P=l.noWrap,T=void 0!==P&&P,A=l.paragraph,N=void 0!==A&&A,S=l.variant,_=void 0===S?"body1":S,j=l.variantMapping,w=void 0===j?Z:j,O=(0,a.Z)(l,g),L=(0,r.Z)({},l,{align:u,color:o,className:b,component:E,gutterBottom:M,noWrap:T,paragraph:N,variant:_,variantMapping:w}),U=E||(N?"p":w[_]||Z[_])||"span",B=function(t){var n=t.align,e=t.gutterBottom,a=t.noWrap,r=t.paragraph,o=t.variant,i=t.classes,s={root:["root",o,"inherit"!==t.align&&"align".concat((0,d.Z)(n)),e&&"gutterBottom",a&&"noWrap",r&&"paragraph"]};return(0,p.Z)(s,m,i)}(L);return(0,v.jsx)(f,(0,r.Z)({as:U,ref:n,ownerState:L,className:(0,i.Z)(B.root,b)},O))}))}}]);
//# sourceMappingURL=86.93fd491f.chunk.js.map