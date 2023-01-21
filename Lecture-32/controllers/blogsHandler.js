const blogs = [
    {
        id: 1,
        username: 'Abhinav',
        blogContent: 'Learning MVC framework'
    },
    {
        id: 2,
        username: 'Yash',
        blogContent: 'Learning NodeJS'
    },
    {
        id: 3,
        username: 'Rahul',
        blogContent: 'Learning Mongo'
    },
    {
        id: 4,
        username: 'Apurba',
        blogContent: 'Learning CSS'
    }
];

console.log("Current Blogs: ",blogs);
module.exports.getBlogs = (req,res,next)=>{
    res.render('blogsList',{
        blogs
    });
};

