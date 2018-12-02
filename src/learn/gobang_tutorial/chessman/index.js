/**
 * maked by jiaming on 2018.12.02
 * 使用es6的语法
 * 主题：绘制棋子
 */

class Gobang {
    constructor(options={}){
        this.options = options;

        // 初始化
        this.init();
    }

    // 初始化
    init() {
        const { options } = this;
        // 获取棋盘对象
        this.chessboard = document.getElementById(options.canvas || 'chess');

        this.drawChessman(10,10,true); // 绘制黑棋
        this.drawChessman(50,50,false); // 绘制白棋
    }

    drawChessman(x , y, isBlack){// 绘制的(x,y)坐标，isBlack判断是黑棋子还是白色棋子
        const context = this.chessboard.getContext('2d');
        context.beginPath();
        context.arc(x, y, 10, 0, 2 * Math.PI);// 画圆，半径这里设定为10px
        context.closePath();
        // 为棋子添加渐变颜色
        let gradient = context.createRadialGradient(x, y, 10, x-5, y-5, 0);// createRadialGradient(x1,y1,r1,x2,y2,r2)创建放射状/圆形渐变对象。
        if(isBlack){ // 黑子
            gradient.addColorStop(0,'#0a0a0a'); // 开始的颜色
            gradient.addColorStop(1,'#636766'); // 结束的颜色
        }else{ // 白子
            gradient.addColorStop(0,'#d1d1d1');
            gradient.addColorStop(1,'#f9f9f9');
        }
        context.fillStyle = gradient;
        context.fill();
    }
}


// 实例化对象
let gobang = new Gobang({
    canvas: 'chess', // index.html中设定的画布的id
});