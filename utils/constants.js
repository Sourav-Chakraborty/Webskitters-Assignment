module.exports = {
	port: process.env.PORT || 3000,
	DB_Url: process.env.MONGO_URL || "mongodb://localhost:27017/webskitter",
};
