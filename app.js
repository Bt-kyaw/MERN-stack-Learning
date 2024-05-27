const express = require('express')
let morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/Blog')

const app = express()
//db url
let mongoUrl ="mongodb+srv://bhonethantkyaw:810810@cluster0.pwyv0l2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongoUrl).then(()=>{
    console.log('connected to db');
    app.listen(3000, ()=>{
        console.log('app is listening on port 3000');
    }) 
}).catch(e =>{
    console.log(e);
})

app.set('views', './views')
app.set('view engine', 'ejs')


app.use(morgan('dev'))
app.use(express.static('public'))

app.get('/add-blog',async (req,res) => {
    let blog = new Blog({
        title : "blog title 2",
        intro : "blog intro 2",
        body : 'blog body 2 update'
    })
    await blog.save()
    res.send('blog saved')
})

app.get('/', (req,res) => {

    let blogs =[
        { title : 'Blog title 1 update', intro : 'This is blog intro1.'},
        { title : 'Blog title 2', intro : 'This is blog intro2.'},
        { title : 'Blog title 3', intro : 'This is blog intro3.'}
    ]
    res.render('home',{
        blogs,
        title : 'home'
    })
})

app.get('/about', (req,res) => {
    res.render('about',{
        title : 'about'
 } )
})



app.get('/contact', (req,res) => {
    res.render('contact',{
        title : 'contact'
    })
})

app.use((req,res,next) => {
    console.log('2nd middleware is running.');
    next()
})

app.use((req,res) => {
    res.status(404).render('404',{
        title : '404 not found'
    })
})


