<template>
  <div id="whyWe">
    <div class="row block" style="margin-bottom: 0;">
      <Header title="Почему стоит выбрать нас?"
              :small-text-bool="false"/>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 col-12 advantage centered"
             v-for="item in this.advantages"
             v-bind:key="item.id"
              style="padding: 1.8em !important;">
          <i :class="item.imgClass" aria-hidden="true"></i>
          <br>
          <h3 style="color: #2b2b2b;">{{item.title}}</h3>
<!--          <div class="advantage-img-header">-->
<!--            <i :class="item.imgClass" aria-hidden="true"></i>-->
<!--            <h2 style="color: #2b2b2b;">{{item.title}}</h2>-->
<!--          </div>-->
          <p style="font-size: 1em; ">{{item.text}}</p>
        </div>
      </div>
    </div>
    <div class="col-12 centered title" id="skeptic">
      <div class="row">
        <div class="col-md-3 col-1"></div>
        <div class="col-md-6 centered">
          <h4 style="margin-top: 1em"> Все еще скептично настроены?
            <br>
            <br>
            Предлагаем поговорить с менеджером или посетить наш завод!
            <br>
            <br>
            Мы хотим с вами работать.</h4>
        </div>
        <div class="col-md-3 col-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
  // import Header from "./Header";
  const Header = () => import('./Header.vue')

  export default {
    name: "WhyWe",
    components: {Header},
    props: {
      advantages: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style>

  .advantage {
    height: auto;
    text-align: left !important;
    padding-right: 5px;
    padding-left: 5px;
    padding: 1.8em;
    transition: all .4s;
    margin-bottom: 2em;
    box-shadow: 2px 2px 20px 2px #d4d2d282;
  }

  .advantage > i {
    /*width: 2.6em;*/
    color: rgb(3, 38, 71);
    background-color: rgb(248, 246, 246, 0.875);
    text-align: center;
    vertical-align: middle;
    border-radius: 50%;
    /*padding: .7em;*/
    font-size: 2.5em;
    margin-bottom: 3vh;
    transition: .6s;
    box-shadow: 0px 0px 2px #f1f1f1;
  }

  .advantage:hover {
    box-shadow: 2px 2px 20px 2px #f2f2f2;
  }

  .advantage > i:hover {
    /* box-shadow: 2px 2px 20px 2px #f2f2f2; */
    color: white;
    background-color: rgb(3, 38, 71);
    box-shadow: 0px 0px 0px 0px;
  }

  @media (max-width: 1024px) {
    .advantage {
      margin-bottom: 1%;
    }
  }
</style>