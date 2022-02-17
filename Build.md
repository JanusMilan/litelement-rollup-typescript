
# "build": "rimraf dist && tsc && rollup -c rollup.config.js"

1. Zuerst wird 'dist' Folder gelöscht da hier Rollup die von ihm erzeugte Bundle abgelegt 
   - Folder 'dist' ist dafault Ausgabe 'output' Folder wenn nicht anders im "rollup.config.js" festgelegt ist

2. Zu zweit wird tsc ausgeführt, der nach 'tsconfig.json' arbeitet
   - tsc nimmt folgende Files zum Transpilieren:  "include": ["./src/**/*.ts"]
   - In "outDir": "out-tsc" wie die transpilierte Ausgabe von tsc gespeichert
   - Vor allem ist 'main.js' wichtig  

3. Im 'index.html' ist Angabe "module" für Rollup, sommit weiß er wo ist die transpilierte Ausgabe von tsc  
   - /<script type="module" src="./out-tsc/src/main.js"></script>
   
4. Alls Drittes wird Rollup ausgeführt, der nach 'rollup.config.js' arbeitet
   - "rollup -c rollup.config.js"
   - Im "rollup.config.js"  wird "open-wc-project-generator" Erweiterung "@open-wc/building-rollup" genutzt
   - Als Input File ist  "input: './index.html'" gelegt wo wiederrum 'main.js' als "module" festgelegt ist 
   - Es kann auch ein CE Tempalte als "input: './app.js'" statt HTML festgelegt werden
   - Rollup macht Build von externen JS und von 'main.js' welsches dann ausgedührt werden kann 
   - Build wird im Folder 'dist' abgelegt 

# open-wc/building-rollup
https://www.npmjs.com/package/@open-wc/building-rollup
