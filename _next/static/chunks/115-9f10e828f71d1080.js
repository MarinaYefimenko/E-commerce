"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[115],{2155:function(e,t,r){r.d(t,{Z:function(){return p}});var s=r(7437),a=r(2265),l=r(9376),n=r(9089),o=r(9536),c=r(6063),i=r(8690),d=r(6922),u=r(3145),m=e=>{let{isOpen:t,onClose:r}=e,{favorites:a,toggleFavorite:c}=(0,o.r)(),i=(0,l.useRouter)();if(!t)return null;let d=e=>{r(),i.push("/product/".concat(e))};return(0,s.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center",onClick:e=>e.target===e.currentTarget&&r(),children:(0,s.jsxs)("div",{className:"bg-white rounded-lg w-full max-w-2xl max-h-[80vh] mx-4",children:[(0,s.jsxs)("div",{className:"p-4 border-b border-gray-200 flex justify-between items-center",children:[(0,s.jsxs)("h2",{className:"text-xl font-semibold",children:["Favorites (",a.length,")"]}),(0,s.jsx)("button",{onClick:r,className:"p-2 hover:bg-gray-100 rounded-full transition-colors",children:(0,s.jsx)(n.aHS,{className:"text-gray-500"})})]}),(0,s.jsx)("div",{className:"p-4 overflow-auto max-h-[calc(80vh-80px)]",children:0===a.length?(0,s.jsx)("p",{className:"text-center text-gray-500 py-8",children:"No favorite items yet"}):(0,s.jsx)("div",{className:"space-y-4",children:a.map(e=>(0,s.jsxs)("div",{className:"group relative flex gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer",children:[(0,s.jsxs)("div",{onClick:()=>d(e.id),className:"flex gap-4 flex-1",children:[(0,s.jsx)("div",{className:"relative w-20 h-20 bg-white rounded",children:(0,s.jsx)(u.default,{src:e.image,alt:e.title,fill:!0,className:"object-contain p-2"})}),(0,s.jsxs)("div",{className:"flex-1",children:[(0,s.jsx)("h3",{className:"font-medium line-clamp-1",children:e.title}),(0,s.jsx)("p",{className:"text-sm text-gray-500 line-clamp-1",children:e.description}),(0,s.jsxs)("p",{className:"font-bold mt-1",children:["$",e.price.toFixed(2)]})]})]}),(0,s.jsx)("button",{onClick:t=>{t.stopPropagation(),c(e)},className:"absolute top-2 right-2 p-2 rounded-full hover:bg-white transition-colors",children:(0,s.jsx)(n.aHS,{className:"text-gray-400 hover:text-red-500 transition-colors"})})]},e.id))})})]})})},x=r(1149),h=e=>{let{onBack:t,onSubmit:r}=e,[l,o]=(0,a.useState)({name:"",email:"",address:"",phone:""}),[c,i]=(0,a.useState)({}),[d,u]=(0,a.useState)(!1),[m,x]=(0,a.useState)({}),h=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),g=()=>{let e={};return l.name.trim()||(e.name="Name is required"),l.email.trim()?h(l.email)||(e.email="Invalid email format"):e.email="Email is required",l.address.trim()||(e.address="Address is required"),l.phone&&!/^\+?[\d\s-]{10,}$/.test(l.phone)&&(e.phone="Invalid phone number"),i(e),0===Object.keys(e).length};(0,a.useEffect)(()=>{u(g())},[l]);let f=e=>{let{name:t,value:r}=e.target;o(e=>({...e,[t]:r}))},p=e=>{let{name:t,value:r}=e.target;x(e=>({...e,[t]:!0})),"email"===t&&r.trim()&&(h(r)?i(e=>({...e,email:void 0})):i(e=>({...e,email:"Invalid email format"})))};return(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("button",{onClick:t,className:"flex items-center gap-2 text-gray-600 hover:text-gray-800",children:[(0,s.jsx)(n.x_l,{}),"Back to cart"]}),(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault(),g()&&r(l)},className:"space-y-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Full Name"}),(0,s.jsx)("input",{type:"text",id:"name",name:"name",value:l.name,onChange:f,onBlur:p,className:"mt-1 block w-full h-12 rounded-md border border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm px-4"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),(0,s.jsx)("input",{type:"email",id:"email",name:"email",value:l.email,onChange:f,onBlur:p,className:"mt-1 block w-full h-12 rounded-md border ".concat(m.email&&c.email?"border-red-500":"border-gray-300"," shadow-sm focus:border-black focus:ring-black sm:text-sm px-4")}),m.email&&c.email&&(0,s.jsx)("p",{className:"mt-1 text-sm text-red-600",children:c.email})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"address",className:"block text-sm font-medium text-gray-700",children:"Delivery Address"}),(0,s.jsx)("input",{type:"text",id:"address",name:"address",value:l.address,onChange:f,onBlur:p,className:"mt-1 block w-full h-12 rounded-md border border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm px-4"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700",children:"Phone Number"}),(0,s.jsx)("input",{type:"tel",id:"phone",name:"phone",value:l.phone,onChange:f,onBlur:p,placeholder:"+1 (555) 555-5555",className:"mt-1 block w-full h-12 rounded-md border border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm px-4"})]}),(0,s.jsx)("button",{type:"submit",disabled:!d,className:"w-full py-3 rounded-lg transition-colors ".concat(d?"bg-black text-white hover:bg-gray-800":"bg-gray-300 text-gray-500 cursor-not-allowed"),children:"To Payment"})]})]})},g=e=>{let{orderId:t,onClose:r}=e,a=(0,l.useRouter)();return(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center text-center p-6",children:[(0,s.jsx)(n.FJM,{className:"text-green-500 text-6xl mb-4"}),(0,s.jsx)("h2",{className:"text-2xl font-semibold mb-2",children:"Thank you for your order!"}),(0,s.jsxs)("p",{className:"text-gray-600 mb-6",children:["Your order number ",(0,s.jsx)("span",{className:"font-medium",children:t})," has been successfully placed!"]}),(0,s.jsx)("button",{onClick:()=>{a.push("/orders"),r()},className:"w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors",children:"My Orders"})]})},f=e=>{let{isOpen:t,onClose:r}=e,{cartItems:l,removeFromCart:o,updateQuantity:c,clearCart:i}=(0,d.j)(),{addOrder:m}=(0,x.y)(),[f,p]=(0,a.useState)(!1),[b,y]=(0,a.useState)(null),j=l.reduce((e,t)=>e+t.price*t.quantity,0);return t?(0,s.jsxs)("div",{className:"fixed inset-0 z-50",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-black/50",onClick:r}),(0,s.jsx)("div",{className:"absolute right-0 top-0 h-full w-full md:w-1/3 bg-white shadow-xl",children:(0,s.jsxs)("div",{className:"flex flex-col h-full",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between p-4 border-b",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(n.FeP,{className:"text-xl"}),(0,s.jsx)("h2",{className:"text-xl font-semibold",children:"Cart"})]}),(0,s.jsx)("button",{onClick:r,className:"p-2 hover:bg-gray-100 rounded-full",children:(0,s.jsx)(n.aHS,{})})]}),(0,s.jsx)("div",{className:"flex-1 overflow-y-auto p-4",children:b?(0,s.jsx)(g,{orderId:b,onClose:r}):f?(0,s.jsx)(h,{onBack:()=>{p(!1)},onSubmit:e=>{y(m({date:new Date().toISOString(),customer:e,items:l,total:j})),i()}}):0===l.length?(0,s.jsx)("div",{className:"text-center text-gray-500 py-8",children:"Your cart is empty"}):(0,s.jsx)("div",{className:"space-y-4",children:l.map(e=>(0,s.jsxs)("div",{className:"flex gap-4 p-2 border rounded-lg",children:[(0,s.jsx)("div",{className:"relative w-20 h-20",children:(0,s.jsx)(u.default,{src:e.image,alt:e.title,fill:!0,className:"object-contain"})}),(0,s.jsxs)("div",{className:"flex-1",children:[(0,s.jsx)("h3",{className:"font-medium line-clamp-2",children:e.title}),(0,s.jsxs)("p",{className:"text-red-600 font-semibold",children:["$",(e.price*e.quantity).toFixed(2)]}),(0,s.jsxs)("div",{className:"flex items-center gap-2 mt-2",children:[(0,s.jsx)("button",{onClick:()=>c(e.id,e.quantity-1),className:"p-1 hover:bg-gray-100 rounded",children:(0,s.jsx)(n.iFH,{className:"text-xs"})}),(0,s.jsx)("span",{className:"text-sm",children:e.quantity}),(0,s.jsx)("button",{onClick:()=>c(e.id,e.quantity+1),className:"p-1 hover:bg-gray-100 rounded",children:(0,s.jsx)(n.wEH,{className:"text-xs"})})]})]})]},e.id))})}),!f&&!b&&(0,s.jsxs)("div",{className:"p-4 border-t",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,s.jsx)("span",{className:"font-semibold",children:"Total:"}),(0,s.jsxs)("span",{className:"text-xl font-bold text-red-600",children:["$",j.toFixed(2)]})]}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsxs)("button",{onClick:i,disabled:0===l.length,className:"flex-1 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:[(0,s.jsx)(n.Xm5,{}),"Clear Cart"]}),(0,s.jsx)("button",{onClick:()=>{p(!0)},className:"flex-1 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",disabled:0===l.length,children:"Checkout"})]})]})]})})]}):null},p=()=>{let[e,t]=(0,a.useState)(!1),[r,u]=(0,a.useState)(!1),{favorites:x}=(0,o.r)(),{cartItems:h}=(0,d.j)(),{searchProducts:g,clearSearch:p}=(0,c.r)(),{searchQuery:b,setSearchQuery:y,clearSearch:j}=(0,i.R)(),v=(0,l.useRouter)(),N=(0,l.usePathname)(),w=(0,l.useSearchParams)(),S="/"===N,[k,C]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=w.get("q");e&&(y(e),u(e.length>0),g(e))},[w,g,y,u]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("header",{className:"flex justify-between items-center px-4 md:px-8 py-4 bg-white shadow-sm fixed top-0 right-0 left-0 md:left-[25%] z-40",children:[(0,s.jsx)("div",{className:"flex items-center space-x-8",children:(0,s.jsx)(a.Suspense,{fallback:(0,s.jsx)("div",{className:"flex-1 max-w-2xl h-10 bg-gray-200 rounded-lg animate-pulse"}),children:(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault(),!S&&b.trim()&&(v.push("/?category=all&q=".concat(encodeURIComponent(b.trim()))),g(b))},className:"relative flex-1 max-w-md mr-4 ml-16 md:ml-0",children:[(0,s.jsx)("input",{type:"text",placeholder:"Search products...",value:b,onChange:e=>{let t=e.target.value;if(y(t),u(t.length>0),S){g(t);let e=new URLSearchParams(w.toString());e.set("category","all"),t?e.set("q",t):e.delete("q"),v.push("/?".concat(e.toString()))}},className:"w-full pl-4 pr-10 py-2 rounded-lg border border-gray-200 focus:border-gray-300 focus:ring-0 text-sm"}),r?(0,s.jsx)("button",{type:"button",onClick:()=>{y(""),u(!1),p(),j();let e=new URLSearchParams(w.toString());e.delete("q"),v.push("/?".concat(e.toString()))},className:"absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1",children:(0,s.jsx)(n.aHS,{size:12})}):null,(0,s.jsx)("button",{type:"submit",className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors",children:(0,s.jsx)(n.U41,{})})]})})}),(0,s.jsxs)("div",{className:"flex items-center gap-4 ml-4",children:[(0,s.jsx)("button",{onClick:()=>t(!0),className:"relative hover:text-red-500 transition-colors",children:(0,s.jsx)(n.$0H,{className:"text-xl ".concat(x.length>0?"text-red-500":"text-gray-800")})}),(0,s.jsxs)("button",{onClick:()=>C(!0),className:"relative p-2 hover:bg-gray-100 rounded-full",children:[(0,s.jsx)(n.FeP,{className:"text-xl"}),h.length>0&&(0,s.jsx)("span",{className:"absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",children:h.length})]}),(0,s.jsx)("button",{onClick:()=>v.push("/orders"),className:"p-2 hover:bg-gray-100 rounded-full transition-colors",children:(0,s.jsx)(n.Xws,{className:"text-xl"})})]})]}),(0,s.jsx)(m,{isOpen:e,onClose:()=>t(!1)}),(0,s.jsx)(f,{isOpen:k,onClose:()=>C(!1)})]})}},322:function(e,t,r){r.d(t,{Z:function(){return x}});var s=r(7437),a=r(2265),l=r(3145),n=r(3464),o=r(6430);let c={async getAll(){try{let{data:e}=await n.Z.get("".concat(o.T,"/products/categories"));return e}catch(e){return console.error("Error fetching categories:",e),[]}},async getProductsByCategory(e){try{let{data:t}=await n.Z.get("".concat(o.T,"/products/category/").concat(e));return t}catch(e){return console.error("Error fetching products by category:",e),[]}}};var i=r(9376),d=r(6063),u=r(8690),m=r(9089),x=e=>{let{onCategoryChange:t,activeCategory:r}=e,[n,o]=(0,a.useState)([]),[x,h]=(0,a.useState)(!0),g=(0,i.useRouter)(),f=(0,i.useSearchParams)(),{clearSearch:p}=(0,d.r)(),{clearSearch:b}=(0,u.R)(),[y,j]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{(async()=>{try{let e=await c.getAll();o(e)}catch(e){console.error("Failed to fetch categories:",e)}finally{h(!1)}})()},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{onClick:()=>j(!y),className:"fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md md:hidden hover:bg-gray-100 transition-colors",children:y?(0,s.jsx)(m.aHS,{className:"text-xl"}):(0,s.jsx)(m.Fm7,{className:"text-xl"})}),(0,s.jsxs)("aside",{className:"\n        fixed left-0 top-0 h-screen bg-gray-50 p-5 border-r border-gray-200\n        transform transition-transform duration-300 ease-in-out overflow-y-auto\n        ".concat(y?"translate-x-0":"-translate-x-full","\n        md:translate-x-0 md:sticky md:top-0\n        w-64 md:w-1/4\n        z-40\n      "),children:[(0,s.jsx)("div",{className:"relative h-12 w-48 mb-8 cursor-pointer",onClick:()=>{let e=new URLSearchParams(f.toString());e.delete("q"),e.set("category","all"),g.push("/?".concat(e.toString())),p(),b()},children:(0,s.jsx)(l.default,{src:"/logo.png",alt:"MYFashion Logo",fill:!0,className:"object-contain !w-auto",priority:!0,sizes:"(max-width: 768px) 100vw, 192px"})}),(0,s.jsx)("div",{className:"".concat(x?"hidden":"block"),children:(0,s.jsx)(a.Suspense,{fallback:(0,s.jsx)("div",{className:"space-y-2",children:[void 0,void 0,void 0,void 0,void 0].map((e,t)=>(0,s.jsx)("div",{className:"h-10 bg-gray-200 rounded-lg animate-pulse"},t))}),children:(0,s.jsxs)("ul",{className:"space-y-1",children:[(0,s.jsx)("li",{onClick:()=>{t("all"),j(!1)},className:"px-4 py-2 rounded cursor-pointer transition-colors capitalize ".concat("all"===r?"bg-black text-white":"hover:bg-gray-200"),children:"All products"}),n.map(e=>(0,s.jsx)("li",{onClick:()=>{t(e),j(!1)},className:"px-4 py-2 rounded cursor-pointer transition-colors capitalize ".concat(r===e?"bg-black text-white":"hover:bg-gray-200"),children:e},e))]})})})]})]})}},6430:function(e,t,r){r.d(t,{T:function(){return s}});let s="https://fakestoreapi.com"},6922:function(e,t,r){r.d(t,{CartProvider:function(){return n},j:function(){return o}});var s=r(7437),a=r(2265);let l=(0,a.createContext)(void 0),n=e=>{let{children:t}=e,[r,n]=(0,a.useState)([]);(0,a.useEffect)(()=>{let e=localStorage.getItem("cart");e&&n(JSON.parse(e))},[]),(0,a.useEffect)(()=>{localStorage.setItem("cart",JSON.stringify(r))},[r]);let o=e=>{n(t=>t.filter(t=>t.id!==e))};return(0,s.jsx)(l.Provider,{value:{cartItems:r,addToCart:e=>{n(t=>t.find(t=>t.id===e.id)?t.map(t=>t.id===e.id?{...t,quantity:t.quantity+1}:t):[...t,{...e,quantity:1}])},removeFromCart:o,updateQuantity:(e,t)=>{if(t<1){o(e);return}n(r=>r.map(r=>r.id===e?{...r,quantity:t}:r))},clearCart:()=>{n([])},isInCart:e=>r.some(t=>t.id===e)},children:t})},o=()=>{let e=(0,a.useContext)(l);if(void 0===e)throw Error("useCart must be used within a CartProvider");return e}},9536:function(e,t,r){r.d(t,{FavoritesProvider:function(){return n},r:function(){return o}});var s=r(7437),a=r(2265);let l=(0,a.createContext)(void 0);function n(e){let{children:t}=e,[r,n]=(0,a.useState)([]);return(0,s.jsx)(l.Provider,{value:{favorites:r,toggleFavorite:e=>{n(t=>t.find(t=>t.id===e.id)?t.filter(t=>t.id!==e.id):[...t,e])},isFavorite:e=>r.some(t=>t.id===e)},children:t})}function o(){let e=(0,a.useContext)(l);if(void 0===e)throw Error("useFavorites must be used within a FavoritesProvider");return e}},1149:function(e,t,r){r.d(t,{OrdersProvider:function(){return n},y:function(){return o}});var s=r(7437),a=r(2265);let l=(0,a.createContext)(void 0),n=e=>{let{children:t}=e,[r,n]=(0,a.useState)([]);(0,a.useEffect)(()=>{let e=localStorage.getItem("orders");e&&n(JSON.parse(e))},[]),(0,a.useEffect)(()=>{localStorage.setItem("orders",JSON.stringify(r))},[r]);let o=()=>{let e=new Date,t=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0"),l=r.length+1;return"ORD-".concat(t).concat(s).concat(a,"-").concat(l)};return(0,s.jsx)(l.Provider,{value:{orders:r,addOrder:e=>{let t={...e,id:o()};return n(e=>[...e,t]),t.id}},children:t})},o=()=>{let e=(0,a.useContext)(l);if(void 0===e)throw Error("useOrders must be used within an OrdersProvider");return e}},6063:function(e,t,r){r.d(t,{ProductProvider:function(){return c},r:function(){return o}});var s=r(7437),a=r(2265),l=r(1609);let n=(0,a.createContext)({products:[],filteredProducts:[],searchProducts:()=>{},clearSearch:()=>{},isLoading:!1,error:null}),o=()=>(0,a.useContext)(n),c=e=>{let{children:t}=e,[r,o]=(0,a.useState)([]),[c,i]=(0,a.useState)([]),[d,u]=(0,a.useState)(!0),[m,x]=(0,a.useState)(null);(0,a.useEffect)(()=>{(async()=>{try{let e=await l.M.getAll();o(e),i(e)}catch(e){x("Failed to fetch products"),console.error("Error fetching products:",e)}finally{u(!1)}})()},[]);let h=(0,a.useCallback)(e=>{if(!e.trim()){i(r);return}let t=e.toLowerCase().trim();i(r.filter(e=>{let r=e.title.toLowerCase().includes(t),s=e.description.toLowerCase().includes(t),a=e.category.toLowerCase().includes(t);return r||s||a}))},[r]),g=(0,a.useCallback)(()=>{i(r)},[r]);return(0,s.jsx)(n.Provider,{value:{products:r,filteredProducts:c,searchProducts:h,clearSearch:g,isLoading:d,error:m},children:t})}},8690:function(e,t,r){r.d(t,{R:function(){return n},SearchProvider:function(){return o}});var s=r(7437),a=r(2265);let l=(0,a.createContext)({searchQuery:"",setSearchQuery:()=>{},clearSearch:()=>{}}),n=()=>(0,a.useContext)(l),o=e=>{let{children:t}=e,[r,n]=(0,a.useState)(""),o=(0,a.useCallback)(()=>{n("")},[]);return(0,s.jsx)(l.Provider,{value:{searchQuery:r,setSearchQuery:n,clearSearch:o},children:t})}},1609:function(e,t,r){r.d(t,{M:function(){return l}});var s=r(3464),a=r(6430);let l={async getAll(){try{let{data:e}=await s.Z.get("".concat(a.T,"/products"));return e}catch(e){return console.error("Error fetching products:",e),[]}},async getById(e){try{let{data:t}=await s.Z.get("".concat(a.T,"/products/").concat(e));return t}catch(e){throw console.error("Error fetching product:",e),e}},async getByCategory(e){try{let{data:t}=await s.Z.get("".concat(a.T,"/products/category/").concat(e));return t}catch(e){return console.error("Error fetching products by category:",e),[]}}}}}]);