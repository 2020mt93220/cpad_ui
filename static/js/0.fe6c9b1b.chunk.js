(this["webpackJsonpbits-pilani_2.0"]=this["webpackJsonpbits-pilani_2.0"]||[]).push([[0],{624:function(e,a,t){},625:function(e,a,t){},626:function(e,a,t){},637:function(e,a,t){"use strict";t.r(a);var n=t(2),l=t(0),c=t.n(l),o=(t(624),t(8)),r=t(27),m=t(20),i=(t(625),t(17)),s=t(1),u=(t(626),t(44)),d=(t(11),t(6)),p=t(102);function v(e){var a=Object(l.useState)({name:"",validname:"",email:"",validemail:"",phone:"",validphone:"",company:"",validcompany:""}),t=Object(n.a)(a,2),o=t[0],r=t[1],m=function(e){var a,t,n=e.target,l=n.name,c=n.value;"phone"==l?c.length<=10&&r(Object(s.a)(Object(s.a)({},o),{},(a={},Object(i.a)(a,l,c),Object(i.a)(a,"valid".concat([l]),!0),a))):r(Object(s.a)(Object(s.a)({},o),{},(t={},Object(i.a)(t,l,c),Object(i.a)(t,"valid".concat([l]),!0),t)))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("div",{className:"qoute-div"},c.a.createElement("div",{className:"wrapperinpsec"},c.a.createElement("div",{className:"quote-txt"},"Request Demo"),c.a.createElement("div",{className:"wrp-clss"},c.a.createElement("div",null,c.a.createElement(u.a,{type:"text",label:"Your Name",name:"name",value:o.name,onChange:function(e){return m(e)},placeholder:"Name",err:!1===o.validname&&"Please enter valid name"}))),c.a.createElement("div",{className:"wrp-clss"},c.a.createElement("div",null,c.a.createElement(u.a,{type:"number",label:"Mobile Number",name:"phone",value:o.phone,onChange:function(e){return m(e)},placeholder:"Mobile number",err:!1===o.validphone&&"Please enter valid mobile number"}))),c.a.createElement("div",{className:"wrp-clss"},c.a.createElement("div",null,c.a.createElement(u.a,{type:"text",label:"Email ID",name:"email",value:o.email,onChange:function(e){return m(e)},placeholder:"Email ID",err:!1===o.validemail&&"Please enter valid email id"}))),c.a.createElement("div",{className:"wrp-clss"},c.a.createElement("div",null,c.a.createElement(u.a,{type:"text",label:"Company",name:"company",value:o.company,onChange:function(e){return m(e)},placeholder:"Company Name",err:!1===o.validcompany&&"Please enter valid company name"}))),c.a.createElement("div",{style:{textAlign:"center",marginTop:"30px",marginBottom:"20px"}},c.a.createElement("button",{id:"RequestDemoBtn_Home",className:"startedbtn",onClick:function(){return function(){var a=o.name,t=o.email,n=o.phone,l=o.company,c=!1;if(/^[a-zA-Z ]{2,100}$/.test(a)?""!=n.trim()&&/^[0]?[56789]\d{9}$/.test(n)?""!=t.trim()&&/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)?""==l.trim()&&(r(Object(s.a)(Object(s.a)({},o),{},{validcompany:!1})),c=!0):(r(Object(s.a)(Object(s.a)({},o),{},{validemail:!1})),c=!0):(r(Object(s.a)(Object(s.a)({},o),{},{validphone:!1})),c=!0):(r(Object(s.a)(Object(s.a)({},o),{},{validname:!1})),c=!0),0==c){e.ClosePop("showSuccess");Object(d.a)("UserRequest",{name:a,Email:t,Phone:n,company:l});window.clevertap.onUserLogin.push({Site:{Name:a,Identity:n,Email:t.toLowerCase(),Phone:"+91"+n,Company_Name:l}}),d.d.push({name:a,email_id:t,phone_number:n,company:l}),r(Object(s.a)(Object(s.a)({},o),{},{name:"",email:"",phone:"",company:""}))}}()}},"Submit"))))))}function b(e){return c.a.createElement("div",{style:{display:e.show?"block":"none"}},c.a.createElement("div",{className:"blurBackRequest",onClick:function(a){return function(a){a.currentTarget==a.target&&e.ClosePop()}(a)}},c.a.createElement("div",{className:"requestSectionCanvs"},c.a.createElement("div",{className:"mt-3 float-right mr-3"},c.a.createElement("img",{className:"lazyload closeIcoRequest",onClick:e.ClosePop,height:"30px",src:"https://res.cloudinary.com/bits-pilani/image/upload/fl_lossy,f_auto,q_auto/v1593513756/New-home-screen/Group_582_1_bppect.jpg",alt:"form"})),c.a.createElement("div",{className:"hmPgReqDmSecCls"},c.a.createElement(v,{ClosePop:function(a){return e.ClosePop(a)}})))))}a.default=Object(r.g)(Object(o.b)((function(e){return{auth:e.navigationStack.authObj}}),null)((function(e){var a=Object(l.useState)(!1),t=Object(n.a)(a,2),o=t[0],r=t[1],i=Object(l.useState)(!1),s=Object(n.a)(i,2),u=s[0],v=s[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{ClosePop:function(e){return a=e,r(!1),void("showSuccess"==a&&v(!0));var a},show:o}),c.a.createElement("div",{className:"demodiv",style:{backgroundColor:e.info.color}},c.a.createElement("div",{className:"demoflexx homeWrapperComponents"},c.a.createElement("div",{className:"infodiv"},c.a.createElement("div",{className:e.isWraped&&"wrp-req-div"},c.a.createElement("div",{className:"care-head mainHeading_max"}," ",e.info.careheading),c.a.createElement("div",{className:"contentTxt aac",style:{paddingTop:"6px"}},e.info.caresub))),c.a.createElement("div",{className:"btnflexx"},c.a.createElement("div",{className:"btn-wrp"},c.a.createElement("button",{className:"startedbtn",onClick:function(){return Object(d.a)("GetStarted",{clicked:!0}),void(!0===e.auth.authStatus?e.history.push(m.b.GSTIN_DETAILS):e.history.push(m.b.VERIFY_PHONE))}},Object(d.e)()),c.a.createElement("span",null,c.a.createElement("button",{className:"demobtn",onClick:function(){Object(d.a)("RequestDemo",{clicked:!0}),r(!0)}},"Request Demo")))))),c.a.createElement(p.a,{show:u,showImg:!0,data:{title:"success",content:"Thank you for submitting the details. We will get back to you soon!"},Close:function(){return v(!1)}}))})))}}]);
//# sourceMappingURL=0.fe6c9b1b.chunk.js.map