
# "build": "rimraf dist && tsc && rollup -c rollup.config.js"

1. Zuerst wird 'dist' File gelöscht da hier Rollup die von ihm erzeugte Bundle abgelegt 

2. Zu zweit wird tsc ausgeführt, der nach 'tsconfig.json' arbeitet
   - tsc nimmt folgende Files zum Transpilieren:  "include": ["./src/**/*.ts"]
   - In "outDir": "out-tsc" wie also transpilierte Ausgabe von tsc gespeichert 

3. Im 'index.html' ist Angabe "module" für Rollup, sommit weiß er wo ist transpilierte Ausgabe von tsc  
   - /<script type="module" src="./out-tsc/src/main.js"></script>
   -
3.    rollup -c rollup.config.js
   - 
   -  
