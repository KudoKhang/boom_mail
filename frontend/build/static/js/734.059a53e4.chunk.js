"use strict";(self.webpackChunkboom_mail=self.webpackChunkboom_mail||[]).push([[734],{1587:function(t,e,n){n.d(e,{Ig:function(){return p},$$:function(){return f},eG:function(){return m},PR:function(){return d},TX:function(){return h}});var r=n(4165),a=n(5861),u=n(1413),s=n(2388),i=n(5169),o=n(1460),c=s.Z.create({baseURL:i.T,headers:{Accept:"application/json"}});c.interceptors.request.use((function(t){var e,n=t.url,r=t.headers;return(e=/admin\/*/.test(n)?o.q.getAdminToken():o.q.getUserToken())&&(r.Authorization="".concat(e)),(0,u.Z)((0,u.Z)({},t),{},{headers:r})}),(function(t){return Promise.reject(t)}));var l=c,f=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.post("/signup",{},{params:e});case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.post("/login",{},{params:e});case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e,n){var a,u;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.post("/spam",n,{params:e});case 2:return a=t.sent,u=a.data,t.abrupt("return",u);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),d=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e,n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.q.getUserToken(),t.next=3,l.post("/user",{},{params:{token:e}});case 3:return n=t.sent,a=n.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o.q.clearUser(),t.abrupt("return",{});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},5169:function(t,e,n){n.d(e,{J:function(){return r},T:function(){return a}});var r={HOME:"/dashboard",SIGNUP:"/signup",LOGIN:"/login",PRICING:"/pricing",PAYMENT:"/payment"},a="http://15.235.184.92/api"},2394:function(t,e,n){n.d(e,{q:function(){return i}});var r=n(4942),a=n(1413),u=n(885),s=n(2791),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(0,s.useState)(t),n=(0,u.Z)(e,2),i=n[0],o=n[1],c=function(t){o((0,a.Z)((0,a.Z)({},i),{},(0,r.Z)({},t.target.name,t.target.value)))};return{formData:i,onInputChange:c}}},8734:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(4165),a=n(5861),u=(n(2791),n(803)),s=n(5953),i=n(6015),o=n(3148),c=n(7205),l=n(2394),f=n(1587),p=n(1460),m=n(8117),d=n(184);function h(){var t=(0,l.q)(),e=t.formData,n=t.onInputChange,h=(0,m.V)().showError,v=function(t){return t.trim().replace(/[ ]+/g,"").split(/\n/)},g=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a,u,s,i,o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,a=p.q.getUserToken(),u=e.number,s=e.emails,t.next=6,(0,f.eG)({token:a,n_spam:u},v(s));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),h((null===t.t0||void 0===t.t0||null===(i=t.t0.response)||void 0===i||null===(o=i.data)||void 0===o?void 0:o.message)||(null===t.t0||void 0===t.t0?void 0:t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return(0,d.jsx)(u.Z,{maxWidth:"md",sx:{mt:8},children:(0,d.jsxs)(s.ZP,{container:!0,spacing:2,children:[(0,d.jsx)(s.ZP,{item:!0,xs:6,children:(0,d.jsx)(i.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:(0,d.jsxs)(i.Z,{component:"form",onSubmit:g,children:[(0,d.jsxs)(s.ZP,{container:!0,spacing:2,children:[(0,d.jsx)(s.ZP,{item:!0,xs:12,children:(0,d.jsx)(o.Z,{id:"input-emails",label:"Danh s\xe1ch email",multiline:!0,minRows:8,maxRows:8,required:!0,fullWidth:!0,name:"emails",onChange:n})}),(0,d.jsx)(s.ZP,{item:!0,xs:12,children:(0,d.jsx)(o.Z,{id:"input-password",label:"S\u1ed1 l\u01b0\u1ee3t",required:!0,fullWidth:!0,name:"number",onChange:n})})]}),(0,d.jsx)(c.Z,{type:"submit",variant:"contained",sx:{my:3},fullWidth:!0,children:"B\u1eaft \u0111\u1ea7u"})]})})}),(0,d.jsx)(s.ZP,{item:!0,xs:6,children:(0,d.jsx)(o.Z,{id:"logs",label:"K\u1ebft qu\u1ea3",multiline:!0,minRows:8,maxRows:8,fullWidth:!0})})]})})}},1460:function(t,e,n){n.d(e,{q:function(){return r}});var r={getState:function(t){var e=localStorage.getItem(t);try{return JSON.parse(e)}catch(n){return e}},set:function(t,e){"object"===typeof e||Array.isArray(e)?localStorage.setItem(t,JSON.stringify(e)):localStorage.setItem(t,e)},remove:function(t){return localStorage.removeItem(t)},clear:function(){return localStorage.clear()},getAdminToken:function(){return this.getState("admin_access_token")},getUserToken:function(){return this.getState("user_access_token")},getUser:function(){return this.getState("user")},getAdmin:function(){return this.getState("admin")},setUserToken:function(t){this.set("user_access_token",t)},setUser:function(t){this.set("user",t)},clearUser:function(){this.remove("user_access_token"),this.remove("user")}}}}]);
//# sourceMappingURL=734.059a53e4.chunk.js.map