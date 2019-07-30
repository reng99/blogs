## 处理cookie

简单罗列下前端处理cookie的一些常用操作～

```javascript
// cookie设置
// 设置新cookie
function setCookie(name, value, duration) {
    var date = new Date();
    date.setTime(date.getTime() + duration*24*60*60*1000);
    document.cookie = name + '=' + value + ';expires=' + date.toGMTString();
}

// 获取cookie
function getCookie(name) {
    var str = document.cookie;
    var arr = str.replace(/(\s)+/g, '').split(';');
    for(var i = 0; i < arr.length; i++) {
        var newArr = arr[i].split('=');
        if(newArr[0] == name) {
            return decodeURI(newArr[1]);
        }
    }
}

// 删除cookie
function removeCookie(name) {
    setCookie(name, '', 0);
}
```