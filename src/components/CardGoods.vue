<template>
  <div class="container-fluid">

    <div class="row block">
      <Header :title="this.tableTitle"
              small-text="Цены на нашем сайте всегда актульны и реальны."
              :small-text-bool="true"/>
    </div>


    <div class="container-fluid">
      <div class="row">

        <div class="col-md-4 col-12 advantage centered" v-for="item in this.rows" :key="item.id">
          <div>
            <img :src="require('@/assets/img/' + item.img)"
                 style="height: 100%; width: 100%"/>
          </div>
          <h2 class='' style="color: #2b2b2b; margin: 0;">{{item.name}}</h2>
          <h4 style="color: #2b2b2b;">за {{item.price}} руб/шт</h4>
          <div style="font-size: 1em; ">
            <span class="bold">РАЗМЕРЫ(СМ):  </span>{{item.size}}
            <br>
            <span class="bold">ВЕС: </span>{{item.weight}} кг
            <br>
            <span class="bold">ГОСТ:  </span>6665-91
            <br>
            <span class="bold">КЛАСС БЕТОНА: </span>М400
            <br>
            <span class="bold">ВОДОПОГЛОЩЕНИЕ: </span>не более 5%
            <br>
            МОРОЗОСТОЙКОСТЬ: F-300
            <br>
            ПОВЫШЕННАЯ МОРОУСТОЙЧИВОСТЬ
            <br>
            <br>
            Вес поддона: 1200 кг
          </div>
        </div>

        <div class="col-md-4 col-12 advantage centered">
          <!--                        <div class="col-md-4 col-12">-->
          <div>
            <img src="@/assets/img/border_custom.jpg"
                 style="height: 100%; width: 100%"/>
          </div>
          <h2 class='' style="color: #2b2b2b; margin: 0;">На заказ</h2>
          <h4 style="color: #2b2b2b;">договорная</h4>
          <div style="font-size: 1em; ">
            Наша производственный комплекс может с легкостью изготовить необходимые вам бордюры,
            используя сухой бетон и гиперпрессования прессом 600 тонн.
            <br>
            <br>
            <span class="bold">РАЗМЕРЫ(СМ):  </span>договорные
            <br>
            <span class="bold">ГОСТ:  </span>6665-91
            <br>
            <span class="bold">КЛАСС БЕТОНА: </span>М400
            <br>
            <span class="bold">ВОДОПОГЛОЩЕНИЕ: </span>не более 5%
            <br>
            МОРОЗОСТОЙКОСТЬ: F-300
            <br>
            ПОВЫШЕННАЯ МОРОУСТОЙЧИВОСТЬ
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "./Header";
  export default {
    name: "CardGoods",
    props: {
      tableTitle: {
        type: String,
        required: true
      },
      rows: {
        type: Array,
        required: true
      }
    },
    components: {Header}
  }
</script>

<style scoped>

</style>