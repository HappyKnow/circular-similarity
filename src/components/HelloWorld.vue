<template>

    <div>
        <p>默认主题样式theme:white</p>
        <div class="item">
            <div class="container">
                <circular-similarity :value="0"/>
            </div>
            <p>默认直径自适应父盒子</p>
        </div>

        <div class="item">
            <div class="container">
                <div style="display: inline-block"><circular-similarity :value="0.5"/></div>
            </div>
            <p>父盒子未设置宽高默认70px</p>
        </div>

        <div class="item">
            <div class="container">
                <circular-similarity :value="1" diameter="5vw"/>
            </div>
            <p>设置diameter大小</p>
        </div>

        <br>
        <p>蓝色主题背景theme:blue</p>
        <div class="item">
            <div class="container blue">
                <circular-similarity :value="0.25" theme="blue"/>
            </div>
            默认size:5
        </div>
        <div class="item">
            <div class="container blue">
                <circular-similarity :value="0.72" theme="blue" :size="2"/>
            </div>
            size:2
        </div>
        <div class="item">
            <div class="container blue">
                <circular-similarity :value="0.95" theme="blue" :size="7"/>
            </div>
            size:7
        </div>

        <br>
        <p>自定义-圆环大小、字体大小、字体颜色</p>
        <div class="item">
            <div class="container gray">
                <circular-similarity :value="0.8" bgColor="#ddd" shadowColor="purple"/>
            </div>
            <p>shadowColor:purple</p>
        </div>
        <div class="item">
            <div class="container gray">
                <circular-similarity :value="0.8" diameter="6vw" bgColor="#ddd" color="red"/>
            </div>
            <p>diameter:6vw,color:red</p>
        </div>
        <div class="item">
            <div class="container gray">
                <circular-similarity :value="0.8" bgColor="#ddd" diameter="100px" fontSize="16px"/>
            </div>
           <p>diameter:100px,fontSize:16px</p>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {

            }
        },
      methods:{
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .item {
        padding-left: 10px;
        padding-right: 10px;
        display: inline-block;
    }
    .item p{font-size: 12px;}
    .container {
        width: 150px;
        height: 150px;
        border: 1px solid #ddd;
        line-height: 150px;
    }
    .blue{
        background:rgb(13, 49, 117);
    }
    .gray{
        background:#ddd;
    }
</style>
