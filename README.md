# Mock

## 安装 Node

[安装nvm管理多版本Node](https://github.com/creationix/nvm)

```sh
# nvm ls-remote --lts
```

## 安装mock相关包

``` sh
$ npm init 初始化项目
$ npm i nrm -S --registry=https://registry.npm.taobao.org
$ npm install -g cnpm --registry=https://registry.npm.taobao.org

$ cnpm install nrm -g 镜像源包
$ nrm ls 查看镜像源
$ nrm use taobao

$ npm install mockjs json-server -S

```

## 实例-新闻列表

> 100条新闻，每条新闻有对应的id，标题，内容，简介，标签，浏览量，和一个图片数组

``` sh
$ mkdir mock
$ vim data.js
let Mock  = require('mockjs')
let Random = Mock.Random
module.exports = function() {
  var data = {
    news: [],
    index: {
      "domian": "domain.com",
      "age": 30
    }
  }
  var images = [1,2,3].map(
    x => Random.image('200x100', Random.color(), Random.word(2,6))
  )
  for (var i = 0; i < 100; i++) {
    var content = Random.cparagraph(0,10)
    data.news.push({
      id: i,
      title: Random.cword(8,20),
      desc: content.substr(0,40),
      tag: Random.cword(2,6),
      views: Random.integer(100,5000),
      images: images.slice(0,Random.integer(1,3))
    })
  }
  return data
}

$ json-server data.js -p 3000
$ json-server --port 3004 --host 192.168.1.2 --routes routes.json ./data.js
```