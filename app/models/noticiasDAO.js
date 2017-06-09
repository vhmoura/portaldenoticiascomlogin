const {MongoClient, ObjectID} = require('mongodb');

function NoticiasDAO(){};

NoticiasDAO.prototype.getNoticias = function(callback){
	MongoClient.connect('mongodb://localhost:27017/PortalNoticias', (err, db) => {
		if (err) {
			return console.log('Unable to connect to MongoDB server');
		}
		db.collection('Noticias').find().toArray().then((docs) => {
			callback(undefined, docs);
		}, (err) => {
			callback(err, []);
		});	

		db.close();
	});
};

NoticiasDAO.prototype.getNoticia = function(id, callback){
	MongoClient.connect('mongodb://localhost:27017/PortalNoticias', (err, db) => {
		if (err) {
			return console.log('Unable to connect to MongoDB server');
		}
      
        var Id = new ObjectID(id);
		db.collection('Noticias').find({_id: Id}).toArray().then((docs) => {
			console.log(docs);
			callback(undefined, docs);
		}, (err) => {
			callback(err, []);
		});	

		db.close();
	});	
};	

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
   
	MongoClient.connect('mongodb://localhost:27017/PortalNoticias', (err, db) => {
		if (err) {
			return console.log('Unable to connect to MongoDB server');
		}
		db.collection('Noticias').insertOne(noticia, (err, result) => {
			if (err) {
			return callback(err, undefined);
			}
			callback(undefined, result.ops);
		});	

		db.close();
	});
};

module.exports = function(){
	return NoticiasDAO;
};