import{$ as b,B as C,C as I,D as S,I as o,J as H,L as h,O as L,T as $,a as d,b as v,ea as ie,f as Q,ga as ne,h as ee,ha as re,i as te,ia as W,n as E,o as _,p as c,qa as se,r as F,s as u,v as U,w as p,x as w,xa as oe,y as g,z as D}from"./chunk-NYVGVE3O.js";var me=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(o(H),o(U))},e.\u0275dir=u({type:e});let t=e;return t})(),Le=(()=>{let e=class e extends me{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=S(e)))(s||e)}})(),e.\u0275dir=u({type:e,features:[h]});let t=e;return t})(),J=new g("");var $e={provide:J,useExisting:D(()=>ye),multi:!0};function We(){let t=W()?W().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var qe=new g(""),ye=(()=>{let e=class e extends me{constructor(i,r,s){super(i,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!We())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(o(H),o(U),o(qe,8))},e.\u0275dir=u({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&$("input",function(l){return s._handleInput(l.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(l){return s._compositionEnd(l.target.value)})},features:[b([$e]),h]});let t=e;return t})();function f(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function ve(t){return t!=null&&typeof t.length=="number"}var X=new g(""),Y=new g(""),ze=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ae=class{static min(e){return Ze(e)}static max(e){return Je(e)}static required(e){return Xe(e)}static requiredTrue(e){return Ye(e)}static email(e){return Ke(e)}static minLength(e){return Qe(e)}static maxLength(e){return et(e)}static pattern(e){return tt(e)}static nullValidator(e){return _e(e)}static compose(e){return Me(e)}static composeAsync(e){return Fe(e)}};function Ze(t){return e=>{if(f(e.value)||f(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function Je(t){return e=>{if(f(e.value)||f(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function Xe(t){return f(t.value)?{required:!0}:null}function Ye(t){return t.value===!0?null:{required:!0}}function Ke(t){return f(t.value)||ze.test(t.value)?null:{email:!0}}function Qe(t){return e=>f(e.value)||!ve(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function et(t){return e=>ve(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function tt(t){if(!t)return _e;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(f(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function _e(t){return null}function Ce(t){return t!=null}function Ve(t){return ie(t)?Q(t):t}function De(t){let e={};return t.forEach(n=>{e=n!=null?d(d({},e),n):e}),Object.keys(e).length===0?null:e}function be(t,e){return e.map(n=>n(t))}function it(t){return!t.validate}function Ae(t){return t.map(e=>it(e)?e:n=>e.validate(n))}function Me(t){if(!t)return null;let e=t.filter(Ce);return e.length==0?null:function(n){return De(be(n,e))}}function Ee(t){return t!=null?Me(Ae(t)):null}function Fe(t){if(!t)return null;let e=t.filter(Ce);return e.length==0?null:function(n){let i=be(n,e).map(Ve);return te(i).pipe(ee(De))}}function we(t){return t!=null?Fe(Ae(t)):null}function le(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Ie(t){return t._rawValidators}function Se(t){return t._rawAsyncValidators}function q(t){return t?Array.isArray(t)?t:[t]:[]}function N(t,e){return Array.isArray(t)?t.includes(e):t===e}function ue(t,e){let n=q(e);return q(t).forEach(r=>{N(n,r)||n.push(r)}),n}function de(t,e){return q(e).filter(n=>!N(t,n))}var x=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ee(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=we(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},m=class extends x{get formDirective(){return null}get path(){return null}},y=class extends x{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},P=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},nt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Lt=v(d({},nt),{"[class.ng-submitted]":"isSubmitted"}),$t=(()=>{let e=class e extends P{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(o(y,2))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&L("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[h]});let t=e;return t})(),Wt=(()=>{let e=class e extends P{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(o(m,10))},e.\u0275dir=u({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&L("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[h]});let t=e;return t})();var A="VALID",O="INVALID",V="PENDING",M="DISABLED";function Oe(t){return(j(t)?t.validators:t)||null}function rt(t){return Array.isArray(t)?Ee(t):t||null}function Ne(t,e){return(j(e)?e.asyncValidators:t)||null}function st(t){return Array.isArray(t)?we(t):t||null}function j(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function ot(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new E(1e3,"");if(!i[n])throw new E(1001,"")}function at(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new E(1002,"")})}var k=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===A}get invalid(){return this.status===O}get pending(){return this.status==V}get disabled(){return this.status===M}get enabled(){return this.status!==M}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ue(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ue(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(de(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(de(e,this._rawAsyncValidators))}hasValidator(e){return N(this._rawValidators,e)}hasAsyncValidator(e){return N(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=V,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=M,this.errors=null,this._forEachChild(i=>{i.disable(v(d({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(v(d({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=A,this._forEachChild(i=>{i.enable(v(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(v(d({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===A||this.status===V)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?M:A}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator=!0;let n=Ve(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new _,this.statusChanges=new _}_calculateStatus(){return this._allControlsDisabled()?M:this.errors?O:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(O)?O:A}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){j(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=rt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=st(this._rawAsyncValidators)}},ce=class extends k{constructor(e,n,i){super(Oe(n),Ne(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){at(this,!0,e),Object.keys(e).forEach(i=>{ot(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,s)=>{i=n(i,r,s)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var B=new g("CallSetDisabledState",{providedIn:"root",factory:()=>R}),R="always";function xe(t,e){return[...e.path,t]}function z(t,e,n=R){K(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),ut(t,e),ct(t,e),dt(t,e),lt(t,e)}function he(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),G(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function T(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function lt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function K(t,e){let n=Ie(t);e.validator!==null?t.setValidators(le(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Se(t);e.asyncValidator!==null?t.setAsyncValidators(le(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();T(e._rawValidators,r),T(e._rawAsyncValidators,r)}function G(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=Ie(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.validator);s.length!==r.length&&(n=!0,t.setValidators(s))}}if(e.asyncValidator!==null){let r=Se(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.asyncValidator);s.length!==r.length&&(n=!0,t.setAsyncValidators(s))}}}let i=()=>{};return T(e._rawValidators,i),T(e._rawAsyncValidators,i),n}function ut(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Pe(t,e)})}function dt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Pe(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Pe(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function ct(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function ht(t,e){t==null,K(t,e)}function ft(t,e){return G(t,e)}function ke(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function pt(t){return Object.getPrototypeOf(t.constructor)===Le}function gt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Te(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(s=>{s.constructor===ye?n=s:pt(s)?i=s:r=s}),r||i||n||null}function mt(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function fe(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function pe(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Ge=class extends k{constructor(e=null,n,i){super(Oe(n),Ne(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),j(n)&&(n.nonNullable||n.initialValueIsDefault)&&(pe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){fe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){fe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){pe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var yt=t=>t instanceof Ge;var vt={provide:y,useExisting:D(()=>_t)},ge=Promise.resolve(),_t=(()=>{let e=class e extends y{constructor(i,r,s,a,l,He){super(),this._changeDetectorRef=l,this.callSetDisabledState=He,this.control=new Ge,this._registered=!1,this.name="",this.update=new _,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=Te(this,a)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),ke(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){z(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){ge.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,s=r!==0&&re(r);ge.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?xe(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(o(m,9),o(X,10),o(Y,10),o(J,10),o(ne,8),o(B,8))},e.\u0275dir=u({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[c.None,"disabled","isDisabled"],model:[c.None,"ngModel","model"],options:[c.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[b([vt]),h,I]});let t=e;return t})();var je=new g("");var Ct={provide:m,useExisting:D(()=>Vt)},Vt=(()=>{let e=class e extends m{constructor(i,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new _,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(G(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return z(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){he(i.control||null,i,!1),mt(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,gt(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,s=this.form.get(i.path);r!==s&&(he(r||null,i),yt(s)&&(z(s,i,this.callSetDisabledState),i.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);ht(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&ft(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){K(this.form,this),this._oldForm&&G(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(o(X,10),o(Y,10),o(B,8))},e.\u0275dir=u({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&$("submit",function(l){return s.onSubmit(l)})("reset",function(){return s.onReset()})},inputs:{form:[c.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[b([Ct]),h,I]});let t=e;return t})();var Dt={provide:y,useExisting:D(()=>bt)},bt=(()=>{let e=class e extends y{set isDisabled(i){}constructor(i,r,s,a,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new _,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=Te(this,a)}ngOnChanges(i){this._added||this._setUpControl(),ke(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return xe(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(o(m,13),o(X,10),o(Y,10),o(J,10),o(je,8))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""]],inputs:{name:[c.None,"formControlName","name"],isDisabled:[c.None,"disabled","isDisabled"],model:[c.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[b([Dt]),h,I]});let t=e;return t})();var Be=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=F({type:e}),e.\u0275inj=w({});let t=e;return t})();var zt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:B,useValue:i.callSetDisabledState??R}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=F({type:e}),e.\u0275inj=w({imports:[Be]});let t=e;return t})(),Zt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:je,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:B,useValue:i.callSetDisabledState??R}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=F({type:e}),e.\u0275inj=w({imports:[Be]});let t=e;return t})();var At="http://localhost:5000",Re=(()=>{let e=class e{constructor(){this.http=C(se),this.TARGET=At}get(i,r={}){return this.http.get(this.TARGET+i,{params:r})}post(i,r){return this.http.post(this.TARGET+i,r)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac});let t=e;return t})();var Ue=(()=>{let e=class e{get user(){let i=localStorage.getItem("user");return i?JSON.parse(i):{}}set user(i){localStorage.setItem("user",JSON.stringify(i))}get accessToken(){return localStorage.getItem("accessToken")||""}set accessToken(i){localStorage.setItem("accessToken",i)}clearSession(){localStorage.removeItem("user"),localStorage.removeItem("accessToken")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ai=(()=>{let e=class e extends Re{constructor(){super(...arguments),this.userSessionService=C(Ue),this.router=C(oe)}login(i){return this.post("/api/user/login",i)}signup(i){return this.post("/api/user/create",i)}logout(){return this.post("/api/user/logout",{}).subscribe(()=>{this.userSessionService.clearSession(),this.router.navigate(["login"])})}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=S(e)))(s||e)}})(),e.\u0275prov=p({token:e,factory:e.\u0275fac});let t=e;return t})();export{ye as a,ae as b,$t as c,Wt as d,ce as e,Ge as f,_t as g,Vt as h,bt as i,zt as j,Zt as k,At as l,Re as m,Ue as n,ai as o};
