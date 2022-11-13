# miniapp-shaking-demo
小程序摇树优化demo

## 运行
一、 安装依赖
```
// 根目录下安装
npm i
// 然后进入src下安装
cd src
npm i
```

二、构建

用微信小程序打开项目，然后点击构建

三、摇树优化
```
npm start
```
这个命令会把摇树的代码生成到dist目录下，用小程序开发工具打开这个目录
就可以运行，如果没有问题就可以上传dist下的文件。

四、查看依赖图
```
npm i parcel-bundler -g
npm run map
```
