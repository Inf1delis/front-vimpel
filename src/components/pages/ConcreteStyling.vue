<template>
  <div>
    <Presentation :title="this.title"
                  :ima="this.presentImg"
                  :shortlist="this.shortlist"
                  imgDarkness="0.45"
    />
    <Pulse/>

    <Guide id="style_guide" :data="this.styleGuide"/>

    <StatusWeather />
    <Goods :goods="this.goods" title="Наши продукты"/>
    <WhyWe :advantages="this.advantages"/>
  </div>
</template>

<script>
  import Presentation from "../Presentation";
  import Pulse from "../Pulse";
  import WhyWe from "../Advantages";
  import Guide from "../Guide";
  import Goods from "../Goods";

  // const Presentation = () => import('../Presentation.vue')
  // const Goods = () => import('../Goods.vue')
  // const Pulse = () => import('../Pulse.vue')
  // const WhyWe = () => import('../Advantages.vue')
  // const Guide = () => import('../Today.vue')

  import { goods, advantages, shortList, styleGuide } from '@/variables.js'
  import StatusWeather from "../Today";

  export default {
    name: 'ConcreteStyling',
    components: {
      StatusWeather,
      Presentation,
      Pulse,
      WhyWe,
      Goods,
      Guide
    },
    data () {
      return {
        shortlist: shortList,
        title: "Культура заливки",
        presentImg: 'help.jpeg',
        advantages: advantages,
        styleGuide: styleGuide,
        goods: goods.sort(() => .5 - Math.random()).slice(0,2)
      };
    },
    created () {
      document.title = "Руководство Заливки|Вымпел";
    }
  }
</script>

<style>

</style>