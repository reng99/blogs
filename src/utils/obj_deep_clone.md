## 实现对象的深拷贝

对象是**引用类型**，如果是单纯赋值的话，只是将指针复制过来而已，两者的指针还是指向同一个地方。如下：

```javascript
const obj = {
    name: 'jia',
    age: 17
}
const obj2 = obj;
obj.name = 'jia ming';
console.log(obj2); // {name: "jia ming", age: 10}
```

实现对象的深拷贝，有下面两种实现方法：

### 使用JSON字符串

```javascript
const obj = {
    name: 'jia',
    age: 17
}
const obj2 = JSON.parse(JSON.stringify(obj));
obj.name = 'jia ming';
console.log(obj2); // {name: "jia", age: 17}
```

### 使用ES6对象扩张运算符（...）

```javascript
const obj = {
    name: 'jia',
    age: 17
}
const obj2 = {
    ...obj
}
obj.name = 'jia ming';
console.log(obj2); // {name: "jia", age: 17}
```

题主认为上面的两种方法都是**先把引用类型转换成基本类型，之后再切回引用类型**的原理。