const express = require('express')
const cookieParser = require('cookie-parser')

const port = 3000;
const app = express()

app.use(cookieParser());


app.get('/', (req,res)=>{
    res.cookie('myfirstCookie','cookie1');
    res.send("We sent you a cookie 🍪");
})

app.listen(port, ()=>{
    console.log(`COOKIE APP listening on http://localhost:${port}`)
}

)