// 图
class Graph{
    constructor(v){
        this.vertices = v; // 顶点个数
        this.edges = 0; // 边的个数
        this.adj = []; // 邻接表或邻接表数组
        this.marked = []; // 存储顶点是否被访问过的标识
        this.init();
    }
    init(){
        for(let i = 0; i < this.vertices; i++){
            this.adj[i] = [];
            this.marked[i] = false;
        }
    }
    // 添加边
    addEdge(v, w){
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
        return this;
    }
    // 展示图
    showGraph(){
        for(let i = 0; i < this.vertices; i++){
            for(let j = 0; j < this.vertices; j++){
                if(this.adj[i][j] != undefined){
                    console.log(i +' => ' + this.adj[i][j]);
                }
            }
        }
    }
    // 深度优先搜索
    dfs(v){
        this.marked[v] = true;
        if(this.adj[v] != undefined){
            console.log("visited vertex: " + v);
        }
        this.adj[v].forEach(w => {
            if(!this.marked[w]){
                this.dfs(w);
            }
        })
    }
    // 广度优先搜索
    bfs(v){
        let queue = [];
        this.marked[v] = true;
        queue.push(v); // 添加到队尾
        while(queue.length > 0){
            let v = queue.shift(); // 从对首移除
            if(v != undefined){
                console.log("visited vertex: " + v);
            }
            this.adj[v].forEach(w => {
                if(!this.marked[w]){
                    this.marked[w] = true;
                    queue.push(w);
                }
            })
        }
    }
}

let graphFirstInstance = new Graph(5);
graphFirstInstance.addEdge(0, 1).addEdge(0, 2).addEdge(1, 3).addEdge(2, 4);
graphFirstInstance.showGraph();
// 0 => 1
// 0 => 2
// 1 => 0
// 1 => 3
// 2 => 0
// 2 => 4
// 3 => 1
// 4 => 2
// ❓为什么会出现这种数据呢？它对应的图是什么呢？
console.log('--展示图和深度优先搜索的分隔线--');
graphFirstInstance.dfs(0); // 从顶点 0 开始的深度搜索
// visited vertex: 0
// visited vertex: 1
// visited vertex: 3
// visited vertex: 2
// visited vertex: 4
console.log('--深度优先搜索和广度优先搜索的分隔线--');
let graphSecondInstance = new Graph(5);
graphSecondInstance.addEdge(0, 1).addEdge(0, 2).addEdge(1, 3).addEdge(2, 4);
graphSecondInstance.bfs(0); // 从顶点 0 开始的广度搜索
// visited vertex: 0
// visited vertex: 1
// visited vertex: 2
// visited vertex: 3
// visited vertex: 4