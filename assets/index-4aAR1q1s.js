import"./index-DRytC9ZF.js";/* empty css                  */import{g as M,d as P}from"./el-message-box-B3CDZ8FE.js";import{L as l,d as S,r as w,V as _,n as $,c as E,D as d,A as C,u as g,ac as b,I as h,o as R}from"./vue-BIr_Kbek.js";/* empty css                 *//* empty css                   */import{ad as U,a as D,a3 as q,q as B}from"./element-BjlEl_2X.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vxe-DNPBO-21.js";const I={default:({row:y,column:n})=>{const i=y[n.field];return[l("span",{class:`el-tag el-tag--${i==="admin"?"primary":"warning"} el-tag--plain`},[i])]}},O={default:({row:y,column:n})=>{const i=y[n.field],[u,x]=i?["success","启用"]:["danger","禁用"];return[l("span",{class:`el-tag el-tag--${u} el-tag--plain`},[x])]}},V={class:"app-container"},A=S({name:"VxeTable",__name:"index",setup(y){const n=w(),i=_({loading:!0,autoResize:!0,pagerConfig:{align:"right"},formConfig:{items:[{field:"username",itemRender:{name:"$input",props:{placeholder:"用户名",clearable:!0}}},{field:"phone",itemRender:{name:"$input",props:{placeholder:"手机号",clearable:!0}}},{itemRender:{name:"$buttons",children:[{props:{type:"submit",content:"查询",status:"primary"}},{props:{type:"reset",content:"重置"}}]}}]},toolbarConfig:{refresh:!0,custom:!0,slots:{buttons:"toolbar-btns"}},customConfig:{checkMethod:({column:e})=>!["username"].includes(e.field)},columns:[{type:"checkbox",width:"50px"},{field:"username",title:"用户名"},{field:"roles",title:"角色",slots:I},{field:"phone",title:"手机号"},{field:"email",title:"邮箱"},{field:"status",title:"状态",slots:O},{field:"createTime",title:"创建时间"},{title:"操作",width:"150px",fixed:"right",showOverflow:!1,slots:{default:"row-operate"}}],proxyConfig:{seq:!0,form:!0,autoLoad:!0,props:{total:"total"},ajax:{query:({page:e,form:t})=>(i.loading=!0,r.clearTable(),new Promise(o=>{let a=0,c=[];const p=s=>{s!=null&&s.data&&(a=s.data.total,c=s.data.list),i.loading=!1,o({total:a,result:c})},f={username:t.username||"",phone:t.phone||"",size:e.pageSize,currentPage:e.currentPage};M(f).then(p).catch(p)}))}}}),u=w(),x=_({title:"",showClose:!0,escClosable:!0,maskClosable:!0,beforeHideMethod:()=>{var e;return(e=v.value)==null||e.clearValidate(),Promise.resolve()}}),v=w(),m=_({span:24,titleWidth:"100px",loading:!1,titleColon:!1,data:{username:"",password:""},items:[{field:"username",title:"用户名",itemRender:{name:"$input",props:{placeholder:"请输入"}}},{field:"password",title:"密码",itemRender:{name:"$input",props:{placeholder:"请输入"}}},{align:"right",itemRender:{name:"$buttons",children:[{props:{content:"取消"},events:{click:()=>{var e;return(e=u.value)==null?void 0:e.close()}}},{props:{type:"submit",content:"确定",status:"primary"},events:{click:()=>r.onSubmitForm()}}]}}],rules:{username:[{required:!0,validator:({itemValue:e})=>{switch(!0){case!e:return new Error("请输入");case!e.trim():return new Error("空格无效")}}}],password:[{required:!0,validator:({itemValue:e})=>{switch(!0){case!e:return new Error("请输入");case!e.trim():return new Error("空格无效")}}}]}}),r=_({isUpdate:!0,commitQuery:()=>{var e;return(e=n.value)==null?void 0:e.commitProxy("query")},clearTable:()=>{var e;return(e=n.value)==null?void 0:e.reloadData([])},onShowModal:e=>{var o,a,c,p;e?(r.isUpdate=!0,x.title="修改用户",m.data.username=e.username):(r.isUpdate=!1,x.title="新增用户");const t=(c=(a=(o=m.items)==null?void 0:o[0])==null?void 0:a.itemRender)==null?void 0:c.props;t&&(t.disabled=r.isUpdate),(p=u.value)==null||p.open(),$(()=>{var f,s;!r.isUpdate&&((f=v.value)==null||f.reset()),(s=v.value)==null||s.clearValidate()})},onSubmitForm:()=>{var e;m.loading||(e=v.value)==null||e.validate(t=>{if(t)return;m.loading=!0;const o=()=>{var a;m.loading=!1,(a=u.value)==null||a.close(),D.success("操作成功"),!r.isUpdate&&r.afterInsert(),r.commitQuery()};r.isUpdate?setTimeout(()=>o(),1e3):setTimeout(()=>o(),1e3)})},afterInsert:()=>{var t,o;const e=(o=(t=n.value)==null?void 0:t.getProxyInfo())==null?void 0:o.pager;e&&e.currentPage*e.pageSize===e.total&&++e.currentPage},onDelete:e=>{const t=`确定 <strong style="color: var(--el-color-danger);"> 删除 </strong> 用户 <strong style="color: var(--el-color-primary);"> ${e.username} </strong> ？`,o={type:"warning",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0};U.confirm(t,"提示",o).then(()=>{P(e.id).then(()=>{D.success("删除成功"),r.afterDelete(),r.commitQuery()})})},afterDelete:()=>{var o,a;const e=n.value.getData(),t=(a=(o=n.value)==null?void 0:o.getProxyInfo())==null?void 0:a.pager;t&&t.currentPage>1&&e.length===1&&--t.currentPage},moreFn:()=>{}});return(e,t)=>{const o=q,a=b("vxe-button"),c=B,p=b("vxe-grid"),f=b("vxe-form"),s=b("vxe-modal");return R(),E("div",V,[l(o,{title:"数据来源",type:"success",description:"由 Apifox 提供在线 Mock，数据不具备真实性，仅供简单的 CRUD 操作演示。","show-icon":""}),l(p,C({ref_key:"xGridDom",ref:n},g(i)),{"toolbar-btns":d(()=>[l(a,{status:"primary",icon:"vxe-icon-add",onClick:t[0]||(t[0]=k=>g(r).onShowModal())},{default:d(()=>t[1]||(t[1]=[h(" 新增用户 ")])),_:1}),l(a,{status:"danger",icon:"vxe-icon-delete"},{default:d(()=>t[2]||(t[2]=[h(" 批量删除 ")])),_:1})]),"row-operate":d(({row:k})=>[l(c,{link:"",type:"primary",onClick:T=>g(r).onShowModal(k)},{default:d(()=>t[3]||(t[3]=[h(" 修改 ")])),_:2},1032,["onClick"]),l(c,{link:"",type:"danger",onClick:T=>g(r).onDelete(k)},{default:d(()=>t[4]||(t[4]=[h(" 删除 ")])),_:2},1032,["onClick"])]),_:1},16),l(s,C({ref_key:"xModalDom",ref:u},g(x)),{default:d(()=>[l(f,C({ref_key:"xFormDom",ref:v},g(m)),null,16)]),_:1},16)])}}}),K=F(A,[["__scopeId","data-v-14111952"]]);export{K as default};
