const getDb = require('../databases/database').getDb;

class Blogs {
    constructor(title, description, image) {
        this.title = title;
        this.description = description;
        this.image = image;
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
}

module.exports = Blogs;