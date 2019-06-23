## 模拟字符串的indexOf方法

献上不完善的代码，看官感兴趣的话可以自行进行扩展～

```javascript
/*
* @param child 子字符串
* @pos 开始比较的位置，不支持负数
**/
String.prototype.indexOf2 = function(child, pos){
    let i = 0;
    let parent = this.toString();
    let parentLen = parent.length;
    let childLen = child.length;
    let startPos = pos;
    if(startPos == undefined || startPos == null || startPos <= -1){
        i = 0;
    } else if(startPos > parentLen-1) {
        return -1;
    } else {
        i = startPos;
    }

    if(childLen > parentLen) { // 子字符串大于父字符串
        return -1;
    }else {
        let compareStr = '';
        while(i < parentLen) {
            // 拼合父串
            compareStr = parent.substr(i, childLen);
            if(compareStr == child) {
                return i;
            }
            i++;
        }
        return -1;
    }
}
let parent = 'pangjiaming';
console.log(parent.indexOf2('a', 2));
```