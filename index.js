const express = require("express");
const PORT = 3030;
const app = express();

const {
    getHello, 
    getKonyvek,
    getKonyvById
} = require("./services/konyv_service")
 
// req.body miatt
app.use(express.json());

app.get("/hello", getHello);
app.get("/konyvek", getKonyvek);

// paraméterezés --> ugyan az a végpont különböző válaszokat tud adni a paramétertől függően
// egy végpontnak van request és response objektuma, a paramétereket a requestben találod
// req.params.parameternev --> req.params["parameternev"]
// paraméter megadása express js-ben: "/konyvek/:id teszt: /konyvek/2
// paraméterben szereplő adatok szövegek

app.get("/konyvek/:id", getKonyvById);

// adatfelvitel 

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});