
# Erstellen Lit CE mit Decoratoren

0. 'tsconfig.json' anpassen
   - Option für DOM für LIT einfügen 
   - Option für Decorator einfügen

1. Lit installieren
   - "npm install --save lit"

2. Lit importieren in CE
   - "import {LitElement, html, css} from 'lit';"
   - "import {customElement, property} from 'lit/decorators.js';"

3. CE deklarieren 
   - "@customElement('comp-main')"

4. Property definieren 
   - "@property({ type: String }) message: string = 'Welcome to LitElement';"

5. Property im Template anwenden 
   - "\<h1>\${this.message}</h1>"

6. CE im HTML 'index.html' im 'body' einbinden
   - "\<comp-main></comp-main>"
   - "\<script type="module" src="./out-tsc/src/main.js"></script>"   

# Quellen
https://lit.dev/docs/v1/components/decorators/#to-use-decorators-with-typescript
https://lit.dev/docs/tools/adding-lit/#install-from-npm
https://lit.dev/playground/
https://labs.thisdot.co/blog/how-to-build-a-litelement-application-with-rollup-js-and-typescript
