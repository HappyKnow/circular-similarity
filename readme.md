# circular-similarity

基于vue的圆环相似度百分比组件

## 使用

安装
``` bash
npm install circular-similarity -S
```

全局应用组件
``` javascript
import CircularSimilarity from 'circular-similarity'
Vue.use(CircularSimilarity)
```

使用组件
``` html
 <div class="container">
    <circular-similarity :value='0.5'/>
 </div>
```

组件属性
```
value: 百分比
diameter: 直径
fontSize: 文字大小
color: 字体颜色
bgColor: 字体背景颜色
shadowColorv: 圆环底色
theme: 内置主题
```

## 效果
![image](https://raw.githubusercontent.com/HappyKnow/circular-similarity/master/screen.png)