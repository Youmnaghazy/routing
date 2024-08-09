import './polyfills.server.mjs';
import{A as x,B as h,a,b as o,c as r,d as l,e as i,f as p,m as u,o as v,p as g,s as C,w as d,z as f}from"./chunk-L4NCSCYS.mjs";var b=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a({type:t,selectors:[["app-navbar"]],standalone:!0,features:[p],decls:17,vars:0,consts:[[1,"navbar","navbar-expand-lg","bg-light"],[1,"container"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto","mb-2","mb-lg-0"],[1,"nav-item"],["routerLinkActive","bg-warning rounded rounded-pill","routerLink","home",1,"nav-link"],["routerLinkActive","bg-warning rounded rounded-pill","routerLink","about",1,"nav-link"],["routerLinkActive","bg-warning rounded rounded-pill","routerLink","contact",1,"nav-link"]],template:function(n,s){n&1&&(o(0,"nav",0)(1,"div",1)(2,"a",2),i(3,"Routing"),r(),o(4,"button",3),l(5,"span",4),r(),o(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),i(10,"Home"),r()(),o(11,"li",7)(12,"a",9),i(13,"About"),r()(),o(14,"li",7)(15,"a",10),i(16,"Contact"),r()()()()()())},dependencies:[f,x]});let e=t;return e})();var y=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a({type:t,selectors:[["app-notfound"]],standalone:!0,features:[p],decls:1,vars:0,consts:[["src","./assets/images/404-error-page-templates.jpg","alt",""]],template:function(n,s){n&1&&l(0,"img",0)}});let e=t;return e})();var S=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a({type:t,selectors:[["app-footer"]],standalone:!0,features:[p],decls:2,vars:0,template:function(n,s){n&1&&(o(0,"p"),i(1,"footer works!"),r())}});let e=t;return e})();var k=(()=>{let t=class t{constructor(){this.title="app"}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a({type:t,selectors:[["app-root"]],standalone:!0,features:[p],decls:3,vars:0,template:function(n,s){n&1&&l(0,"app-navbar")(1,"router-outlet")(2,"app-footer")},dependencies:[d,b,S]});let e=t;return e})();var F=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a({type:t,selectors:[["app-home"]],standalone:!0,features:[p],decls:2,vars:0,template:function(n,s){n&1&&(o(0,"p"),i(1,"home works!"),r())}});let e=t;return e})();var M=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a({type:t,selectors:[["app-about"]],standalone:!0,features:[p],decls:12,vars:0,consts:[["routerLink","front"],["routerLink","back"],["routerLink","ai"],[1,"bg-warning"]],template:function(n,s){n&1&&(o(0,"ul")(1,"li")(2,"a",0),i(3,"FrontEnd"),r()(),o(4,"li")(5,"a",1),i(6,"BackEnd"),r()(),o(7,"li")(8,"a",2),i(9,"Artficial intelligence"),r()()(),o(10,"div",3),l(11,"router-outlet"),r())},dependencies:[f,d],styles:["ul[_ngcontent-%COMP%]{list-style:none}a[_ngcontent-%COMP%]{text-decoration:none}"]});let e=t;return e})();var w=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a({type:t,selectors:[["app-contact"]],standalone:!0,features:[p],decls:2,vars:0,template:function(n,s){n&1&&(o(0,"p"),i(1,"contact works!"),r())}});let e=t;return e})();var D=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a({type:t,selectors:[["app-front"]],standalone:!0,features:[p],decls:2,vars:0,template:function(n,s){n&1&&(o(0,"p"),i(1,"front works!"),r())}});let e=t;return e})();var E=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a({type:t,selectors:[["app-back"]],standalone:!0,features:[p],decls:2,vars:0,template:function(n,s){n&1&&(o(0,"p"),i(1,"back works!"),r())}});let e=t;return e})();var L=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a({type:t,selectors:[["app-aii"]],standalone:!0,features:[p],decls:2,vars:0,template:function(n,s){n&1&&(o(0,"p"),i(1,"aii works!"),r())}});let e=t;return e})();var T=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:F},{path:"about",component:M,children:[{path:"front",component:D},{path:"back",component:E},{path:"ai",component:L}]},{path:"contact",component:w},{path:"**",component:y}];var A={providers:[h(T),g()]};var O={providers:[C()]},R=u(A,O);var H=()=>v(k,R),Ct=H;export{Ct as a};
