## 理解JavaScript中的This,Bind,Call和Apply

![banner](https://res.cloudinary.com/practicaldev/image/fetch/s--5e1NKETe--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://p78.f0.n0.cdn.getcloudapp.com/items/5zu5YBmD/Image%2B2019-10-24%2Bat%2B12.25.45%2BPM.png%3Fv%3Da2cc3306c327002ac136c1a46e03087d)

`this`关键词在`JavaScript`中是个很重要的概念，也是一个对初学者和学习其他语言的人来说晦涩难懂。在`JavaScript`中，`this`是一个对象的引用。`this`指向的对象可以基于它是全局的，在对象上，或者在构造函数中**隐式更改**，当然也可以根据`Function`原型方法的`bind,call和apply`的使用**显示更改**。

尽管`this`是个复杂的话题，但是也是你开始编写第一个`JavaScript`程序后出现的话题。无论你尝试访问[the Document Object Model (DOM)](https://www.digitalocean.com/community/tutorial_series/understanding-the-dom-document-object-model)中的元素或事件，还是以面向对象的编程风格来构建用于编写的类，还是使用常规对象的属性和方法，都见遇到`this`。

在这篇文章中，你将学习到基于上下文**隐式表示**的含义，并将学习如何使用`bind,call和apply`方法来显示确定`this`的值。

### 隐式上下文

在四个主要上下文中，我们可以隐式地推断出`this`的值：

- 全局上下文
- 作为对象内的方法
- 作为函数或类的构造函数
- 作为DOM事件处理程序

#### 全局

在全局上下文中，`this`指向[全局对象](https://developer.mozilla.org/en-US/docs/Glossary/Global_object)。当你使用浏览器，全局上下文将是`window`。当你使用Node.js，全局上下文就是`global`。



> **备注**：如果你对JavaScript中得作用域概念不熟，你可以去[[Understanding Variables, Scope, and Hoisting in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript)温习一下。

针对例子，你可以在浏览器的开发者工具中输出验证。如果你不是很熟悉在浏览器中跑`JavaScript`代码，去阅读下[How to Use the JavaScript Developer Console](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-developer-console) 文章。

如果你只是简单打印`this`，你将看到`this`指向的对象是什么。



```javascript
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

```javascript
'use strict'

function printThis() {
  console.log(this)
}

printThis()
```

```javascript
Output
undefined
```

总的来说，使用严格模式更加安全，能减少`this`带来的非预期作用域的可能性。很少有人想直接将`this`指向`window`对象。

> 有关严格模式以及对错误和安全性所做更改的详细信息，请阅读MDN上[Strict mode](https://dev.to/digitalocean/understanding-this-bind-call-and-apply-in-javascript-dla)的文档

#### 对象方法

一个[方法](https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript#properties-and-methods)是对象上的函数，或对象可以执行的一个任务。方法使用`this`来引用对象的属性。

```javascript
const america = {
  name: 'The United States of America',
  yearFounded: 1776,
  
  describe() {
    console.log(`${this.name} was founded in ${this.yearFounded}.`)
  },
}

america.describe()
```

```javascript
Output
"The United States of America was founded in 1776."
```

在这个例子中，`this`等同于`america`。

在嵌套对象中，`this`指向方法当前对象的作用域。在下面这个例子，`details`对象中的`this.symbol`指向`details.symbol`。

```javascript
const america = {
  name: 'The United States of America',
  yearFounded: 1776,
  details: {
    symbol: 'eagle',
    currency: 'USD',
    printDetails() {
      console.log(`The symbol is the ${this.symbol} and the currency is ${this.currency}.`)
    },
  },
}

america.details.printDetails()
```

```javascript
Output
"The symbol is the eagle and the currency is USD."
```

另一种思考的方式是，在调用方法时，`this`指向`.`左侧的对象。

#### 函数构造器

当你使用[new](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)关键字，它创建一个构造函数或类的实例。在`ECMAScript 2015`更新为`JavaScript`引入类语法之前，构造函数是初始化用户定义对象的标准方法。在[Understanding Classes in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript)中，你将会学到怎么去创建一个函数构造器和等效的类构造函数。

```javascript
function Country(name, yearFounded) {
  this.name = name
  this.yearFounded = yearFounded

  this.describe = function() {
    console.log(`${this.name} was founded in ${this.yearFounded}.`)
  }
}

const america = new Country('The United States of America', 1776)

america.describe()
```

```javascript
Output
"The United States of America was founded in 1776."
```

在这个上下文中，现在`this`绑定到`Country`的实例，该实例包含在`America`常量中。

#### 类构造器

类上的构造函数的作用与函数上的构造函数的作用相同。在[Understanding Classes in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript)中，你可以了解到更多的关于构造函数和`ES6`类的相似和不同的地方。

```javascript
class Country {
  constructor(name, yearFounded) {
    this.name = name
    this.yearFounded = yearFounded
  }

  describe() {
    console.log(`${this.name} was founded in ${this.yearFounded}.`)
  }
}

const america = new Country('The United States of America', 1776)

america.describe()
```

`describe`方法中的`this`指向`Country`的实例，即`america`。

```javascript
Output
"The United States of America was founded in 1776."
```

#### DOM事件处理程序

在浏览器中，事件处理程序有一个特殊的`this`上下文。在被称为`addEventListener`调用的事件处理程序中，`this`将指向`event.currentTarget`。开发人员通常会根据需要简单地使用`event.target`或`event.currentTarget`来访问`DOM`中的元素，但是由于`this`引用在此上下文中发生了变化，因此了解这一点很重要。

在下面的例子，我们将创建一个按钮，为其添加文字，然后将它追加到[DOM](https://www.digitalocean.com/community/tutorial_series/understanding-the-dom-document-object-model)中。当我们使用事件处理程序打印其`this`的值，它将打印目标。

```javascript
const button = document.createElement('button')
button.textContent = 'Click me'
document.body.append(button)

button.addEventListener('click', function(event) {
  console.log(this)
})
```

```javascript
Output
<button>Click me</button>
```

如果你复制上面的代码到你的浏览器运行，你将看到一个有`Click me`按钮的页面。如果你点击这个按钮，你会看到`<button>Click me</button>`出现在的控制台上，因为点击按钮打印的元素就是按钮本身。因此，正如你所看到的，`this`指向的目标元素，就是我们向其中添加了事件监听器的元素。



### 显式上下文

在所有的先前的例子中，`this`的值取决于其上下文 -- 在全局的，在对象中，在构造函数或类中，还是在`DOM`事件处理程序上。然而，使用`call, apply` 或 `bind`，你可以显示地决定`this`应该指向哪。



决定什么时候使用`call, apply` 或 `bind`是一件很困难的事情，因为它将决定你程序的上下文。当你想使用事件来获取桥套类中的属性时，`bind`可能有用。比如，你写一个简单的游戏，你可能需要在一个类中分离用户接口和`I/O`，然后游戏的逻辑和状态是在另一个类中。由于游戏逻辑需要用户输入，比如按键或点击事件，你可能想要`bind`事件去获取游戏逻辑类中的`this`的值。

最重要的部分是，要知道怎么决定`this`对象指向了哪，这样你就可以像之前章节学的那样隐式操作，或者通过下面的三种方法显示操作。

#### Call 和 Apply

`call`和`apply`非常相似--它们都调用一个带有特定`this`上下文和可选参数的函数。`call`和`apply`的唯一区别就是，`call`需要一个个的传可选参数，而`apply`只需要传一个数组的可选参数。

在下面这个例子中，我们将创建一个对象，创建一个`this`引用的函数，但是`this`没有明确上下文（其实this默认指向了window）。

```javascript
const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
}

function summary() {
  console.log(`${this.title} was written by ${this.author}.`)
}

summary()
```

```javasc
Output
"undefined was written by undefined"
```

因为`summary`和`book`没有关联，调用`summary`本身将只会打印出`undefined`，其在全局对象上查找这些属性。

> **备注**： 在严格模式中尝试`this`会返回`Uncaught TypeError: Cannot read property 'title' of undefined`的错误结果，因为`this`它自身将会是`undefined`

然而，你可以在函数中使用`call`和`apply`调用`book`的上下文`this`。

```javascript
summary.call(book)
// or:
summary.apply(book)
```

```javascript
Output
"Brave New World was written by Aldous Huxley."
```

现在，当上面的方法运用了，`book`和`summary`之间有了关联。我们来确认下，现在`this`到底是什么。

```javascript
function printThis() {
  console.log(this)
}

printThis.call(book)
// or:
whatIsThis.apply(book)
```

```javascript
Output
{title: "Brave New World", author: "Aldous Huxley"}
```

在这个案例中，`this`实际上变成的所传的参数对象。

这就是说`call`和`apply`一样，但是它们又有点小区别。

除了将第一个参数作为`this`上下文传递之外，你也可以传递其他参数。

```javascript
function longerSummary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
  )
}
```

使用`call`时，你使用的每个额外的值都会被作为附加参数进行传递。

```javascript
longerSummary.call(book, 'dystopian', 1932)
```

```javascript
Output
"Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932."
```

如果你尝试使用`apply`去发送相同的参数，就会发生下面的事情：

```javascript
longerSummary.apply(book, 'dystopian', 1932)
```

```javascript
Output
Uncaught TypeError: CreateListFromArrayLike called on non-object at <anonymous>:1:15
```

针对`apply`，作为替代，你需要将参数放在一个数组中传递。

```javascript
longerSummary.apply(book, ['dystopian', 1932])
```

```javascript
Output
"Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932."
```

通过单个参数传递和形成一个数组传递之间的差别是微妙的，但是值得你留意。使用`apply`更加简单和方便，因为如果一些参数的细节改变了，它不需要改变函数调用。



#### Bind

`call`和`apply`都是一次性使用的方法 -- 如果你调用带有`this`上下文的方法，它将含有此上下文，但是原始的函数依旧没改变。

有时候，你可能需要重复地使用方法来调用另一个对象的上下文，所以，在这种场景下你应该使用`bind`方法来创建一个显示调用`this`的全新函数。

```javasc
const braveNewWorldSummary = summary.bind(book)

braveNewWorldSummary()
```

```javasc
Output
"Brave New World was written by Aldous Huxley"
```

在这个例子中，每次你调用`braveNewWorldSummary`，它都会返回绑定它的原始`this`值。尝试绑定一个新的`this`上下文将会失败。因此，你始终可以信任绑定的函数来返回你期待的`this`值。

```javascript
const braveNewWorldSummary = summary.bind(book)

braveNewWorldSummary() // Brave New World was written by Aldous Huxley.

const book2 = {
  title: '1984',
  author: 'George Orwell',
}

braveNewWorldSummary.bind(book2)

braveNewWorldSummary() // Brave New World was written by Aldous Huxley.
```

Although this example tries to bind `braveNewWorldSummary` once again, it retains the original `this` context from the first time it was bound.









### 参考

- 原文：https://dev.to/digitalocean/understanding-this-bind-call-and-apply-in-javascript-dla
