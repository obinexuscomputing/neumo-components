import { LitElement, html, css, TemplateResult, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { PatternProperties, PatternType, PatternContent } from './types';

@customElement('neumo-pattern')
export class NeumoPattern extends LitElement implements PatternProperties {
  @property({ type: String }) pattern: PatternType = 'z';
  @property({ type: Boolean }) loading = false;
  @property({ type: Object }) content: PatternContent = { main: '' };
  @property({ type: Boolean }) withDropCap = false;
  @property({ type: String }) role: string | null = null;
  @property({ type: String }) ariaLabel: string | null = null;

  static styles = css`
    :host {
      display: block;
      --pattern-spacing: var(--neumo-spacing-md, 1rem);
      --pattern-transition: var(--neumo-transition, 0.3s ease);
    }

    .pattern-container {
      display: grid;
      gap: var(--pattern-spacing);
    }

    .with-drop-cap::first-letter {
      float: left;
      font-size: 3em;
      line-height: 0.8;
      padding-right: 0.1em;
      font-weight: bold;
      color: var(--neumo-primary-color, #2c5282);
    }

    .skeleton {
      background: linear-gradient(90deg,
        var(--neumo-skeleton-base, #e2e8f0) 25%,
        var(--neumo-skeleton-highlight, #f8fafc) 50%,
        var(--neumo-skeleton-base, #e2e8f0) 75%
      );
      background-size: 200% 100%;
      animation: skeleton-loading 1.5s infinite;
      border-radius: 4px;
      height: 1em;
      margin: 0.5em 0;
    }

    @keyframes skeleton-loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `;

  protected render() {
    const containerClasses = {
      'pattern-container': true,
      [`${this.pattern}-pattern`]: true
    };

    return html`
      <div class=${classMap(containerClasses)} 
           role=${this.role || nothing}
           aria-label=${this.ariaLabel || nothing}>
        ${this._renderPattern()}
      </div>
    `;
  }

  private _renderPattern() {
    if (this.loading) {
      return this._renderSkeleton();
    }

    switch (this.pattern) {
      case 'z': return this._renderZPattern();
      case 'f': return this._renderFPattern();
      case 't': return this._renderTPattern();
      default: return html`<div>Invalid pattern</div>`;
    }
  }

  private _renderZPattern() {
    const classes = { 'with-drop-cap': this.withDropCap };
    return html`
      <div class=${classMap(classes)}>
        ${this._renderContent(this.content.main)}
      </div>
      ${this.content.secondary ? html`
        <div>${this._renderContent(this.content.secondary)}</div>
      ` : nothing}
    `;
  }

  private _renderFPattern() {
    const classes = { 'with-drop-cap': this.withDropCap };
    return html`
      ${this.content.header ? html`
        <div class="pattern-header ${classMap(classes)}">
          ${this._renderContent(this.content.header)}
        </div>
      ` : nothing}
      <div class="pattern-main">
        <div class=${classMap(classes)}>
          ${this._renderContent(this.content.main)}
        </div>
        ${this.content.sidebar ? html`
          <div class="pattern-sidebar">
            ${this._renderContent(this.content.sidebar)}
          </div>
        ` : nothing}
      </div>
    `;
  }

  private _renderTPattern() {
    const classes = { 'with-drop-cap': this.withDropCap };
    return html`
      ${this.content.header ? html`
        <div class="pattern-header ${classMap(classes)}">
          ${this._renderContent(this.content.header)}
        </div>
      ` : nothing}
      <div class="pattern-content">
        <div class=${classMap(classes)}>
          ${this._renderContent(this.content.main)}
        </div>
        ${this.content.secondary ? html`
          <div>${this._renderContent(this.content.secondary)}</div>
        ` : nothing}
      </div>
    `;
  }

  private _renderSkeleton() {
    const skeletonLines = this.pattern === 'f' ? 3 : 2;
    return html`
      ${Array(skeletonLines).fill(0).map(() => html`
        <div class="skeleton"></div>
      `)}
    `;
  }

  private _renderContent(content: string | TemplateResult) {
    if (typeof content === 'string') {
      return html`${content}`;
    }
    return content;
  }
}

@customElement('neumo-z-pattern')
export class NeumoZPattern extends NeumoPattern {
  constructor() {
    super();
    this.pattern = 'z';
  }
}

@customElement('neumo-f-pattern')
export class NeumoFPattern extends NeumoPattern {
  constructor() {
    super();
    this.pattern = 'f';
  }
}

@customElement('neumo-t-pattern')
export class NeumoTPattern extends NeumoPattern {
  constructor() {
    super();
    this.pattern = 't';
  }
}