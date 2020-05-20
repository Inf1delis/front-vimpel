<template>
  <div>
    <Presentation :title="this.title"
                  :ima="this.presentImg"
                  :shortlist="this.shortlist"
                  imgDarkness="0.45"
    />
    <Pulse/>
    <f-a-q />

    <StatusWeather />
    <WhyWe :advantages="this.advantages"/>
  </div>
</template>


<script>
  import Presentation from "../Presentation";
  import Pulse from "../Pulse";
  import WhyWe from "../Advantages";
  import FAQ from "../FAQ";

  // const Presentation = () => import('../Presentation.vue')
  // const FAQ = () => import('../Goods.vue')
  // const Pulse = () => import('../Pulse.vue')
  // const WhyWe = () => import('../Advantages.vue')

  import { advantages, helpShortList } from '@/variables.js'
  import StatusWeather from "../Today";

  export default {
    name: 'Help',
    components: {
      StatusWeather,
      Presentation,
      Pulse,
      WhyWe,
      FAQ
    },
    data () {
      return {
        shortlist: helpShortList,
        title: "Помощь клиентам",
        presentImg: 'help.jpeg',
        advantages: advantages
      };
    },
    created () {
      document.title = "Помощь клиентам|Вымпел";
    }
  }
</script>


<style scoped>

</style>