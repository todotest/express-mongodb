var express = require('express');
var app = new express();
//allow custom header and CORS
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //设置下面一句话，可以在header里配置accessToken
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , accessToken');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  
    if (req.method == 'OPTIONS') {
      res.send(200); /让options请求快速返回/
    }else {
      next();
    }
  });
var todoController = require('./controller/todoController');
app.set('view engine','ejs');//识别模板引擎ejs
app.use(express.static('./public'));
todoController(app);//引入路由配置
app.listen(3000)
console.log('you are running at port 3000')