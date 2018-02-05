//制定要打包文件的路径和输出文件的路径

//导入path模块，该方法是node.js方法主要用途在于，会正确使用当前系统的路径分隔符
const path = require('path');


//将html-webpack-plugin导入得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin');

//然后提供一个配置插件new一个实例 这段代码的意思是帮你在localhost里生成页面用的
const htmlPluginObj = new HtmlPlugin({
    template:path.join(__dirname,'./src/index.html'),//指定现有的页面在localhost生成页面
    filename:'index.html'//指定生成页面的名称
})


//向外暴露一个配置对象
module.exports = {
    //指定入口和出口  //根目录
    entry:path.join(__dirname,'./src/main.js'),//入口
    output: {
       path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },//出口
    //需要将导入的html-webpack-plugin与配置对象关联利用plugins挂在
    plugins:[
        htmlPluginObj
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.jpg|png|gif|bmp$/,use:'url-loader?name=[hash:8]-[name].[ext]'},//匹配图片的
            {test:/\.ttf|eot|svg|woff|woff2$/,use:['url-loader']},//匹配mui文字库的因为每个样式css包里都有自己的文字库
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    }
    
}


