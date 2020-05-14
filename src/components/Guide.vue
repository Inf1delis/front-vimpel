<template>
  <div class="card card-body">
    <div class="row" style="display: block" v-for="(item, index) in this.data" :key="item.id">
      <div class="col-md-4 col-12 advantage centered faq-content">
        <img class='faq-img' :alt="item.htmlText"  :src="getImg(index+1)">
        <h1 class='card-title' style="color: #2b2b2b;">Шаг {{index+1}}</h1>
        <h3 style="color: #2b2b2b;">{{item.title}}</h3>
        <p style="font-size: 1em; " v-html="item.htmlText"></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Guide",
    props: {
      data: {
        type: Array,
        required: true,
      }
    },
    methods: {
      getImg(num) {
        console.log('' + require('@/assets/img/help/shag' + num + '.jpg'))
        return ('' + require('@/assets/img/help/shag' + num + '.jpg'))
      }
    }
  }
</script>

<style>
  .faq-content {
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    max-width: 850px;
  }

  .faq-img {
    width: inherit;
    height: inherit;
  }

  @media (max-width: 576px) {
    .faq-content h3 {
      font-size: 5.5vw;
    }
  }
</style>