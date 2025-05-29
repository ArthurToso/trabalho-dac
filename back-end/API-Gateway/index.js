// pacotes usados
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
var http = require('http');
const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var logger = require('morgan');
const helmet = require('helmet');


// Configurações do app
app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Cria o servidor na porta 5000
var server = http.createServer(app);
server.listen(5000, ()=>{
    console.log('api funcionando porta 5000')
});

//criacao dos parses
//parse aplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended : false}))
//parse aplication/json
app.use(bodyParser.json())

var urlencodedParser = bodyParser.urlencoded({ extended: false });

//criacao dos proxies http dos services
const usuarioServiceProxy = httpProxy('http://localhost:3000');
//colocar as url dos microservico como configurado em cada um
const authServiceProxy = httpProxy('');
const vooServiceProxy = httpProxy('');


//

//verificacao token jwt
function verifyJWT(req, res, next){
    const token = req.headers['x-access-token'];
    if (!token)
        return res.status(401).json({ auth: false, message: 'Token não fornecido.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err)
            return res.status(500).json({ auth: false, message: 'Falha ao autenticar o token.' });
        // se tudo estiver ok, salva no request para uso posterior
        req.userId = decoded.id;
        next();
    });
}

//login
app.post('/login', urlencodedParser, (req, res, next) => {
    // Esse teste deve ser feito invocando um serviço apropriado
    if (req.body.user === 'admin' && req.body.password === 'admin') {
    // auth ok
        const id = 1; // esse id viria do serviço de autenticação
        const token = jwt.sign({ id }, process.env.SECRET, {
    expiresIn: 300 // expira em 5min
    });
    return res.json({ auth: true, token: token });
}
res.status(500).json({message: 'Login inválido!'});
})

//logout
app.post('/logout', function(req, res){
    res.json({ auth : false, token : null})
})

//requisicoes ao servicos, ja autenticados
app.get('/usuarios', verifyJWT, (req, res, next) => {
    usuarioServiceProxy(req, res, next);
})

//adc demais


