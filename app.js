const express = require('express');
const app = express();


//devtools npm
//nodemon
//npm install nodemon -g 
//global install


//http://localhost:3000/test
app.get("/test",(req,res)=>{

    console.log("test")
    res.send("test api called...")

})

app.get("/test2",(req,res)=>{

    res.json({
        message:"test2 api called..."
    })
})

app.get("/user",(req,res)=>{

    var user = {
        id:1,
        name:"Amit",
        age:23
    }

    res.json(
        {
        message:"User api called...",
        data:user
        }
    )


})


app.get("/users",(req,res)=>{

    var users = [
        {
            id:1,
            name:"Amit",
            age:23
        },
        {
            id:2,
            name:"Sumit",
            age:24
        }
    ]

    res.json({
        message:"Users api called...",
        data:users
    })

})




console.log("app.js")
const PORT = 3000
app.listen(PORT,()=>{
    console.log('Server is running on port ' + PORT);
})