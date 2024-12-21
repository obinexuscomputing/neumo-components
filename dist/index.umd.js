!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).NeumoComponents={})}(this,(function(t){"use strict";function e(t,e,s,i){var o,r=arguments.length,n=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,s,n):o(e,s))||n);return r>3&&n&&Object.defineProperty(e,s,n),n}function s(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}"function"==typeof SuppressedError&&SuppressedError;
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const i=globalThis,o=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;class a{constructor(t,e,s){if(this._$cssResult$=!0,s!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}}const h=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new a(s,t,r)},d=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,r))(e)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,{is:l,defineProperty:c,getOwnPropertyDescriptor:p,getOwnPropertyNames:u,getOwnPropertySymbols:f,getPrototypeOf:$}=Object,g=globalThis,m=g.trustedTypes,y=m?m.emptyScript:"",_=g.reactiveElementPolyfillSupport,b=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},A=(t,e)=>!l(t,e),S={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:A};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=S){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const r=i?.call(this);o.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??S}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=$(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...u(t),...f(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(o)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),o=i.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=s.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:v).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=i,this[i]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??A)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[b("elementProperties")]=new Map,w[b("finalized")]=new Map,_?.({ReactiveElement:w}),(g.reactiveElementVersions??=[]).push("2.0.4");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const x=globalThis,E=x.trustedTypes,C=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,P="$lit$",N=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+N,U=`<${k}>`,O=document,R=()=>O.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,M="[ \t\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,L=/>/g,j=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,I=/"/g,W=/^(?:script|style|textarea|title)$/i,V=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),q=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),K=new WeakMap,Z=O.createTreeWalker(O,129);function F(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const G=(t,e)=>{const s=t.length-1,i=[];let o,r=2===e?"<svg>":3===e?"<math>":"",n=B;for(let e=0;e<s;e++){const s=t[e];let a,h,d=-1,l=0;for(;l<s.length&&(n.lastIndex=l,h=n.exec(s),null!==h);)l=n.lastIndex,n===B?"!--"===h[1]?n=D:void 0!==h[1]?n=L:void 0!==h[2]?(W.test(h[2])&&(o=RegExp("</"+h[2],"g")),n=j):void 0!==h[3]&&(n=j):n===j?">"===h[0]?(n=o??B,d=-1):void 0===h[1]?d=-2:(d=n.lastIndex-h[2].length,a=h[1],n=void 0===h[3]?j:'"'===h[3]?I:z):n===I||n===z?n=j:n===D||n===L?n=B:(n=j,o=void 0);const c=n===j&&t[e+1].startsWith("/>")?" ":"";r+=n===B?s+U:d>=0?(i.push(a),s.slice(0,d)+P+s.slice(d)+N+c):s+N+(-2===d?e:c)}return[F(t,r+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Q{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[h,d]=G(t,e);if(this.el=Q.createElement(h,s),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Z.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(P)){const e=d[r++],s=i.getAttribute(t).split(N),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:s,ctor:"."===n[1]?st:"?"===n[1]?it:"@"===n[1]?ot:et}),i.removeAttribute(t)}else t.startsWith(N)&&(a.push({type:6,index:o}),i.removeAttribute(t));if(W.test(i.tagName)){const t=i.textContent.split(N),e=t.length-1;if(e>0){i.textContent=E?E.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],R()),Z.nextNode(),a.push({type:2,index:++o});i.append(t[e],R())}}}else if(8===i.nodeType)if(i.data===k)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(N,t+1));)a.push({type:7,index:o}),t+=N.length-1}o++}}static createElement(t,e){const s=O.createElement("template");return s.innerHTML=t,s}}function X(t,e,s=t,i){if(e===q)return e;let o=void 0!==i?s._$Co?.[i]:s._$Cl;const r=T(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=o:s._$Cl=o),void 0!==o&&(e=X(t,o._$AS(t,e.values),o,i)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??O).importNode(e,!0);Z.currentNode=i;let o=Z.nextNode(),r=0,n=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new tt(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new rt(o,this,t)),this._$AV.push(e),a=s[++n]}r!==a?.index&&(o=Z.nextNode(),r++)}return Z.currentNode=O,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),T(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==J&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Q.createElement(F(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Y(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new Q(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new tt(this.O(R()),this.O(R()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=J}_$AI(t,e=this,s,i){const o=this.strings;let r=!1;if(void 0===o)t=X(this,t,e,0),r=!T(t)||t!==this._$AH&&t!==q,r&&(this._$AH=t);else{const i=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=X(this,i[s+n],e,n),a===q&&(a=this._$AH[n]),r||=!T(a)||a!==this._$AH[n],a===J?t=J:t!==J&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!i&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}class it extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class ot extends et{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??J)===q)return;const s=this._$AH,i=t===J&&s!==J||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==J&&(s===J||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const nt=x.litHtmlPolyfillSupport;nt?.(Q,tt),(x.litHtmlVersions??=[]).push("3.2.1");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
class at extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=s?.renderBefore??null;i._$litPart$=o=new tt(e.insertBefore(R(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});const ht=globalThis.litElementPolyfillSupport;ht?.({LitElement:at}),(globalThis.litElementVersions??=[]).push("4.1.1");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const dt=t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,lt={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:A},ct=(t=lt,e,s)=>{const{kind:i,metadata:o}=s;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const o=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,o,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=s;return function(s){const o=this[i];e.call(this,s),this.requestUpdate(i,o,t)}}throw Error("Unsupported decorator location: "+i)};function pt(t){return(e,s)=>"object"==typeof s?ct(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}t.NeumoButton=class extends at{constructor(){super(...arguments),this.label="Click Me",this.disabled=!1,this.bgColor="#e0e0e0",this.textColor="#333",this.shadowLight="#ffffff",this.shadowDark="#cccccc"}render(){return V`
      <button
        class="neumo-button"
        style="${this._dynamicStyles()}"
        ?disabled="${this.disabled}"
        @click="${this._handleClick}"
      >
        ${this.label}
      </button>
    `}_dynamicStyles(){return`\n      --button-bg: ${this.bgColor};\n      --button-text: ${this.textColor};\n      --button-shadow-light: ${this.shadowLight};\n      --button-shadow-dark: ${this.shadowDark};\n    `}_handleClick(){if(!this.disabled){const t=new CustomEvent("neumo-click",{detail:{message:`${this.label} clicked!`},bubbles:!0,composed:!0});this.dispatchEvent(t)}}},t.NeumoButton.styles=h`
    :host {
      --neumo-btn-bg: var(--button-bg, #e0e0e0);
      --neumo-btn-text: var(--button-text, #333);
      --neumo-btn-shadow-light: var(--button-shadow-light, #ffffff);
      --neumo-btn-shadow-dark: var(--button-shadow-dark, #cccccc);
      --neumo-btn-hover-scale: 0.1;
      --neumo-btn-active-scale: 0.2;
      --neumo-btn-disabled-opacity: 0.6;
      display: inline-block;
    }

    button {
      all: unset;
      display: inline-block;
      padding: 10px 20px;
      border-radius: 12px;
      background: var(--neumo-btn-bg);
      color: var(--neumo-btn-text);
      box-shadow: 5px 5px 10px var(--neumo-btn-shadow-dark),
        -5px -5px 10px var(--neumo-btn-shadow-light);
      font-size: 1rem;
      font-weight: bold;
      text-align: center;
      cursor: pointer;
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }

    button:hover {
      transform: scale(1 + var(--neumo-btn-hover-scale));
    }

    button:active {
      transform: scale(1 - var(--neumo-btn-active-scale));
      box-shadow: 2px 2px 5px var(--neumo-btn-shadow-dark),
        -2px -2px 5px var(--neumo-btn-shadow-light);
    }

    button:disabled {
      cursor: not-allowed;
      opacity: var(--neumo-btn-disabled-opacity);
    }
  `,e([pt({type:String}),s("design:type",String)],t.NeumoButton.prototype,"label",void 0),e([pt({type:Boolean}),s("design:type",Boolean)],t.NeumoButton.prototype,"disabled",void 0),e([pt({type:String}),s("design:type",String)],t.NeumoButton.prototype,"bgColor",void 0),e([pt({type:String}),s("design:type",String)],t.NeumoButton.prototype,"textColor",void 0),e([pt({type:String}),s("design:type",String)],t.NeumoButton.prototype,"shadowLight",void 0),e([pt({type:String}),s("design:type",String)],t.NeumoButton.prototype,"shadowDark",void 0),t.NeumoButton=e([dt("neumo-button")],t.NeumoButton),t.NeumoCard=class extends at{constructor(){super(...arguments),this.bgColor="#f0f0f0",this.shadowLight="#ffffff",this.shadowDark="#d1d1d1",this.borderRadius="16px",this.padding="20px"}render(){return V`
      <div
        class="neumo-card"
        style="${this._dynamicStyles()}"
      >
        <slot></slot>
      </div>
    `}_dynamicStyles(){return`\n      --card-bg: ${this.bgColor};\n      --card-shadow-light: ${this.shadowLight};\n      --card-shadow-dark: ${this.shadowDark};\n      --card-border-radius: ${this.borderRadius};\n      --card-padding: ${this.padding};\n    `}},t.NeumoCard.styles=h`
    :host {
      display: block;
      --neumo-card-bg: var(--card-bg, #f0f0f0);
      --neumo-card-shadow-light: var(--card-shadow-light, #ffffff);
      --neumo-card-shadow-dark: var(--card-shadow-dark, #d1d1d1);
      --neumo-card-border-radius: var(--card-border-radius, 16px);
      --neumo-card-padding: var(--card-padding, 20px);
    }

    .neumo-card {
      background: var(--neumo-card-bg);
      border-radius: var(--neumo-card-border-radius);
      padding: var(--neumo-card-padding);
      box-shadow: 10px 10px 20px var(--neumo-card-shadow-dark),
                  -10px -10px 20px var(--neumo-card-shadow-light);
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }

    .neumo-card:hover {
      transform: scale(1.02);
      box-shadow: 8px 8px 16px var(--neumo-card-shadow-dark),
                  -8px -8px 16px var(--neumo-card-shadow-light);
    }

    .neumo-card:active {
      transform: scale(0.98);
      box-shadow: 5px 5px 10px var(--neumo-card-shadow-dark),
                  -5px -5px 10px var(--neumo-card-shadow-light);
    }
  `,e([pt({type:String}),s("design:type",String)],t.NeumoCard.prototype,"bgColor",void 0),e([pt({type:String}),s("design:type",String)],t.NeumoCard.prototype,"shadowLight",void 0),e([pt({type:String}),s("design:type",String)],t.NeumoCard.prototype,"shadowDark",void 0),e([pt({type:String}),s("design:type",String)],t.NeumoCard.prototype,"borderRadius",void 0),e([pt({type:String}),s("design:type",String)],t.NeumoCard.prototype,"padding",void 0),t.NeumoCard=e([dt("neumo-card")],t.NeumoCard),Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map