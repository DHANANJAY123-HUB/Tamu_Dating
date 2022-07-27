const db = require('./connection')
const ObjectId = require('mongoose').Types.ObjectId;

function adminModel() {

    this.fetchDetails=(userDetails)=>{
		return new Promise((resolve,reject)=>{
			db.collection('admin').find({'id':userDetails.id}).toArray((err,result)=>{
				err ? reject(err) : resolve(result);
			})
		})	
	}

	this.viewDetails=(new_id)=>{
		return new Promise((resolve,reject)=>{
			db.collection('admin').find({'_id':ObjectId(new_id)}).toArray((err,result)=>{
				err ? reject(err) : resolve(result);
			})
		})
	}

}
module.exports=new adminModel()