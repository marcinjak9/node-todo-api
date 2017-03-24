const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findOneByIdAndRemove()

Todo.findByIdAndRemove('58d4fe1c4e83078d61bc4fab').then((todo) => {
	console.log(todo);
});