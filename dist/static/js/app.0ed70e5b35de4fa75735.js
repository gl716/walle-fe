webpackJsonp([15],{"+bet":function(e,t){},"06/o":function(e,t){},"0xDb":function(e,t,n){"use strict";t.b=s,t.c=function(e){return void 0===e},t.a=function(e){if(!s(e))return!1;return"function"==typeof e};var r=n("pFYg"),a=n.n(r);function s(e){var t=void 0===e?"undefined":a()(e);return null!=e&&("object"===t||"function"===t)}},"1spD":function(e,t){},"3HZp":function(e,t,n){"use strict";var r=n("Dd8w"),a=n.n(r),s=n("Xxa5"),i=n.n(s),u=n("exGp"),o=n.n(u),l=n("NYxO");t.a={created:function(){var e=this;return o()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.user){t.next=3;break}return t.next=3,e.getUserInfo();case 3:case"end":return t.stop()}},t,e)}))()},methods:a()({},Object(l.b)({getUserInfo:"FETCH_USER_INFO"}))}},"4MTg":function(e,t,n){"use strict";t.f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.b)("user/",e,{isRemoveField:!0,target:".wl-table"})},t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.c)("user/",e,{headers:{"content-type":"multipart/form-data"},transformRequest:[function(e){return s.a.stringify(e)}]})},t.i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.d)("user/"+e,t,{target:".wl-table",headers:{"content-type":"multipart/form-data"},transformRequest:[function(e){return s.a.stringify(e)}]})},t.c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.d)("user/"+e+"/block/",t,{target:".wl-table",headers:{"content-type":"multipart/form-data"},transformRequest:[function(e){return s.a.stringify(e)}]})},t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.d)("user/"+e+"/active/",t,{target:".wl-table",headers:{"content-type":"multipart/form-data"},transformRequest:[function(e){return s.a.stringify(e)}]})},t.d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.a)("user/"+e,t)},t.e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.b)("general/menu",e,{target:".wl-layout"})},t.g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.c)("passport/login",e,{headers:{"content-type":"multipart/form-data"},transformRequest:[function(e){return s.a.stringify(e)}]})},t.h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.c)("passport/logout",e,{headers:{"content-type":"multipart/form-data"},transformRequest:[function(e){return s.a.stringify(e)}]})};var r=n("diZN"),a=n("mw3O"),s=n.n(a)},"4w7s":function(e,t){},"9f8z":function(e,t){},ArRN:function(e,t,n){"use strict";t.e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.b)("space/",e,{isRemoveField:!0,target:".wl-table"})},t.c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.b)("space/"+e,t)},t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.c)("space/",e,{headers:{"content-type":"multipart/form-data"},transformRequest:[function(e){return s.a.stringify(e)}]})},t.g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.d)("space/"+e,t,{target:".wl-table",headers:{"content-type":"multipart/form-data"},transformRequest:[function(e){return s.a.stringify(e)}]})},t.b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.a)("space/"+e,t)},t.f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.d)("space/"+e+"/switch",t)},t.d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.b)("space/"+e+"/members",t,{isRemoveField:!0,target:".wl-table"})};var r=n("diZN"),a=n("mw3O"),s=n.n(a)},FA0B:function(e,t){},HdUi:function(e,t){},JZFO:function(e,t){},Kiuv:function(e,t){},NCUp:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},a,!1,function(e){n("nei6")},null,null).exports,i=n("zL8q"),u=n.n(i),o=(n("tvR6"),n("Dd8w")),l=n.n(o),c=n("nvbp"),d=n.n(c),p=n("pFYg"),m=n.n(p),f=n("0xDb");var v={name:"wl-table",data:function(){return{list:[],page:{total:0,currentPage:1,size:10},sort:{prop:"",order:""}}},props:{isReload:{type:Boolean,default:!0},inline:{type:Boolean,default:!0},formSize:{type:String,default:"small"},isPage:{type:Boolean,default:!0},pageSizes:{type:Array,default:function(){return[10,20,50,100,150]}},pageSize:{type:Number,default:10},pageLayout:{type:String,default:"total, sizes, prev, pager, next"},form:{type:Object},rules:{type:Object,default:function(){return{}}},columns:{type:Array,default:function(){return[]}},onTable:{type:Object,default:function(){return{}}},elAttr:{type:Object,default:function(){return{}}},tbClass:{type:Object,default:function(){return{}}},tbStyle:{type:Object,default:function(){return{}}}},created:function(){this.page.size=this.pageSize,this.isReload&&this.$emit("callServe",this)},methods:{renderForm:function(e){return e("el-form",{ref:"form",attrs:{inline:this.inline,model:this.form,rules:this.rules,size:this.formSize}},[this.$slots.form])},renderPage:function(e){return e("el-pagination",{class:"wl-table__page",attrs:{background:!0,"current-page":this.page.currentPage,"page-sizes":this.pageSizes,"page-size":this.pageSize,layout:this.pageLayout,total:this.page.total},on:{"size-change":this.sizeChange,"current-change":this.currentChange}})},search:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.page.currentPage=1,e.$emit("callServe",e)})},refresh:function(){this.page.currentPage=1,this.$emit("callServe",this)},renderColumns:function(e){var t=this;return this._l(this.columns,function(n){return t.renderColumn(e,n)})},renderColumn:function(e,t){var n=t.render;switch(!0){case Object(f.a)(n):var r=t.methods||{},a=function e(t){if("object"!==(void 0===t?"undefined":m()(t)))return t;var n={};for(var r in t)n[r]=e(t[r]);return n}(t);return delete a.render,delete a.methods,e("el-table-column",d()([this._renderColumnProps(a),{scopedSlots:{default:function(t){return n(e,t,r)}}}]));default:return e("el-table-column",this._renderColumnProps(t))}},_renderColumnProps:function(e){return{props:l()({},e)}},resetFields:function(){this.$refs.form.resetFields()},currentChange:function(e){this.page.currentPage=e,this.$emit("callServe",this)},sizeChange:function(e){this.page.size=e,this.page.currentPage=1,this.$emit("callServe",this)},sortChange:function(e){var t=e.prop,n=e.order;this.sort.prop=t,this.sort.order=n,this.$emit("callServe",this)},$table:function(){return this.$refs.table}},render:function(e){var t={props:l()({},this.elAttr),on:l()({},this.onTable),class:l()({},this.tbClass),style:l()({},this.tbStyle)};return e("div",{class:"wl-table"},[this.$slots.form&&this.renderForm(e),e("el-table",d()([{ref:"table",attrs:{data:this.list,size:"mini"},style:"width: 100%;",on:{"sort-change":this.sortChange}},t]),[this.columns.length>0?this.renderColumns(e):this.$slots.default]),this.isPage&&this.renderPage(e)])}};var A=n("VU/8")(v,null,!1,function(e){n("znGN")},null,null).exports;A.install=function(e){e.component(A.name,A)};var h=A,g={name:"wl-breadcrumb",props:{data:{type:Array,required:!0},isBackButton:{type:Boolean,default:!0}},methods:{back:function(){var e=this.data.length;this.$router.push(this.data[e-2].to)}}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wl-breadcrumb"},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.data,function(t){return n("el-breadcrumb-item",{key:t.name,attrs:{to:{path:t.to}}},[e._v(e._s(t.name))])})),e._v(" "),e._t("default"),e._v(" "),e.isBackButton?n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.back}},[e._v("返回")]):e._e()],2)},staticRenderFns:[]};var w=n("VU/8")(g,b,!1,function(e){n("JZFO")},null,null).exports;w.install=function(e){e.component(w.name,w)};var x=w,y={name:"wl-split",props:{title:String}},j={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"wl-split"},[this._v("\n    "+this._s(this.title)+"\n")])},staticRenderFns:[]};var F=n("VU/8")(y,j,!1,function(e){n("FA0B")},null,null).exports;F.install=function(e){e.component(F.name,F)};var C=F,O={name:"wl-fullscreen",data:function(){return{id:"aasss",isSupportFullScreen:this.supportFullScreen()}},methods:{toggle:function(e){void 0===e?this.getFullScreenStatus()?this.exitFullscreen():this.enterFullscreen():e?this.enterFullscreen():this.exitFullscreen()},getFullScreenStatus:function(){return!!(document.fullscreen||document.mozFullScreen||document.fullscreenElement||document.msFullscreenElement||document.webkitIsFullScreen)},supportFullScreen:function(){var e=document.documentElement;return"requestFullscreen"in e||"mozRequestFullScreen"in e&&document.mozFullScreenEnabled||"msRequestFullscreen"in e&&document.msFullscreenEnabled||"webkitRequestFullScreen"in e},enterFullscreen:function(){var e=this.$el;e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen()},exitFullscreen:function(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}}},S={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"wl-fullscreen"},[this._t("default")],2)},staticRenderFns:[]};var E=n("VU/8")(O,S,!1,function(e){n("4w7s")},null,null).exports;E.install=function(e){e.component(E.name,E)};var U=E,N=n("woOf"),k=n.n(N),z=n("bZyb"),R=n("Xxa5"),X=n.n(R),T=n("exGp"),_=n.n(T),M=n("4MTg"),P={props:{groupUserList:{type:Array,default:function(){return[]}},spaceId:String,value:String,placeholder:{type:String,default:"请输入用户名"}},watch:{value:{immediate:!0,handler:function(e){this.keyword=e}}},data:function(){return{keyword:""}},computed:{userIds:function(){return this.groupUserList.map(function(e){return e.id})}},methods:{handleSelect:function(e){this.$emit("select",e)},querySearchAsync:function(e,t){var n=this;return _()(X.a.mark(function r(){var a,s;return X.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(M.f)({kw:e,space_id:n.spaceId});case 2:a=r.sent,s=a.data.list,t(s.filter(function(e){return-1===n.userIds.indexOf(e.id)}));case 5:case"end":return r.stop()}},r,n)}))()},resultlight:function(e,t){if(!e)return"";if(!t)return e;var n=new RegExp(t,"ig");return e.toString().replace(n,function(e){return"<span class='highlight'>"+e+"</span>"})}}},L={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wl-search"},[n("el-autocomplete",{style:{width:"400px"},attrs:{size:"small","popper-class":"wl-search__input","fetch-suggestions":e.querySearchAsync,placeholder:e.placeholder},on:{select:e.handleSelect},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.item;return[n("span",{domProps:{innerHTML:e._s(e.resultlight(r.username,e.keyword))}})]}}]),model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}},[n("template",{slot:"suffix"},[n("i",{staticClass:"el-icon-search"})])],2)],1)},staticRenderFns:[]};var H={name:"add-member",components:{SelectUser:n("VU/8")(P,L,!1,function(e){n("Kiuv")},null,null).exports},data:function(){return{form:{username:"",role_id:""},rules:{role_id:[{required:!0,message:"请选择角色",trigger:"blur"}]},error:{username:""},roles:z.c}},methods:{handleFilterSelect:function(e){k()(this.form,l()({},e))},addMember:function(){var e=this,t=!0;this.form.username||(this.error.username="请选择用户名",t=!1),this.$refs.form.validate(function(n){if(!n||!t)return!1;var r=[{user_id:e.form.user_id,role:e.form.role_id}];e.$emit("add",r)})}}},G={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{staticClass:"wl-add-member"},[n("div",{staticClass:"wl-add-member__add-header"},[e._v("添加成员")]),e._v(" "),n("div",{staticClass:"wl-add-member__add-body"},[n("el-form",{ref:"form",attrs:{model:e.form,size:"small",rules:e.rules,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"成员名称",prop:"username",error:e.error.username}},[n("select-user",{ref:"selectUser",attrs:{placeholder:"搜索添加用户",value:e.form.username},on:{select:e.handleFilterSelect}})],1),e._v(" "),n("el-form-item",{attrs:{label:"成员角色",prop:"role_id"}},[n("el-select",{style:{width:"400px"},attrs:{size:"small",placeholder:"请分配角色"},model:{value:e.form.role_id,callback:function(t){e.$set(e.form,"role_id",t)},expression:"form.role_id"}},e._l(e.roles,function(e,t){return n("el-option",{key:t,attrs:{label:e,value:t}})}))],1)],1)],1),e._v(" "),n("div",{staticClass:"wl-add-member__add-footer"},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addMember}},[e._v("添加")])],1)])},staticRenderFns:[]};var K=n("VU/8")(H,G,!1,function(e){n("06/o")},null,null).exports;K.install=function(e){e.component(K.name,K)};var q=[h,x,C,U,K],Y=navigator.userAgent,I={install:function(e){e.use(u.a),e.$loading=e.prototype.$loading=u.a.Loading.service,q.forEach(function(t){e.use(t)}),e.prototype.$isChrome=/chrome\/([\d/.]+)/i.test(Y)}};var V=n("NYxO"),W=n("1spD"),D=n("HdUi"),J=n("NCUp"),B=n("//Fk"),Z=n.n(B),Q={state:{user:null,menu:null,space:null},getters:{user:function(e){var t=e.user;return t},space:function(e){var t=e.space;return t},menu:function(e){var t=e.menu;return t},spaceId:function(e){var t=e.space;return e.user,t&&t.current?t.current.id:null},isSuper:function(e){var t=e.space;return!(!e.user||t&&t.current&&t.current.id)},spaceName:function(e){var t=e.space;return e.user?t&&t.current&&t.current.name?t.current.name:"admin":null}},mutations:{SET_USER_INFO:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.user,r=t.space,a=t.menu;e.user=n,e.space=r,e.menu=a}},actions:{FETCH_USER_INFO:function(e){var t=this,n=e.commit;return _()(X.a.mark(function e(){var r,a;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(M.e)();case 3:return r=e.sent,a=r.data,n("SET_USER_INFO",a),e.abrupt("return",Z.a.resolve());case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",Z.a.reject(e.t0));case 12:case"end":return e.stop()}},e,t,[[0,9]])}))()}}};r.default.use(V.a);var $=new V.a.Store({actions:W,getters:J,mutations:D,modules:{User:Q},strict:!1}),ee={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"wl-body"},[this._t("default")],2)},staticRenderFns:[]};var te=n("VU/8")({name:"wl-body"},ee,!1,function(e){n("+bet")},null,null).exports;te.install=function(e){e.component(te.name,te)};var ne=te,re={props:{visible:{type:Boolean,default:!1}},data:function(){return{activeName:"info",defaultIcon:z.d,info:{username:"",email:"",avatar:""},rules:{email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur"}],username:[{required:!0,message:"请输入昵称",trigger:"blur"}]}}},computed:l()({},Object(V.c)(["user"]),{uploadSrc:function(){return this.user?"http://"+location.host+"/api/user/"+this.user.id+"/avatar":""}}),watch:{user:{immediate:!0,deep:!0,handler:function(e){e&&(this.info=l()({},e))}}},methods:l()({},Object(V.b)({getUser:"FETCH_USER_INFO"}),{onCancel:function(){this.$emit("update:visible"),this.$emit("close")},save:function(){var e=this;return _()(X.a.mark(function t(){return X.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(M.i)(e.user.id,{username:e.info.username,email:e.info.email,avatar:e.info.avatar});case 2:e.getUser(),e.onCancel();case 4:case"end":return t.stop()}},t,e)}))()},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,n=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),n||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&n},handleAvatarSuccess:function(e,t){this.info.avatar=e.data.avatar}})},ae={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{staticClass:"wl-self",attrs:{width:"600px",title:"个人设置",visible:e.visible,"before-close":e.onCancel,"append-to-body":!0}},[n("el-tabs",{attrs:{"tab-position":"left"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"基本设置",name:"info"}},[n("div",{staticClass:"wl-self__info"},[n("el-form",{ref:"form",attrs:{model:e.info,"label-position":"top"}},[n("el-form-item",{attrs:{label:"Avatar"}},[n("span",{staticClass:"item"},[n("img",{staticClass:"icon",attrs:{src:e.info.avatar||e.defaultIcon}})]),e._v(" "),n("el-upload",{staticClass:"avatar-uploader",attrs:{name:"avatar",action:e.uploadSrc,"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[n("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"昵称",prop:"username",rules:e.rules.username}},[n("el-input",{model:{value:e.info.username,callback:function(t){e.$set(e.info,"username",t)},expression:"info.username"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"邮箱",prop:"email",rules:e.rules.email}},[n("el-input",{model:{value:e.info.email,callback:function(t){e.$set(e.info,"email",t)},expression:"info.email"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.save}},[e._v("更新基本信息")])],1)],1)],1)]),e._v(" "),n("el-tab-pane",{attrs:{label:"安全设置",name:"password"}},[e._v("安全设置")])],1)],1)},staticRenderFns:[]};var se=n("VU/8")(re,ae,!1,function(e){n("fzhe")},null,null).exports,ie=n("ArRN"),ue={name:"wl-header",components:{SelfDialog:se},data:function(){return{isCollapse:!1,visible:!1,defaultIcon:z.d}},computed:l()({},Object(V.c)(["space","user"]),{isSpace:function(){return this.space&&this.space.available&&this.space.current}}),methods:l()({},Object(V.b)({getUserInfo:"FETCH_USER_INFO"}),Object(V.d)({setUserInfo:"SET_USER_INFO"}),{command:function(e){this[e]&&this[e]()},logout:function(){var e=this;return _()(X.a.mark(function t(){return X.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(M.h)();case 2:e.setUserInfo(),e.$router.replace("/login");case 4:case"end":return t.stop()}},t,e)}))()},self:function(){this.visible=!0},onCollapse:function(){this.isCollapse=!this.isCollapse,this.$emit("toggle",this.isCollapse)},toggleSpace:function(e){var t=this;return _()(X.a.mark(function n(){return X.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t.space.current.id!==e.id){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,Object(ie.f)(e.id);case 4:t.$router.push("/"),t.getUserInfo();case 6:case"end":return n.stop()}},n,t)}))()}})},oe={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"wl-header"},[r("div",{staticClass:"logo",class:{"is-collapse":e.isCollapse}},[r("img",{attrs:{src:n("Nyh+")}}),e._v(" "),r("h1",[e._v("  Walle")])]),e._v(" "),r("div",{staticClass:"tool"},[r("i",{staticClass:"btn-collapse wl-icon-expend",on:{click:e.onCollapse}}),e._v(" "),r("div",{staticClass:"user"},[e.isSpace?r("el-dropdown",{staticClass:"user-info",attrs:{trigger:"click"},on:{command:e.toggleSpace}},[r("span",[e._v("\n          "+e._s(e.space.current.name)+"\n          "),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),r("el-dropdown-menu",{staticClass:"wl-header__space-menu",attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.space.available,function(t){return r("el-dropdown-item",{key:t.id,class:{selected:t.id===e.space.current.id},attrs:{command:t}},[e._v(e._s(t.name))])}))],1):e._e(),e._v(" "),r("el-dropdown",{staticClass:"user-info",on:{command:e.command}},[r("span",[r("img",{attrs:{src:e.user&&e.user.avatar||e.defaultIcon}}),e._v(" "),e.user&&e.user.username?r("span",[e._v(e._s(e.user.username))]):e._e(),e._v(" "),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{command:"self"}},[r("i",{staticClass:"wl-icon-user"}),e._v("   个人中心")]),e._v(" "),r("el-dropdown-item",{attrs:{divided:"",command:"logout"}},[r("i",{staticClass:"wl-icon-exit"}),e._v("   退出登录")])],1)],1)],1)]),e._v(" "),r("self-dialog",{attrs:{visible:e.visible},on:{"update:visible":function(t){e.visible=t}}})],1)},staticRenderFns:[]};var le=n("VU/8")(ue,oe,!1,function(e){n("gqM8")},null,null).exports;le.install=function(e){e.component(le.name,le)};var ce=le,de={name:"wl-sidebar",props:{isCollapse:{type:Boolean,default:!1}},data:function(){return{menus:[],selected:""}},computed:l()({},Object(V.c)(["menu","spaceName"])),methods:{select:function(e){this.selected=e,this.$router.push(e)},initSelected:function(e){var t=e.meta,n=e.path;t&&t.isMenu&&(this.selected=t.menu?"/"+this.spaceName+t.menu:n)}},watch:{$route:function(e){this.initSelected(e)},menu:{deep:!0,immediate:!0,handler:function(e){this.menus=e,this.spaceName&&this.initSelected(this.$route)}}}},pe={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-scrollbar",{staticClass:"wl-sidebar",class:{"is-collapse":e.isCollapse}},[n("el-menu",{attrs:{"default-active":e.selected,"background-color":"#001529","unique-opened":!0,collapse:e.isCollapse},on:{select:e.select}},e._l(e.menus,function(t,r){return t.sub_menu&&t.sub_menu.length>0?n("el-submenu",{key:"menu"+r,attrs:{index:"m"+r,"popper-class":"wl-sidebar__submenu"}},[n("template",{slot:"title"},[t.icon?n("i",{staticClass:"wl-sidebar-icon",class:[t.icon]}):e._e(),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])]),e._v(" "),e._l(t.sub_menu,function(t,a){return n("el-menu-item",{key:"wlCMenu"+r+"-"+a,attrs:{index:t.url}},[n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])])})],2):n("el-menu-item",{attrs:{index:t.url}},[t.icon?n("i",{staticClass:"wl-sidebar-icon",class:[t.icon]}):e._e(),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])])}))],1)},staticRenderFns:[]};var me=n("VU/8")(de,pe,!1,function(e){n("kOeT")},null,null).exports;me.install=function(e){e.component(me.name,me)};var fe=me,ve={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wl-content"},[t("div",{staticClass:"wl-content__main"},[this._t("default")],2)])},staticRenderFns:[]};var Ae=n("VU/8")(null,ve,!1,function(e){n("9f8z")},null,null).exports;Ae.install=function(e){e.component(Ae.name,Ae)};var he=Ae,ge={name:"layout",mixins:[n("3HZp").a],components:{wlBody:ne,wlHeader:ce,wlSidebar:fe,wlContent:he},data:function(){return{isCollapse:!1}},computed:l()({},Object(V.c)(["user","space","spaceName"])),methods:{toggle:function(e){this.isCollapse=e}}},be={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wl-layout"},[t("wl-header",{on:{toggle:this.toggle}}),this._v(" "),t("wl-body",[t("wl-sidebar",{attrs:{isCollapse:this.isCollapse}}),this._v(" "),t("wl-content",[t("router-view")],1)],1)],1)},staticRenderFns:[]};var we=n("VU/8")(ge,be,!1,function(e){n("VZfE")},null,null).exports,xe=n("/ocq"),ye=function(){return n.e(13).then(n.bind(null,"dOXA"))},je=function(){return n.e(9).then(n.bind(null,"/Fi9"))},Fe=function(){return n.e(4).then(n.bind(null,"m9Po"))},Ce=function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"HdAN"))},Oe=function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"3fVA"))},Se=function(){return n.e(5).then(n.bind(null,"7vJ7"))},Ee=function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"sroI"))},Ue=function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"CMUu"))},Ne=function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"j4WE"))},ke=function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"Pi2Z"))},ze=function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"RYHy"))},Re=function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"7hsY"))},Xe=function(){return n.e(7).then(n.bind(null,"Rm9u"))};r.default.use(xe.a);var Te=[],_e={path:"/",children:[],component:we};Te.push({path:"/login",name:"Login",component:ye}),function(e){e.push({path:"/",name:"Home",meta:{isMenu:!0},component:je})}(_e.children),function(e){e.push({path:"/:space/user/index",name:"userList",meta:{isMenu:!0,menu:"/user/index"},component:Fe})}(_e.children),function(e){e.push({path:"/:space/project/index",name:"projectList",meta:{isMenu:!0,menu:"/project/index"},component:Ce},{path:"/:space/project/create",name:"ProjectCreate",component:Oe,meta:{isMenu:!0,menu:"/project/index"},props:!0},{path:"/:space/project/edit/:id",name:"ProjectEdit",meta:{isMenu:!0,menu:"/project/index"},component:Oe,props:!0},{path:"/:space/project/members/:id",name:"ProjectMembers",meta:{isMenu:!0,menu:"/project/index"},component:Ue,props:!0},{path:"/:space/server/index",name:"Server",meta:{isMenu:!0,menu:"/server/index"},component:Se},{path:"/:space/environment/index",name:"Environment",meta:{isMenu:!0,menu:"/environment/index"},component:Ee})}(_e.children),function(e){e.push({path:"/:space/deploy/index",name:"taskList",meta:{isMenu:!0,menu:"/deploy/index"},component:Ne,props:!0},{path:"/:space/task/edit",name:"TaskEdit",component:ke,meta:{isMenu:!0,menu:"/deploy/index"},props:!0},{path:"/:space/task/edit/:taskId",name:"TaskEditOfTask",component:ke,meta:{isMenu:!0,menu:"/deploy/index"},props:!0},{path:"/:space/task/create",name:"TaskCreate",meta:{isMenu:!0,menu:"/deploy/index"},component:ze,props:!0},{path:"/:space/task/create/:projectId",name:"TaskCreateOfProject",meta:{isMenu:!0,menu:"/deploy/index"},component:ke,props:!0},{path:"/:space/task/deploy/:taskId",name:"TaskDeploy",meta:{isMenu:!0,menu:"/deploy/index"},component:Re,props:!0})}(_e.children),function(e){e.push({path:"/:space/space/index",name:"spaceList",meta:{isMenu:!0,menu:"/space/index"},component:Xe})}(_e.children);var Me=new xe.a({mode:"history",routes:Te.concat(_e,{path:"*",redirect:"/"})});r.default.config.productionTip=!1,r.default.use(I),function(e,t){var n,r=this,a=t.getters,s=t.dispatch;e.beforeEach((n=_()(X.a.mark(function e(t,n,i){var u,o,l;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(u=t.path,t.meta,!(o=t.params).space){e.next=7;break}if(a.user){e.next=5;break}return e.next=5,s("FETCH_USER_INFO");case 5:a.spaceName!==o.space&&i("/");case 7:/^http/.test(u)?(l=u.split("http")[1],window.location.href="http"+l):i();case 8:case"end":return e.stop()}},e,r)})),function(e,t,r){return n.apply(this,arguments)}))}(Me,$),new r.default({el:"#app",router:Me,store:$,components:{App:s},template:"<App/>"})},"Nyh+":function(e,t){e.exports="data:image/png;base64,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"},VZfE:function(e,t){},bZyb:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return i});var r="/api/",a={SUPER:"超级管理员",OWNER:"空间所有者",MASTER:"项目管理员",DEVELOPER:"开发者",REPORTER:"访客"},s={MASTER:"项目管理员",DEVELOPER:"开发者",REPORTER:"访客"},i="https://gw.alipayobjects.com/zos/rmsportal/eHBsAsOrrJcnvFlnzNTT.png"},diZN:function(e,t,n){"use strict";var r=n("mvHQ"),a=n.n(r),s=n("fZjL"),i=n.n(s),u=n("Dd8w"),o=n.n(u),l=n("bZyb"),c=n("//Fk"),d=n.n(c),p=n("7+uW"),m=n("mtWM"),f=n.n(m),v=n("0xDb"),A=f.a.create({timeout:2e4,withCredentials:!0}),h=[],g=!1,b=null;A.interceptors.request.use(function(e){if(e.isLoading&&(h.push(e.url),!g)){g=!0;var t={text:e.text||"努力加载中..."};e.target&&(t.target=e.target),b=p.default.$loading(t)}return e},function(e){d.a.reject(e)}),A.interceptors.response.use(function(e){var t=e.data,n=t.code,r=t.message,a=t.data,s=e.config;if(s.isLoading){var i=h.indexOf(s.url);h.splice(i,1),b&&0===h.length&&(b.close(),b=null,g=!1)}return Object(v.c)(n)?e.data:0!==n?(1e3===n?window.location.href=window.location+"login":s.isAutoMsg&&p.default.prototype.$notify.error({title:""+(s.messageTitle||""),message:""+(s.messagePrefix||"")+r}),d.a.reject({code:n,data:a,message:r})):e.data},function(e){return h=[],b&&(b.close(),b=null),g=!1,e.response,p.default.prototype.$notify.error({title:"操作提示",message:"网络异常, 请刷新重试"}),d.a.reject(e)});var w=A;t.b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=o()({},x,n);return r.params=F(t,r),w.get(j(e,r.isApiHost),r)},t.c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=o()({},x,y,n);return w.post(j(e,r.isApiHost),F(t,r),r)},t.d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=o()({},x,y,n);return w.put(j(e,r.isApiHost),F(t,r),r)},t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=o()({},x,y,n);return w.delete(j(e,r.isApiHost),F(t,r),r)};var x={isAutoMsg:!0,messageTitle:"操作提示",messagePrefix:void 0,isLoading:!0,target:void 0,hasUid:!0,isApiHost:!0,isRemoveField:!1,removeField:[]},y={headers:{"content-type":"application/json"}};function j(e,t){if(!t)return e;var n=[l.a];return n.push(e),n.join("")}function F(e,t){return t.isRemoveField?C(e,t.removeField):e}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=JSON.parse(a()(e)),r=t;return 0===t.length&&(r=i()(e)),r.forEach(function(e){var t=n[e];""!==t&&void 0!==t&&null!==t||delete n[e]}),n}},fzhe:function(e,t){},gqM8:function(e,t){},kOeT:function(e,t){},nei6:function(e,t){},tvR6:function(e,t){},znGN:function(e,t){}},["NHnr"]);