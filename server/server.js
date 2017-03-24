var express = require('express');
var bodyParser = require('body-parser');

const {ObjectId} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc)=>{
		res.send(doc);
	},(e) => {
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
	Todo.find().then((todos)=>{
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	})
});

//GET /todos/:id
app.get('/todos/:id', (req, res)=>{
	var id = req.params.id;
	if(!ObjectId.isValid(id)){
		return res.status(404).send();
	} else {
		Todo.findById(id).then((todo)=>{
			if (!todo){
				return res.status(404).send();
			}
			res.send({todo});
		}).catch((e)=>{
			res.status(400).send();
		});
	}
});

app.delete('/todos/:id', (req, res) => {
	//get the id
	var id = req.params.id;
	if (!ObjectId.isValid(id)){
		return res.status(404).send();
	}
		Todo.findByIdAndRemove(id).then((todo) => {
			if (!todo){
				return res.status(404).send();
			}
			res.status(200).send({todo});
		}).catch((e) => {
			res.satus(400).send();
		});
	//validate the id -> not valid return 404

	//remove todo by id
		// success
			 //if no doc send 404
			 // if doc send doc back and 200
		// error
			//400 empty body

});


app.listen(port, () =>{
	console.log(`Started up at port ${port}`);
});

module.exports = {app};