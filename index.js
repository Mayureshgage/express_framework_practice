import express  from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('ejs','view engine');

let users = [];
app.get('/',(req,res,next)=> {
    res.render('index.ejs');
    next();
})

app.post("/",async(req,res,next) => {
    let {name,email} = await req.body;
    users.push({name,email})
    res.render('result.ejs',{
        name,
        email
    });
    next();
});

app.get('/getUsers',(req,res,next) => {
    res.send(users);
    next();
})
app.listen('3000',()=> {
    console.log('listening on port 3000');
})