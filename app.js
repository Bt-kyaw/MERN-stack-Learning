const express = require('express')
let morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/Blog')
const expressLayouts = require('express-ejs-layouts');
const app = express()

app.use(express.urlencoded({extended: true}))

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
app.use(expressLayouts);
app.set('layout', 'layouts/default');


app.use(morgan('dev'))
app.use(express.static('public'))

app.get('/add-blog',async (req,res) => {
    let blog = new Blog({
        title : "blog title kwr 2",
        intro : "blog intro kwr 2",
        body : 'blog body 2 update kwr 2'
    })
    await blog.save()
    res.send('blog saved')
})



app.get('/', async (req,res) => {


    let blogs = await Blog.find().sort({createdAt : -1})
     console.log(blogs);

    res.render('home',{
        blogs,
        title : 'home'
    })
})

app.post('/blogs', async (req,res) => {
    let {title,intro,body} = req.body;
    let blog = new Blog({
        title,
        intro,
        body 
    })
    await blog.save()
    
    res.redirect('/')
    
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

app.get('/blogs/create',(req,res) => {
    res.render('blogs/create',{
        title : 'Blog Create'
    })
})

app.get('/blogs/:id',async (req,res,next) => {
   try {

    let id = req.params.id;
    let blog = await Blog.findById(id);
    
    res.render('blogs/show',{
        blog,
        title : 'Blog detail'
    })

   } catch (e) {
      console.log(e)
      next()
   }
})

app.use((req,res) => {
    res.status(404).render('404',{
        title : '404 not found'
    })
})


