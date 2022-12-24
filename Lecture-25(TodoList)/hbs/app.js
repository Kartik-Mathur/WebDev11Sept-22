const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');

let todos = [];

// app.get('/',(req,res)=>{
//     res.render('index',{
//         title:'Handlebars',
//         firstName:'Manav',
//         lastName:'Malhotra',
//         tasks:['Cricket','Badminton','Swimming']
//     });
// })

app.get('/gettask', (req, res) => {
    // res.send(todos);
    res.render('todos', { todos: todos })
})
let num = 1;
app.post('/addtask', (req, res) => {
    // todos.push(req.body.newtask);
    todos.push({
        task: req.body.newtask,
        id: num
    })
    num++;
    console.log(todos);
    res.redirect('/gettask');
})

app.get('/deletetask', (req, res) => {
    let id = req.query.id;
    todos = todos.filter((todo) => {
        if (todo.id != id) return true;
        return false;
    });
    res.redirect('/gettask');
})

function swapTwoValues(indx1,indx2){
    let x = todos[indx1];
    todos[indx1] = todos[indx2];
    todos[indx2] = x;
}

app.get('/increase', (req, res) => {
    let id = req.query.id;
    if (todos.length > 1) {
        let myindx = -1;
        todos.forEach((val, indx) => {
            if (val.id == id) {
                myindx = indx;
            }
        })
        if(myindx != 0){
            swapTwoValues(myindx,myindx-1);
            // let x = todos[indx];
            // todos[indx] = todos[indx - 1];
            // todos[indx - 1] = x;
        }
    }
    return res.redirect('/gettask');
})

app.get('/decrease', (req, res) => {
    let id = req.query.id;
    if (todos.length > 1) {
        let myindx = -1;
        todos.forEach((val, indx) => {
            if (val.id == id) {
                myindx = indx;
            }
        })
        if (myindx != todos.length - 1) {
            swapTwoValues(myindx,myindx+1);
            // let x = todos[myindx];
            // todos[myindx] = todos[myindx + 1];
            // todos[myindx + 1] = x;
        }
    }
    return res.redirect('/gettask');
})

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
})