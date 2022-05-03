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

### 暂存区内容提交到历史区
```shell
$ git commit -m'描述信息'// 
$ git log // 查看历史版本信息
$ git reflog // 查看历史版本信息包含回滚信息
```
- 从工作区提交到暂存区，从暂存区提交到历史区，是把内容复制一份传过去，本区域中依然存在这些信息（只有这样才能对比出哪些文件在哪个区）

### 版本回退
```shell
$ git reset --hard 版本 // 回退到某个版本
```