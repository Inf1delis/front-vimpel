<template>
  <div>
    <Presentation :title="this.title"
                  :ima="this.presentImg"
                  :shortlist="this.shortlist"
                  imgDarkness="0.55"
    />
    <Pulse/>

    <Goods :goods="this.goods" />
    <StatusWeather />
    <AboutCompany :aboutImg="this.aboutImg"/>
    <WhyWe :advantages="this.advantages"/>
  </div>
</template>

<script>
  import Presentation from "../Presentation";
  import Goods from "../Goods";
  import Pulse from "../Pulse";
  import AboutCompany from "../AboutCompany";
  import WhyWe from "../Advantages";
  import StatusWeather from "../Today";

  import { goods, advantages, shortList } from '@/variables.js'


export default {
  name: 'Home',
  components: {
    StatusWeather,
    Presentation,
    Pulse,
    AboutCompany,
    WhyWe,
    Goods
  },
  data () {
    return {
      shortlist: shortList,
      title: "Презентация продуктов",
      presentImg: 'greet-index2.jpg',
      goods: goods,
      aboutImg: 'about.jpeg',
      advantages: advantages
    };
  },
  created () {
    document.title = "Строительные материалы в Иркутске от производителя с доставкой|Вымпел";
  }
}
</script>

<style scoped>

</style>
