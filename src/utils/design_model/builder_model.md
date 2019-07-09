## 建造者模式

### 概念

建造者模式可以将一个对象的构造与其表示相分离，使得同样的构建过程可以创建不同的表示。也就是说我们用了建造者模式，那么用户就需要制定需要建造的类型就可以得到它们。而具体建造的过程和细节就不需要知道了。建造者模式实际，就是一个指挥者，一个建造者，一个使用指挥者调用具体建造者工作得出结果客户。

建造者模式主要用于“分步骤构建一个复杂的对象”，在这其中“分步骤”是一个稳定的算法，而复杂对象的各个部分则经常变化。

### 作用和注意事项

#### 作用

1. 分步创建一个复杂的对象

2. 解耦封装过程和具体创建的组件

3. 无需关心组件如何组装

#### 注意事项

1. 一定要一个稳定算法进行支持

2. 加工工艺是暴露的

### 相关的实战

```javascript
// 1.发送一个请求 白富美
// 2.$.ajax 建造者模式 包工头
// 3. 工人 完整的工程 如success部分
$.ajax({
    url: 'a.php',
    success: function(argument) {

    }
});
```

具体实现一个建造者:

```javascript
// 1. 产出的东西房子
// 2. 包工头baogongtou调用工人进行开工，而且他很清楚工人们具体的某一个大项
// 3. 工人是盖房子 工人可以建卧室，建客厅，建厨房
// 4. 包工头是一个接口而已，对外称能盖房子
function Fangzi() {
    this.woshi = ''; // 卧室
    this.keting = ''; // 客厅
    this.chufang = ''; // 厨房
}

function Baogongtou() {
    this.gaifangzi = function(gongren) {
        gongren.jian_woshi();
        gongren.jian_keting();
        gongren.jian_chufang();
    }
}

function Gongren() {
    this.jian_woshi = function() {
        console.log('卧室盖好了');
    }
    this.jian_keting = function() {
        console.log('客厅建好了');
    }
    this.jian_chufang = function() {
        console.log('厨房建好了');
    }
    this.jiaogong = function() {
        var _fangzi = new Fangzi();
        // 置状态
        _fangzi.woshi = 'ok';
        _fangzi.keting = 'ok';
        _fangzi.chufang = 'ok';
        return _fangzi;
    }
}

var gongren = new Gongren();
var baogongtou = new Baogongtou();
baogongtou.gaifangzi(gongren);
var myfangzi = gongren.jiaogong();
console.log(myfangzi);
```

