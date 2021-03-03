// 根据不同的环境进行不一样的配置文件引用
const ENV = process.env.NODE_ENV;
module.exports =
    ENV === 'development' ? require('./config/webpack.config.dev.js') : require('./config/webpack.config.prod.js');
