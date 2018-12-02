/**
 * maked by jiaming on 2018.12.02
 * 使用es6的语法
 * 主题：撤销悔棋
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

        this.role = options.role || 1;

        this.history = [];
        this.currentStep = 0;

        this.lattice = {
            width: options.gobangStyle.padding,
            height: options.gobangStyle.padding
        };
        this.listenDownChessman()
    }

    // 撤销悔棋
    revokedRegretChess(){
        const next = this.history[this.currentStep]; // 撤销的点的下一个
        if(next) {
            this.drawChessman(next.x, next.y, next.role === 1); // 在上次撤销的点上画棋
            this.checkerboard[next.x][next.y] = next.role;
            this.currentStep++; // 当前步骤自加
            this.role = Object.is(this.role, 1) ? 2 : 1; // 角色的切换
        }
    }

    regretChess() {
        if(this.history.length){
            const prev = this.history[this.currentStep - 1];
            if(prev){
                const {
                    x,
                    y,
                    role
                } = prev;
                this.minusStep(x,y);
                this.checkerboard[prev.x][prev.y] = 0;
                this.currentStep--;
                this.role = Object.is(role,1) ? 1 : 2;
            }
        }
    }

    minusStep(x, y) {
        const context = this.chessboard.getContext('2d');
        const {padding, count} = this.options.gobangStyle;
        context.clearRect(x*padding, y*padding, padding,padding);
        let half_padding = padding/2;
        if(x<=0 && y <=0){ 
            this.fixchessboard(half_padding,half_padding,half_padding,padding,half_padding,half_padding,padding,half_padding);
        }else if(x>=count-1 && y<=0){
            this.fixchessboard(count*padding-half_padding,half_padding,count*padding-padding,half_padding,count*padding-half_padding,half_padding,count*padding-half_padding,padding);
        }else if(y>=count-1 && x <=0){
            this.fixchessboard(15,count*padding-half_padding,half_padding,count*padding-padding,half_padding,count*padding-half_padding,padding,count*padding-half_padding);
        }else if(x>=count-1 && y >= count-1){
            this.fixchessboard(count*padding-half_padding,count*padding-half_padding,count*padding-padding,count*padding-half_padding,count*padding-half_padding,count*padding-half_padding,count*padding-half_padding,count*padding-padding);
        }else if(x <=0 && y >0 && y <count-1){
            this.fixchessboard(half_padding,padding*y+half_padding,padding,padding*y+half_padding,half_padding,padding*y,half_padding,padding*y+padding);
        }else if(y <= 0 && x > 0 && x < count-1){
            this.fixchessboard(x*padding+half_padding,half_padding,x*padding+half_padding,padding,x*padding,half_padding,x*padding+padding,half_padding);
        }else if(x>=count-1 && y >0 && y < count-1){
            this.fixchessboard(count*padding-half_padding,y*padding+half_padding,count*padding-padding,y*padding+half_padding,count*padding-half_padding,y*padding,count*padding-half_padding,y*padding+padding);
        }else if(y>=count-1 && x > 0 && x < count-1){
            this.fixchessboard(x*padding+half_padding,count*padding-half_padding,x*padding+half_padding,count*padding-padding,x*padding,count*padding-half_padding,x*padding+padding,count*padding-half_padding);
        }else{
            this.fixchessboard(half_padding+x*padding,y*padding,half_padding+x*padding,y*padding + padding,x*padding,y*padding+half_padding,(x+1)*padding,y*padding+half_padding)
        }
    }
    fixchessboard (a , b, c , d , e , f , g , h){
        const context = this.chessboard.getContext('2d');
        const {borderColor, lineWidth} = this.options.gobangStyle;
        context.strokeStyle = borderColor;
        context.lineWidth = lineWidth;
        context.beginPath();
        context.moveTo(a , b);
        context.lineTo(c , d);
        context.moveTo(e, f);
        context.lineTo(g , h);
        context.stroke();
    }

    listenDownChessman() {
        this.chessboard.onclick = event => {
            let {padding} = this.options.gobangStyle;
            let {
                offsetX: x,
                offsetY: y,
            } = event; 
            x = Math.abs(Math.round((x-padding/2)/this.lattice.width));
            y = Math.abs(Math.round((y-padding/2)/this.lattice.height));
            if(this.checkerboard[x][y] !== undefined && Object.is(this.checkerboard[x][y],0)){
                this.checkerboard[x][y] = this.role;
                this.drawChessman(x,y,Object.is(this.role , 1));
                this.history.length = this.currentStep;
                this.history.push({
                    x,
                    y,
                    role: this.role
                });
                this.currentStep++;  
                
                this.role = Object.is(this.role , 1) ? 2 : 1;
            }
        }
    }

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
        const {padding, count, borderColor, lineWidth} = this.options.gobangStyle;
        this.chessboard.width = this.chessboard.height = padding * count;
        context.lineWidth = lineWidth;
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
        count: 14,
        borderColor: '#bfbfbf',
        lineWidth: 2, // 绘制线条的宽度，采取2比较合理
    }
});

let goback = document.getElementById('goback');
goback.onclick = () => {
    gobang.regretChess();
}

// 撤销悔棋
let regret = document.getElementById('regret');
regret.onclick = () => {
    gobang.revokedRegretChess();
}