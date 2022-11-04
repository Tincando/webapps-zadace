const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 3000;

app.use(bodyParser.json());

let autori = [];

app.post("/dodajAutora", (req, res) => {
  var data = req.body;
  console.log(data.naziv);

  if (!data.naziv || !data.djela) {
    res.json({
      Error: "Krivi kljucevi",
    });
  } else {
    for (i in data.djela) {
      if (data.djela[i].length > 20) {
        res.json({
          Error: "Djelo " + data.djela[i] + " ima vise od 20 znakova",
        });
      }
    }
    data = { ...data, id: uuidv4(), datum: Date() };
    autori.push(data);
    res.send(autori);
  }
});

app.get("/vratiAutore", (req, res) => {
  res.send(autori);
});

app.delete("/izbrisiDjeloAutora/:id/:djelo", (req, res) => {
  var { id } = req.params;
  var { djelo } = req.params;

  for (a in autori) {
    if (autori[a].id == id) {
      autori[a].djela = autori[a].djela.filter((x) => x != djelo);
    }
  }

  console.log(autori);

  res.send(autori);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
