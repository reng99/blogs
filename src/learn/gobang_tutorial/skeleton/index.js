/**
 * maked by jiaming on 2018.12.02
 * 使用es6的语法
 * 主题：五子棋的代码基本骨架
 */

class Gobang { // 这里设置一个五子棋的类，统一管理代码
    // Gobang这个类的构造函数，options是在实例话的时候要穿过来的值
    constructor(options={}){ // 设置参数的默认值，es6之前不允许这样设置
        this.options = options;

        // 初始化
        this.init();
    }

    // 初始化
    init() {
        const { options } = this;// 结构赋值

        console.log(options); // 打印出传入的实例的配置选项
    }
}

// 实例化对象
let gobangInstance1 = new Gobang(); // 没有传配置项的时候
let gobangInstance2 = new Gobang({
    canvas: 'chess'
}); // 传配置项的时候