(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[548],{3947:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/addproduct",function(){return t(4781)}])},2342:function(e,n,t){"use strict";var r=t(5893);t(7294);var a=t(1664),s=t.n(a),i=t(1502),o=t.n(i),d=t(1163),c=t(5675),l=t.n(c);let u=()=>{let e=(0,d.useRouter)(),n=e.pathname;return(0,r.jsxs)("div",{className:o().nav,children:[(0,r.jsx)(l(),{src:"/vicky-profile-trans.png",width:"100",height:"100",alt:"Vicky profile pic"}),(0,r.jsx)("br",{}),(0,r.jsx)(s(),{className:"/dashboard"===n?o().link:"no",href:"/dashboard",children:"Dashboard"}),(0,r.jsx)(s(),{className:"/orders"===n?o().link:"no",href:"/orders",children:"Orders"}),(0,r.jsx)(s(),{className:"/addproduct"===n?o().link:"no",href:"/addproduct",children:"Add Product"}),(0,r.jsx)(s(),{className:"/products"===n?o().link:"no",href:"/products",children:"Products"}),(0,r.jsx)(s(),{className:"/users"===n?o().link:"no",href:"/users",children:"Users"})]})};n.Z=u},4781:function(e,n,t){"use strict";t.r(n);var r=t(5893),a=t(7294),s=t(1502),i=t.n(s),o=t(2342),d=t(1163);let c=()=>{(0,d.useRouter)();let[e,n]=(0,a.useState)({name:"",price:"",brand:"",quantity:"",size:"",description:"",image:""}),t=t=>{let{name:r,value:a}=t.target;n({...e,[r]:a})},s=t=>{t.preventDefault(),fetch("https://alert-seal-bandanna.cyclic.app/products/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).then(n=>console.log(e)).catch(e=>console.error(e)),n({name:"",price:"",brand:"",quantity:"",size:"",description:"",image:""})};return(0,r.jsxs)("div",{className:i().main,children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)("div",{className:i().frm,children:(0,r.jsxs)("form",{onSubmit:s,children:[(0,r.jsx)("center",{children:(0,r.jsx)("h1",{style:{fontSize:"20px",color:"white",fontWeight:"bolder"},children:"Add products"})}),(0,r.jsx)("input",{type:"text",name:"name",placeholder:"Product name",value:e.name,onChange:t}),(0,r.jsx)("input",{type:"number",name:"price",placeholder:"Price",value:e.price,onChange:t}),(0,r.jsx)("input",{type:"text",name:"brand",placeholder:"Brand",value:e.brand,onChange:t}),(0,r.jsx)("input",{type:"text",name:"quantity",placeholder:"Quantity",value:e.quantity,onChange:t}),(0,r.jsx)("input",{type:"number",name:"size",placeholder:"Size - 30",value:e.size,onChange:t}),(0,r.jsx)("input",{type:"text",name:"description",placeholder:"Description",value:e.description,onChange:t}),(0,r.jsx)("input",{type:"url",name:"image",placeholder:"Image url",value:e.image,onChange:t}),(0,r.jsx)("center",{children:(0,r.jsx)("button",{type:"submit",className:i().add,children:"Add Product"})})]})})]})};n.default=c},1502:function(e){e.exports={main:"Home_main__nLjiQ",nav:"Home_nav__vYbrQ",link:"Home_link__mt0ji",cont:"Home_cont__qbIXm",grd:"Home_grd__eHBFB",frm:"Home_frm__IwlCq",add:"Home_add__e9_Zr",list:"Home_list__qBUOI",dlt:"Home_dlt__Nt0ho",scrl:"Home_scrl__n3U2T"}}},function(e){e.O(0,[640,774,888,179],function(){return e(e.s=3947)}),_N_E=e.O()}]);