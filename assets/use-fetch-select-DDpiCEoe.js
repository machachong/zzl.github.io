import"./index-DHmCS3vm.js";/* empty css                   *//* empty css                 *//* empty css               *//* empty css                     *//* empty css                  *//* empty css                */import{r as u,l as w,d as x,c as f,L as d,E as v,D as i,u as l,C as p,I as A,K as C,ai as D,m as E,o as r,A as R}from"./vue-BIr_Kbek.js";import{a as k,n as L,a4 as M,af as T,ag as B,ah as F}from"./element-BjlEl_2X.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vxe-DNPBO-21.js";function O(c){const{api:a}=c,o=u(!1),e=u([]),m=u(""),t=()=>{o.value=!0,e.value=[],a().then(s=>{e.value=s.data}).finally(()=>{o.value=!1})};return w(()=>{t()}),{loading:o,options:e,value:m}}const P={code:0,data:[{label:"苹果",value:1},{label:"香蕉",value:2},{label:"橘子",value:3,disabled:!0}],message:"获取 Select 数据成功"},S="接口发生错误";function y(){return new Promise((c,a)=>{setTimeout(()=>{Math.random()<.8?c(P):(a(new Error(S)),k.error(S))},2e3)})}const I={class:"app-container"},U=x({__name:"use-fetch-select",setup(c){const{loading:a,options:o,value:e}=O({api:y});return(m,t)=>{const s=L,h=F,g=T,V=B,_=M;return r(),f("div",I,[d(s,{shadow:"never"},{default:i(()=>t[2]||(t[2]=[A(" 该示例是演示：通过 composable 自动调用 api 后拿到 Select 组件需要的数据并传递给 Select 组件 ")])),_:1}),v((r(),p(s,{header:"Select 示例",shadow:"never"},{default:i(()=>[d(g,{modelValue:l(e),"onUpdate:modelValue":t[0]||(t[0]=n=>E(e)?e.value=n:null),filterable:""},{default:i(()=>[(r(!0),f(C,null,D(l(o),(n,b)=>(r(),p(h,R({ref_for:!0},n,{key:b,placeholder:"请选择"}),null,16))),128))]),_:1},8,["modelValue"])]),_:1})),[[_,l(a)]]),v((r(),p(s,{header:"Select V2 示例（如果数据量过多，可以选择该组件）",shadow:"never"},{default:i(()=>[d(V,{modelValue:l(e),"onUpdate:modelValue":t[1]||(t[1]=n=>E(e)?e.value=n:null),options:l(o),filterable:"",placeholder:"请选择"},null,8,["modelValue","options"])]),_:1})),[[_,l(a)]])])}}}),Y=N(U,[["__scopeId","data-v-15aa76c1"]]);export{Y as default};
