const { log } = require("console");
const http = require("http");
const fs = require("fs");

const serveur = http.createServer((request, response) => {
  response.setHeader("content-type", "text/html");
  if (request.url === "/") {
    response.write("<h1>hello world</h1>");
  } else {
    response.write("Erreur");
  }
});

serveur.listen(3002, "localhost", () => {
  console.log("Hello World");
});

if (fs.existsSync("./mesFichiers")) {
  console.log("Fichier existe deja");
} else {
  fs.mkdir("./mesFichiers", (erreur) => {
    if (erreur) {
      console.log(erreur);
    } else {
      console.log("fichier creer avec succées ");
    }
  });
}

fs.writeFile("./mesFichiers/Welcome.txt", "Hello Node.js", (erreur) => {
  if (erreur) {
    console.log(erreur);
  } else {
    console.log("creation fichier reussi");
  }
});
