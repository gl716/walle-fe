webpackJsonp([10],{HdAN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),a=n.n(r),l=n("Xxa5"),i=n.n(l),s=n("exGp"),c=n.n(s),o={0:"无效",1:"正常"},u=n("oZit"),d={name:"roles",mixins:[n("3HZp").a],data:function(){return{enableCreate:!1,value:"",columns:function(){var e=this;return[{prop:"name",label:"项目名",width:180},{prop:"status",label:"状态",width:180,render:function(e,t){return o[t.row.status]}},{prop:"version",label:"版本",width:180},{label:"操作",minWidth:200,render:function(t,n,r){return t("div",[e.renderMemberTool(n.row),e.renderEditTool(n.row),e.renderDeleteTool(n.row)])}}]}.call(this),form:{search:""},breadcrumbData:[{to:"",name:"项目"}]}},watch:{value:function(){this.search()}},methods:{callServe:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$refs.table;return c()(i.a.mark(function n(){var r,a,l,s,c;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u.d)({size:t.page.size,page:t.page.currentPage,kw:e.value});case 2:r=n.sent,a=r.data,l=a.list,s=a.count,c=a.enable_create,e.enableCreate=c,t.page.total=s,t.list=l;case 10:case"end":return n.stop()}},n,e)}))()},search:function(){this.callServe()},addProject:function(){this.$router.push("/"+this.spaceName+"/project/create")},edit:function(e){this.$router.push("/"+this.spaceName+"/project/edit/"+e.id)},editmembers:function(e){this.$router.push("/"+this.spaceName+"/project/members/"+e.id)},renderEditTool:function(e){var t=this,n=this.$createElement;return e.enable_update?n("el-button",{attrs:{type:"text",icon:"el-icon-edit",size:"small"},on:{click:function(){return t.edit(a()({},e))}}},["编辑"]):null},renderDeleteTool:function(e){var t=this,n=this.$createElement;return e.enable_delete?n("el-button",{attrs:{type:"text",icon:"el-icon-delete",size:"small"},class:"user-delete",on:{click:function(){return t.delete(a()({},e))}}},["删除"]):null},renderMemberTool:function(e){var t=this,n=this.$createElement;return e.enable_update?n("el-button",{attrs:{type:"text",icon:"el-icon-edit",size:"small"},on:{click:function(){return t.editmembers(a()({},e))}}},["成员管理"]):null},deleteRole:function(e){var t=this;return c()(i.a.mark(function n(){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u.b)(e.id);case 2:t.callServe(),t.$message({type:"success",message:"删除成功!"});case 4:case"end":return n.stop()}},n,t)}))()},delete:function(e){var t=this;this.$confirm("确定删除该项目吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.deleteRole(e)}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wl-project"},[n("wl-breadcrumb",{attrs:{data:e.breadcrumbData,isBackButton:!1}}),e._v(" "),n("el-form",{attrs:{inline:!0},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"请输入项目名称",size:"small"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.search},slot:"append"})],1)],1),e._v(" "),e.enableCreate?n("el-form-item",[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addProject}},[e._v("新建项目")])],1):e._e()],1),e._v(" "),n("wl-table",{ref:"table",attrs:{columns:e.columns},on:{callServe:e.callServe}})],1)},staticRenderFns:[]};var m=n("VU/8")(d,p,!1,function(e){n("Rfuz")},null,null);t.default=m.exports},Rfuz:function(e,t){}});