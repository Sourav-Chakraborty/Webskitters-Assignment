const mongoose = require("mongoose");
const { DB_Url } = require("./utils/constants");

function connectToMongo(dbUrl = DB_Url) {
	return new Promise((resolve, reject) => {
		mongoose
			.connect(dbUrl)
			.then(() => {
				console.log("DB Connected");
				resolve();
			})
			.catch((err) => {
				reject(err);
			});
	});
}

module.exports = connectToMongo;
