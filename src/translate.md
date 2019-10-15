### temp



这是新添加的`this.$set(this.members, newMember.name, newMember);`。

对于这段代码，我有两点想提下。目前为止，我告诉了你`Vue.set`是怎样工作的，但是现在我使用`this.$set`，但是不要担心，这只是个别名，所以它会以完全相同的方式运行。比较酷的是你不用在你的组件中引入`Vue`。

我想说的第二点是这个函数的语法。它需要传入三个参数，第一个参数是我们要改变的`object`或`array`（案例上是`this.members`）。

第二个参数是指向我们传入第一个参数`object/array`的`property`或`key`（这里是`newMember.name`，因为我们想动态生成）。

最后是第三个参数，它是我们想要设置的值（在案例中，`newMember`）。

```javascript
         this.members [newMember.name] = newMember;
//            V               V              V
this.$set(this.members, newMember.name,   newMember);
```

(PS. My ASCII skills are not for sale )

但是数组的响应如何？

当我们在最初的状态中创建一个`array`，`Vue`将它设置为响应式，然而，当你直接通过索引赋值，当前`Vue`不能检测到。例如，我们如下操作：

```javascript
this.membersArray[3] = myNewValue;
```

然后，`Vue`不能检测到这种更改，因此它不是响应式的。请铭记于心，如果你通过`pop`,`splice`,`push`操作来更改数组，那么这些操作将触发数组的响应式，所以你可以安全地使用它们。

在必要的时候我们需要直接通过索引赋值，我们可以使用`Vue.set`。我们看下它和之前的例子有什么区别。

```javaSC
this.$set(this.membersArray, 3, myNewValue)
```

如果你想了解更多响应式原理的注意点，请移步[[link to the official documentation](https://vuejs.org/v2/guide/list.html#Caveats)](https://vuejs.org/v2/guide/list.html#Caveats)。



### Vue 3.0

在编写这篇文章时，这一切仍然可能更改，但是现在满大街都在说这些警告将不再是问题。换言之，`Vue 3.0`会让你完全忘记这些边缘的案例，除了那些可怜的灵魂，他们必须要针对某些不能完全支持新响应式系统的旧浏览器。

