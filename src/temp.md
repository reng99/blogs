## 补充

### Data and Reactivity

在一个`Vue`组件中，无论你何时创建一个`data()`功能属性，都会返回一个对象。`Vue`在组件背后做了很多事情，来使得它具有响应式。

```javascript
export default {
  data() {
   return {
     red: 'hot',
     chili: 'peppers'
   }
  }
}
```

`Vue`要做得第一件事是使用我们超帅得`RHCP(Red Hot Chili Peppers, 一个超赞的乐队)`，它遍历了`return {}`对象的属性`properties`，然后为它们创建了唯一的`getter`和`setter`。具体情况的细节已经超出了本文的范围，但是[Vue Mastery](https://www.vuemastery.com/courses/advanced-components/build-a-reactivity-system)有个很赞的视频去解析这点。

创建这些属性的目的是使你在代码中访问这些属性时（例如通过执行`this.red`或使用`this.red=hotter`进行设置时），实际上是在调用`Vue`为你创建的`getter`和`setter`。

在`SETGET`这块神奇的土地上，`Vue`连接起了`computer properties, watchers, props,data`等，从而变得`响应式`。以非常简单的方式，它被称为一个函数，该函数在每次`setter`改变时更新整个工作。



### 陷阱

酷极了！这就是我们喜欢`Vue`的原因，它具有响应式和强大的幕后功能。但是也有一些阴暗面需要我们探讨。

在我们开始之前，我们更改下`data`数据看发生什么。

```javascript
data() {
    return {
        members: {}
    }
}
```

好吧，到目前未知没什么看头，我们在`data`中有一个`member`属性，用来添加乐队成员的信息。现在，为了举例，我们添加一个方法，并假装从远程`http`请求中拉取一些信息，那将返回一个乐队信息的`JSON`对象。

```javasc
data() {
  return {
    members: {}
  }
},
methods: {
  getMembers() {
   const newMember = {
     name: 'Flea',
     instrument: 'Bass',
     baeLevel: 'A++'
   }; // Some magical method that gives us data got us this sweet info

   // ...
  }
}
```

嗯。好吧，我们先停停然后思考下这个例子。如何将`newMember`对象添加到当前的`member`属性中？这有许多方法可以解决当前的难题。

也许你会想，我们可以将`member`转换成一个数组，然后将它`push`进去。这可行，但是这是在作弊，因为它破坏了我并不是在输入时CAREFULLY 构造的例子。

在这种情况下，我们`member`是一个`object`。好吧，简单，你会说，我们在`member`上添加一新的属性，这样它还是一个`object`。实际上，我们在`member`上添加个`name`属性。

```javasc
getMembers() {
   const newMember = {
     name: 'Flea',
     instrument: 'Bass',
     baeLevel: 'A++' // Totally important property that we will never use
   }; // Some magical method that gives us data got us this sweet info

   this.members[newMember.name] = newMember;
  }
```

Lok'tar Ogar!（不胜则亡）

![giphy](https://i.giphy.com/media/Cs5PBOnbE7MU8/giphy.gif)



https://dev.to/marinamosti/so-what-actually-is-vue-set-5afi
