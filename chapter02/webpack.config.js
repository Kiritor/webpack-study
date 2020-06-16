// 引入node中的path模块
const path = require('path');

module.exports ={
    //定义入口文件
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist')
    }
}