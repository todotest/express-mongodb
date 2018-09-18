1、项目栈
node后端语言
express 中间件
mongodb 非关联型数据库
bootstrup ui库
2、npm安装的依赖
express
body-parser 解析form
ejs 模板

3、操作步骤
（1）初始化一个项目
      npm init
(2)安装依赖
      npm install express --save
      npm install ejs body-parser--save

4、在路由配置里面，res.render(ejs文件名) 可以返回一个ejs模板或者html的页面。
比如：a.ejs文件如果让在views文件夹里，则可直接写为 res.render('a.ejs')
      如果放在其他名字的文件夹里（view），则需要写全路径
5、post请求时，form表单的数据需要提交。
   
