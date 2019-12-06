<template>
  <div class="similarity" ref="similarity">
    <div class="circle" :style="circleData.circleStyle">
      <div class="obtuse_left" :style="circleData.clipObtuseStyle+circleData.shadowColor" v-if="percent>50">
        <div class="obtuse_right" :style="circleData.clipObtuseStyle+'background:linear-gradient(-'+rotateAngle+'deg,rgb(255,172,0) 20%, rgb(255,0,0));transform:rotate('+rotateAngle+'deg);'"></div>
      </div>
      <div v-else>
        <div class="obtuse_left" :style="circleData.clipObtuseStyle+circleData.shadowColor"></div>
        <div class="acute_left" :style="circleData.clipAcuteStyle+circleData.shadowColor">
          <div class="acute_right" :style="circleData.clipAcuteStyle+'transform:rotate('+rotateAngle+'deg);'"></div>
        </div>
      </div>
      <div class="circle_text" :style="circleData.textStyle">{{percent}}%</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'circular-similarity',
  props:{
    value:{
      type:Number,
      default:0,
      validator: function (value) {
        return value >= 0 && value <=1;
      }
    },
    diameter:{
      type:String
    },
    fontSize:{
      type:String
    },
    bgColor:{
      type:String,
    },
    shadowColor:{
      type:String,
    },
    color:{
      type:String,
    },
    size:{
      type:Number,
      default:5,
      validator: function (value) {
        return value >= 1 && value <=7;
      }
    },
    theme:{
      type:String,
      default:'white'
    },
  },
  created:function(){

  },
  data() {
    return{
      width:'',
      height:'',
      circleSize:'70px'
    }
  },
  computed:{
    percent:function () {
      return this.value>=0&&this.value<=1?parseInt(this.value*100):0;
    },
    rotateAngle:function () {
      let auxiliaryAngle=(100-this.percent)*3.6;
      return auxiliaryAngle>=180?(auxiliaryAngle-180):auxiliaryAngle;
    },
    circleData:function () {
      let theme={
        white:{shadowColor:'#EEE',bgColor:'#FFF',color:'#333'},
        blue:{shadowColor:'#33bbff',bgColor:'rgb(13, 49, 117)',color:'#FFF'}
      };
      let shadowColor=this.shadowColor?this.shadowColor:theme[this.theme]?theme[this.theme].shadowColor:theme.white.shadowColor;
      let bgColor=this.bgColor?this.bgColor:theme[this.theme]?theme[this.theme].bgColor:theme.white.bgColor;
      let color=this.color?this.color:theme[this.theme]?theme[this.theme].color:theme.white.color;

      if(this.height&&this.width){
        this.circleSize=parseFloat(this.height.substring(0,this.height.length-2))>parseFloat(this.height.substring(0,this.width.length-2))?this.width:this.height;
      }
      if(this.diameter){
        this.circleSize=this.diameter;
      }
      let lineSize = this.size>7?7:this.size<1?1:this.size;
      return{
        clipObtuseStyle:'clip: rect(0,auto,auto,calc('+this.circleSize+' / 2));',
        clipAcuteStyle:'clip: rect(0,calc('+this.circleSize+' / 2),auto,0);',
        textStyle:'width:calc((1 - 0.02 * '+lineSize+') * '+this.circleSize+');height:calc((1 - 0.02 * '+lineSize+') * '+this.circleSize+');line-height:calc(( 1 - 0.02 * '+lineSize+') * '+this.circleSize+');background-color:'+bgColor+';color:'+color+';font-size:'+(this.fontSize?this.fontSize:'calc('+this.circleSize+' / 3.5)')+';',
        circleStyle:'width:'+this.circleSize+';height:'+this.circleSize+';padding-top:calc('+this.circleSize+' * 0.02 * '+lineSize+'/2 );',
        shadowColor:'background-color:'+shadowColor+';',
      }
    }
  },
  methods: {
    resize:function () {
      this.width = window.getComputedStyle(this.$refs.similarity.parentElement).width;
      this.height = window.getComputedStyle(this.$refs.similarity.parentElement).height;
    }
  },
  mounted:function () {
    let _this = this;
    _this.width = window.getComputedStyle(_this.$refs.similarity.parentElement).width;
    _this.height = window.getComputedStyle(_this.$refs.similarity.parentElement).height;
    window.addEventListener('resize',_this.resize,false);
  },
  //注销window.onresize事件
  destroyed(){
    window.removeEventListener('resize',this.resize,false)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .similarity{
    display: inline-block;
  }
  .circle{
    width: 3.5vw;
    height: 3.5vw;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: .15vw;
    text-align: center;
    background: linear-gradient(0deg,rgb(255,168,0), rgb(255,240,0));
    border-radius: 50%;
    position: relative;
    .obtuse_left , .acute_left , .obtuse_right , .acute_right{ width:100%; height:100%; border-radius:50%; position:absolute; left:0; top:0;}
    .obtuse_left , .acute_left{ background-color:#eee;}
    .obtuse_left{
      /*box-shadow:0 0 2px 0px #ffaa02 inset;*/
    }
    .obtuse_right{ background: linear-gradient(360deg,#fbc604, #fb9204);}
    .acute_right{ background: linear-gradient(to bottom,#e7f608, #fbc604);}
    .obtuse_left , .obtuse_right{clip: rect(0,auto,auto,1.75vw);}
    .acute_left , .acute_right{clip: rect(0,1.75vw,auto,0);}
    .circle_text{
      width: 3.2vw;
      height: 3.2vw;
      line-height: 3.2vw;
      box-sizing: border-box;
      /* padding-left: 10px; */
      margin: 0 auto;
      color: #fff;
      font-size: .9vw;
      background-color: #012265;
      border-radius: 50%;
      position: relative;
    }

  }





</style>
