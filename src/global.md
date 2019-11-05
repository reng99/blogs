### 全局

在全局上下文中，`this`指向[全局对象](https://developer.mozilla.org/en-US/docs/Glossary/Global_object)。当你使用浏览器，全局上下文将是`window`。当你使用Node.js，全局上下文就是`global`。



> **备注**：如果你对JavaScript中得作用域概念不熟，你可以去[[Understanding Variables, Scope, and Hoisting in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript)温习一下。

针对例子，你可以在浏览器的开发者工具中输出验证。如果你不是很熟悉在浏览器中跑`JavaScript`代码，去阅读下[How to Use the JavaScript Developer Console](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-developer-console) 文章。

如果你只是简单打印`this`，你将看到`this`指向的对象是什么。



```javasc
console.log(this)
```

```javasc
Output
Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
```

你可以看到，`this`就是`window`，也就是浏览器的全局对象。

在[Understanding Variables, Scope, and Hoisting in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript)中，你学习到函数中的变量又自己的上下文。你可能会认为，在函数内部`this`会遵循相同的规则，但是并没有。顶层的函数中，`this`仍然指向全局对象。

你可以写一个顶层的函数，或者是一个没有关联任何对象的函数，比如下面这个：

```javascript
function printThis() {
  console.log(this)
}

printThis()
```

```javascript
Output
Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
```

即使在一个函数中，`this`仍然指向了`window`，或全局对象。

然而，当使用[严格模式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)，全局上下文中，函数内`this`的上下文指向`undefined`。

















