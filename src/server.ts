import express, { response } from "express";

// @types/express
const app = express();

app.get("/test", (req, res) => {
	// Request [req] => Entrando
	// Response [res] => Saindo
	return response.send("Olá NLW");
});

app.post("/test-post", (req, res) => {
  return response.send("Olá NLW método POST");
});

app.listen(3000, () => console.log("Server is running"));