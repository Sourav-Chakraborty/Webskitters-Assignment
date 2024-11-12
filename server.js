require("dotenv").config();
const express = require("express");
const connectToMongo = require("./dbConnection");
const { port } = require("./utils/constants");

const app = express();
app.use(express.json());

connectToMongo()
	.then(() => {
		app.listen(port, () => {
			console.log(`Server is running at ${port}`);
		});
	})
	.catch((err) => console.error("Error ", err.message));
