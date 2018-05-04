# 职场红领巾--小程序

## 使用框架 wepy

### 介绍
 * github：[wepy](https://github.com/Tencent/wepy)
 * 官网： [小程序组件化开发框架](https://tencent.github.io/wepy/)

### 前置条件
 * 需要node环境

### 使用

  * 克隆到本地
  ```
  git clone git@github.com:careerbro/zchlj-weixin-app.git
  ```
  * 安装依赖包
  ```
  npm install (npm)
  ```
  * 如果使用npm安装速度过慢，或者安装后运行失败，推荐使用cnpm安装 [cnpm](http://npm.taobao.org/)
  >  安装命令
  >  ```
  >  npm install -g cnpm --registry=https://registry.npm.taobao.org
  >  ```
  >  完成后使用命令
  >  ```
  >  cnpm install
  >  ```

  * 运行程序
  ```
  wepy build --watch
  ```
  执行停止后查看项目目录，如图
  ![生成文件目录]()

  * 使用微信开发者工具打开项目(上图)下 ／dist 文件夹
  > * 点击右上角详情按钮
  > * 取消勾选  ES6 转 ES5
  > * 开发模式勾选 不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书
  > ![设置操作]()


