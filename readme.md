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
value: 百分比（必填 范围0-1）
diameter: 直径（选填 需要加单位px、vw等,默认自适应父盒子，父盒子未设置宽高默认为70px）
fontSize: 文字大小（选填 需要加单位px、vw等,默认为直径/3.5）
size:圆环尺寸（选填 范围1-7,默认5）
color: 字体颜色（选填）
bgColor: 字体背景颜色（选填）
shadowColor: 圆环底色（选填）
theme: 内置主题（选填 white/blue 默认white）
```

## 效果
![image](https://raw.githubusercontent.com/HappyKnow/circular-similarity/master/screen.png)