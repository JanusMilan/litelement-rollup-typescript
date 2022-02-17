# Verlauf für Implentation und allererster Bulid und Test 

1. downloaden https://github.com/JanusMilan/rollup 

2. Installieren alles was für Projekt notig ist, es reicht 'rollup' 
   - npm install --save-dev rollup  

3. Installieren Lit
   - npm install --save lit

4. Anpassen 'tsconfig.json'
   - Option für Lit und Lit Decorator einfügen

5. Erstellen 'main.ts' mit LitElement

6. Anpassen 'index.html'
   - löschen alte Content im 'body'
   - einfügen meine CE
   - Anpassen 'module' Path

7. Löschen 'app.ts', 'math', 'string', 

7. Build machen
   - npm run build

8. Testen 
   - npm run start

9. Testen http GET
   - http-server dist/ -o

