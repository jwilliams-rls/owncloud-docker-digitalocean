import{d as a,g as t,o,c as r,f as d,h as D,e as c,w as h,a as F,j as f}from"./chunks/vendor-2c44cb30.mjs";import{a as g}from"./chunks/useAppDefaults-324f07ea.mjs";import{_ as l}from"./chunks/eventBus-bf81ca73.mjs";import{A as w}from"./chunks/AppTopBar-d00b7bc4.mjs";import"./chunks/useAuthService-746ac4ed.mjs";import"./chunks/useDriveResolver-f387970c.mjs";import"./chunks/useStore-acb4016c.mjs";const V={},v={"Loading PDF document":"Зареждане на PDF документ","PDF Viewer":"Преглед на PDF"},$={"Loading PDF document":"Načítání PDF dokumentu","PDF Viewer":"PDF prohlížeč"},k={"Loading PDF document":"Das PDF-Dokument wird geladen","PDF Viewer":"PDF-Vorschau"},y={"Loading PDF document":"Cargando documento PDF","PDF Viewer":"Visor PDF"},x={"Loading PDF document":"Chargement du document PDF","PDF Viewer":"Visionneuse PDF"},L={},C={"Loading PDF document":"מסמך PDF נטען","PDF Viewer":"מציג PDF"},b={"Loading PDF document":"Caricamento documento PDF","PDF Viewer":"Visualizzatore PDF"},A={"Loading PDF document":"Ładowanie dokumentu PDF","PDF Viewer":"Podgląd PDF"},E={"Loading PDF document":"Загрузка PDF документа","PDF Viewer":"PDF Просмотрщик"},B={},I={"Loading PDF document":"Po ngarkohet dokument PDF","PDF Viewer":"Parës PDF-sh"},N={"Loading PDF document":"PDF dokümanı yükleniyor","PDF Viewer":"PDF Görüntüleyici"},z={ar:V,bg:v,cs:$,de:k,es:y,fr:x,gl:L,he:C,it:b,pl:A,ru:E,sk:B,sq:I,tr:N},S=a({name:"ErrorScreen"}),T={class:"oc-position-center oc-text-center"};function U(e,s,p,u,m,P){const n=t("oc-icon");return o(),r("div",T,[d(n,{size:"xxlarge",name:"error-warning","fill-type":"line"})])}const j=l(S,[["render",U]]),q=a({name:"LoadingScreen"}),R={class:"oc-position-center oc-text-center"},G={class:"oc-invisible"};function H(e,s,p,u,m,P){const n=t("oc-spinner"),i=D("translate");return o(),r("div",R,[d(n,{size:"xlarge"}),c(),h((o(),r("p",G,[c("Loading PDF document")])),[[i]])])}const J=l(q,[["render",H]]),K=a({name:"PDFViewer",components:{ErrorScreen:j,LoadingScreen:J,AppTopBar:w},setup(){return{...g({applicationId:"pdf-viewer"})}},data:()=>({loading:!0,loadingError:!1,url:"",resource:null}),watch:{currentFileContext:{handler:function(){this.unloadPdf(),this.loadPdf(this.currentFileContext)},immediate:!0}},beforeUnmount(){this.unloadPdf()},methods:{async loadPdf(e){try{this.loading=!0,this.resource=await this.getFileInfo(e),this.replaceInvalidFileRoute(this.currentFileContext,this.resource),this.url=await this.getUrlForResource(e.space,this.resource,{disposition:"inline"})}catch(s){this.loadingError=!0,console.error("Error fetching pdf",s)}finally{this.loading=!1}},unloadPdf(){this.revokeUrl(this.url)}}});const M={key:2,class:"oc-height-1-1"},O=["data"];function Q(e,s,p,u,m,P){const n=t("app-top-bar"),i=t("loading-screen"),_=t("error-screen");return o(),r("main",null,[d(n,{resource:e.resource,onClose:e.closeApp},null,8,["resource","onClose"]),c(),e.loading?(o(),F(i,{key:0})):e.loadingError?(o(),F(_,{key:1})):(o(),r("div",M,[f("object",{class:"pdf-viewer oc-width-1-1",data:e.url,type:"application/pdf"},null,8,O)]))])}const W=l(K,[["render",Q],["__scopeId","data-v-3c10386e"]]);const X=[{path:"/:driveAliasAndItem(.*)?",component:W,name:"pdf-viewer",meta:{authContext:"hybrid",title:"PDF Viewer",patchCleanPath:!0}}],Y={name:"PDF Viewer",id:"pdf-viewer",icon:"resource-type-pdf",iconFillType:"fill",extensions:[{extension:"pdf",routeName:"pdf-viewer",canBeDefault:!0}]},ie={appInfo:Y,routes:X,translations:z};export{ie as default};
