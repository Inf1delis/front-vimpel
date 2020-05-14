<template>
  <div>
    <div class="row block">
      <Header :title="this.title"
              :small-text-bool="false"/>
    </div>

    <div class="card card-body" style="padding: 0;">
      <div class="row products" style="" >

        <div class="col-md-4 col-12 advantage centered faq-content"
             v-for="item in this.goods"
             v-bind:key="item.id"
             :style="
                'background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(' +
                          require('@/assets/img/products/' + item.img) + '); ' +
                'background-size: cover; ' +
                'color: white !important; '
             "
             @click="toPage(item.route)"
        >
          <h1 class='card-title' style="color: white">{{item.name}}</h1>
          <h3 style="color: white">от {{item.price}} руб/м³</h3>
          <p style="color: white">{{item.text1}} <br><br> {{item.text2}}
          </p>
          <div class="contact centered">
            <button type="button" class="button">Перейти к товару
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  // import Header from "./Header";
  const Header = () => import('./Header.vue')

  export default {
    name: "Range",
    components: {Header},
    props: {
      goods: {
        type: Array,
        required: true
      },
      title: {
        type: String,
        default: 'Производимые Продукты'
      }
    },
    methods: {
      toPage (page) {
        let href = 'top'
        this.$parent.$parent.toPageAncorn(page, href)
      },
    }
  }
</script>

<style>

  @media (max-width: 1024px) {
    .products {
      display: block;
    }
  }

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

  .card-title {
    font-size: 6vh;
    margin-bottom: 0;
  }

  @media (max-width: 576px) {
    .card-title {
      font-size: 10vw;
    }
  }


</style>