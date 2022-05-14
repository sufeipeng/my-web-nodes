// 引入一个包
const path = require('path');
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 引入clean插件
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
// webpack中的所有的配置信息都应该写在module.exports中

module.exports = {
  // 指定入口文件
  entry: "./src/index.ts",
  // 指定打包文件所在的目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后的文件
    filename: "bundle.js",
    clean: true,
    // 让webpack不使用箭头函数
    environment: {
      arrowFunction: false,
      const: false
    }
  },
  // 指定webpack打包时要使用的模块
  module: {
    // 指定要加载的规则
    rules: [{
        // test指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: [{
            // 指定加载器
            loader: 'babel-loader',
            // 设置babel
            options: {
              presets: [
                [
                  // 指定环境插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      "chrome": "58",
                      "ie": "11"
                    },
                    // 指定corejs版本usage表示按需加载
                    "corejs": "3",
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        // 要排除的文件
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        // use里的loader是自下而上执行的
        use: [
          "style-loader",
          "css-loader",
          // 引入postcss
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions"
                    }
                  ]
                ]
              }
            }
          },
          "less-loader"
        ]
      },
      {
        test: /\.(wav)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: 'audios/[name].[ext]',
          limit: 10
        }
      },
      {
        test: /\.(mp3)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10,
          name: 'audios/[name].[ext]'
        }
      }
    ]
  },
  // 配置webpack插件笑
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title: '自定义的title'
      template: './src/index.html'
    })
  ],
  // 用来设置引用的模块
  resolve: {
    extensions: ['.ts', '.js', '.less']
  }
};