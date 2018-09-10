# Install

```bash
$ npm i --save egg-dict
```

## Usage & configuration

- `config.default.js`

```js
// 相对app目录的路径，默认值dict
exports.dict = {
  path: 'dict'
};
```

- `config/plugin.js`

``` js
exports.dict = {
  enable: true,
  package: 'egg-dict'
}
```

### example

```js
// app/dict/demo/demo.js
module.exports = {
    status: {
        error: '错误',
        success: '成功'
    }
}
```
```js
// controller.js or service.js
console.log(this.ctx.dict.demo.demo.status);

//print: {error: "错误", success: "成功"}
```

```js
// app/dict/demo/demo.js
// 只为了说明可以使用app
module.exports = (app)=>{
    return {
        statusWithApp: {
            appPath: app.baseDir
        }
    }
}
```
```js
// controller.js or service.js
console.log(this.ctx.dict.demo.demo.statusWithApp.appPath);

//print: /path/to/app-basedir
```