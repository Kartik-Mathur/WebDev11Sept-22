const {getDb} = require('../databases/database');
const mongodb = require('mongodb');

class Users{
    constructor(username,email){
        this.username = username;
        this.email = email;
        // cart=[]
        // {blogId:"asada",quantity:2}
    }

    save(){
        const db = getDb();
        return db.collection('users')
        .insertOne(this)
        .then((data)=>{
            console.log(data);
        })
        .catch(err=>console.log(err));
    }

    static findById(userId){
        const db = getDb();
        // console.log(userId);
        return db.collection('users')
        .find({
            _id: new mongodb.ObjectId(userId)
        })
        .next()
        .then((user)=>{
            return user;
            // console.log(user);
        })
        .catch(err=>console.log(err));
    }
}

module.exports = Users;