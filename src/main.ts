import {LitElement, html, css} from 'lit';
// Für Decoratoren und Properties
import {customElement, property} from 'lit/decorators.js';

// Decorator für Definition des CE
@customElement('comp-main')
export class CompMain extends LitElement {

    // Style Template 
    static styles = css`
      :host {
          display: flex;
      }
    `;

    // Decorator für Property-Definition 
    @property({ type: String }) message: string = 'Welcome to LitElement';
    // Html Tempalte  
    render() {
        return html`
        <div>
            <h1>${this.message}</h1>
            <span>This App uses:</span>
            <ul>
                <li>TypeScript</li>
                <li>Rollup.js</li>
                <li>es-dev-server</li>
            </ul>
        </div>
        `;
    }
} 