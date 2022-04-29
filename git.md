## git基本操作&常用命令
### git全局设置
```shell
$ git --version // 查看git版本
$ git config --global -l // 查看全局配置信息
$ git config --global user.name 'xxx' // 设置用户名一般不用中文名
$ git config --global user.email 'xxx@xxx.com' // 设置邮箱
$ git init // 初始化本地仓库
clear 清屏
```
### 文件提交到暂存区
```shell
$ git add xxx // 把某个文件或者文件夹提交到暂存区
$ git add . // 把当前仓库中所有最新修改的文件提交到暂存区
$ git add -A // 把所有最新修改的文件提交到暂存区

$ git status // 查看当前文件的状态，（红色代表在工作区，绿色代表在暂存区，看不见东西说明所有修改的信息已提交到历史区）
```