<template>

    <div>
        <p>默认</p>
        <div class="item">
            <div class="container">
                <circular-similarity :value="0"/>
            </div>
            0%
        </div>

        <div class="item">
            <div class="container">
                <circular-similarity :value="0.5"/>
            </div>
            50%
        </div>

        <div class="item">
            <div class="container">
                <circular-similarity :value="1"/>
            </div>
            100%
        </div>

        <br>
        <p>蓝色主题背景</p>
        <div class="item">
            <div class="container blue">
                <circular-similarity :value="0" theme="blue"/>
            </div>
            0%
        </div>
        <div class="item">
            <div class="container blue">
                <circular-similarity :value="0.25" theme="blue"/>
            </div>
            25%
        </div>
        <div class="item">
            <div class="container blue">
                <circular-similarity :value="0.9" theme="blue"/>
            </div>
            90%
        </div>

        <br>
        <p>自定义-圆环大小、颜色、字体大小</p>
        <div class="item">
            <div class="container gray">
                <circular-similarity :value="0" diameter="5vw" fontSize="1vw" bgColor="#ddd" color="red"/>
            </div>
            0
        </div>
        <div class="item">
            <div class="container gray">
                <circular-similarity :value="0.5" diameter="5vw" fontSize="1vw" bgColor="#ddd" color="red"/>
            </div>
            50%
        </div>
        <div class="item">
            <div class="container gray">
                <circular-similarity :value="1" diameter="5vw" fontSize="1vw" bgColor="#ddd" color="red"/>
            </div>
           100%
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
