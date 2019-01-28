javascript中写好条件语句的五个技巧

![banner](https://scotch-res.cloudinary.com/image/upload/w_900,q_auto:good,f_auto/v1536994013/udpahiv8rqlemvz0x3wc.png)

当用JavaScript来工作的时候，我们需要处理很多的条件判断，这里有五个小技巧能帮助你写出更好/更清晰的条件语句。

**1. 多重判断中使用Array.includes**

我们看下下面这个例子：

```javascript
// condition
function test(fruit) {
  if (fruit == 'apple' || fruit == 'strawberry') {
    console.log('red');
  }
}
```

乍一看，上面的例子看起来还可以哦。但是，如果添加更多的红色的水果，比如`cherry`和`cranberries`，那会怎样呢？你会使用更多的`||`来扩展条件语句吗？

我们可以通过`Array.includes`[(Array.includes)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)来重写上面的条件语句。如下：

```javascript
function test(fruit) {
  // extract conditions to array
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

  if (redFruits.includes(fruit)) {
    console.log('red');
  }
}
```

我们提取`red fruits`（条件判断）到一个数组中。通过这样做，代码看起来更加整洁了。

**2. 少嵌套，早返回**

我们扩展上面的例子，让它包含多两个条件：

- 如果没有传入fruit参数，抛出错误
- 接受quantity参数并在其超出10打印出来

```javascript
function test(fruit, quantity) {
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

  // condition 1: fruit must has value
  if (fruit) {
    // condition 2: must be red
    if (redFruits.includes(fruit)) {
      console.log('red');

      // condition 3: must be big quantity
      if (quantity > 10) {
        console.log('big quantity');
      }
    }
  } else {
    throw new Error('No fruit!');
  }
}

// test results
test(null); // error: No fruits
test('apple'); // print: red
test('apple', 20); // print: red, big quantity
```

看下上面的代码，我们捋下：

- 1个if/else语句筛出无效的条件语句
- 3层嵌套的语句（条件1，2和3）

我个人遵守的准则是**发现无效的条件时，及早return**。

```javascript
/_ return early when invalid conditions found _/

function test(fruit, quantity) {
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

  // condition 1: throw error early
  if (!fruit) throw new Error('No fruit!');

  // condition 2: must be red
  if (redFruits.includes(fruit)) {
    console.log('red');

    // condition 3: must be big quantity
    if (quantity > 10) {
      console.log('big quantity');
    }
  }
}
```

通过及早return，我们减少了一层嵌套语句。这种编码风格很赞，尤其是当你有很长的if语句（可以想象下你需要滚动很长才知道有else语句，一点都不酷）。

（针对上面例子）我们可以通过倒置判断条件和及早return来进一步减少if嵌套。看下面我们是怎么处理条件2的：

```javascript
/_ return early when invalid conditions found _/

function test(fruit, quantity) {
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

  if (!fruit) throw new Error('No fruit!'); // condition 1: throw error early
  if (!redFruits.includes(fruit)) return; // condition 2: stop when fruit is not red

  console.log('red');

  // condition 3: must be big quantity
  if (quantity > 10) {
    console.log('big quantity');
  }
}
```

通过倒置条件2，我们避免了嵌套语句。这个技巧很有用：当我们处理很长的逻辑，并且希望能够在条件不满足时能够停下来进行处理。

而且，这样做并不难。问下自己，这个版本（没有条件嵌套）是不是比之前版本（两层嵌套）更好/可读性更高呢？

但是，对于我来说，我会保留先前的版本（包含两层嵌套）。因为：

- 代码较短且直接，嵌套if更加清晰
- 倒置判断条件可能增加思考负担（增加认知负荷）

因此，应当**尽量减少嵌套和及早return，但是不要过度**。如果你感兴趣，你可以看下面的一篇文章和StackOverflow上的讨论，进一步了解：

- [Avoid Else, Return Early](http://blog.timoxley.com/post/47041269194/avoid-else-return-early) by Tim Oxley
- [StackOverflow discussion](https://softwareengineering.stackexchange.com/questions/18454/should-i-return-from-a-function-early-or-use-an-if-statement) on if/else coding style

**3. 使用默认参数和解构**

我猜你对下面的代码有些熟悉，在JavaScript中我们总需要检查`null/undefined`值和指定默认值。

```javascript
function test(fruit, quantity) {
  if (!fruit) return;
  const q = quantity || 1; // if quantity not provided, default to one

  console.log(`We have ${q} ${fruit}!`);
}

//test results
test('banana'); // We have 1 banana!
test('apple', 2); // We have 2 apple!
```

事实上，我们可以通过声明默认的函数参数来消除变量`q`。

```javascript
function test(fruit, quantity = 1) { // if quantity not provided, default to one
  if (!fruit) return;
  console.log(`We have ${quantity} ${fruit}!`);
}

//test results
test('banana'); // We have 1 banana!
test('apple', 2); // We have 2 apple!
```

很容易且很直观！注意，每个声明都有自己[默认参数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)。举个例子，我们也可以给`fruit`设置一个默认值：`function test(fruit = 'unknown', quantity = 1)`。

如果我们的`fruit`是一个对象会怎样呢？我们能分配一个默认参数吗？

```javascript
function test(fruit) { 
  // printing fruit name if value provided
  if (fruit && fruit.name)  {
    console.log (fruit.name);
  } else {
    console.log('unknown');
  }
}

//test results
test(undefined); // unknown
test({ }); // unknown
test({ name: 'apple', color: 'red' }); // apple
```

上面的例子中，当存在fruit name的时候我们打印出水果名，否则打印出unknown。我们可以通过设置默认参数和解构来避免判断条件`fruit && fruit.name`。

```javascript
// destructing - get name property only
// assign default empty object {}
function test({name} = {}) {
  console.log (name || 'unknown');
}

//test results
test(undefined); // unknown
test({ }); // unknown
test({ name: 'apple', color: 'red' }); // apple
```

由于我们只需要`name`属性，我们可以使用`{name}`来解构参数，然后我们就可以使用`name`代替`fruit.name`了。

我们也声明了一个空对象`{}`作为默认值。如果我们没有这么做，你会得到一个无法对undefined或null解构的错误。因为在undefined中没有`name`属性。

如果你不介意使用第三方库，有一些方式能减少null的检查：

- 使用 [Lodash get](https://lodash.com/docs/4.17.10#get) 函数
- 脸书的开源库[idx](https://github.com/facebookincubator/idx)(配合babeljs使用)

这有一个使用Lodash的例子：

```javascript
// Include lodash library, you will get _
function test(fruit) {
  console.log(__.get(fruit, 'name', 'unknown'); // get property name, if not available, assign default value 'unknown'
}

//test results
test(undefined); // unknown
test({ }); // unknown
test({ name: 'apple', color: 'red' }); // apple
```

你可以在[JSBIN这里](https://jsbin.com/bopovajiye/edit?js,console)运行demo代码，如果你是函数式编程的粉丝，你可以选择[Lodash fp](https://github.com/lodash/lodash/wiki/FP-Guide)，Lodash的函数式版本（方法变更为`get`或者`getOr`）。


**4. 倾向对象遍历而不是switch语句**

看下下面的代码，我们想基于color来打印水果。

```javascript
function test(color) {
  // use switch case to find fruits in color
  switch (color) {
    case 'red':
      return ['apple', 'strawberry'];
    case 'yellow':
      return ['banana', 'pineapple'];
    case 'purple':
      return ['grape', 'plum'];
    default:
      return [];
  }
}

//test results
test(null); // []
test('yellow'); // ['banana', 'pineapple']
```

上面的代码看似没问题，但是多少有些冗余。用遍历对象（object literal）来实现相同的结果，语法看起来更加简洁：

```javascript
// use object literal to find fruits in color
  const fruitColor = {
    red: ['apple', 'strawberry'],
    yellow: ['banana', 'pineapple'],
    purple: ['grape', 'plum']
  };

function test(color) {
  return fruitColor[color] || [];
}
```

或者，你可以使用[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)来实现相同的结果：

```javascript
// use Map to find fruits in color
  const fruitColor = new Map()
    .set('red', ['apple', 'strawberry'])
    .set('yellow', ['banana', 'pineapple'])
    .set('purple', ['grape', 'plum']);

function test(color) {
  return fruitColor.get(color) || [];
}
```

[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)是ES2015规范之后实现的对象类型，允许你存储键值对。

那么，我们应该禁止使用switch语句吗？不要限制自己做这个。个人来说，我会尽可能使用对象遍历，但是不会严格遵守它，而是使用对当前场景更有意义的方式。

Todd Motto 有篇对switch语句和遍历对象深层次对比的文章，你可以戳[这里](https://toddmotto.com/deprecating-the-switch-statement-for-object-literals/)来查看。

**TL;DL;重构语法**

针对上面的例子，我们可以通过`Array.filter`重构下代码来实现相同的结果。

```javascript
const fruits = [
    { name: 'apple', color: 'red' }, 
    { name: 'strawberry', color: 'red' }, 
    { name: 'banana', color: 'yellow' }, 
    { name: 'pineapple', color: 'yellow' }, 
    { name: 'grape', color: 'purple' }, 
    { name: 'plum', color: 'purple' }
];

function test(color) {
  // use Array filter to find fruits in color

  return fruits.filter(f => f.color == color);
}
```

有着不止一种方法能够实现相同的结果，我们以上展示了4种。编码是快乐的！

**5. 对 全部/部分判断 使用Array.every/Array.some**

最后一个技巧是使用Javascript的内置数组函数来减少代码的行数。看下下面的代码，我们想查看所有的水果是否是红色：

```javascript
const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'grape', color: 'purple' }
  ];

function test() {
  let isAllRed = true;

  // condition: all fruits must be red
  for (let f of fruits) {
    if (!isAllRed) break;
    isAllRed = (f.color == 'red');
  }

  console.log(isAllRed); // false
}
```

上面的代码太长！我们使用`Array.every`来减少代码行数：

```javascript
const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'grape', color: 'purple' }
  ];

function test() {
  // condition: short way, all fruits must be red
  const isAllRed = fruits.every(f => f.color == 'red');

  console.log(isAllRed); // false
}
```

更清晰了，对吧？类似的，我们想测试是否有水果是红色的，我们可以使用`Array.some`来实现。

```javascript
const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'grape', color: 'purple' }
];

function test() {
  // condition: if any fruit is red
  const isAnyRed = fruits.some(f => f.color == 'red');

  console.log(isAnyRed); // true
}
```

**总结**

让我们一起写出可读性更高的代码。我希望你能从这篇文章学到些新东西。

这是全部内容。祝你编码愉快！

> 原文 https://scotch.io/bar-talk/5-tips-to-write-better-conditionals-in-javascript