const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '58d448b6d5dc06428f602e141';

// if(!ObjectId.isValid(id)){
// 	console.log('id not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos)=>{
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo)=>{
// 	console.log('todo', todo);
// });

// Todo.findById(id).then((todo)=>{
// 	if (!todo){
// 		return console.log('id not found');
// 	}
// 	console.log('Todo by id', todo);
// }).catch((e)=>console.log(e));

var id = '58d401dc8a3fa233f8628508';

User.findById(id).then((user) => {
	if(!user){
		return console.log('user not found');
	}
	console.log('User:', user)
}).catch((e) => console.log(e));