## 模版方法

### 概念

**模版方法**（TemplateMethod）定义了一个操作中的算法的骨架，而将一些步骤延迟到子类中。模版方法使得子类可以不改变一个算法的结构即可重新定义该算法的某些特定步骤。

模版方法是一种代码复用的基本技术，在类库中尤为重要，因为他们提取了类库中的公共行为。模版方法导致一种反向的控制结构，这种结构就是传说中的“好莱坞法则”，即“别找找我们，我们找你”，这指的是父类调用一个类的操作，而不是相反。具体体现是面向对象编程语言里的抽象类（以及其中的抽象方法），以及继承该抽象类（和抽象方法）的子类。

### 作用和注意事项

#### 作用

1. 一次性实现一个算法的不变的部分，将可变的行为留给子类来实现。

2. 各子类中公共的行为应该被提取出来并集中到一个公共父类中的避免代码重复。不同指出分离为新的操作，最后，用一个钓鱼这些新操作的模版方法来替换这些不同的代码。

3. 控制子类的扩展，模版方法只在特定点调用"hook（钩子）"操作，这样就允许在这些点进行扩展

#### 注意事项

1. 和策略模式不同，模版方法使用继承来改变算法的一部分，而策略模式使用委托来改变整个算法。

### 代码实战

```javascript
// 上帝
function shangdi() {

}
shangdi.prototype.zaoren_yanjing = function() {
    console.log('eys');
}
shangdi.prototype.zaoren_bizi = function() {
    console.log('nose');
}
shangdi.prototype.aihao = funtion() {
    throw new Error('you should do yourself');
}

// 小明
function xiaoming() {
    console.log('xiaoming is sub class in shangdi');
    shangdi.call(this);
}
xiaoming.prototype = new shangdi();
xiaoming.prototype.aihao = function() {
    console.log('xiao ming love joy');
}
```