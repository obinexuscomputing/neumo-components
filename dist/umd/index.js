!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit"),require("lit/decorators.js")):"function"==typeof define&&define.amd?define(["exports","lit","lit/decorators.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).NeumoComponents={},t.Lit,t.LitDecorators)}(this,(function(t,e,o){"use strict";function i(t,e,o,i){var r,a=arguments.length,n=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,o,n):r(e,o))||n);return a>3&&n&&Object.defineProperty(e,o,n),n}function r(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}"function"==typeof SuppressedError&&SuppressedError,t.NeumoButton=class extends e.LitElement{constructor(){super(...arguments),this.label="Click Me",this.disabled=!1,this.variant="flat",this.size="md",this.platform="web",this.bgColor="#e0e0e0",this.textColor="#333",this.shadowLight="#ffffff",this.shadowDark="#cccccc",this.useHaptics=!1,this.useRipple=!1}render(){return e.html`
      <button
        class=${this._getButtonClasses()}
        ?disabled=${this.disabled}
        style=${this._getButtonStyles()}
        @click=${this._handleClick}
        @touchstart=${this._handleTouchStart}
        @touchend=${this._handleTouchEnd}
      >
        ${this.label}
        <slot></slot>
      </button>
    `}_getButtonClasses(){return`neumo-button ${this.variant} ${this.platform} ${this.size}`}_getButtonStyles(){return`\n      --button-bg: ${this.bgColor};\n      --button-text: ${this.textColor};\n      --button-shadow-light: ${this.shadowLight};\n      --button-shadow-dark: ${this.shadowDark};\n    `}_handleClick(t){this.disabled||("android"===this.platform&&this.useRipple&&this._createRipple(t),this.dispatchEvent(new CustomEvent("neumo-click",{detail:{platform:this.platform,variant:this.variant,timestamp:Date.now()},bubbles:!0,composed:!0})))}_handleTouchStart(){this.disabled||"ios"===this.platform&&this.useHaptics&&"vibrate"in navigator&&navigator.vibrate(10)}_handleTouchEnd(){}_createRipple(t){const e=t.currentTarget,o=document.createElement("span"),i=e.getBoundingClientRect(),r=Math.max(i.width,i.height),a=t.clientX-i.left-r/2,n=t.clientY-i.top-r/2;o.style.width=o.style.height=`${r}px`,o.style.left=`${a}px`,o.style.top=`${n}px`,o.classList.add("ripple"),e.appendChild(o),o.addEventListener("animationend",(()=>{o.remove()}))}},t.NeumoButton.styles=e.css`
    :host {
      --neumo-btn-bg: var(--button-bg, #e0e0e0);
      --neumo-btn-text: var(--button-text, #333);
      --neumo-btn-shadow-light: var(--button-shadow-light, #ffffff);
      --neumo-btn-shadow-dark: var(--button-shadow-dark, #cccccc);
      --neumo-btn-hover-scale: 0.1;
      --neumo-btn-active-scale: 0.2;
      --neumo-btn-disabled-opacity: 0.6;
      display: inline-block;
      
      /* Mobile-first defaults */
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
      user-select: none;
    }

    button {
      all: unset;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: var(--neumo-btn-padding, 12px 24px);
      border-radius: var(--neumo-btn-radius, 12px);
      background: var(--neumo-btn-bg);
      color: var(--neumo-btn-text);
      font-size: var(--neumo-btn-font-size, 1rem);
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      /* Platform-specific styles handled by mixins */
      @include neu-button-platform-styles();
    }

    /* Size variants */
    :host([size="sm"]) button {
      padding: 8px 16px;
      font-size: 0.875rem;
    }

    :host([size="lg"]) button {
      padding: 16px 32px;
      font-size: 1.125rem;
    }

    /* Platform-specific hover states */
    @media (hover: hover) {
      button:hover:not(:disabled) {
        transform: translateY(-1px) scale(1.02);
      }
    }

    /* Active state */
    button:active:not(:disabled) {
      transform: translateY(1px) scale(0.98);
    }

    /* Disabled state */
    button:disabled {
      cursor: not-allowed;
      opacity: var(--neumo-btn-disabled-opacity);
    }

    /* Ripple effect for Android */
    .ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 600ms linear;
      background-color: rgba(255, 255, 255, 0.7);
    }

    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `,i([o.property({type:String}),r("design:type",String)],t.NeumoButton.prototype,"label",void 0),i([o.property({type:Boolean}),r("design:type",Boolean)],t.NeumoButton.prototype,"disabled",void 0),i([o.property({type:String}),r("design:type",String)],t.NeumoButton.prototype,"variant",void 0),i([o.property({type:String}),r("design:type",String)],t.NeumoButton.prototype,"size",void 0),i([o.property({type:String}),r("design:type",String)],t.NeumoButton.prototype,"platform",void 0),i([o.property({type:String}),r("design:type",String)],t.NeumoButton.prototype,"bgColor",void 0),i([o.property({type:String}),r("design:type",String)],t.NeumoButton.prototype,"textColor",void 0),i([o.property({type:String}),r("design:type",String)],t.NeumoButton.prototype,"shadowLight",void 0),i([o.property({type:String}),r("design:type",String)],t.NeumoButton.prototype,"shadowDark",void 0),i([o.property({type:Boolean}),r("design:type",Boolean)],t.NeumoButton.prototype,"useHaptics",void 0),i([o.property({type:Boolean}),r("design:type",Boolean)],t.NeumoButton.prototype,"useRipple",void 0),t.NeumoButton=i([o.customElement("neumo-button")],t.NeumoButton),t.NeumoCard=class extends e.LitElement{constructor(){super(...arguments),this.platform="web",this.variant="flat",this.size="md",this.interactive=!1,this.bgColor="#f0f0f0",this.shadowLight="#ffffff",this.shadowDark="#d1d1d1",this.width="auto",this.height="auto",this.padding="20px",this.rippleEffect=!1,this.hoverEffect=!0,this.pressEffect=!0}render(){return e.html`
      <div
        class=${this._getCardClasses()}
        style=${this._getCardStyles()}
        @click=${this._handleClick}
        @touchstart=${this._handleTouchStart}
        @touchend=${this._handleTouchEnd}
      >
        <slot></slot>
      </div>
    `}_getCardClasses(){return`neumo-card ${this.variant} ${this.platform} ${this.size} ${this.interactive?"interactive":""}`}_getCardStyles(){return`\n      --card-bg: ${this.bgColor};\n      --card-shadow-light: ${this.shadowLight};\n      --card-shadow-dark: ${this.shadowDark};\n      --card-width: ${this.width};\n      --card-height: ${this.height};\n      --card-padding: ${this.padding};\n    `}_handleClick(t){this.interactive&&("android"===this.platform&&this.rippleEffect&&this._createRipple(t),this.dispatchEvent(new CustomEvent("neumo-card-click",{detail:{platform:this.platform,variant:this.variant,timestamp:Date.now()},bubbles:!0,composed:!0})))}_handleTouchStart(){this.interactive&&"ios"===this.platform&&"vibrate"in navigator&&navigator.vibrate(10)}_handleTouchEnd(){}_createRipple(t){const e=t.currentTarget,o=document.createElement("span"),i=e.getBoundingClientRect(),r=Math.max(i.width,i.height),a=t.clientX-i.left-r/2,n=t.clientY-i.top-r/2;o.style.width=o.style.height=`${r}px`,o.style.left=`${a}px`,o.style.top=`${n}px`,o.classList.add("ripple"),e.appendChild(o),o.addEventListener("animationend",(()=>{o.remove()}))}},t.NeumoCard.styles=e.css`
    :host {
      --neumo-card-bg: var(--card-bg, #f0f0f0);
      --neumo-card-shadow-light: var(--card-shadow-light, #ffffff);
      --neumo-card-shadow-dark: var(--card-shadow-dark, #d1d1d1);
      --neumo-card-radius: var(--card-radius, 16px);
      --neumo-card-padding: var(--card-padding, 20px);
      --neumo-card-hover-scale: 0;
      --neumo-card-press-scale: 0.98;
      
      display: block;
      width: var(--card-width, auto);
      height: var(--card-height, auto);
      
      /* Mobile-first defaults */
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
      user-select: none;
    }

    .neumo-card {
      position: relative;
      width: 100%;
      height: 100%;
      background: var(--neumo-card-bg);
      border-radius: var(--neumo-card-radius);
      padding: var(--neumo-card-padding);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;

      /* Platform-specific styles handled by mixins */
      @include neu-card-platform-styles();
    }

    /* Platform-specific hover states */
    @media (hover: hover) {
      .neumo-card.interactive:hover {
        transform: translateY(-2px) scale(var(--neumo-card-hover-scale));
      }
    }

    /* Active/press state */
    .neumo-card.interactive:active {
      transform: translateY(1px) scale(var(--neumo-card-press-scale));
    }

    /* Ripple effect for Android */
    .ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 600ms linear;
      background-color: rgba(255, 255, 255, 0.7);
    }

    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }

    /* Size variants */
    :host([size="sm"]) .neumo-card {
      --neumo-card-padding: 12px;
      --neumo-card-radius: 12px;
    }

    :host([size="lg"]) .neumo-card {
      --neumo-card-padding: 24px;
      --neumo-card-radius: 20px;
    }
  `,i([o.property({type:String}),r("design:type",String)],t.NeumoCard.prototype,"platform",void 0),i([o.property({type:String}),r("design:type",String)],t.NeumoCard.prototype,"variant",void 0),i([o.property({type:String}),r("design:type",String)],t.NeumoCard.prototype,"size",void 0),i([o.property({type:Boolean}),r("design:type",Boolean)],t.NeumoCard.prototype,"interactive",void 0),i([o.property({type:String}),r("design:type",String)],t.NeumoCard.prototype,"bgColor",void 0),i([o.property({type:String}),r("design:type",String)],t.NeumoCard.prototype,"shadowLight",void 0),i([o.property({type:String}),r("design:type",String)],t.NeumoCard.prototype,"shadowDark",void 0),i([o.property({type:String}),r("design:type",String)],t.NeumoCard.prototype,"width",void 0),i([o.property({type:String}),r("design:type",String)],t.NeumoCard.prototype,"height",void 0),i([o.property({type:String}),r("design:type",String)],t.NeumoCard.prototype,"padding",void 0),i([o.property({type:Boolean}),r("design:type",Boolean)],t.NeumoCard.prototype,"rippleEffect",void 0),i([o.property({type:Boolean}),r("design:type",Boolean)],t.NeumoCard.prototype,"hoverEffect",void 0),i([o.property({type:Boolean}),r("design:type",Boolean)],t.NeumoCard.prototype,"pressEffect",void 0),t.NeumoCard=i([o.customElement("neumo-card")],t.NeumoCard)}));
//# sourceMappingURL=index.js.map