/**
 * 配置路由文件
 */
var bodyParser = require('body-parser');
module.exports=function(app){
    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    app.get('/todo',(req,res)=>{
        //获取列表
        // res.send('1')
        res.render('todo.ejs')
    })
    app.post('/todo',(req,res)=>{
        //新增
        let accessToken=req.headers.accessToken
        console.log(accessToken)
        console.log(req.body)
        res.send('2')
    })
    app.delete('/todo/:item',(req,res)=>{
        //删除 
        let params = req.params
        res.json(params);
    })
}