const {MongoClient} = require('mongodb');
var database;

MongoClient.connect('mongodb://localhost:27017/PortalNoticias', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');  
	database = db;
});


module.exports = function()
{
	return database;
}
