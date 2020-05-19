<template>
  <div>
    <Presentation :title="this.title"
                  :ima="this.presentImg"
                  :shortlist="this.shortlist"
                  imgDarkness="0.45"
    />
    <Pulse/>
    <PriceTable :table-title="this.tableTitle"
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
  import PriceTable from "../PriceTable";
  import Service from "../Service";
  import Goods from "../Goods";
  import StatusWeather from "../StatusWeather";
  // const Presentation = () => import('../Presentation.vue')
  // const Goods = () => import('../Goods.vue')
  // const Pulse = () => import('../Pulse.vue')
  // const WhyWe = () => import('../Advantages.vue')
  // const PriceTable = () => import('../PriceTable.vue')
  // const Service = () => import('../Service.vue')
  // const StatusWeather = () => import('../StatusWeather.vue')

  import { goods, advantages, betonShortList, betonTable } from '@/variables.js'

export default {
  name: 'Beton',
  components: {
    Presentation,
    Pulse,
    WhyWe,
    PriceTable,
    Service,
    Goods,
    StatusWeather
  },
  data () {
    return {
      shortlist: betonShortList,
      title: "Бетон в Иркутской области",
      presentImg: 'Presentation1.jpeg',
      advantages: advantages,
      rows: betonTable.rows,
      tableTitle: betonTable.tableTitle,
      goods: goods.sort(() => .5 - Math.random()).slice(0,2)
    };
  },
  created () {
    document.title = "Бетон в Иркутске от производителя закажите с доставкой|Вымпел";
  }
}
</script>

<style>


</style>