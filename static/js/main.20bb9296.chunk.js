(this.webpackJsonpwokai=this.webpackJsonpwokai||[]).push([[0],{45:function(e,t,a){},59:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(43),o=a.n(s),i=a(16),c=a(3),r=(a(58),a(59),a(5)),l=a(6),h=a(8),m=a(7),u=a(4),d=a.n(u),b=a(0);d.a.defaults.withCredentials=!0;var j=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={myPageLink:"",myPageText:"",loginLink:"",loginText:""},d.a.get("http://localhost:5000/users/userInfo").then((function(e){console.log(e.data),1===e.data.code?n.setState({myPageLink:"/user/signup",myPageText:"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7",loginLink:"/user/login",loginText:"\u30ed\u30b0\u30a4\u30f3"}):n.setState({myPageLink:"/user/mypage",myPageText:"\u30de\u30a4\u30da\u30fc\u30b8",loginLink:"/user/logout",loginText:"\u30ed\u30b0\u30a2\u30a6\u30c8"})})),n}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("nav",{className:"navbar navbar-dark bg-info navbar-expand-lg shadow",children:[Object(b.jsxs)(i.b,{to:"/",className:"navbar-brand",children:["\u306a\u3093\u3067\u3082\u3055\u3044\u3068"," "]}),Object(b.jsx)("div",{className:"collpase navbar-collapse",children:Object(b.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(b.jsx)("li",{className:"navbar-item",children:Object(b.jsx)(i.c,{to:"/",exact:!0,activeClassName:"active",className:"nav-link",children:"\u30db\u30fc\u30e0\u30da\u30fc\u30b8"})}),Object(b.jsx)("li",{className:"navbar-item",children:Object(b.jsx)(i.c,{to:"/comment",exact:!0,activeClassName:"active",className:"nav-link",children:"\u30b3\u30e1\u30f3\u30c8"})}),Object(b.jsx)("li",{className:"navbar-item",children:Object(b.jsx)(i.c,{to:this.state.myPageLink,activeClassName:"active",className:"nav-link",children:this.state.myPageText})}),Object(b.jsx)("li",{className:"navbar-item",children:Object(b.jsx)(i.c,{to:this.state.loginLink,activeClassName:"active",className:"nav-link",children:this.state.loginText})})]})})]})}}]),a}(n.Component),p=a(51);function v(){var e=Object(n.useState)(0),t=Object(p.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){document.title="You clicked ".concat(a," times")})),Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["You clicked ",a," times"]}),Object(b.jsx)("button",{onClick:function(){return s(a+1)},children:"Click me"})]})}var g,f,O=a(52),x=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={username:e.data,content:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.textarea.focus()}},{key:"handleUsernameBlur",value:function(e){this.props.saveData(e.target.value)}},{key:"handleUsernameChange",value:function(e){this.setState({username:e.target.value})}},{key:"handleContentChange",value:function(e){this.setState({content:e.target.value})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.props.onSubmit){var t=this.state,a=t.username,n=t.content;this.props.onSubmit({username:a,content:n,createdTime:+new Date})}this.setState({content:""})}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"comment-input",children:[Object(b.jsxs)("div",{className:"comment-field",children:[Object(b.jsx)("span",{className:"comment-field-name",children:"\u30e6\u30fc\u30b6\u540d\uff1a"}),Object(b.jsx)("div",{className:"comment-field-input",children:Object(b.jsx)("input",{value:this.state.username,onBlur:this.handleUsernameBlur.bind(this),onChange:this.handleUsernameChange.bind(this)})})]}),Object(b.jsxs)("div",{className:"comment-field",children:[Object(b.jsx)("span",{className:"comment-field-name",children:"\u30b3\u30e1\u30f3\u30c8\uff1a"}),Object(b.jsx)("div",{className:"comment-field-input",children:Object(b.jsx)("textarea",{ref:function(t){return e.textarea=t},value:this.state.content,onChange:this.handleContentChange.bind(this)})})]}),Object(b.jsx)("div",{className:"comment-field-button",children:Object(b.jsx)("button",{onClick:this.handleSubmit.bind(this),children:"\u6295\u7a3f"})})]})}}]),a}(n.Component);g=x,f="username";var y=x=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={data:null},e}return Object(l.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var e=localStorage.getItem(f);try{this.setState({data:JSON.parse(e)})}catch(t){this.setState({data:e})}}},{key:"saveData",value:function(e){try{localStorage.setItem(f,JSON.stringify(e))}catch(t){localStorage.setItem(f,"".concat(e))}}},{key:"render",value:function(){return Object(b.jsx)(g,Object(O.a)({data:this.state.data,saveData:this.saveData.bind(this)},this.props))}}]),a}(n.Component),C=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={timeString:""},e}return Object(l.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){this._updateTimeString(),this._timer=setInterval(this._updateTimeString.bind(this),6e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this._timer)}},{key:"getDate",value:function(e){var t=new Date(e);return"".concat(t.getFullYear(),"\u5e74").concat(t.getMonth()+1,"\u6708").concat(t.getDate(),"\u65e5 ").concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds())}},{key:"_updateTimeString",value:function(){var e=this.props.comment,t=(+Date.now()-e.createdTime)/1e3;this.setState({timeString:t>60?t>3600?t>86400?this.getDate(e.createdTime):"".concat(Math.round(t/3600)," \u6642\u9593\u524d"):"".concat(Math.round(t/60)," \u5206\u524d"):"".concat(Math.round(Math.max(t,1))," \u79d2\u524d")})}},{key:"_getProcessedContent",value:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/`([\S\s]+?)`/g,"<code>$1</code>")}},{key:"handleDeleteComment",value:function(){this.props.onDeleteComment&&this.props.onDeleteComment(this.props.comment._id)}},{key:"render",value:function(){var e=this.props.comment;return Object(b.jsxs)("div",{className:"comment",children:[Object(b.jsxs)("div",{className:"comment-user",children:[Object(b.jsx)("span",{children:e.username}),"\uff1a"]}),Object(b.jsx)("span",{className:"comment-createdtime",children:this.state.timeString}),Object(b.jsx)("p",{dangerouslySetInnerHTML:{__html:this._getProcessedContent(e.content)}}),Object(b.jsx)("span",{onClick:this.handleDeleteComment.bind(this),className:"comment-delete",children:"\u524a\u9664"})]})}}]),a}(n.Component),w=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"handleDeleteComment",value:function(e){this.props.onDeleteComment&&this.props.onDeleteComment(e)}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{children:this.props.comments.map((function(t,a){return Object(b.jsx)(C,{comment:t,index:a,onDeleteComment:e.handleDeleteComment.bind(e)},a)}))})}}]),a}(n.Component);w.defaultProps={comments:[]};var N=w,S=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={comments:[],isShowCommentList:!0,isShowClock:!0,style:{width:"105px",fontSize:"12px",marginRight:"10px"}},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("http://localhost:5000/comments/").then((function(t){e.setState({comments:t.data})})).catch((function(e){console.log(e)}))}},{key:"handleShowOrCommentList",value:function(){this.setState({isShowCommentList:!this.state.isShowCommentList})}},{key:"handleSubmitComment",value:function(e){if(e)return e.username?e.content?void d.a.post("http://localhost:5000/comments/add",e).then((function(e){return console.log(e.data)})).then(this.componentDidMount.bind(this)).catch((function(e){console.log(e)})):alert("\u30b3\u30e1\u30f3\u30c8\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\uff01"):alert("\u30e6\u30fc\u30b6\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\uff01")}},{key:"handleDeleteComment",value:function(e){d.a.delete("http://localhost:5000/comments/"+e).then((function(e){return console.log(e.data)})).catch((function(e){console.log(e)})),this.setState({comments:this.state.comments.filter((function(t){return t._id!==e}))})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)(y,{onSubmit:this.handleSubmitComment.bind(this)}),Object(b.jsx)(N,{comments:this.state.comments,onDeleteComment:this.handleDeleteComment.bind(this)})]})}}]),a}(n.Component),k=a(15),P=a(95),D=a(45),L=a.n(D),M=function(){return Object(b.jsx)("div",{className:L.a.loading,children:Object(b.jsx)(P.a,{size:"large"})})},T=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onSubmit=n.onSubmit.bind(Object(k.a)(n)),n.state={username:"",email:"",password:"",confirmPassword:"",message:"",isLoading:!0},d.a.get("http://localhost:5000/users/userInfo").then((function(e){console.log(e.data.data),0===e.data.code?n.props.history.push("/user/mypage"):n.setState({isLoading:!1})})),n}return Object(l.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onChangeConfirmPassword",value:function(e){this.setState({confirmPassword:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;if(e.preventDefault(),this.state.password!==this.state.confirmPassword)this.setState({message:"\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u3066\u3044\u306a\u3044\uff01"});else{var a={username:this.state.username,email:this.state.email,password:this.state.password};this.setState({message:""}),d.a.post("http://localhost:5000/users/",a).then((function(e){return console.log(e.data)})).then((function(){alert("\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3057\u307e\u3057\u305f\uff01"),t.props.history.push("/comment")})).catch((function(e){console.log(e),alert(e)}))}}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[this.state.isLoading&&Object(b.jsx)(M,{}),Object(b.jsx)("h3",{className:"mt-3 mb-5",children:"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7"}),Object(b.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"\u30cb\u30c3\u30af\u30cd\u30fc\u30e0: "}),Object(b.jsx)("input",{type:"text",className:"form-control mt-2 mb-4",value:this.state.username,onChange:this.onChangeUsername.bind(this)})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9: "}),Object(b.jsx)("input",{type:"email",className:"form-control mt-2 mb-4",value:this.state.email,onChange:this.onChangeEmail.bind(this)})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"\u30d1\u30b9\u30ef\u30fc\u30c9: "}),Object(b.jsx)("input",{type:"password",className:"form-control mt-2 mb-4",value:this.state.password,onChange:this.onChangePassword.bind(this)})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"\u30d1\u30b9\u30ef\u30fc\u30c9\u78ba\u8a8d: "}),Object(b.jsx)("span",{style:{color:"red"},children:this.state.message}),Object(b.jsx)("input",{type:"password",className:"form-control mt-2 mb-4",value:this.state.confirmPassword,onChange:this.onChangeConfirmPassword.bind(this)})]}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"submit",value:"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7",className:"btn btn-info"})})]})]})}}]),a}(n.Component),_=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onSubmit=n.onSubmit.bind(Object(k.a)(n)),n.state={username:"",email:"",password:"",newPassword:"",confirmNewPassword:"",errorMessage:"",message:""},d.a.get("http://localhost:5000/users/userInfo").then((function(e){console.log(e.data.data),0===e.data.code?n.setState({username:e.data.data.username,email:e.data.data.email}):n.props.history.push("/user/login")})),n}return Object(l.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onChangeNewPassword",value:function(e){this.setState({newPassword:e.target.value})}},{key:"onChangeNewConfirmPassword",value:function(e){this.setState({confirmNewPassword:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;if(e.preventDefault(),this.state.newPassword!==this.state.confirmNewPassword)this.setState({message:"\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u3066\u3044\u306a\u3044\uff01"});else{var a={username:this.state.username,email:this.state.email,password:this.state.password,newPassword:this.state.newPassword};this.setState({message:""}),d.a.post("http://localhost:5000/users/update",a).then((function(e){return console.log(e.data)})).then((function(){alert("\u5909\u66f4\u3057\u307e\u3057\u305f\uff01"),t.props.history.push("/comment")})).catch((function(e){t.setState({errorMessage:"\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u9593\u9055\u3044\u307e\u3057\u305f\uff01"}),alert(e)}))}}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"mt-3 mb-5",children:"\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u5909\u66f4"}),Object(b.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"\u30cb\u30c3\u30af\u30cd\u30fc\u30e0: "}),Object(b.jsx)("input",{type:"text",className:"form-control mt-2 mb-4",value:this.state.username,onChange:this.onChangeUsername.bind(this)})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9: "}),Object(b.jsx)("span",{children:this.state.email})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"\u30d1\u30b9\u30ef\u30fc\u30c9: "}),Object(b.jsx)("span",{style:{color:"red"},children:this.state.errorMessage}),Object(b.jsx)("input",{type:"password",className:"form-control mt-2 mb-4",value:this.state.password,onChange:this.onChangePassword.bind(this)})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"\u65b0\u30d1\u30b9\u30ef\u30fc\u30c9: "}),Object(b.jsx)("input",{type:"password",className:"form-control mt-2 mb-4",value:this.state.newPassword,onChange:this.onChangeNewPassword.bind(this)})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"\u65b0\u30d1\u30b9\u30ef\u30fc\u30c9\u78ba\u8a8d: "}),Object(b.jsx)("span",{style:{color:"red"},children:this.state.message}),Object(b.jsx)("input",{type:"password",className:"form-control mt-2 mb-4",value:this.state.confirmNewPassword,onChange:this.onChangeNewConfirmPassword.bind(this)})]}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"submit",value:"\u5909\u66f4",className:"btn btn-info"})})]})]})}}]),a}(n.Component);d.a.defaults.withCredentials=!0;var I=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onSubmit=n.onSubmit.bind(Object(k.a)(n)),n.state={email:"",password:"",code:1,isLoading:!0},d.a.get("http://localhost:5000/users/userInfo").then((function(e){console.log(e.data.data),0===e.data.code?n.props.history.push("/comment"):n.setState({isLoading:!1})})),n}return Object(l.a)(a,[{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={email:this.state.email,password:this.state.password};d.a.post("http://localhost:5000/users/login",a).then((function(e){t.setState({data:e.data})})).then((function(){console.log("\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3057\u305f\uff01"),t.props.history.push("/comment")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[this.state.isLoading&&Object(b.jsx)(M,{}),Object(b.jsx)("h3",{className:"mt-3 mb-5",children:"\u30ed\u30b0\u30a4\u30f3"}),Object(b.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9: "}),Object(b.jsx)("input",{type:"email",className:"form-control mt-2 mb-4",value:this.state.email,onChange:this.onChangeEmail.bind(this)})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"\u30d1\u30b9\u30ef\u30fc\u30c9: "}),Object(b.jsx)("input",{type:"password",className:"form-control mt-2 mb-4",value:this.state.password,onChange:this.onChangePassword.bind(this)})]}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"submit",value:"\u30b5\u30a4\u30f3\u30a4\u30f3",className:"btn btn-info"})})]})]})}}]),a}(n.Component);d.a.defaults.withCredentials=!0;var U=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={code:1,display:"block"},d.a.get("http://localhost:5000/users/userInfo").then((function(e){console.log(e.data.data),0===e.data.code?n.setState({display:"none"}):n.props.history.push("/user/login")})),n}return Object(l.a)(a,[{key:"cancel",value:function(){this.props.history.push("/")}},{key:"logout",value:function(){var e=this;d.a.get("http://localhost:5000/users/logout").then((function(t){console.log(t.data),"1"===t.data.logout&&e.props.history.push("/")}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{style:{zIndex:1,backgroundColor:"white",width:"930px",height:"500px",position:"absolute",textAlign:"center",paddingTop:"150px",display:this.state.display},children:Object(b.jsx)(P.a,{size:"large",tip:"Loading..."})}),Object(b.jsx)("h3",{className:"mt-3 mb-5",children:"\u30ed\u30b0\u30a2\u30a6\u30c8"}),Object(b.jsx)("span",{className:"form-group",children:"\u306a\u3093\u3067\u3082\u3055\u3044\u3068\u304b\u3089\u30ed\u30b0\u30a2\u30a6\u30c8\u3057\u307e\u3059\u304b\uff1f"}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("button",{onClick:this.cancel.bind(this),className:"btn btn-info",style:{backgroundColor:"lightgray",borderColor:"lightgray"},children:"\u30ad\u30e3\u30f3\u30bb\u30eb"}),Object(b.jsx)("button",{onClick:this.logout.bind(this),className:"btn btn-info",children:"\u30ed\u30b0\u30a2\u30a6\u30c8"})]})]})}}]),a}(n.Component);var E=function(){return Object(b.jsx)(i.a,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(j,{}),Object(b.jsx)("br",{}),Object(b.jsx)(c.a,{path:"/",exact:!0,component:v}),Object(b.jsx)(c.a,{path:"/comment",component:S}),Object(b.jsx)(c.a,{path:"/user/signup",component:T}),Object(b.jsx)(c.a,{path:"/user/mypage",component:_}),Object(b.jsx)(c.a,{path:"/user/login",component:I}),Object(b.jsx)(c.a,{path:"/user/logout",component:U})]})})};a(93);o.a.render(Object(b.jsx)(E,{}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.20bb9296.chunk.js.map