var express = require('express');
var app = express(); //executando o express

app.set('view engine', 'ejs');
app.get('/',function(req, res){
    res.render("home/index");
});

app.get('/formulario_adicionar_usuario', function(req, res){
    res.render("admin/adicionar_usuario");
})

app.get('/informacao/historia', function (req, res) {
    res.render("informacao/historia");
    //res.end("<html><body>Historia da Fatec Sorocaba</body></html>");
});

app.get('/informacao/cursos', function (req, res) {
   res.render("informcao/cursos");
    // res.end("<html><body>Cursos da Fatec Sorocaba</body></html>");
});

app.get('/informacao/professores', function (req, res) {
    res.render("informacao/professores");
    //res.end("<html><body>Professores da Fatec Sorocaba</body></html>");
});

app.listen(3000, function () {
    console.log("Servidor com express foi carregado");
});