// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected!');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('58c1d8fe499faf3a7d395571')
	// },{
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });


	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('58b87fccf706251ffbd5d227')
	},{
		$set: {
			name: 'Marcin'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
	// db.close();
});