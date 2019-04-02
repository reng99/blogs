// 排序算法

class Sequence{
    constructor(arr){
        this.arr = arr;
        this.gaps = [5, 3, 1]; // 用于希尔排序的间隔， ⚠️数组最后一个元素为1 ️
    }

    /**
     * @method swap 交换两个元素
     * @param { Number } index1 元素的索引值1
     * @param { Number } index2 元素的索引值2
     */
    swap(index1, index2){
        let aux = this.arr[index1];
        this.arr[index1] = this.arr[index2];
        this.arr[index2] = aux;
    }

    // 这里重写了toString的方法，用于输出数组内容
    toString(){
        console.log(this.arr.join('-'));
    }

    // 冒泡排序
    bubbleSort(){
        let numElements = this.arr.length;
        for(let outer = numElements-1; outer >= 2; --outer){
            for(let inner = 0; inner <= outer-1; ++inner){
                if(this.arr[inner] > this.arr[inner+1]){
                    this.swap(inner, inner+1);
                }
            }
        }
    }

    // 选择排序
    selectionSort(){
        let min,
            numElements = this.arr.length;
        for(let outer = 0; outer <= numElements-2; outer++){
            min = outer;
            for(let inner = outer+1; inner <= numElements-1; inner++){
                if(this.arr[inner] < this.arr[min]){
                    min = inner;
                }
            }
            this.swap(outer, min);
        }
    }

    // 插入排序
    insertionSort(){
        let temp,
            inner,
            numElements = this.arr.length;
        for(let outer = 1; outer <= numElements-1; outer++){
            temp = this.arr[outer];
            inner = outer;
            while(inner > 0 && this.arr[inner-1] >= temp){
                this.arr[inner] = this.arr[inner-1];
                inner--;
            }
            this.arr[inner] = temp;
        }
    }

    // 希尔排序
    shellSort(){
        let temp,
            j,
            numElements = this.arr.length;
        for(let g = 0; g < this.gaps.length; ++g){
            for(let i = this.gaps[g]; i < numElements; ++i){
                temp = this.arr[i];
                for(j = i; j >= this.gaps[g] && this.arr[j - this.gaps[g]] > temp; j -= this.gaps[g]){ // 之前的元素已经升序排好序的了
                    this.arr[j] = this.arr[j - this.gaps[g]];
                }
                this.arr[j] = temp; // 这里和上面的for循环是互换两个数据位置
            }
        }
    }

    // 快速排序
    quickSort(){
        this.arr = this.quickAux(this.arr);
    }

    // aux函数 - 快排的辅助函数
    quickAux(arr){
        let numElements = arr.length;
        if(numElements == 0){
            return [];
        }
        let left = [],
            right = [],
            pivot = arr[0]; // 取数组的第一个元素作为基准值
        for(let i = 1; i < numElements; i++){
            if(arr[i] < pivot){
                left.push(arr[i]);
            }else{
                right.push(arr[i]);
            }
        }
        return this.quickAux(left).concat(pivot, this.quickAux(right));
    }
}

let testBubbleArr = [12, 30, 6, 8, 4, 10, 9, 100, 30, 60], // 写死要排序的数组元素(⚠️注意：这里演示选择的数据结构是数组，其它的数组结构的有兴趣可以自己证明)
    testSelectionArr = [8, 10, 80, 9, 6, 5, 5, 80],
    testInsertionArr = [100, 80, 98, 2, 5, 80, 8, 60],
    testShellArr = [6, 0, 2, 9, 3, 5, 8, 0, 5, 4],
    testQuickArr = [68, 80, 12, 80, 95, 70, 79, 27, 88, 93]; 

let bubbleDemo = new Sequence(testBubbleArr);
bubbleDemo.bubbleSort();
bubbleDemo.toString(); // 4-6-8-9-10-12-30-30-60-100

let selectionDemo = new Sequence(testSelectionArr);
selectionDemo.selectionSort();
selectionDemo.toString(); // 5-5-6-8-9-10-80-80

let insertionDemo = new Sequence(testInsertionArr);
insertionDemo.insertionSort();
insertionDemo.toString(); // 2-5-8-60-80-80-98-100

let shellDemo = new Sequence(testShellArr);
shellDemo.shellSort();
shellDemo.toString(); // 0-0-2-3-4-5-5-6-8-9

let quickDemo = new Sequence(testQuickArr);
quickDemo.quickSort();
quickDemo.toString(); // 12-27-68-70-79-80-80-88-93-95