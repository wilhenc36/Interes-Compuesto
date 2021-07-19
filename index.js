// https://github.com/wilhenc36/Interes-Compuesto

// Importar express
const express = require("express");
// Importar handlebar como template engine
const exphbs = require("express-handlebars");
// Importar body parser que nos permite acceder al cuerpo de la peticion HTTP
const bodyParser = require("body-parser");

const path = require("path");
// Importar la funcion de calculo del interes compuesto
const { calcularInteresCompuesto } = require("./calcularInteresCompueto");

// Crear un servidor
const app = express();

// Indicar a express, utilizar handlebars como template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")));

// Habilitar body parser para leer los datos del cuerpo de las peticions POST
app.use(bodyParser.urlencoded({ extended: true }));

// Crear una ruta para /
// Informacion sobre los verbos HTTP
app.get("/", (req, res, next) => {
  res.render("formulario");
});

// Crear una ruta para /interes
app.post("/interes", (req, res, next) => {
  // Asignacion por distructuring
  const { monto, tasaInteres, periodo } = req.body;

  const cuotas = calcularInteresCompuesto(monto, tasaInteres, periodo);

  if (!cuotas) {
    res.render("error");
  } else {
    res.render("resultado", { cuotas, tasaInteres });
  }
});

// Inicializar el servidor en un puerto en especifico
app.listen(5000, () => {
  console.log("Servidor ejecutandose en el puerto 5000");
});
