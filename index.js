
const express = require('express')
const bodyParser=require('body-parser')

const app=express()
app.use('/public',express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))

var title=[];
var content=[];
app.get("/",function(req,res)
{
     
     res.render('index',{title:title,content:content})
     
})
app.get("/about",function(req,res)
{
     
     res.render('about')
     
})
app.get("/compose",function(req,res)
{
     
     res.render('compose')
     
})
app.get("/login",function(req,res)
{
     
     res.render('login',{wrong:''})
     
})
app.get("/:postName",function(req,res)
{
      let postName=req.params.postName;
     
      
     let sign=-1;
     for (let i=0;i<title.length;i++){
          if (postName==title[i])
          {
              
               sign=i;
               
               break;
               
          }
     }
     if (sign>=0)
     res.render('post',{title:title[sign],content:content[sign]});
     else
     res.send('page not found');
     
     
})
app.post('/',function(req,res)
{
     var item=req.body.newValue;
     lists.push(item);
     res.redirect('/');
})
app.post('/compose',function(req,res)
{
     let l=req.body.title;
     let c=req.body.content;
     title.push(l);
     content.push(c);
     
     res.redirect('/');
})
app.post("/login",function(req,res)
{
     
     let id=req.body.id;
     let pass=req.body.pass

     if (id==='akumar1501'&& pass==='262648')
     {
          res.render('compose')
         
          
     }
     else
     {
         res.render('login',{wrong:'User id or Password is wrong '});
     }
     
})


app.listen(3000);