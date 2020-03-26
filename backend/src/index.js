const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();


app.use(cors());
//serve para usar request body para retornar no corpo um json
app.use(express.json());

//usando nossa proprias rotas
app.use(routes);

/*
GET: buscar informações no back-end
POST: criar informações no back-end
PUT: alterar informações no back-end
DELETE: deletar informações no back-end
*/


/*
    Tipos de paramentros

    Query params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
        Semelhante ao do php
    Route Params: Parâmetros utilizados para identificar recursos
        Ex: users/10 -> o paramentro é passado mas sem indentificação
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
        Passa pelo corpo da aplicação
*/


app.listen(3333);

