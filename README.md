# React Joke App
[从零开始做一个笑话APP系列文章](http://blog.csdn.net/awaw00/article/category/6642916)的项目仓库

### 如何使用

为了让新手更容易上手，项目使用[Roadhog](https://github.com/sorrycc/roadhog)进行调试与构建，省去了大量繁杂的配置代码。

**请使用node 6.2+版本执行以下命令**，不然会报错：

- 克隆项目到本地后，在项目目录下执行`npm install`或`npm i`安装依赖
- 执行`npm start`启动调试服务器，开始开发工作
- 执行`npm run build`打包项目到dist目录

### 注意

建议React初学者根据文章顺序一步一步打造这一个笑话App，实践才是最好的老师哦~

### Q&A

Q: 如何切换node版本？

A: windows系统的node版本管理工具问题颇多，不想折腾直接下载最新版node重新安装；非windows系统建议使用[nvm](https://github.com/creationix/nvm)安装和管理node版本

Q: 为什么npm install这么慢？

A: npm默认从国外的npm仓库里下载，install之前先执行`npm config set registry https://registry.npm.taobao.org`把源切换为淘宝镜像
