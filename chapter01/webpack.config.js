// 引入node中的path模块

const path = require('path');

module.exports = {
    //定义入口文件,告诉webpack打包内容
    entry: './src/index.js',
    // 定义输出文件，告诉webpack打包好的文件叫啥，位置
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist')  
    }
}

