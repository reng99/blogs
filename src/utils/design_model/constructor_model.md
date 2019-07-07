## 构造函数模式

### 概念

构造函数用于创建**特定类型的对象**--不仅声明了使用的对象，构造函数还可以接受参数以便第一次创建对象的时候设置对象的成员值。你可以自定义自己的构造函数，然后在里面声明自定义类型对象的属性和方法。

在JavaScript里，构造函数通常是认为用来实现实例的，JavaScript没有类的概念，但是又特殊的构造函数。通过new关键字来调用自定义的构造函数，在构造函数内部，this关键字引用的是新创建的对象。

### 构造函数的作用和注意事项

#### 作用

1. 用于创建特定类型的对象

2. 第一次声明的时候给对象赋值

3. 自己声明构造函数，赋予属性和方法。

#### 注意事项

1. 声明函数的时候处理业务逻辑。

2. 区分和单例模式的区别，配合单例实现初始化。

3. 构造函数大写字母开头。（建议）

4. 注意new的成本。（继承）

new的时候，比如公共方法放在原型链上。

### 代码实战

```javascript
// 1. 用于创建特定类型的对象
// 2. js开发时候建议写单引号，因为双引号，js内部也会先转成单引号的
// 3. js里构造函数比较特殊的地方，需要通过new调用
function CreateDoor(huawen) {
    this.suo = "普通";
    this.huawen = "普通";
    var _huawen = huanwen || "普通";
    this.create = function() {
        return "【锁头】"+this.suo+"【花纹】"+_huawen;
    }
}
var xiaozhang = new CreateDoor();
xiaozhang.create();

var xiaoli = new CeateDoor('绚丽');
xiaoli.create();
```

单例模式和构造函数的配合：

```javascript
var AA = {
    CreateDoor: function(huawen) {
        this.suo = "普通";
        this.huawen = "普通";
        var _huawen = huanwen || "普通";
        this.create = function() {
            return "【锁头】"+this.suo+"【花纹】"+_huawen;
        }
    }
}

var BB = {
    CreateDoor: function(huawen) {
        this.suo = "普通";
        this.huawen = "普通";
        var _huawen = huanwen || "普通";
        this.create = function() {
            return "【锁头】"+this.suo+"【花纹】"+_huawen;
        }
    }
}

var xiaozhang = new AA.CreateDoor();
xiaozhang.create();

var xiaoli = new BB.CeateDoor('绚丽');
xiaoli.create();
```