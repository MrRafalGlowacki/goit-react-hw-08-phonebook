"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[508],{6508:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var a=n(2791),o=n(9434),r=n(1538),c=n(8361),i=n(6351),s="AddForm_title__m0PVc",l="AddForm_form__giF8Q",d="AddName_name__j0b-5",u=n(184),m=function(){var e=(0,o.I0)(),t=(0,o.v9)(i.lj);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("label",{htmlFor:"name",className:d,children:"Name"}),(0,u.jsx)("input",{onChange:function(t){var n={name:t.target.name,value:t.target.value};e((0,r.t)(n))},autoComplete:"off",placeholder:"Enter Name",type:"text",name:"name",value:t,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})},v="AddPhone_number__Cb8xe",h=function(){var e=(0,o.I0)(),t=(0,o.v9)(i.EB);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("label",{htmlFor:"number",className:v,children:"Number"}),(0,u.jsx)("input",{onChange:function(t){var n={name:t.target.name,value:t.target.value};e((0,r.t)(n))},autoComplete:"off",type:"tel",name:"number",placeholder:"Enter number",value:t,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})},p=n(6151),f=n(4942),b=n(3366),g=n(7462),x=n(8182),j=n(4419),_=n(2065),C=n(6934),Z=n(1402),y=n(335),z=n(4036),N=n(5878),R=n(1217);function w(e){return(0,R.Z)("MuiIconButton",e)}var F=(0,N.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),k=["edge","children","className","color","disabled","disableFocusRipple","size"],I=(0,C.ZP)(y.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"default"!==n.color&&t["color".concat((0,z.Z)(n.color))],n.edge&&t["edge".concat((0,z.Z)(n.edge))],t["size".concat((0,z.Z)(n.size))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,g.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,_.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})}),(function(e){var t,n=e.theme,a=e.ownerState,o=null==(t=(n.vars||n).palette)?void 0:t[a.color];return(0,g.Z)({},"inherit"===a.color&&{color:"inherit"},"inherit"!==a.color&&"default"!==a.color&&(0,g.Z)({color:null==o?void 0:o.main},!a.disableRipple&&{"&:hover":(0,g.Z)({},o&&{backgroundColor:n.vars?"rgba(".concat(o.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,_.Fq)(o.main,n.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===a.size&&{padding:5,fontSize:n.typography.pxToRem(18)},"large"===a.size&&{padding:12,fontSize:n.typography.pxToRem(28)},(0,f.Z)({},"&.".concat(F.disabled),{backgroundColor:"transparent",color:(n.vars||n).palette.action.disabled}))})),A=a.forwardRef((function(e,t){var n=(0,Z.Z)({props:e,name:"MuiIconButton"}),a=n.edge,o=void 0!==a&&a,r=n.children,c=n.className,i=n.color,s=void 0===i?"default":i,l=n.disabled,d=void 0!==l&&l,m=n.disableFocusRipple,v=void 0!==m&&m,h=n.size,p=void 0===h?"medium":h,f=(0,b.Z)(n,k),_=(0,g.Z)({},n,{edge:o,color:s,disabled:d,disableFocusRipple:v,size:p}),C=function(e){var t=e.classes,n=e.disabled,a=e.color,o=e.edge,r=e.size,c={root:["root",n&&"disabled","default"!==a&&"color".concat((0,z.Z)(a)),o&&"edge".concat((0,z.Z)(o)),"size".concat((0,z.Z)(r))]};return(0,j.Z)(c,w,t)}(_);return(0,u.jsx)(I,(0,g.Z)({className:(0,x.Z)(C.root,c),centerRipple:!0,focusRipple:!v,disabled:d,ref:t,ownerState:_},f,{children:r}))})),S=n(675),L=function(){var e=(0,o.v9)(i.lj),t=(0,o.v9)(i.EB),n=(0,o.v9)(i.Af),a=(0,o.I0)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{className:s,children:"Add new contact"}),(0,u.jsxs)("form",{className:l,onSubmit:function(o){o.preventDefault(),n.find((function(t){return t.name===e}))?alert("".concat(e," is already in contacts")):(a((0,c.mu)({name:e,number:t})),a((0,r.t)({name:"name",value:""})),a((0,r.t)({name:"number",value:""})))},children:[(0,u.jsx)(m,{}),(0,u.jsx)(h,{}),(0,u.jsx)(p.Z,{sx:{textTransform:"none"},variant:"contained",type:"submit",startIcon:(0,u.jsx)(S.Z,{}),children:"Add contact"}),(0,u.jsx)(A,{color:"primary","aria-label":"add contact"})]})]})},E="ContactsList_title__Nc-fb",M="ContactsList_container__r+Txe",B="ContactsList_empty__HYxRP",P={item:"ContactsListItem_item__VnwkN",button:"ContactsListItem_button__gfbnW"},T=n(5581),q=function(e){var t=e.contact,n=e.id,a=e.name,r=e.number,c=e.onContactRemove,i=(0,o.I0)();return(0,u.jsxs)("li",{className:P.item,children:[(0,u.jsxs)("span",{className:P.name,children:[a,": ",r]})," ",(0,u.jsx)("button",{type:"button",className:P.button,onClick:function(){return function(e){i((0,T.sz)()),i((0,T.fS)(e))}(t)},children:"Edit"}),(0,u.jsx)("button",{type:"button",className:P.button,onClick:function(){return c(n,a)},children:"X"})]},n)},O=function(){var e=(0,o.v9)(i.Af),t=e.length,n=(0,o.v9)(i.AD),a=(0,o.I0)(),r=function(e,t){a((0,c.nt)(e)),alert("".concat(t," will be removed from your contacts"))},s=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(e){return(0,u.jsx)(q,{contact:e,id:e.id,name:e.name,number:e.number,onContactRemove:r,filter:n},e.id)}));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h3",{className:E,children:0===t?"You have no contacts":1===t?"You have only one contact":"You have ".concat(t," contacts")}),e.length>0||(0,u.jsx)("div",{className:B,children:"add some contacts"}),e.length>0&&(0,u.jsx)("ul",{className:M,children:s})]})},V=n(854),Y=function(){var e=(0,o.I0)(),t=(0,o.v9)(i.xU),n=(0,o.v9)(i.zh);return(0,a.useEffect)((function(){e((0,c.VR)())}),[e]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(L,{}),t&&!n&&(0,u.jsx)(V.a,{}),(0,u.jsx)(O,{})]})}},675:function(e,t,n){var a=n(4836);t.Z=void 0;var o=a(n(5649)),r=n(184),c=(0,o.default)((0,r.jsx)("path",{d:"M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4zm2 2v2h3v3h2v-3h3v-2h-3V7h-2v3h-3zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4z"}),"PersonAddAlt1");t.Z=c}}]);
//# sourceMappingURL=508.ba2c4ce2.chunk.js.map