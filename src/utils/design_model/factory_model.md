## 工厂模式

### 概念

工厂模式定义了一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。该模式使一个类的实例化延迟到了子类。而子类可以重写接口方法以便创建的时候指定自己的对象类型（抽象工厂）。

这个模式十分有用，尤其是创建对象的流程赋值的时候，比如依赖于很多配置文件等。并且，你会经常在程序里面看到工厂方法，用于让子类定义需要创建的对象类型。

### 作用和注意事项

#### 作用

1. 对象的构建十分复杂需要使用工厂模式

2. 需要依赖具体的环境创建不同的实例

3. 处理大量具有相同属性的小对象

#### 注意事项

1. 不能滥用工厂，有时候仅仅是给代码增加复杂度

### 代码解说

```javascript
    // 工厂应该有厂长 来决定运行到底哪条产品线
    // 消费者 -> 子类
    var gongchang = {}
    gongchang.chanyifu = function(argument) {
        this.gongren = 50;
        console.log('我们有'+this.gongren);
    }
    gongchang.chanxie = function(argument) {
        console.log('产鞋子');
    }
    gongchang.yunshu = function(argument) {
        console.log('运输');
    }
    gongchang.changzhang = function(para) {
        // new js 构造函数模式和单例模式
        return new gongchang[para]();
    }
    var me = gongchang.changzhang('chanyifu');
```

