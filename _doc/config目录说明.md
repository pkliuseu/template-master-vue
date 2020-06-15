# configs目录说明

## ip-config
启动前将ipEntry设置为你的ip地址
```js
  var ipEntry = '192.168.1.103'

  exports.entry = ipEntry
```

## build.js
自动打包全部微应用

## install.js
1. 自动下载全部微应用
2. 已经存在node_modiles目录的微应用将跳过下载

```js
npm run init  // 使用npm下载

npm run cinit  // 使用cnpm下载

npm run yinit  // 使用yarn下载
```

## start.js
1. 自动运行所有微应用
2. 不经存在node_modiles目录的微应用将跳过运行