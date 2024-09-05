const express = require('express'),
         path = require('path');


//importar rutas

//configuraciones
const app = express();
const PORT = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//configurar express para JSON
app.use(express.json());
//conexion con la db
app.listen(PORT, () => { console.log(`Servidor en funcionando en puerto: ${PORT}`) });
            
app.use(express.static(__dirname + '/public/'));
// routes 

app.use(require('./routes/movimiento'));
//app.set('view engine', 'ejs');