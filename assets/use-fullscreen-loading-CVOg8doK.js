import"./index-DRytC9ZF.js";/* empty css                  *//* empty css                *//* empty css                   */import{ai as m,n as _,q as g,a as u}from"./element-BjlEl_2X.js";import{d as f,c as y,L as n,D as a,I as c,o as E}from"./vue-BIr_Kbek.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vxe-DNPBO-21.js";const x={lock:!0,text:"加载中..."},p=(o,e={})=>{let r;return async(...i)=>{try{return r=m.service({...x,...e}),await o(...i)}finally{r.close()}}},C={code:0,data:{list:[]},message:"获取成功"};function S(o){return new Promise(e=>{setTimeout(()=>{e({...C,data:{list:o}})},1e3)})}function v(){return new Promise((o,e)=>{setTimeout(()=>{e(new Error("发生错误"))},1e3)})}const k={class:"app-container"},A=`
  <path class="path" d="
    M 30 15
    L 28 17
    M 25.61 25.61
    A 15 15, 0, 0, 1, 15 30
    A 15 15, 0, 1, 1, 27.99 7.5
    L 15 15
  " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
`,L=f({__name:"use-fullscreen-loading",setup(o){const e={text:"即将发生错误...",background:"#F56C6C20",svg:A,svgViewBox:"-10, -10, 50, 50"};async function r(){const s=await p(S)([1,2,3]);u.success(`${s.message}，传参为 ${s.data.list.toString()}`)}async function i(){try{await p(v,e)()}catch(s){u.error(s.message)}}return(s,t)=>{const l=_,d=g;return E(),y("div",k,[n(l,{shadow:"never"},{default:a(()=>t[0]||(t[0]=[c(" 该示例是演示：通过将要执行的函数传递给 composable，让 composable 自动开启全屏 loading，函数执行结束后自动关闭 loading ")])),_:1}),n(l,{header:"示例",shadow:"never"},{default:a(()=>[n(d,{type:"primary",onClick:r},{default:a(()=>t[1]||(t[1]=[c(" 查询成功 ")])),_:1}),n(d,{type:"danger",onClick:i},{default:a(()=>t[2]||(t[2]=[c(" 查询失败 ")])),_:1})]),_:1})])}}}),q=w(L,[["__scopeId","data-v-d330363c"]]);export{q as default};
