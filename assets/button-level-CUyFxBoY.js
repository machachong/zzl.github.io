import{l as g,e as E}from"./index-DHmCS3vm.js";/* empty css                    *//* empty css               *//* empty css                *//* empty css                  */import{S as P}from"./SwitchRoles-t1OoHnBV.js";import{q as x,n as h,ak as w,p as y,u as C,l as T}from"./element-BjlEl_2X.js";import{d as B,ak as D,c as z,o as a,L as o,D as t,E as _,C as r,I as n,G as u,u as f}from"./vue-BIr_Kbek.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vxe-DNPBO-21.js";function v(s){if(g(s)&&s.length>0){const{roles:i}=E();return i.some(e=>s.includes(e))}else return console.error("参数必须是一个数组且长度大于 0，参考：checkPermission(['admin', 'editor'])"),!1}const S={class:"app-container"},V=B({__name:"button-level",setup(s){return(i,e)=>{const l=x,m=h,b=w,d=T,c=C,k=y,p=D("permission");return a(),z("div",S,[o(P),o(m,{header:"权限指令 v-permission 示例",shadow:"never",class:"margin-top-20"},{default:t(()=>[_((a(),r(l,null,{default:t(()=>e[0]||(e[0]=[n(" admin ")])),_:1})),[[p,["admin"]]]),_((a(),r(l,null,{default:t(()=>e[1]||(e[1]=[n(" admin 和 editor ")])),_:1})),[[p,["admin","editor"]]])]),_:1}),o(m,{header:"权限函数 checkPermission 示例",shadow:"never",class:"margin-top-20"},{default:t(()=>[o(b,{type:"warning",size:"large"},{default:t(()=>e[2]||(e[2]=[n(" Element Plus 的 el-tab-pane 和 el-table-column 以及其它动态渲染 DOM 的场景不适合使用 v-permission 这种情况下你可以通过 v-if + checkPermission 来实现 ")])),_:1}),o(k,{type:"border-card",class:"margin-top-20"},{default:t(()=>[f(v)(["admin"])?(a(),r(c,{key:0,label:"admin"},{default:t(()=>[o(d,{size:"large"},{default:t(()=>e[3]||(e[3]=[n(` v-if="checkPermission(['admin'])" `)])),_:1})]),_:1})):u("",!0),f(v)(["admin","editor"])?(a(),r(c,{key:1,label:"admin 和 editor"},{default:t(()=>[o(d,{size:"large"},{default:t(()=>e[4]||(e[4]=[n(` v-if="checkPermission(['admin', 'editor'])" `)])),_:1})]),_:1})):u("",!0)]),_:1})]),_:1})])}}}),H=N(V,[["__scopeId","data-v-3d1bb89f"]]);export{H as default};
