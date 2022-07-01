const express= require('express')
const mysql=require('mysql')


const app=express();
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Anmol@12',
    database:'new'
})
// npm i swagger-ui-express --save
// npm install swagger-jsdoc@6.0.0 --save


db.connect((err)=>{
if(err)throw err;
console.log('mysql connected')
})


app.get('/createdb',(req,res)=>{
    let sql='create database  nodemysql';
    db.query(sql,(err,result)=>{
        if(err)throw err;
        console.log(result);
        res.send('database are created')
    })
})
app.get('/',(req,res)=>{
    res.send("home")
})
app.get('/createTable',(req,res)=>{
    let sql='CREATE TABLE Posts(id int Auto_increment primary key, title varchar(200),body varchar(200))'
    db.query(sql,(err,result)=>{
        if(err)throw err;
        console.log(result);
        res.send('table  are created')
    })
    
})


app.get('/addData',(req,res)=>{
   let post={title:'post one',body:'this is post number one'} ;
   let sql='insert into Posts set ? ';
   let query=db.query(sql,post,(err,result)=>{
    if(err) throw err;
    console.log(result)
    res.send("data insert are easly")
   })
})
app.get('/addData2',(req,res)=>{
    let post={title:'post two',body:'this is post number two'} ;
    let sql='insert into Posts set ? ';
    let query=db.query(sql,post,(err,result)=>{
     if(err) throw err;
     console.log(result)
     res.send("data insert are easly")
    })
 })


 app.get('/getData',(req,res)=>{
    let sql ='SELECT * FROM new.Posts';
    let query=db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result)
        res.send("succes")
    })
    // res.send(query).json()
    // res.json(query)

 })
//  app.get('/update/:id',(req,res)=>{
//     let newTitle='update title';
//     let sql=`update title set title ='${newTitle}' where id = &{req.params.id} `
//     let query=db.query(sql,(err,result)=>{
//         if(err) throw err;
//         console.log(result)
//         res.send('posts freahed')
//     })
//  })

app.get('/delete/:id',(req,res)=>{
    let sql='DELETE FROM Posts  WHERE ID =1'
    let query=db.query(sql,(err,result)=>{
       
        let query=db.query(sql,(err,result)=>{
            if(err) throw err;
            console.log(result)
            res.send("succes")
        })
    })
})
app.listen('2200',()=>console.log('server is runnig '))