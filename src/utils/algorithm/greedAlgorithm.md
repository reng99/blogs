## 贪心算法

直接上题：

老师分饼干，每个孩子只能得到一块饼干，但每个孩子想要的饼干大小不尽相同。目标是尽量让更多的孩子满意。 如孩子的要求是 [1, 3, 5, 4, 2]，饼干大小是[1, 1]，最多能让 1 个孩子满足。 如孩子的要求是 [10, 9, 8, 7, 6]，饼干大小是[7, 6, 5]，最多能让 2 个孩子满足。

符合`贪心算法`思想，在满足孩子的情况下，使孩子的饼干尽可能小。

```javascript
function splitCake(childrenIssue, cake) {
    var sortChildrenIssue = childrenIssue.sort((item1, item2) => item1 - item2);
    var sortCake = cake.sort((item1, item2) => item1 - item2);
    var result = [];
    for(var i = 0, j = 0; i < sortChildrenIssuse.length && j < sortCake.length; j++) {
        if(sortChildrenIssue[i] <= sortCake[j]) {
            result.push(sortChildrenIssue[i]);
            i++;
        }
    }
    return result;
}
```