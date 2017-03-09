// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected!');

	// db.collection('Todos').find({
	// 	_id: new ObjectID('58b87f15bb85461fd421c225')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err)=> {
	// 	console.log('unable to fetch todos', err);
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos ${count}`);
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err)=> {
	// 	console.log('unable to fetch todos', err);
	// });

	db.collection('Users').find({
		name: 'Tom'
	}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err)=> {
		console.log('unable to fetch todos', err);
	});

	// db.close();
});