webpackJsonp([3],{"C/Qo":function(e,t){},Nesk:function(e,t){},Ydgj:function(e,t){},ixFx:function(e,t){},m9Po:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Xxa5"),s=r.n(n),a=r("exGp"),i=r.n(a),l=r("Dd8w"),o=r.n(l),c=r("NYxO"),u={props:{name:String,avatar:String}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wl-avatar"},[this.avatar?t("span",{staticClass:"icon"},[t("img",{attrs:{src:this.avatar}})]):this._e(),this._v(" "),t("span",[this._v(this._s(this.name))])])},staticRenderFns:[]};var f=r("VU/8")(u,d,!1,function(e){r("ixFx")},null,null).exports,m=r("4MTg"),p=r("bZyb"),h={props:{visible:{type:Boolean,default:!1},user:Object},data:function(){return{roles:p.b,error:this.initError(),form:this.initForm(0),updatePasswordRules:[{pattern:/(?=\d{0,}[a-zA-Z])(?=[a-zA-Z]{0,}\d)[a-zA-Z0-9]{6,}/,message:"密码强度不足",trigger:"blur"}],rules:{email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur"}],password:[{required:!0,message:"请设置密码",trigger:"blur"},{pattern:/(?=\d{0,}[a-zA-Z])(?=[a-zA-Z]{0,}\d)[a-zA-Z0-9]{6,}/,message:"密码强度不足",trigger:"blur"}],username:[{required:!0,message:"请输入用户名",trigger:"blur"}]}}},watch:{visible:{immediate:!0,handler:function(e){var t=this;if(e){if(this.user){var r=this.user,n=r.username,s=r.email,a=r.password;this.form.username=n,this.form.email=s,this.form.password=a}else this.form=this.initForm();this.$nextTick(function(){t.$refs.form&&t.$refs.form.clearValidate()})}}}},computed:{isNew:function(){return!this.user}},methods:{onOk:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.sendData()})},onCancel:function(){this.$emit("update:visible"),this.$emit("close")},initForm:function(){return{email:"",password:"",username:""}},initError:function(){return{email:"",password:"",username:""}},sendData:function(){var e=this;return i()(s.a.mark(function t(){var r,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e.error=e.initError(),t.t0=e.isNew,!t.t0){t.next=6;break}return t.next=6,Object(m.b)(e.form);case 6:if(t.t1=e.isNew,t.t1){t.next=10;break}return t.next=10,Object(m.i)(e.user.id,e.form);case 10:e.$emit("update:visible"),e.$emit("confirm"),t.next=19;break;case 14:if(t.prev=14,t.t2=t.catch(0),t.t2.code,r=t.t2.message)for(n in r)e.error[n]=r[n][0];case 19:case"end":return t.stop()}},t,e,[[0,14]])}))()}}},v={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"wl-add-user",attrs:{width:"600px",title:e.isNew?"新增用户":"编辑用户",visible:e.visible,"before-close":e.onCancel,"append-to-body":!0}},[r("el-form",{ref:"form",attrs:{model:e.form}},[r("el-form-item",{attrs:{label:"用户名","label-width":"120px",prop:"username",rules:e.rules.username,error:e.error.username}},[r("el-input",{attrs:{size:"small","auto-complete":"off"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"邮箱","label-width":"120px",prop:"email",rules:e.isNew?e.rules.email:[],error:e.error.email}},[r("el-input",{attrs:{size:"small","auto-complete":"off",disabled:!e.isNew},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码","label-width":"120px",prop:"password",rules:e.isNew?e.rules.password:e.updatePasswordRules,error:e.error.password}},[r("el-input",{attrs:{size:"small","auto-complete":"off"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.onOk}},[e._v("确定")]),e._v(" "),r("el-button",{attrs:{size:"small"},on:{click:e.onCancel}},[e._v("取消")])],1)],1)},staticRenderFns:[]};var b=r("VU/8")(h,v,!1,function(e){r("C/Qo")},null,null).exports,w=r("ArRN"),g={props:{groupUserList:{type:Array,default:function(){return[]}},spaceId:String,placeholder:{type:String,default:"请输入用户名"}},data:function(){return{keyword:""}},computed:{userIds:function(){return this.groupUserList.map(function(e){return e.id})}},methods:{handleSelect:function(e){this.keyword="",this.$emit("select",e)},querySearchAsync:function(e,t){var r=this;return i()(s.a.mark(function n(){var a,i;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(m.f)({kw:e,space_id:r.spaceId});case 2:a=n.sent,i=a.data.list,t(i.filter(function(e){return-1===r.userIds.indexOf(e.id)}));case 5:case"end":return n.stop()}},n,r)}))()},resultlight:function(e,t){if(!e)return"";if(!t)return e;var r=new RegExp(t,"ig");return e.toString().replace(r,function(e){return"<span class='highlight'>"+e+"</span>"})}}},x={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wl-search"},[r("el-autocomplete",{attrs:{size:"small","popper-class":"wl-search__input","fetch-suggestions":e.querySearchAsync,placeholder:e.placeholder},on:{select:e.handleSelect},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item;return[r("span",{domProps:{innerHTML:e._s(e.resultlight(n.username,e.keyword))}})]}}]),model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}},[r("template",{slot:"suffix"},[r("i",{staticClass:"el-icon-search"})])],2)],1)},staticRenderFns:[]};var k=r("VU/8")(g,x,!1,function(e){r("Nesk")},null,null).exports,_={name:"user-list",mixins:[r("3HZp").a],components:{addUserDialog:b,SelectUser:k},data:function(){return{enableCreate:!1,value:"",columns:function(){var e=this;return[{label:"用户名",width:250,prop:"username",render:function(e,t){return e(f,{attrs:{name:t.row.username,avatar:t.row.avatar}})}},{label:"邮箱",width:250,prop:"email"},{label:"状态",width:250,prop:"status"},{label:"操作",minWidth:200,render:function(t,r,n){return e.renderTools(r)}}]}.call(this),currentEditUser:null,addUserDialogVisible:!1,spaceAllData:null}},watch:{value:function(){this.search()}},computed:o()({},Object(c.c)(["spaceId"])),created:function(){var e=this;return i()(s.a.mark(function t(){var r,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(w.c)(e.spaceId);case 2:r=t.sent,n=r.data,e.spaceAllData=n;case 5:case"end":return t.stop()}},t,e)}))()},methods:{callServe:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$refs.table;return i()(s.a.mark(function r(){var n,a,i,l,o;return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(m.f)({size:t.page.size,page:t.page.currentPage,kw:e.value});case 2:n=r.sent,a=n.data,i=a.list,l=a.count,o=a.enable_create,e.enableCreate=o,t.page.total=l,t.list=i;case 10:case"end":return r.stop()}},r,e)}))()},search:function(){this.callServe()},getAllMembers:function(){var e=this;return i()(s.a.mark(function t(){var r,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(w.c)(e.spaceId);case 2:r=t.sent,n=r.data,e.spaceAllData=n;case 5:case"end":return t.stop()}},t,e)}))()},handleFilterSelect:function(e){var t=this;return i()(s.a.mark(function r(){return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(w.f)(t.spaceId,o()({},t.spaceAllData,{members:[].concat(t.spaceAllData.members,[e])}));case 2:t.getAllMembers(),t.callServe(),t.$message({type:"success",message:"添加成功!"});case 5:case"end":return r.stop()}},r,t)}))()},addUser:function(){this.addUserDialogVisible=!0},edit:function(e){this.addUserDialogVisible=!0,this.currentEditUser=o()({},e)},lock:function(e){var t=this;return i()(s.a.mark(function r(){return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if("正常"!==e.status){r.next=5;break}return r.next=3,Object(m.c)(e.id);case 3:r.next=8;break;case 5:if(2!==e.status){r.next=8;break}return r.next=8,Object(m.a)(e.id);case 8:t.callServe();case 9:case"end":return r.stop()}},r,t)}))()},delete:function(e){var t=this;this.$confirm("确定删除该用户吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.deleteUser(e)}).catch(function(){})},deleteUser:function(e){var t=this;return i()(s.a.mark(function r(){return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(m.d)(e.id);case 2:t.callServe(),t.$message({type:"success",message:"删除成功!"});case 4:case"end":return r.stop()}},r,t)}))()},confirm:function(e){this.currentEditUser=null,this.callServe()},close:function(){this.currentEditUser=null},renderEditTool:function(e){var t=this,r=this.$createElement;return e.enable_update?r("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-edit"},on:{click:function(){return t.edit(o()({},e))}}},["编辑"]):null},renderDeleteTool:function(e){var t=this,r=this.$createElement;return e.enable_delete?r("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-delete"},class:"user-delete",on:{click:function(){return t.delete(o()({},e))}}},["删除"]):null},renderBlockTool:function(e){var t=this,r=this.$createElement;return e.enable_block?r("el-button",{attrs:{type:"text",size:"small",icon:"wl-icon-lock"},on:{click:function(){return t.lock(o()({},e))}}},["正常"===e.status?"冻结":"激活"]):null},renderTools:function(e){return(0,this.$createElement)("div",[this.renderEditTool(e.row),this.renderDeleteTool(e.row),this.renderBlockTool(e.row)])}}},y={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wl-user-list"},[r("el-form",{attrs:{inline:!0},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",[r("select-user",{attrs:{placeholder:"搜索添加用户"},on:{select:e.handleFilterSelect}})],1),e._v(" "),e.enableCreate?r("el-form-item",[r("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:e.addUser}},[e._v("添加")])],1):e._e()],1),e._v(" "),r("wl-table",{ref:"table",attrs:{columns:e.columns},on:{callServe:e.callServe}}),e._v(" "),r("add-user-dialog",{attrs:{visible:e.addUserDialogVisible,user:e.currentEditUser},on:{"update:visible":function(t){e.addUserDialogVisible=t},confirm:e.confirm,close:e.close}})],1)},staticRenderFns:[]};var $=r("VU/8")(_,y,!1,function(e){r("Ydgj")},null,null);t.default=$.exports}});