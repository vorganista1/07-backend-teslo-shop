import{u as _,a as m}from"./get-product-image.action-CKjE1MsV.js";import{u as f,_ as h,g as i}from"./usePagination-CGiImT16.js";import{d as y,w as g,h as b,c as r,o as n,a as e,f as d,F as w,r as v,n as k,i as q,j as C,t as c,u as o}from"./index-B_IiZ7jn.js";const P={class:"bg-white px-5 py-2 rounded"},F={class:"py-8 w-full"},V={class:"shadow overflow-hidden rounded border-b border-gray-200"},j={class:"min-w-full bg-white"},B={class:"text-gray-700"},L={class:"text-left py-3 px-4"},N=["src","alt"],Q={class:"text-left py-3 px-4"},T={class:"text-left py-3 px-4"},$={class:"bg-blue-200 text-blue-600 py-1 px-3 rounded-full test-xs"},z={class:"text-left py-3 px-4"},I=y({__name:"ProductsView",setup(E){const u=_(),{page:s}=f(),{data:l}=m({queryKey:["products",{page:s}],queryFn:()=>i(s.value)});return g(()=>{u.prefetchQuery({queryKey:["products",{page:s.value+1}],queryFn:()=>i(s.value+1)})}),(K,a)=>{const p=b("RouterLink");return n(),r("div",P,[a[1]||(a[1]=e("h1",{class:"text-3xl"},"Productos",-1)),e("div",F,[e("div",V,[e("table",j,[a[0]||(a[0]=e("thead",{class:"bg-gray-800 text-white"},[e("tr",null,[e("th",{class:"w-10 text-left py-3 px-4 uppercase font-semibold text-sm"},"Imagen"),e("th",{class:"flex-1 text-left py-3 px-4 uppercase font-semibold text-sm"},"Titulo"),e("th",{class:"w-28 py-3 px-4 uppercase font-semibold text-sm"},"Precio"),e("th",{class:"w-60 text-left py-3 px-4 uppercase font-semibold text-sm"},"Tallas")])],-1)),e("tbody",B,[(n(!0),r(w,null,v(o(l),(t,x)=>(n(),r("tr",{key:t.id,class:k({"bg-gray-100":x%2===0})},[e("td",L,[e("img",{src:t.images[0],alt:t.title,class:"h-10 w-10 object-cover"},null,8,N)]),e("td",Q,[d(p,{to:`/admin/products/${t.id}`,class:"hover:text-blue-500 hover:underline"},{default:q(()=>[C(c(t.title),1)]),_:2},1032,["to"])]),e("td",T,[e("span",$," $"+c(t.price),1)]),e("td",z,c(t.sizes.join(",")),1)],2))),128))])]),d(h,{page:o(s),"has-more-data":!!o(l)&&o(l).length<10},null,8,["page","has-more-data"])])])])}}});export{I as default};
