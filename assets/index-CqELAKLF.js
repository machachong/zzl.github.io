import{j as b,e as no}from"./index-DYOLIVMd.js";import{a2 as h}from"./element-BjlEl_2X.js";import{_ as eo}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as v,l as ao,P as io,c as O,o as B,a as u,K as z,ai as so,J as A,d as lo,C as ro}from"./vue-BIr_Kbek.js";import"./vxe-DNPBO-21.js";function po(c){return b({url:"/bigdata/realtime/v1.1/grid_poprank",method:"post",data:c})}function co(c){return b({url:"/bigdata/realtime/v1.1/region",method:"post",data:c})}function uo(c){return b({url:"/bigdata/realtime/v1.1/region_grid_pop",method:"post",data:c})}function go(c){return b({url:"/bigdata/realtime/v1.1/population",method:"post",data:c})}function _o(c){return b({url:"/bigdata/realtime/v1.1/grid_basicinfo/list",method:"post",data:c})}const fo={class:"hot-list"},vo={class:"rank"},wo={class:"name"},yo={class:"count"},ho="YNDBZ-OWO6Z-QOEXI-7AXSB-HCH4V-6DF6G",mo={__name:"TencentMap3",setup(c){const _=v(["11260"]),f=v(),g=v([]),j=v([]),H=v(),d=v(),T=v();let L=0,k=0,C=v([]);function K(){document.getElementById("info");let t=new TMap.LatLng(L,k);f.value=new TMap.Map("container",{zoom:17,center:t}),g.value.forEach(o=>{var n,s,a,p;let e=new TMap.InfoWindow({map:f.value,position:o.position,offset:{x:90,y:0},content:`人流量 - ${(n=d.value)==null?void 0:n.time}：${o==null?void 0:o.count}`}),l=new TMap.InfoWindow({map:f.value,position:o.position2,offset:{x:90,y:-70},content:`区域人数 - ${(s=d.value)==null?void 0:s.time}：${(a=d.value)==null?void 0:a.value}`});o.grid_list;const r=[];(p=o.grid_list)==null||p.forEach((i,w)=>{var $,W,X,Z,G,N,V,Q,q;const y=(X=(W=($=i==null?void 0:i.point[0])==null?void 0:$.grid_location)==null?void 0:W.center_gcj)==null?void 0:X.split(","),D=new TMap.LatLng(y[0],y[1]),m=(N=(G=(Z=i==null?void 0:i.point[0])==null?void 0:Z.grid_location)==null?void 0:G.left_down_gcj)==null?void 0:N.split(","),M=(q=(Q=(V=i==null?void 0:i.point[0])==null?void 0:V.grid_location)==null?void 0:Q.right_upper_gcj)==null?void 0:q.split(","),oo=[new TMap.LatLng(m[0],M[1]),new TMap.LatLng(m[0],m[1]),new TMap.LatLng(M[0],m[1]),new TMap.LatLng(M[0],M[1])],to=new TMap.InfoWindow({map:f.value,position:D,content:`网格人数：${i.grid_pop}`});r.push({grid_id:i.grid_id,obj:to}),new TMap.MultiPolygon({id:`polygon-layer${w}`,map:f.value,styles:{polygon:new TMap.PolygonStyle({color:"rgba(244,136,110,0.5)",showBorder:!0,borderColor:"#fff"})},geometries:[{id:`polygon${w}`,styleId:"polygon",paths:oo,properties:{title:"polygon"}}]})}),j.value.push({id:o==null?void 0:o.id,obj:e,obj2:l,obj3:r})}),new TMap.MultiPolygon({map:f.value,geometries:C.value,styles:{polygon:new TMap.PolygonStyle({color:"#3777FF",showBorder:!1,borderColor:"#00FFFF"})}}),new TMap.MultiPolyline({map:f.value,zIndex:1,styles:{polygon:new TMap.PolylineStyle({color:"rgba(244,136,110,0.8)",showBorder:!1,borderColor:"#FF0000"}),highlight:new TMap.PolylineStyle({color:"rgba(244,136,110,0.8)",width:4,showBorder:!1,borderColor:"#fff",borderWidth:1})}})}async function R(t){try{const o=await co({id:t,key:ho});if(o.status===0){const e=o.data.center.split(",");L=e[0],k=e[1];const l=o.data.boundary.split("|"),r={paths:[]};g.value.forEach(n=>{n.id==t&&(n.position=new TMap.LatLng(o.data.upper_right.split(",")[0],o.data.upper_right.split(",")[1]),n.position2=new TMap.LatLng(o.data.upper_right.split(",")[0],o.data.upper_right.split(",")[1]))});for(let n=0;n<l.length;n++){const a=l[n].split(",");r.paths.push({lat:a[0]-0,lng:a[1]-0,height:0})}C.value.push(r),g.value}}catch{}}function E(t){return(t?h(t):h()).subtract(3,"minute").set("second",0).set("millisecond",0).unix()}function U(){let t=h();t=t.subtract(5,"minute");const o=Math.floor(t.minute()/5)*5;return t=t.minute(o).second(0).millisecond(0),t}function F(){return h(h().startOf("hour").format("YYYY-MM-DD HH:00:00")).unix()}function P(){return h(h().startOf("hour").add(1,"hour").format("YYYY-MM-DD HH:00:00")).unix()}async function Y(){var t,o,e,l,r;try{const n=await uo({region_ids:_.value,time:E((t=d.value)==null?void 0:t.time),key:"YNDBZ-OWO6Z-QOEXI-7AXSB-HCH4V-6DF6G"});n.status===0&&((o=n==null?void 0:n.data)==null||o.region_list,(e=g.value)!=null&&e.length?(l=g.value)==null||l.forEach(s=>{var p,i,w;const a=(i=(p=n==null?void 0:n.data)==null?void 0:p.region_list)==null?void 0:i.find(y=>y.region_id==s.id);s.count=(w=a==null?void 0:a.grid_list)==null?void 0:w.reduce((y,D)=>y+D.grid_pop,0),s.grid_list=a==null?void 0:a.grid_list}):g.value=(r=n==null?void 0:n.data)==null?void 0:r.region_list.map(s=>{var a;return{id:s==null?void 0:s.region_id,grid_list:s==null?void 0:s.grid_list,count:(a=s==null?void 0:s.grid_list)==null?void 0:a.reduce((p,i)=>p+i.grid_pop,0)}}))}catch(n){}}async function S(t){var e;F(),P();const o=await go({id:t,begin:F(),end:P(),interval:5,people_type:"all",key:"YNDBZ-OWO6Z-QOEXI-7AXSB-HCH4V-6DF6G"});d.value=o==null?void 0:o.data[((e=o==null?void 0:o.data)==null?void 0:e.length)-1],d.value}async function J(){const t=g.value[0];for(let o in t.grid_list){const e=await x({adcode:"310000",grid_ids:[t.grid_list[o].grid_id],key:"YNDBZ-OWO6Z-QOEXI-7AXSB-HCH4V-6DF6G"});t.grid_list[o].point=e}}async function x(t){var e;const o=await _o(t);return(e=o==null?void 0:o.data)==null?void 0:e.grid_list}const I=async()=>{var t,o,e,l;try{const r=await po({adcode:"310000",time:E((t=d.value)==null?void 0:t.time),rank_type:0,key:"YNDBZ-OWO6Z-QOEXI-7AXSB-HCH4V-6DF6G"});T.value=(e=(o=r.data)==null?void 0:o.list)==null?void 0:e.splice(0,10);const n=(l=T.value)==null?void 0:l.map(a=>a.grid_id),s=await x({adcode:"310000",grid_ids:n,key:"YNDBZ-OWO6Z-QOEXI-7AXSB-HCH4V-6DF6G"});T.value.forEach((a,p)=>{var i;a.grid_name=(i=s[p])==null?void 0:i.grid_name})}catch(r){}};return ao(async()=>{I(),U();for(let t in _.value)await S(_.value[t]);await Y();for(let t in _.value)await R(_.value[t]);await J(),K(),H.value=setInterval(async()=>{for(let t in _.value)await S(_.value[t]);await Y(),I(),j.value.forEach(t=>{var e,l,r,n,s;const o=(e=g.value)==null?void 0:e.find(a=>a.id==t.id);t.obj.setContent(`人流量 - ${(l=d.value)==null?void 0:l.time}：${o==null?void 0:o.count}`),t.obj2.setContent(`区域人数 - ${(r=d.value)==null?void 0:r.time}：${(n=d.value)==null?void 0:n.value}`),((s=t==null?void 0:t.obj3)==null?void 0:s.length)>0&&t.obj3.forEach(a=>{var i;const p=(i=o.grid_list)==null?void 0:i.find(w=>w.grid_id==a.grid_id);a.obj.setContent(`网格人数：${p.grid_pop}`)})})},6e4)}),io(()=>{clearInterval(H.value)}),(t,o)=>(B(),O(z,null,[o[1]||(o[1]=u("div",{id:"container"},null,-1)),o[2]||(o[2]=u("div",{id:"info",style:{width:"100%",height:"500px"}},null,-1)),u("div",fo,[o[0]||(o[0]=u("li",null,[u("span",{class:"rank"},"排名"),u("span",{class:"name"},"位置"),u("span",{class:"count"},"人数")],-1)),(B(!0),O(z,null,so(T.value,(e,l)=>(B(),O("li",{key:l},[u("span",vo,A(e.rank),1),u("span",wo,A(e.grid_name),1),u("span",yo,A(e.grid_pop),1)]))),128))])],64))}},Mo=eo(mo,[["__scopeId","data-v-fc428355"]]),Ao=lo({__name:"index",setup(c){return no().roles.includes("admin"),(f,g)=>(B(),ro(Mo))}});export{Ao as default};
