var express = require('express');
var bodyParser = require('body-parser');

const {ObjectId} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

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
	//validate id using isValid
		// 404 - send empty body
	//fidById
		//success
			//if todo - send it back
			//if no todo - send back 404 empty body 
		//error
			//send 400 - and sendy empty body
});


app.listen(3000, () =>{
	console.log('started on port 3000');
});

module.exports = {app};