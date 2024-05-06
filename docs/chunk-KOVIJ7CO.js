import{a as V,b as _,c as I,d as N,e as P,f as p,h as R,i as U,k as A,n as G,o as M}from"./chunk-PGC2GXIY.js";import{B as x,H as a,K as E,M as C,N as l,P as r,Q as e,R as d,S as w,T as u,U as m,V as s,W as S,la as F,oa as k,q as O,r as b,t as g,u as f,x as y,xa as T,za as L}from"./chunk-NYVGVE3O.js";function D(n,i){if(n&1&&(r(0,"div",13),s(1),e()),n&2){let o=m(2);a(),S(o.errorMessage())}}function z(n,i){if(n&1){let o=w();r(0,"div",2)(1,"div",3),s(2," Login "),e(),r(3,"div",4)(4,"div",5)(5,"label"),s(6,"Username"),e(),d(7,"input",6),e(),r(8,"div",5)(9,"label"),s(10,"Password"),e(),d(11,"input",7),e(),C(12,D,2,1,"div",8),e(),r(13,"div",9)(14,"button",10),u("click",function(){g(o);let c=m();return f(c.login())}),s(15,"Sign In"),e(),r(16,"div",11)(17,"span"),s(18,"Don't have an account?"),e(),r(19,"span",12),u("click",function(){g(o);let c=m();return f(c.toCreateForm())}),s(20,"Sign up"),e()()()()}if(n&2){let o=m();a(3),l("formGroup",o.loginForm),a(9),l("ngIf",o.errorMessage()),a(2),l("disabled",o.loginForm.invalid)}}function Y(n,i){if(n&1&&(r(0,"div",13),s(1),e()),n&2){let o=m(2);a(),S(o.errorMessage())}}function B(n,i){if(n&1){let o=w();r(0,"div",2)(1,"div",3),s(2," New Account "),e(),r(3,"div",4)(4,"div",5)(5,"label"),s(6,"Username"),e(),d(7,"input",6),e(),r(8,"div",5)(9,"label"),s(10,"Password"),e(),d(11,"input",7),e(),r(12,"div",5)(13,"label"),s(14,"Confirm password"),e(),d(15,"input",14),e(),C(16,Y,2,1,"div",8),e(),r(17,"div",9)(18,"button",10),u("click",function(){g(o);let c=m();return f(c.createUser())}),s(19,"Sign Up"),e(),r(20,"div",11)(21,"span"),s(22,"Already have an account?"),e(),r(23,"span",12),u("click",function(){g(o);let c=m();return f(c.toLoginForm())}),s(24,"Sign in"),e()()()()}if(n&2){let o=m();a(3),l("formGroup",o.createForm),a(13),l("ngIf",o.errorMessage()),a(2),l("disabled",o.createForm.invalid)}}var h={login:0,newAccount:1},j=(()=>{let i=class i{constructor(){this.loginService=x(M),this.userSessionService=x(G),this.router=x(T),this.FORM_TYPE=h,this.currentState=h.login,this.loginForm=new P({name:new p("",[_.required]),password:new p("",[_.required])}),this.createForm=new P({name:new p("",[_.required]),password:new p("",[_.required]),passwordConfirm:new p("",[_.required])}),this.errorMessage=E(null)}toLoginForm(){this.errorMessage.set(null),this.createForm.reset(),this.currentState=h.login}toCreateForm(){this.errorMessage.set(null),this.loginForm.reset(),this.currentState=h.newAccount}login(){this.errorMessage.set(null),this.loginService.login(this.loginForm.value).subscribe({next:t=>{t.accessToken&&t.user&&(this.userSessionService.user=t.user,this.userSessionService.accessToken=t.accessToken,this.router.navigate(["news"]))},error:t=>{t.error.message&&this.errorMessage.set(t.error.message)}})}createUser(){this.errorMessage.set(null),this.loginService.signup(this.createForm.value).subscribe({next:t=>{t.accessToken&&t.user&&(this.userSessionService.user=t.user,this.userSessionService.accessToken=t.accessToken,this.router.navigate(["news"]))},error:t=>{t.error.message&&this.errorMessage.set(t.error.message)}})}};i.\u0275fac=function(c){return new(c||i)},i.\u0275cmp=O({type:i,selectors:[["login"]],decls:3,vars:2,consts:[[1,"container"],["class","form",4,"ngIf"],[1,"form"],[1,"form__header"],[1,"form__body",3,"formGroup"],[1,"form__body__field"],["type","text","formControlName","name"],["type","password","formControlName","password"],["class","form__body__error",4,"ngIf"],[1,"form__footer"],[3,"disabled","click"],[1,"switch-form"],[1,"link",3,"click"],[1,"form__body__error"],["type","password","formControlName","passwordConfirm"]],template:function(c,v){c&1&&(r(0,"div",0),C(1,z,21,3,"div",1)(2,B,25,3,"div",1),e()),c&2&&(a(),l("ngIf",v.currentState==v.FORM_TYPE.login),a(),l("ngIf",v.currentState==v.FORM_TYPE.newAccount))},dependencies:[F,V,I,N,R,U],styles:[".container[_ngcontent-%COMP%]{width:100vw;height:100vh;display:flex;align-items:center;justify-content:center}.container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{display:flex;flex-direction:column;background-color:var(--white-100);gap:12px;width:400px;border-radius:20px;padding:12px;box-shadow:10px 5px 5px var(--grey-20)}.container[_ngcontent-%COMP%]   .form__header[_ngcontent-%COMP%]{text-align:center;font-size:20px;color:var(--blue-20)}.container[_ngcontent-%COMP%]   .form__body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.container[_ngcontent-%COMP%]   .form__body__field[_ngcontent-%COMP%]{display:flex;flex-direction:column}.container[_ngcontent-%COMP%]   .form__body__field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--blue-20);font-size:10px}.container[_ngcontent-%COMP%]   .form__body__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;border:none;border-bottom:2px solid var(--blue-20);outline:none;padding:4px 0}.container[_ngcontent-%COMP%]   .form__body__error[_ngcontent-%COMP%]{font-size:14px;color:var(--pink-50)}.container[_ngcontent-%COMP%]   .form__footer[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:column;gap:10px;justify-content:center;align-items:center}.container[_ngcontent-%COMP%]   .form__footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]   .form__footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.container[_ngcontent-%COMP%]   .form__footer[_ngcontent-%COMP%]   .switch-form[_ngcontent-%COMP%]{font-size:12px;display:flex;gap:4px}.container[_ngcontent-%COMP%]   .form__footer[_ngcontent-%COMP%]   .switch-form[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:var(--blue-20);cursor:pointer}.container[_ngcontent-%COMP%]   .form__footer[_ngcontent-%COMP%]   .switch-form[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{color:var(--blue-60);text-decoration:underline}"]});let n=i;return n})();var H=[{path:"",component:j}],ce=(()=>{let i=class i{};i.\u0275fac=function(c){return new(c||i)},i.\u0275mod=b({type:i}),i.\u0275inj=y({providers:[M],imports:[L.forChild(H),k,A]});let n=i;return n})();export{ce as LoginModule};
