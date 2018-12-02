/**
 * maked by jiaming on 2018.12.02
 * 使用es6的语法
 * 主题：落子实现人人对战
 */

class Gobang {
    constructor(options={}){
        this.options = options;
        this.init();
    }

    init() {
        const { options } = this;
        this.chessboard = document.getElementById(options.canvas || 'chess');
        this.checkerboard = []; 
        this.drawChessBoard();
        this.initChessboardMatrix();

        // 角色，1是黑色棋子，2是白色棋子
        this.role = options.role || 1;

        // 单个格子的宽高
        this.lattice = {
            width: options.gobangStyle.padding,
            height: options.gobangStyle.padding
        };
        // 监听落子
        this.listenDownChessman()
    }

    listenDownChessman() {
        // 监听点击棋盘对象事件
        this.chessboard.onclick = event => {
            let {padding} = this.options.gobangStyle;
            // 获取棋子的位置(x,y)坐标，如(0,0),(0,2)
            let {
                offsetX: x,
                offsetY: y,
            } = event; // 解构赋值
            // console.log(x,y);
            x = Math.abs(Math.round((x-padding/2)/this.lattice.width));// 防止边界的为负数，故取绝对值
            y = Math.abs(Math.round((y-padding/2)/this.lattice.height));
            // console.log(x,y);
            // 点击的是棋盘，并且是空位置才可以落子
            if(this.checkerboard[x][y] !== undefined && Object.is(this.checkerboard[x][y],0)){
                // 更新矩阵值
                this.checkerboard[x][y] = this.role;
                // 刻画棋子
                this.drawChessman(x,y,Object.is(this.role , 1));
                // 切换棋子的角色
                this.role = Object.is(this.role , 1) ? 2 : 1;
            }
        }
    }

    // 刻画棋子
    drawChessman(x,y,isBlack) {
        const context = this.chessboard.getContext('2d');
        const {padding} = this.options.gobangStyle;
        let half_padding = padding/2;
        context.beginPath();
        context.arc(half_padding+x*padding,half_padding+y*padding,half_padding-2,0,2*Math.PI);
        let gradient = context.createRadialGradient(half_padding+x*padding+2,half_padding+y*padding-2,half_padding-2,half_padding+x*padding+2,half_padding+y*padding-2,0);
        if(isBlack){
            gradient.addColorStop(0,'#0a0a0a');
            gradient.addColorStop(1,'#636766');
        }else{
            gradient.addColorStop(0,'#d1d1d1');
            gradient.addColorStop(1,'#f9f9f9');
        }
        context.fillStyle = gradient;
        context.fill();
    }

    drawChessBoard() {
        const context = this.chessboard.getContext('2d');
        const {padding, count, borderColor} = this.options.gobangStyle;
        this.chessboard.width = this.chessboard.height = padding * count;
        context.strokeStyle = borderColor;

        let half_padding = padding/2;
        for(var i = 0; i < count; i++){
            context.moveTo(half_padding+i*padding, half_padding);
            context.lineTo(half_padding+i*padding, padding*count-half_padding);
            context.stroke();
            context.moveTo(half_padding, half_padding+i*padding);
            context.lineTo(count*padding-half_padding, half_padding+i*padding);
            context.stroke();
        }
    }

    initChessboardMatrix(){
        const {count} = this.options.gobangStyle;
        const checkerboard = [];
        for(let x = 0; x < count; x++){
            checkerboard[x] = [];
            for(let y = 0; y < count; y++){
                checkerboard[x][y] = 0;
            }
        }
        this.checkerboard = checkerboard;
    }
}

let gobang = new Gobang({
    canvas: 'chess', 
    role: 2, // 棋子的角色，1是黑色的棋子，2是白色棋子，这里默认是白色棋子先下
    gobangStyle: { 
        padding: 30, // 需整数，偶数
        count: 20,
        borderColor: '#bfbfbf',
    }
});