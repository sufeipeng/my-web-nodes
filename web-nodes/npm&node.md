## 基于npm进行模块管理
> https://www.npmjs.com/ npm地址
```shell
npm install xxx 把模块安装到当前目录中
npm install xxx -g 把模块安装到全局环境中
npm install xxx@1.0.0 指定版本
npm view xxx versions 查看某模块的版本信息
npm view typescript versions > typescript.versions.json
npm init -y 初始化当前项目的配置清单
  创建成功后会在当前目录中生成package.json文件
  dependencies: 生产依赖模块（开发和项目部署都要用到）
  devDependencies: 开发依赖模块（开发时用到）
  script: 配置本地可执行的命令
npm i xxx --save / -S 把模块保存在生产依赖清单中
npm i xxx --save-dev / -D 把模块保存在开发依赖清单中
npm install 安装package.json中的所有依赖
npm root -g 查看全局安装模块的目录
npm uninstall xxx 卸载
npm i nrm -g 安装切换源的工具
nrm ls 查看所有的源
nrm use xxx 把源地址切换成xxx
cls 清屏
```