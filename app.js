const express = require('express')
let morgan = require('morgan')

const app = express()
//db url
let mongoUrl ="mongodb+srv://bhonethantkyaw:810810@cluster0.pwyv0l2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.set('views', './views')
app.set('view engine', 'ejs')


app.use(morgan('dev'))
app.use(express.static('public'))

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


app.listen(3000, ()=>{
    console.log('app is listening on port 3000');
}) 