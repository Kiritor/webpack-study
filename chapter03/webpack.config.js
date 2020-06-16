// 引入node中的path模块
const path = require('path');

module.exports ={
    //定义入口文件
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist')
    },
    // 使用loaders的列表
    module: {
        //定义规则
        rules:[
            {
                //这里是一个正则,处理以js结尾的文件
                test: /\.js$/,
                //处理node_modules下的文件夹(真香定律)
                exclude: '/(node_modules|brower_components)/',
                //使用babel-loader,options为相关配置项
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [[
                            "@babel/preset-env",
                            {
                                //添加babel/polyfill
                                useBuiltIns: "usage",
                                corejs: { version: 3, proposals: true }
                            }
                        ]]
                    }
                }
            }
        ]
    }
}