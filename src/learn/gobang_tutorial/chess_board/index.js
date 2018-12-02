/**
 * maked by jiaming on 2018.12.02
 * 使用es6的语法
 * 主题：画五子棋棋盘
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
        // 审查棋盘某点是否已经有棋,而且数组矩阵
        this.checkerboard = []; 

        // 绘制出物理棋盘
        this.drawChessBoard();

        // 绘制逻辑矩阵棋盘并初始化
        this.initChessboardMatrix();
    }

    // 绘制出物理棋盘
    drawChessBoard() {
        const context = this.chessboard.getContext('2d');// 获取绘制上下文
        const {padding, count, borderColor} = this.options.gobangStyle;
        // 设置棋盘的宽高
        this.chessboard.width = this.chessboard.height = padding * count;
        // 设置画笔的颜色
        context.strokeStyle = borderColor;

        let half_padding = padding/2;// 考虑绘制的棋子展示的位置，所以要预留一些边距,可以审查元素看下
        // 画棋盘
        for(var i = 0; i < count; i++){
            context.moveTo(half_padding+i*padding, half_padding);
            context.lineTo(half_padding+i*padding, padding*count-half_padding);
            context.stroke(); // 这里绘制出的是竖轴
            context.moveTo(half_padding, half_padding+i*padding);
            context.lineTo(count*padding-half_padding, half_padding+i*padding);
            context.stroke(); // 这里绘制出的是横轴
        }
    }

    // 绘制逻辑矩阵棋盘
    initChessboardMatrix(){
        const {count} = this.options.gobangStyle;
        const checkerboard = [];
        // 存在(x,y)矩阵点
        for(let x = 0; x < count; x++){
            checkerboard[x] = [];
            for(let y = 0; y < count; y++){
                checkerboard[x][y] = 0; // 全部赋值为0，表示此坐标是没有棋子的
            }
        }
        this.checkerboard = checkerboard;
        console.log(this.checkerboard); // 浏览器控制台上面可查看打印出来的初始化矩阵
    }
}

// 实例化对象
let gobang = new Gobang({
    canvas: 'chess', // index.html中设定的画布的id
    gobangStyle: { // 五子棋的一些样式
        padding: 30, // 边和边之间的距离，整数而且是偶数
        count: 10, // 棋盘的边数，整数
        borderColor: '#bfbfbf', // 描边的颜色
    }
});