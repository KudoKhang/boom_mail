"use strict";(self.webpackChunkboom_mail=self.webpackChunkboom_mail||[]).push([[269],{1587:function(e,t,r){r.d(t,{Ig:function(){return p},$$:function(){return d},eG:function(){return m},PR:function(){return f},TX:function(){return v}});var n=r(4165),a=r(5861),o=r(1413),i=r(2388),c=r(5169),s=r(1460),l=i.Z.create({baseURL:c.T,headers:{Accept:"application/json"}});l.interceptors.request.use((function(e){var t,r=e.url,n=e.headers;return(t=/admin\/*/.test(r)?s.q.getAdminToken():s.q.getUserToken())&&(n.Authorization="".concat(t)),(0,o.Z)((0,o.Z)({},e),{},{headers:n})}),(function(e){return Promise.reject(e)}));var u=l,d=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.post("/signup",{},{params:t});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.post("/login",{},{params:t});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.post("/spam",r,{params:t});case 2:return a=e.sent,o=a.data,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.q.getUserToken(),e.next=3,u.post("/user",{},{params:{token:t}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.q.clearUser(),e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},5169:function(e,t,r){r.d(t,{J:function(){return n},T:function(){return a}});var n={HOME:"/dashboard",SIGNUP:"/signup",LOGIN:"/login",PRICING:"/pricing",PAYMENT:"/payment"},a="http://15.235.184.92/api"},2394:function(e,t,r){r.d(t,{q:function(){return c}});var n=r(4942),a=r(1413),o=r(885),i=r(2791),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,i.useState)(e),r=(0,o.Z)(t,2),c=r[0],s=r[1],l=function(e){s((0,a.Z)((0,a.Z)({},c),{},(0,n.Z)({},e.target.name,e.target.value)))};return{formData:c,onInputChange:l}}},2269:function(e,t,r){r.r(t),r.d(t,{default:function(){return de}});var n=r(4165),a=r(5861),o=r(2791),i=r(885),c=r(3366),s=r(7462),l=r(8182),u=r(4419),d=r(277),p=r(5513),m=r(1245),f=r(184),v=(0,m.Z)((0,f.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),h=r(5878),Z=r(1217);function g(e){return(0,Z.Z)("MuiAvatar",e)}(0,h.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var b=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],x=(0,d.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,r=e.ownerState;return(0,s.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(t.vars||t).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&(0,s.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]}))})),k=(0,d.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),y=(0,d.ZP)(v,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var P=o.forwardRef((function(e,t){var r=(0,p.Z)({props:e,name:"MuiAvatar"}),n=r.alt,a=r.children,d=r.className,m=r.component,v=void 0===m?"div":m,h=r.imgProps,Z=r.sizes,P=r.src,S=r.srcSet,w=r.variant,j=void 0===w?"circular":w,C=(0,c.Z)(r,b),R=null,I=function(e){var t=e.crossOrigin,r=e.referrerPolicy,n=e.src,a=e.srcSet,c=o.useState(!1),s=(0,i.Z)(c,2),l=s[0],u=s[1];return o.useEffect((function(){if(n||a){u(!1);var e=!0,o=new Image;return o.onload=function(){e&&u("loaded")},o.onerror=function(){e&&u("error")},o.crossOrigin=t,o.referrerPolicy=r,o.src=n,a&&(o.srcset=a),function(){e=!1}}}),[t,r,n,a]),l}((0,s.Z)({},h,{src:P,srcSet:S})),N=P||S,z=N&&"error"!==I,F=(0,s.Z)({},r,{colorDefault:!z,component:v,variant:j}),M=function(e){var t=e.classes,r={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,u.Z)(r,g,t)}(F);return R=z?(0,f.jsx)(k,(0,s.Z)({alt:n,src:P,srcSet:S,sizes:Z,ownerState:F,className:M.img},h)):null!=a?a:N&&n?n[0]:(0,f.jsx)(y,{className:M.fallback}),(0,f.jsx)(x,(0,s.Z)({as:v,ownerState:F,className:(0,l.Z)(M.root,d),ref:t},C,{children:R}))})),S=r(7205),w=r(3148),j=r(4942),C=r(529),R=r(4565),I=r(9853);function N(e){return(0,Z.Z)("MuiFormControlLabel",e)}var z=(0,h.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),F=r(40),M=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],A=(0,d.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[(0,j.Z)({},"& .".concat(z.label),t.label),t.root,t["labelPlacement".concat((0,I.Z)(r.labelPlacement))]]}})((function(e){var t=e.theme,r=e.ownerState;return(0,s.Z)((0,j.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(z.disabled),{cursor:"default"}),"start"===r.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===r.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===r.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,j.Z)({},"& .".concat(z.label),(0,j.Z)({},"&.".concat(z.disabled),{color:(t.vars||t).palette.text.disabled})))})),q=o.forwardRef((function(e,t){var r,n=(0,p.Z)({props:e,name:"MuiFormControlLabel"}),a=n.className,i=n.componentsProps,d=void 0===i?{}:i,m=n.control,v=n.disabled,h=n.disableTypography,Z=n.label,g=n.labelPlacement,b=void 0===g?"end":g,x=n.slotProps,k=void 0===x?{}:x,y=(0,c.Z)(n,M),P=(0,C.Z)(),S=v;"undefined"===typeof S&&"undefined"!==typeof m.props.disabled&&(S=m.props.disabled),"undefined"===typeof S&&P&&(S=P.disabled);var w={disabled:S};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof m.props[e]&&"undefined"!==typeof n[e]&&(w[e]=n[e])}));var j=(0,F.Z)({props:n,muiFormControl:P,states:["error"]}),z=(0,s.Z)({},n,{disabled:S,labelPlacement:b,error:j.error}),q=function(e){var t=e.classes,r=e.disabled,n=e.labelPlacement,a=e.error,o={root:["root",r&&"disabled","labelPlacement".concat((0,I.Z)(n)),a&&"error"],label:["label",r&&"disabled"]};return(0,u.Z)(o,N,t)}(z),L=null!=(r=k.typography)?r:d.typography,O=Z;return null==O||O.type===R.Z||h||(O=(0,f.jsx)(R.Z,(0,s.Z)({component:"span"},L,{className:(0,l.Z)(q.label,null==L?void 0:L.className),children:O}))),(0,f.jsxs)(A,(0,s.Z)({className:(0,l.Z)(q.root,a),ownerState:z,ref:t},y,{children:[o.cloneElement(m,w),O]}))})),L=r(2065),O=r(4938),T=r(753);function B(e){return(0,Z.Z)("PrivateSwitchBase",e)}(0,h.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var D=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],_=(0,d.ZP)(T.Z)((function(e){var t=e.ownerState;return(0,s.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),E=(0,d.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),H=o.forwardRef((function(e,t){var r=e.autoFocus,n=e.checked,a=e.checkedIcon,o=e.className,d=e.defaultChecked,p=e.disabled,m=e.disableFocusRipple,v=void 0!==m&&m,h=e.edge,Z=void 0!==h&&h,g=e.icon,b=e.id,x=e.inputProps,k=e.inputRef,y=e.name,P=e.onBlur,S=e.onChange,w=e.onFocus,j=e.readOnly,R=e.required,N=e.tabIndex,z=e.type,F=e.value,M=(0,c.Z)(e,D),A=(0,O.Z)({controlled:n,default:Boolean(d),name:"SwitchBase",state:"checked"}),q=(0,i.Z)(A,2),L=q[0],T=q[1],H=(0,C.Z)(),U=p;H&&"undefined"===typeof U&&(U=H.disabled);var V="checkbox"===z||"radio"===z,W=(0,s.Z)({},e,{checked:L,disabled:U,disableFocusRipple:v,edge:Z}),G=function(e){var t=e.classes,r=e.checked,n=e.disabled,a=e.edge,o={root:["root",r&&"checked",n&&"disabled",a&&"edge".concat((0,I.Z)(a))],input:["input"]};return(0,u.Z)(o,B,t)}(W);return(0,f.jsxs)(_,(0,s.Z)({component:"span",className:(0,l.Z)(G.root,o),centerRipple:!0,focusRipple:!v,disabled:U,tabIndex:null,role:void 0,onFocus:function(e){w&&w(e),H&&H.onFocus&&H.onFocus(e)},onBlur:function(e){P&&P(e),H&&H.onBlur&&H.onBlur(e)},ownerState:W,ref:t},M,{children:[(0,f.jsx)(E,(0,s.Z)({autoFocus:r,checked:n,defaultChecked:d,className:G.input,disabled:U,id:V&&b,name:y,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;T(t),S&&S(e,t)}},readOnly:j,ref:k,required:R,ownerState:W,tabIndex:N,type:z},"checkbox"===z&&void 0===F?{}:{value:F},x)),L?a:g]}))})),U=(0,m.Z)((0,f.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),V=(0,m.Z)((0,f.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),W=(0,m.Z)((0,f.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function G(e){return(0,Z.Z)("MuiCheckbox",e)}var J=(0,h.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),$=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],X=(0,d.ZP)(H,{shouldForwardProp:function(e){return(0,d.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.indeterminate&&t.indeterminate,"default"!==r.color&&t["color".concat((0,I.Z)(r.color))]]}})((function(e){var t,r=e.theme,n=e.ownerState;return(0,s.Z)({color:(r.vars||r).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:r.vars?"rgba(".concat("default"===n.color?r.vars.palette.action.activeChannel:r.vars.palette.primary.mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,L.Fq)("default"===n.color?r.palette.action.active:r.palette[n.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(t={},(0,j.Z)(t,"&.".concat(J.checked,", &.").concat(J.indeterminate),{color:(r.vars||r).palette[n.color].main}),(0,j.Z)(t,"&.".concat(J.disabled),{color:(r.vars||r).palette.action.disabled}),t))})),Y=(0,f.jsx)(V,{}),K=(0,f.jsx)(U,{}),Q=(0,f.jsx)(W,{}),ee=o.forwardRef((function(e,t){var r,n,a=(0,p.Z)({props:e,name:"MuiCheckbox"}),i=a.checkedIcon,d=void 0===i?Y:i,m=a.color,v=void 0===m?"primary":m,h=a.icon,Z=void 0===h?K:h,g=a.indeterminate,b=void 0!==g&&g,x=a.indeterminateIcon,k=void 0===x?Q:x,y=a.inputProps,P=a.size,S=void 0===P?"medium":P,w=a.className,j=(0,c.Z)(a,$),C=b?k:Z,R=b?k:d,N=(0,s.Z)({},a,{color:v,indeterminate:b,size:S}),z=function(e){var t=e.classes,r=e.indeterminate,n=e.color,a={root:["root",r&&"indeterminate","color".concat((0,I.Z)(n))]},o=(0,u.Z)(a,G,t);return(0,s.Z)({},t,o)}(N);return(0,f.jsx)(X,(0,s.Z)({type:"checkbox",inputProps:(0,s.Z)({"data-indeterminate":b},y),icon:o.cloneElement(C,{fontSize:null!=(r=C.props.fontSize)?r:S}),checkedIcon:o.cloneElement(R,{fontSize:null!=(n=R.props.fontSize)?n:S}),ownerState:N,ref:t,className:(0,l.Z)(z.root,w)},j,{classes:z}))})),te=r(6283),re=r(5953),ne=r(6015),ae=r(403),oe=r(803),ie=r(7689),ce=r(5169),se=r(1587),le=r(2394),ue=r(8117);function de(){var e=(0,le.q)(),t=e.formData,r=e.onInputChange,o=(0,ie.s0)(),i=(0,ue.V)(),c=i.showSuccess,s=i.showError,l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var a,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,(0,se.$$)(t);case 4:o(ce.J.LOGIN,{replace:!0}),c("\u0110\u0103ng k\xed th\xe0nh c\xf4ng!"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),s((null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a||null===(i=a.data)||void 0===i?void 0:i.message)||(null===e.t0||void 0===e.t0?void 0:e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return(0,f.jsx)(oe.Z,{component:"main",maxWidth:"xs",children:(0,f.jsxs)(ne.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,f.jsx)(P,{sx:{m:1,bgcolor:"secondary.main"},children:(0,f.jsx)(ae.Z,{})}),(0,f.jsx)(R.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,f.jsxs)(ne.Z,{component:"form",onSubmit:l,sx:{mt:3},children:[(0,f.jsxs)(re.ZP,{container:!0,spacing:2,children:[(0,f.jsx)(re.ZP,{item:!0,xs:12,sm:6,children:(0,f.jsx)(w.Z,{autoComplete:"given-name",name:"first_name",required:!0,fullWidth:!0,id:"first_name",label:"First Name",autoFocus:!0,onChange:r})}),(0,f.jsx)(re.ZP,{item:!0,xs:12,sm:6,children:(0,f.jsx)(w.Z,{required:!0,fullWidth:!0,id:"last_name",label:"Last Name",name:"last_name",autoComplete:"family-name",onChange:r})}),(0,f.jsx)(re.ZP,{item:!0,xs:12,children:(0,f.jsx)(w.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:r})}),(0,f.jsx)(re.ZP,{item:!0,xs:12,children:(0,f.jsx)(w.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:r})}),(0,f.jsx)(re.ZP,{item:!0,xs:12,children:(0,f.jsx)(q,{control:(0,f.jsx)(ee,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."})})]}),(0,f.jsx)(S.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{my:3},children:"Sign Up"}),(0,f.jsx)(re.ZP,{container:!0,justifyContent:"flex-end",children:(0,f.jsx)(re.ZP,{item:!0,children:(0,f.jsx)(te.Z,{href:ce.J.LOGIN,variant:"body2",children:"Already have an account? Sign in"})})})]})]})})}},1460:function(e,t,r){r.d(t,{q:function(){return n}});var n={getState:function(e){var t=localStorage.getItem(e);try{return JSON.parse(t)}catch(r){return t}},set:function(e,t){"object"===typeof t||Array.isArray(t)?localStorage.setItem(e,JSON.stringify(t)):localStorage.setItem(e,t)},remove:function(e){return localStorage.removeItem(e)},clear:function(){return localStorage.clear()},getAdminToken:function(){return this.getState("admin_access_token")},getUserToken:function(){return this.getState("user_access_token")},getUser:function(){return this.getState("user")},getAdmin:function(){return this.getState("admin")},setUserToken:function(e){this.set("user_access_token",e)},setUser:function(e){this.set("user",e)},clearUser:function(){this.remove("user_access_token"),this.remove("user")}}},403:function(e,t,r){var n=r(4836);t.Z=void 0;var a=n(r(5649)),o=r(184),i=(0,a.default)((0,o.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");t.Z=i}}]);
//# sourceMappingURL=269.c46d49b6.chunk.js.map