## nodejs的事件循环

简单的说下nodejs的事件循环吧：

1. 执行全局的script的同步代码
2. 执行microtask微任务，先执行所有的`Next Tick Queue`的所有任务，再执行`Other Microtask Queue`中的所有任务
3. 开始执行macrotask宏任务，共六个阶段，从第1个阶段开始执行相应每一个阶段macrotask中的所有任务，注意，这里是所有每个阶段宏任务队列的所有任务，在浏览器的`Event Loop`中是只取宏队列的第一个任务出来执行，每一个阶段的macrotask任务执行完之后，开始执行微任务，也就是步骤2
4. Times Queue -> 步骤2 -> I/O Queue -> 步骤2 -> Check Queue -> 步骤2 -> Close Callback Queue -> 步骤2 -> Timers Queue ...
5. 这就是node的事件循环


### 参考

来源文章：https://juejin.im/post/5b8f76675188255c7c653811#heading-5