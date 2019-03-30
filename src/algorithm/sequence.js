// 排序算法

class Sequence{
    constructor(arr){
        this.arr = arr;
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
}

let testBubbleArr = [12, 30, 6, 8, 4, 10, 9, 100, 30, 60], // 写死要排序的数组元素(⚠️注意：这里演示选择的数据结构是数组，其它的数组结构的有兴趣可以自己证明)
    testSelectionArr = [8, 10, 80, 9, 6, 5, 5, 80],
    testInsertionArr = [100, 80, 98, 2, 5, 80, 8, 60];

let bubbleDemo = new Sequence(testBubbleArr);
bubbleDemo.bubbleSort();
bubbleDemo.toString(); // 4-6-8-9-10-12-30-30-60-100

let selectionDemo = new Sequence(testSelectionArr);
selectionDemo.selectionSort();
selectionDemo.toString(); // 5-5-6-8-9-10-80-80

let insertionDemo = new Sequence(testInsertionArr);
insertionDemo.insertionSort();
insertionDemo.toString(); // 2-5-8-60-80-80-98-100