const getDb = require('../databases/database').getDb;
const mongodb = require('mongodb');
class Blogs {
    constructor(title, description, image, userId) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.userId = userId;
    }
    // let newBlog = new Blogs('abc','sajbdkasdasd','img');
    // newBlog.save();

    save() {
        const db = getDb();
        const blogs = db.collection('blogs');
        return blogs
            .insertOne(this) 
            // this:{title:'abc',description:'sajbdkasdasd',image:'img'}
            .then((data)=>{
                console.log(data);
            })
            .catch(err=>console.log(err));
    }

    static getBlogs(){
        const db = getDb();
        return db.collection('blogs')
                .find()
                .toArray();
    }

    static getBlogDetails(blogId){
        const db = getDb();
        return db.collection('blogs')
            .find({
                _id: new mongodb.ObjectId(blogId)
            })
            .next()
            .then((blog)=>{
                console.log(blog);
                return blog;
            })
            .catch(err=>console.log(err));
    }

    static deleteBlog(blogId){
        const db = getDb();
        return db.collection('blogs')
            .deleteOne({
                _id: new mongodb.ObjectId(blogId)
            })
            .then(()=>{
                console.log("Deletion success");
            })
            .catch(err=>console.log(err));
    }

    static updateBlogDetails(blogId,title,description,imageUrl){
        const db = getDb();
        return db.collection('blogs').
        updateOne(
            {_id: new mongodb.ObjectId(blogId)},
            {
                $set:{title,description,image:imageUrl}
            }
        );
    }
}

module.exports = Blogs;