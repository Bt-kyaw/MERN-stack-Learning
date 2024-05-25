const express = require('express')
const app = express()
app.set('views', './views')
app.set('view engine', 'ejs')



app.get('/', (req,res) => {

    let blogs =[
        { title : 'Blog title 1 update', intro : 'This is blog intro1.'},
        { title : 'Blog title 2', intro : 'This is blog intro2.'},
        { title : 'Blog title 3', intro : 'This is blog intro3.'}
    ]
    res.render('home',{
        blogs
    })
})

app.get('/about', (req,res) => {
    res.render('about')
})


app.get('/contact', (req,res) => {
    res.render('contact')
})

app.use((req,res) => {
    res.status(404).render('404')
})


app.listen(3000, ()=>{
    console.log('app is listening on port 3000');
}) 