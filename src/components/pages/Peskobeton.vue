<template>
  <div>
    <Presentation :title="this.title"
                  :ima="this.presentImg"
                  :shortlist="this.shortlist"
                  imgDarkness="0.65"
    />
    <Pulse/>
    <PriceTable :table-title="this.tableTitle"
                :rows="this.rows"
                :columns="this.columns"
                :slice_number="1"/>

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
  import StatusWeather from "../Today";

  import { goods, advantages, peskoShortList, peskoTable } from '@/variables.js'

  export default {
    name: 'Peskobeton',
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
        shortlist: peskoShortList,
        title: "Пескобетон в Иркутске",
        presentImg: 'pesko-greet.jpg',
        advantages: advantages,
        rows: peskoTable.rows,
        columns: peskoTable.columns,
        tableTitle: peskoTable.tableTitle,
        goods: goods.sort(() => .5 - Math.random()).slice(0,2)
      };
    },
    created () {
      document.title = "Пескобетон в Иркутске от производителя закажите с доставкой|Вымпел";
    }
  }
</script>

<style>


</style>