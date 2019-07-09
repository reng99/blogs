## 适配器模式

### 概念

**适配器模式**（Adapter）是将一个类（对象）的接口（方法或属性）转换成客户希望的另外一个接口（方法或属性），适配器模式使得原本由于接口不兼容而不能一起工作的那些类（对象）可以一起工作。

### 作用和注意事项

#### 作用

1. 使用一个已经存在的对象，但是其方法或接口不符合你的要求。

2. 创建一个可复用的对象，该对象可以与其他不相关或不可见的对象协调工作。

3. 使用已经存在的一个或多个对象，但是不能进行继承已匹配它的接口。

#### 注意事项

1. 与代理模式的区别，代理模式是不更改原接口，适配器模式是原接口不符合规范。

### 代码实战

```javascript
function pp() {
    this.test = function() {
        console.log('I am new test');
    }
}
pp.prototype.gogo = function() {
    console.log('I am new gogo');
}
function shipeiqi() {
    var s = new pp;
    var aa = {
        test: function() {
            s.test();
        },
        go: function() {
            s.gogo();
        }
    }
    return aa;
}

```

