<template>
  <div>
    <Presentation :title="this.title"
                  :ima="this.presentImg"
                  :shortlist="this.shortlist"
                  imgDarkness="0.45"
    />
    <Pulse/>
<!--    <CardGoods :table-title="this.tableTitle"-->
<!--                :rows="this.rows"/>-->
    <PriceTable :table-title="this.tableTitle"
                :rows="this.rows"
                :columns="this.columns"
                :table_columns="this.table_columns"
                :show-button="false"/>

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
  // import CardGoods from "../CardGoods";
  import PriceTable from "../PriceTable";
  import Service from "../Service";
  import Goods from "../Goods";
  import StatusWeather from "../Today";

  import { goods, advantages, borderShortList, fbsTable } from '@/variables.js'

  export default {
    name: 'FBS',
    components: {
      Presentation,
      Pulse,
      WhyWe,
      // CardGoods,
      PriceTable,
      Service,
      Goods,
      StatusWeather
    },
    data () {
      return {
        shortlist: borderShortList,
        title: "Фундаментные блоки",
        presentImg: 'Fundament_lent_0.jpg',
        advantages: advantages,
        rows: fbsTable.rows,
        columns: fbsTable.columns,
        tableTitle: fbsTable.tableTitle,
        table_columns: fbsTable.table_columns,
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