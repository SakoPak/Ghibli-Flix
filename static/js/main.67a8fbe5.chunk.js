(this["webpackJsonpGhibli-Flix"]=this["webpackJsonpGhibli-Flix"]||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(31),c=a.n(r),i=(a(79),a(56)),l=a(9),o=a(10),d=a(12),j=a(11),u=a(15),h=a(123),b=a(2),m=a(3),O=a(0),f=["user","component","render"],p=function(e){var t=e.user,a=e.component,s=e.render,n=Object(m.a)(e,f);return t&&s?Object(O.jsx)(u.b,Object(b.a)(Object(b.a)({},n),{},{render:s})):Object(O.jsx)(u.b,Object(b.a)(Object(b.a)({},n),{},{render:function(e){return t?Object(O.jsx)(a,Object(b.a)({},e)):Object(O.jsx)(u.a,{to:"/"})}}))},x=a(62),g=(a(88),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleClose=function(){return s.setState({show:!1})},s.state={show:!0},s.timeoutId=null,s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,a=e.heading,s=e.message,n=e.deleteAlert,r=e.id;return this.state.show||setTimeout((function(){n(r)}),300),Object(O.jsx)(x.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(x.a.Heading,{children:a}),Object(O.jsx)("p",{className:"alert-body",children:s})]})})}}]),a}(n.a.Component)),v=a(121),N=a(122),w=a(8),y=(a(89),Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(w.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(O.jsx)(w.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"}),Object(O.jsx)(w.c,{to:"/films",className:"nav-link",children:"All Films"}),Object(O.jsx)(w.c,{to:"/profile",className:"nav-link",children:"Home"})]})),C=Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(w.c,{to:"/sign-up",className:"nav-link"}),Object(O.jsx)(w.c,{to:"/sign-in",className:"nav-link"})]}),k=Object(O.jsx)(s.Fragment,{children:Object(O.jsx)(w.c,{exact:!0,to:"/",className:"nav-link",children:"Ghibli Flix"})}),P=function(e){var t=e.user;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)(v.a,{bg:"light",variant:"dark",expand:"md",className:"d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none",children:[Object(O.jsx)(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(v.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(N.a,{className:"ml-auto text-dark",children:[t&&Object(O.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.username]}),k,t?y:C]})})]})})})},S=a(7),A="https://afternoon-earth-27940.herokuapp.com",F="http://localhost:4741",I="localhost"===window.location.hostname?F:A,D=a(20),G=a.n(D),U=function(e){return G()({url:I+"/sign-in/",method:"POST",data:{credentials:{username:e.username,password:e.password}}})},T=a(6),L=a(28),E=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleChange=function(e){return s.setState(Object(S.a)({},e.target.name,e.target.value))},s.onSignUp=function(e){e.preventDefault();var t,a=s.props,n=a.msgAlert,r=a.history,c=a.setUser;(t=s.state,G()({method:"POST",url:I+"/sign-up/",data:{credentials:{username:t.username,email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return U(s.state)})).then((function(e){return c(e.data.user)})).then((function(){return n({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return r.push("/profile")})).catch((function(e){s.setState({email:"",password:"",passwordConfirmation:""}),n({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},s.state={username:"",email:"",password:"",passwordConfirmation:""},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,s=e.password,n=e.passwordConfirmation;return Object(O.jsx)("div",{className:"modal modal-signin position-static d-block py-5",tabIndex:"-1",role:"dialog",id:"modalSignin",children:Object(O.jsx)("div",{className:"modal-dialog",role:"document",children:Object(O.jsxs)("div",{className:"modal-content rounded-5 shadow",children:[Object(O.jsxs)("div",{className:"modal-header p-5 pb-4 border-bottom-0",children:[Object(O.jsx)("h2",{className:"modal-title",children:"Sign Up"}),Object(O.jsx)("button",{id:"closeModal",type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(O.jsxs)("div",{className:"modal-body p-5 pt-0",children:[Object(O.jsx)("div",{className:"form-floating mb-3",children:Object(O.jsxs)(T.a.Group,{controlId:"username",children:[Object(O.jsx)(T.a.Label,{for:"floatingInput"}),Object(O.jsx)(T.a.Control,{required:!0,type:"username",name:"username",value:t,placeholder:"Enter username",onChange:this.handleChange,id:"floatingInput",class:"form-control rounded-4"})]})}),Object(O.jsxs)(T.a,{onSubmit:this.onSignUp,children:[Object(O.jsx)("div",{className:"form-floating mb-3",children:Object(O.jsxs)(T.a.Group,{controlId:"email",children:[Object(O.jsx)(T.a.Label,{for:"floatingInput"}),Object(O.jsx)(T.a.Control,{required:!0,type:"email",name:"email",value:a,placeholder:"Enter email",onChange:this.handleChange,id:"floatingInput",class:"form-control rounded-4"})]})}),Object(O.jsx)("div",{className:"form-floating mb-3",children:Object(O.jsxs)(T.a.Group,{controlId:"password",children:[Object(O.jsx)(T.a.Label,{for:"floatingPassword"}),Object(O.jsx)(T.a.Control,{required:!0,name:"password",value:s,type:"password",placeholder:"Password",onChange:this.handleChange,id:"floatingPassword",class:"form-control rounded-4"})]})}),Object(O.jsx)("div",{className:"form-floating mb-3",children:Object(O.jsxs)(T.a.Group,{controlId:"passwordConfirmation",children:[Object(O.jsx)(T.a.Label,{for:"floatingPassword"}),Object(O.jsx)(T.a.Control,{required:!0,name:"passwordConfirmation",value:n,type:"password",placeholder:"Confirm Password",onChange:this.handleChange,id:"floatingPassword",class:"form-control rounded-4"})]})}),Object(O.jsx)(L.a,{class:"w-100 mb-2 btn btn-lg rounded-4 btn-primary",type:"submit",children:"Submit"})]})]})]})})})}}]),a}(s.Component),B=Object(u.g)(E),q=(a(110),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleChange=function(e){return s.setState(Object(S.a)({},e.target.name,e.target.value))},s.onSignIn=function(e){e.preventDefault();var t=s.props,a=t.msgAlert,n=t.history,r=t.setUser;U(s.state).then((function(e){return r(e.data.user)})).then((function(){return a({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return n.push("/profile")})).catch((function(e){s.setState({username:"",password:""}),a({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},s.state={username:"",password:""},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"container col-xl-10 col-xxl-8 px-4 py-5",children:Object(O.jsxs)("div",{className:"row align-items-center g-lg-5 py-5",children:[Object(O.jsxs)("div",{className:"col-lg-7 text-center text-lg-start",children:[Object(O.jsx)("h1",{className:"display-4 fw-bold lh-1 mb-3",children:"Ghibli Fact"}),Object(O.jsx)("p",{className:"col-lg-10 fs-4",children:"'Ghibli' is an Italian word, named after the hot wind that blows in the Sahara desert! Miyazaki wanted to 'create a whirlwind in the Japanese animation world.'"})]}),Object(O.jsx)("div",{className:"col-md-10 mx-auto col-lg-5",children:Object(O.jsxs)("div",{className:"p-4 p-md-5 border rounded-3 bg-light",children:[Object(O.jsx)("h2",{className:"text-center",children:"Sign In"}),Object(O.jsxs)(T.a,{onSubmit:this.onSignIn,children:[Object(O.jsx)("div",{className:"form-floating mb-3",children:Object(O.jsxs)(T.a.Group,{controlId:"username",children:[Object(O.jsx)(T.a.Label,{for:"floatingInput",children:"Username"}),Object(O.jsx)(T.a.Control,{required:!0,type:"username",name:"username",value:t,placeholder:"Enter username",onChange:this.handleChange,id:"floatingInput"})]})}),Object(O.jsx)("div",{className:"form-floating mb-3",children:Object(O.jsxs)(T.a.Group,{controlId:"password",children:[Object(O.jsx)(T.a.Label,{for:"floatingPassword",children:"Password"}),Object(O.jsx)(T.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})]})}),Object(O.jsx)(L.a,{variant:"primary",type:"submit",children:"Submit"}),Object(O.jsx)("hr",{className:"my-4"}),Object(O.jsx)("p",{className:"mt-5 mb-3 text-muted",children:"\xa9 Happy Ghibli-ing!"})]})]})})]})})})}}]),a}(s.Component)),H=Object(u.g)(q),_=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,a=e.history,s=e.clearUser;(function(e){return G()({url:I+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return a.push("/")})).finally((function(){return s()}))}},{key:"render",value:function(){return""}}]),a}(s.Component),z=Object(u.g)(_),M=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleChange=function(e){return s.setState(Object(S.a)({},e.target.name,e.target.value))},s.onChangePassword=function(e){e.preventDefault();var t=s.props,a=t.msgAlert,n=t.history,r=t.user;(function(e,t){return G()({url:I+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(s.state,r).then((function(){return a({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return n.push("/")})).catch((function(e){s.setState({oldPassword:"",newPassword:""}),a({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},s.state={oldPassword:"",newPassword:""},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,a=e.newPassword;return Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("h3",{children:"Change Password"}),Object(O.jsxs)(T.a,{onSubmit:this.onChangePassword,children:[Object(O.jsxs)(T.a.Group,{controlId:"oldPassword",children:[Object(O.jsx)(T.a.Label,{children:"Old password"}),Object(O.jsx)(T.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(O.jsxs)(T.a.Group,{controlId:"newPassword",children:[Object(O.jsx)(T.a.Label,{children:"New Password"}),Object(O.jsx)(T.a.Control,{required:!0,name:"newPassword",value:a,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(O.jsx)(L.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),a}(s.Component),W=Object(u.g)(M),R=(a(111),a.p+"static/media/Totoro1.4e36f0cc.jpeg"),Y=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"container col-xxl-8 px-4 py-5",children:Object(O.jsxs)("div",{className:"row flex-lg-row-reverse align-items-center g-5 py-5",children:[Object(O.jsx)("div",{className:"col-10 col-sm-8 col-lg-6",children:Object(O.jsx)("img",{src:R,className:"d-block mx-lg-auto img-fluid",alt:"Totoro lying in the grass",width:"700",height:"500",loading:"lazy"})}),Object(O.jsxs)("div",{className:"col-lg-6",children:[Object(O.jsx)("h1",{className:"display-5 fw-bold lh-1 mb-3",children:"Welcome to Ghibli Flix"}),Object(O.jsx)("p",{className:"lead",children:"The Magical World of Ghibli."}),Object(O.jsxs)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-start",children:[Object(O.jsx)(w.b,{to:"/sign-up",className:"nav-link",children:Object(O.jsx)("button",{type:"button",className:"btn btn-primary btn-lg px-4 me-md-2","data-bs-toggle":"modal","data-bs-target":"#modalSignin",children:"Get Started"})}),Object(O.jsx)(w.b,{to:"/sign-in",className:"nav-link",children:Object(O.jsx)("button",{type:"button",id:"signinbtn",className:"btn btn-outline-secondary btn-lg px-4",children:"Sign In"})})]})]})]})})})}}]),a}(s.Component),J=Object(u.g)(Y),V=a(14),K=a(119),Q=a(120),X=a(43),Z=(a(112),function(e){console.log(e);var t=e.key,a=e.film;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(K.a,{fluid:!0,children:Object(O.jsx)(Q.a,{class:"row row-cols-1 row-cols-md-3 g-4",children:Object(O.jsx)("div",{className:"col",children:Object(O.jsxs)(X.a,{children:[Object(O.jsx)("h2",{children:a.title}),Object(O.jsx)("a",{href:"/films/".concat(a.id),children:Object(O.jsx)("img",{style:{width:"65%",height:"auto"},src:a.movie_banner})}),Object(O.jsxs)("dl",{children:[Object(O.jsx)("dt",{children:"Release Date"}),Object(O.jsx)("dd",{children:a.release_date}),Object(O.jsx)("dt",{children:"Director"}),Object(O.jsx)("dd",{children:a.director})]}),Object(O.jsx)(w.b,{to:"/FilmDetails/".concat(a.id),children:Object(O.jsx)(L.a,{class:"btn btn-outline-dark",children:"More Details"})})]},t)})})})})}),$="https://ghibliapi.herokuapp.com";a(113);var ee=Object(u.g)((function(e){var t=Object(s.useState)([]),a=Object(V.a)(t,2),n=a[0],r=a[1];return Object(s.useEffect)((function(){console.log(e),function(e){return console.log(e),G()({url:$+"/films/",method:"GET",headers:{Authorization:"Bearer ".concat(e.token)}})}(e.user).then((function(e){return e.data})).then((function(e){r(e)})).catch((function(e){return console.error("Error: ",e)}))}),[]),Object(O.jsx)(K.a,{style:{width:"85%",margin:"1rem auto"},children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:" Ghibli Library "}),Object(O.jsx)("hr",{}),n?n.map((function(e){return Object(O.jsx)(Z,{film:e},e.id)})):"loading..."]})})}));a(114);var te=function(e){var t=e.user,a=Object(s.useState)(null),n=Object(V.a)(a,2),r=n[0],c=n[1],i=Object(u.f)().id;return Object(s.useEffect)((function(){(function(e,t){return G()({url:$+"/films/"+e,method:"GET",headers:{Authorization:"Bearer ".concat(t.token)}})})(i,t).then((function(e){return c(e.data)})).catch(console.error)}),[]),r?Object(O.jsx)("div",{className:"card mb-3",children:Object(O.jsx)("div",{className:"DetailPage",children:Object(O.jsxs)("div",{className:"DetailCard",children:[Object(O.jsx)("div",{className:"FilmBanner",children:Object(O.jsx)("img",{className:"card-img-top",src:r.movie_banner})}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsxs)("h3",{className:"card-title",children:[Object(O.jsxs)("p",{className:"display-inline",children:[r.title," (",r.release_date,")"]})," ",Object(O.jsx)(w.b,{to:"/films/",children:Object(O.jsx)(L.a,{className:"btn btn-outline btn-sm",children:"View All Films"})})]}),Object(O.jsx)("div",{className:"card-text",children:Object(O.jsxs)("p",{className:"display-inline",children:["Original Title: ",r.original_title]})}),Object(O.jsx)("div",{className:"card-text",children:Object(O.jsxs)("p",{className:"display-inline",children:["Romanised Title: ",r.romanised_title]})}),Object(O.jsx)("div",{className:"card-text",children:Object(O.jsxs)("p",{className:"display-inline",children:["Director: ",r.director]})}),Object(O.jsx)("div",{className:"card-text",children:Object(O.jsxs)("p",{className:"display-inline",children:["Producer: ",r.producer]})}),Object(O.jsx)("div",{className:"card-text",children:Object(O.jsxs)("p",{className:"display-inline",children:["Rotten Tomatoes: ",r.rt_score]})}),Object(O.jsx)("div",{className:"card-text",children:Object(O.jsxs)("p",{className:"display-inline",children:["Running Time: ","".concat(r.running_time," minutes")]})}),Object(O.jsx)("div",{className:"card-text",children:Object(O.jsx)("p",{children:"Summary:    ".concat(r.description)})})]})]})})}):Object(O.jsx)("p",{children:"loading"})},ae=a.p+"static/media/Banner1.6a995ab4.jpeg",se=(a(115),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={profile:null},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("main",{children:[Object(O.jsx)("div",{className:"bg"}),Object(O.jsxs)("div",{className:"container py-4",children:[Object(O.jsx)("div",{className:"p-5 mb-4 bg-light rounded-3",children:Object(O.jsxs)("div",{className:"container-fluid bg-image py-5",src:ae,children:[Object(O.jsx)("h1",{className:"display-5 fw-bold",children:"Welcome to Ghibli!"}),Object(O.jsx)("p",{className:"col-md-8 fs-4",children:"Create a fun profile or look through your favorite films!"}),Object(O.jsx)(w.b,{to:"/films",children:Object(O.jsx)("button",{className:"btn btn-primary btn-lg",type:"button",children:"Discover Films"})})]})}),Object(O.jsxs)("div",{className:"row align-items-md-stretch",children:[Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("div",{className:"h-100 p-5 text-white bg-dark rounded-3",children:[Object(O.jsx)("h2",{children:"Create a Profile"}),Object(O.jsx)(w.b,{to:"/create-profile",className:"nav-link",children:Object(O.jsx)("button",{className:"btn btn-outline-light",type:"button","data-bs-toggle":"modal","data-bs-target":"#modalCreate",children:"Create"})})]})}),Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("div",{className:"h-100 p-5 bg-light border rounded-3",children:[Object(O.jsx)("h2",{children:"Your Ghibli Dashboard"}),Object(O.jsx)(w.b,{to:"/profile-dashboard",className:"nav-link",children:Object(O.jsx)("button",{className:"btn btn-outline-secondary",type:"button",children:"Explore"})})]})})]}),Object(O.jsx)("footer",{className:"pt-3 mt-4 text-muted border-top",children:"\xa9 2022"})]})]})})}}]),a}(s.Component)),ne=Object(u.g)(se),re=function(e,t){return G()({url:I+"/profile/"+e,method:"GET",headers:{Authorization:"Bearer ".concat(t.token)}})},ce=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleDelete=function(){var e=s.props,t=e.match,a=e.user,n=e.msgAlert,r=e.history;(function(e,t){return G()({url:I+"/profile/"+e,method:"DELETE",headers:{Authorization:"Bearer ".concat(t.token)}})})(t.params.id,a).then((function(){return r.push("/profile")})).then((function(){n({heading:"Delete success",message:"Successfully deleted",variant:"success"})})).catch((function(e){n({heading:"Delete fail",message:"Delete error: "+e.message,variant:"danger"})}))},s.state={profile:null},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.match,s=t.user,n=t.msgAlert;re(a.params.id,s).then((function(t){console.log(t),e.setState({profile:t.data.profile})})).then((function(){n({heading:"Profile success",message:"Profile created and updated!",variant:"success"})})).catch((function(e){n({heading:"Show Profile failed",message:"Error message: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){if(null===this.state.profile)return"Loading...";var e=this.state.data,t=e.username,a=e.first,s=e.last,n=e.owner,r=this.props,c=r.user,i=r.history,l=r.match;return Object(O.jsx)("div",{className:"container col-sm-10 col-md-8",children:Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(X.a,{className:"card",border:"light",style:{width:"30rem"},children:[Object(O.jsxs)(X.a.Header,{className:"cardHeader",children:[t,"'s Profile"]}),Object(O.jsxs)(X.a.Body,{className:"cardColor",children:[Object(O.jsx)(X.a.Title,{className:"cardColor",children:Object(O.jsxs)("p",{children:["Hello ",t,"!"]})}),Object(O.jsxs)(X.a.Text,{children:[Object(O.jsxs)("p",{children:["First Name: ",a]}),Object(O.jsxs)("p",{children:["Last Name: ",s]})]}),c._id===n&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(L.a,{className:"formButton btn1",variant:"outline-dark",onClick:this.handleDelete,children:"Delete"}),Object(O.jsx)(L.a,{className:"formButton btn1",variant:"outline-dark",onClick:function(){return i.push("/profile/".concat(l.params.id,"/edit"))},children:"Update"})]})]})]})})})}}]),a}(s.Component),ie=Object(u.g)(ce),le=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleChange=function(e){return s.setState(Object(S.a)({},e.target.name,e.target.value))},s.handleSubmit=function(e){e.preventDefault();var t=s.props,a=t.user,n=t.msgAlert,r=t.history,c=t.match;(function(e,t,a){return G()({url:I+"/profile/"+t,method:"PATCH",data:{profile:{username:e.username,first:e.first,last:e.last,color:e.color}},headers:{Authorization:"Bearer ".concat(a.token)}})})(s.state,c.params.id,a).then((function(){n({heading:"Updated Profile",message:"Profile updated",variant:"success"})})).catch((function(e){n({heading:"Update failed",message:"Update error: "+e.message,variant:"danger"})})).then((function(){return r.push("/profile/"+c.params.id)}))},s.state={username:"",first:"",last:""},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.match,s=t.user;re(a.params.id,s).then((function(t){return e.setState({username:t.data.profile.username,first:t.data.profile.first,last:t.data.profile.last})}))}},{key:"render",value:function(){return this.state.updated?Object(O.jsx)(u.a,{to:"/chat/"+this.props.match.params.id}):Object(O.jsx)("div",{children:Object(O.jsxs)(T.a,{className:"container col-sm-10 col-md-8 mx-auto mt-5",onSubmit:this.handleSubmit,children:[Object(O.jsx)("h3",{children:"Update Profile"}),Object(O.jsxs)(T.a.Group,{controlId:"username",children:[Object(O.jsx)(T.a.Label,{children:"User Name"}),Object(O.jsx)(T.a.Control,{required:!0,name:"username",value:this.state.username,placeholder:"User Name",onChange:this.handleChange})]}),Object(O.jsxs)(T.a.Group,{controlId:"first",children:[Object(O.jsx)(T.a.Label,{children:"First Name"}),Object(O.jsx)(T.a.Control,{required:!0,name:"first",value:this.state.first,placeholder:"First Name",onChange:this.handleChange})]}),Object(O.jsxs)(T.a.Group,{controlId:"last",children:[Object(O.jsx)(T.a.Label,{children:"Last Name"}),Object(O.jsx)(T.a.Control,{required:!0,name:"last",value:this.state.last,placeholder:"Last Name",onChange:this.handleChange})]}),Object(O.jsx)(L.a,{onClick:this.msgAlert,className:"btn2",variant:"outline-secondary",type:"submit",children:"Update"})]})})}}]),a}(s.Component),oe=Object(u.g)(le),de=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleChange=function(e){return s.setState(Object(S.a)({},e.target.name,e.target.value))},s.handleSubmit=function(e){e.preventDefault(),console.log(s.props);var t,a=s.props,n=a.user,r=a.msgAlert,c=a.history,i=a.setProfile,l=a.setProfileData;(function(e,t){return G()({method:"POST",url:I+"/profile/",data:{profile:{username:e.username,first:e.first,last:e.last,color:e.color}},headers:{Authorization:"Bearer ".concat(t.token)}})})(s.state,n).then((function(e){return r({heading:"Profile created",message:"Profile created!",variant:"success"}),e})).then((function(e){return i(e.data.profile._id),l(e.data.profile),t=e.data.profile._id})).then((function(){console.log(t)})).then((function(){c.push("/profile")})).catch((function(e){r({heading:"Profile creation failed",message:"Profile error: "+e.message,variant:"danger"})}))},s.state={username:"",first:"",last:"",color:""},s}return Object(o.a)(a,[{key:"setName",value:function(e){this.setState({name:e.target.value})}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"modal modal-createProfile position-static d-block py-5",tabIndex:"-1",role:"dialog",id:"modalCreate",children:Object(O.jsx)("div",{className:"modal-dialog",role:"document",children:Object(O.jsxs)("div",{className:"modal-content rounded-5 shadow",children:[Object(O.jsx)("div",{className:"modal-header p-5 pb-4 border-bottom-0",children:Object(O.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})}),Object(O.jsx)("div",{className:"modal-body p-5 pt-0",children:Object(O.jsxs)(T.a,{onSubmit:this.handleSubmit,children:[Object(O.jsx)("div",{className:"form-floating mb-3",children:Object(O.jsx)("h3",{children:"Create Profile"})}),Object(O.jsxs)(T.a.Group,{controlId:"username",children:[Object(O.jsx)(T.a.Label,{for:"floatingInput",children:"Username"}),Object(O.jsx)(T.a.Control,{required:!0,name:"username",value:this.state.username,placeholder:"User Name",onChange:this.handleChange,class:"form-control rounded-4"})]}),Object(O.jsx)("div",{className:"form-floating mb-3",children:Object(O.jsxs)(T.a.Group,{controlId:"first",children:[Object(O.jsx)(T.a.Label,{children:"First Name"}),Object(O.jsx)(T.a.Control,{required:!0,name:"first",value:this.state.first,placeholder:"First Name",onChange:this.handleChange,class:"form-control rounded-4"})]})}),Object(O.jsx)("div",{className:"form-floating mb-3",children:Object(O.jsxs)(T.a.Group,{controlId:"last",children:[Object(O.jsx)(T.a.Label,{children:"Last Name"}),Object(O.jsx)(T.a.Control,{required:!0,name:"last",value:this.state.last,placeholder:"Last Name",onChange:this.handleChange,class:"form-control rounded-4"})]})}),Object(O.jsx)("div",{className:"form-floating mb-3",children:Object(O.jsxs)(T.a.Group,{children:[Object(O.jsx)(T.a.Label,{for:"floatingSelect",children:"What Color Totoro Would You Be?"}),Object(O.jsx)("p",{children:"Pick a Fave: Grey, Blue, Yellow, Purple, Pink!"}),Object(O.jsx)(T.a.Control,{name:"color",value:this.state.color,placeholder:"Color",onChange:this.handleChange,className:"form-control rounded-4"})]})}),Object(O.jsx)(L.a,{className:"btn2 btn-lg",variant:"outline-secondary",type:"submit",children:"Save Profile"})]})})]})})})})}}]),a}(s.Component),je=Object(u.g)(de),ue=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={username:"",first:"",last:"",color:""},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.profile,a=t.username,s=t.first,n=t.last,r=t.match,c=t.color;return Object(O.jsx)("div",{className:"container col-sm-10 col-md-8",children:Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(X.a,{className:"card",border:"light",style:{width:"30rem"},children:[Object(O.jsxs)(X.a.Header,{className:"cardHeader",children:[a,"'s Profile"]}),Object(O.jsxs)(X.a.Body,{className:"cardColor",children:[Object(O.jsx)(X.a.Title,{className:"cardColor",children:Object(O.jsxs)("p",{children:["Hello ",a,"!"]})}),Object(O.jsxs)(X.a.Text,{children:[Object(O.jsxs)("p",{children:["First Name: ",s]}),Object(O.jsxs)("p",{children:["Last Name: ",n]}),Object(O.jsxs)("p",{children:["Totoro Color: ",c]})]}),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(L.a,{className:"formButton btn1",variant:"outline-dark",onClick:this.handleDelete,children:"Delete"}),Object(O.jsx)(L.a,{className:"formButton btn1",variant:"outline-dark",onClick:function(){return e.props.history.push("/profile/".concat(r.params.id,"/edit"))},children:"Update"})]})]})]})})})}}]),a}(s.Component),he=Object(u.g)(ue);var be=function(e){var t=Object(s.useState)([]),a=Object(V.a)(t,2),n=a[0],r=a[1];return Object(s.useEffect)((function(){var t=e.user,a=e.msgAlert;(function(e){return G()({url:I+"/profiles",method:"GET",headers:{Authorization:"Bearer ".concat(e.token)}})})(t).then((function(e){return e.data})).then((function(e){console.log(e),r(e)})).then((function(){a({heading:"Index success",message:"Successfully indexed",variant:"success"})})).catch((function(e){a({heading:"Index fail",message:"Index error: "+e.message,variant:"danger"})}))}),[]),n?Object(O.jsxs)("div",{style:{width:"85%",margin:"1rem auto"},children:[Object(O.jsx)("h1",{children:" Profiles "}),Object(O.jsx)("hr",{}),n&&n.length>0?n.map((function(e){return Object(O.jsx)(he,{profile:e},e.id)})):"loading..."]}):Object(O.jsx)("p",{children:"loading"})},me=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={username:"",first:"",last:"",color:""},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.match;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"container col-xxl-8 px-4 py-5",children:Object(O.jsxs)("div",{className:"row flex-lg-row-reverse align-items-center g-5 py-5",children:[Object(O.jsx)("div",{className:"col-10 col-sm-8 col-lg-6"}),Object(O.jsxs)("div",{className:"col-lg-6",children:[Object(O.jsxs)("h1",{className:"display-5 fw-bold lh-1 mb-3",children:["Hello ",this.state.username,"!"]}),Object(O.jsx)("p",{className:"lead",children:"Your Ghibli Dashboard"}),Object(O.jsxs)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-start",children:[Object(O.jsx)(w.b,{to:"/profiles",className:"nav-link",children:Object(O.jsx)("button",{type:"button",className:"btn btn-primary btn-lg px-4 me-md-2",children:"View Profiles"})}),Object(O.jsx)(w.b,{to:"/profile/".concat(e.params.id),className:"nav-link",children:Object(O.jsx)("button",{type:"button",className:"btn btn-primary btn-lg px-4 me-md-2",children:"Show Profile"})}),Object(O.jsx)(w.b,{to:"/films",className:"nav-link",children:Object(O.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-lg px-4",children:"View Films"})})]})]})]})})})}}]),a}(s.Component),Oe=Object(u.g)(me),fe=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).setUser=function(e){return s.setState({user:e})},s.setProfile=function(e){return s.setState({profileId:e})},s.setProfileData=function(e){return s.setState({profileData:e})},s.clearProfile=function(){return s.setState({profileData:null})},s.clearUser=function(){return s.setState({user:null})},s.deleteAlert=function(e){s.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},s.msgAlert=function(e){var t=e.heading,a=e.message,n=e.variant,r=Object(h.a)();s.setState((function(e){return{msgAlerts:[].concat(Object(i.a)(e.msgAlerts),[{heading:t,message:a,variant:n,id:r}])}}))},s.state={user:null,msgAlerts:[],profileId:"",profileData:null},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.msgAlerts,n=t.user;return Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(P,{user:n}),a.map((function(t){return Object(O.jsx)(g,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(O.jsxs)("main",{className:"container",children:[Object(O.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(O.jsx)(J,{})}}),Object(O.jsx)(u.b,{exact:!0,path:"/Ghibli-Flix",render:function(){return Object(O.jsx)(J,{})}}),Object(O.jsx)(u.b,{exact:!0,path:"/profile-dashboard",render:function(){return Object(O.jsx)(Oe,{msgAlert:e.msgAlert,user:e.state.user})}}),Object(O.jsx)(u.b,{path:"/FilmDetails/:id",render:function(){return Object(O.jsx)(te,{msgAlert:e.msgAlert,user:e.state.user})}}),Object(O.jsx)(p,{user:n,exact:!0,path:"/films",render:function(){return Object(O.jsx)(ee,{msgAlert:e.msgAlert,user:e.state.user})}}),Object(O.jsx)(u.b,{path:"/sign-up",render:function(){return Object(O.jsx)(B,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(O.jsx)(u.b,{path:"/sign-in",render:function(){return Object(O.jsx)(H,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(O.jsx)(p,{user:n,path:"/sign-out",render:function(){return Object(O.jsx)(z,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:n})}}),Object(O.jsx)(p,{user:n,path:"/change-password",render:function(){return Object(O.jsx)(W,{msgAlert:e.msgAlert,user:n})}}),Object(O.jsx)(p,{user:n,path:"/profile",render:function(){return Object(O.jsx)(ne,{msgAlert:e.msgAlert,user:e.state.user})}}),Object(O.jsx)(p,{user:n,path:"/create-profile",render:function(){return Object(O.jsx)(je,{msgAlert:e.msgAlert,user:n,setProfile:e.setProfile,setProfileData:e.setProfileData})}}),Object(O.jsx)(p,{exact:!0,user:n,path:"/profile/:id",render:function(){return Object(O.jsx)(ie,{msgAlert:e.msgAlert,user:n})}}),Object(O.jsx)(p,{user:n,path:"/profile/:id/edit",render:function(){return Object(O.jsx)(oe,{msgAlert:e.msgAlert,user:n})}}),Object(O.jsx)(p,{user:n,path:"/profiles",render:function(){return Object(O.jsx)(be,{msgAlert:e.msgAlert,user:n})}})]})]})}}]),a}(s.Component),pe=Object(O.jsx)(w.a,{basename:"/Ghibli-Flix",children:Object(O.jsx)(fe,{})});c.a.render(pe,document.getElementById("root"))},79:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){}},[[116,1,2]]]);
//# sourceMappingURL=main.67a8fbe5.chunk.js.map