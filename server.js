const express = require('express')


const app = express()

app.use(express.static(__dirname+'/static'))
// app.use(express.static(__dirname+'/email'))

app.get('/person',(req,res)=>{
    res.send({
        name: 'panan',
        age:18
    })
})

app.listen(5555,(err)=>{
    if(!err) console.log('服务器启动了')
})