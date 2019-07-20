## hash, chunckhash, contentHash的区别

和缓存结合。

### hash

使用`hash`对js和CSS进行签名的时，每一次构建，每一次hash值都不一样，导致无法缓存。

- **原因**：因为hash字段是根据每次编译compilation的内容进行计算的，也可以理解为项目总体文件的hash值，而不是针对每个具体文件的。（所以每次编译都有一个新的hash）

### chunkhash

- **解决**: 不用hash，而用 chunkhash (js和css要使用chunkhash)， chunkhash 的话每一个js的模块对应的值是不同的(根据js里的不同内容进行生成)

### contenthash

打包时发现，js和js引入的css的`chunkhash`是相同的，导致无法区分css和js的更新，如下：

```javascript
app_96ac1.css
```

- **原因**：因为webpack的编译理念，webpack将css视为js的一部分，所以在计算chunkhash时，会把所有的js代码和css代码混合在一起计算
- **解决**：css是使用 ExtractTextPlugin 插件引入的，这时候可以使用到这个插件提供的 contenthash ，如下(使用后css就有独立于js外的指纹了)。

```javascript
//提取css文件
new ExtractTextPlugin({
     filename:'css/[name].[contenthash:8].css'  //提取chunkhash8位码
})
```


### 参考

https://juejin.im/post/5a4502be6fb9a0450d1162ed