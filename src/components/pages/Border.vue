<template>
  <div>
    <Presentation :title="this.title"
                  :ima="this.presentImg"
                  :shortlist="this.shortlist"
                  imgDarkness="0.45"
    />
    <Pulse/>
    <CardGoods :table-title="this.tableTitle"
                :rows="this.rows"/>

    <StatusWeather />
    <Service id="services"/>
    <Goods :goods="this.goods" title="Другие наши продукты"/>
    <WhyWe :advantages="this.advantages"/>
  </div>
</template>

<script>
  import Presentation from "../Presentation";
  import Pulse from "../Pulse";
  import WhyWe from "../Advantages";
  import CardGoods from "../CardGoods";
  import Service from "../Service";
  import Goods from "../Goods";
  import StatusWeather from "../StatusWeather";

  import { goods, advantages, borderShortList, borderList } from '@/variables.js'

  export default {
    name: 'Border',
    components: {
      Presentation,
      Pulse,
      WhyWe,
      CardGoods,
      Service,
      Goods,
      StatusWeather
    },
    data () {
      return {
        shortlist: borderShortList,
        title: "Товарный бордюр",
        presentImg: 'borders-intro.jpg',
        advantages: advantages,
        rows: borderList.rows,
        tableTitle: borderList.tableTitle,
        goods: goods.sort(() => .5 - Math.random()).slice(0,2)
      };
    },
    created () {
      document.title = "Бордюры в Иркутске от производителя закажите с доставкой|Вымпел";
    }
  }
</script>

<style>


</style>