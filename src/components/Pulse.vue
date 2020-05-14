<template>
  <a @click="scrollToTop()">
    <i class="fas fa-angle-up pulse" title="Вернуться к началу"></i>
  </a>
</template>

<script>
  import VueScrollTo from "vue-scrollto";
  import { scroll_options } from '../config'

  export default {
    name: "Pulse",
    methods: {
      scrollToTop() {
        VueScrollTo.scrollTo('#top', scroll_options.duration, scroll_options.options)
      }
    }
  }
</script>

<style>
  .pulse {
    display: none;
    /*font-size:12px;*/
  }


  @media (max-width: 767px) {
    .pulse {
      display: block;
      background: rgb(3, 38, 71);
      border-radius: 70%;
      border: 1px solid rgb(3, 38, 71);
      z-index: 997;
      width: 50px;
      height: 50px;
      position: fixed;
      top: 85%;
      left: 87%;
      text-align: center;
      line-height: 49px;
      color: white;
    }

    .pulse i {
      color: white;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 636px) {
    .pulse {
      display: block;
      background: rgb(3, 38, 71);
      border-radius: 70%;
      border: 1px solid rgb(3, 38, 71);
      z-index: 997;
      width: 50px;
      height: 50px;
      position: fixed;
      top: 85%;
      left: 83%;
      text-align: center;
      line-height: 49px;
    }

    .pulse i {
      color: white;
      width: 100%;
      height: 100%;
    }

  }

  @media (max-width: 519px) {
    .pulse {
      display: block;
      background: rgb(3, 38, 71);
      border-radius: 71%;
      border: 1px solid rgb(3, 38, 71);
      z-index: 997;
      width: 50px;
      height: 50px;
      /* position: fixed; */
      top: 87%;
      left: 81%;
      text-align: center;
      line-height: 49px;
    }

    .pulse i {
      color: white;
      width: 100%;
      height: 100%;
    }

  }

  @media (max-width: 400px) {
    .pulse {
      display: block;
      background: rgb(3, 38, 71);
      border-radius: 70%;
      border: 1px solid rgb(3, 38, 71);
      z-index: 997;
      width: 50px;
      height: 50px;
      position: fixed;
      top: 84%;
      left: 75%;
      text-align: center;
      line-height: 49px;
    }

    .pulse i {
      color: white;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 360px) {
    .pulse {
      display: block;
      background: rgb(3, 38, 71);
      border-radius: 70%;
      border: 1px solid rgb(3, 38, 71);
      z-index: 997;
      width: 50px;
      height: 50px;
      position: fixed;
      top: 85%;
      left: 75%;
      text-align: center;
      line-height: 49px;
    }

    .pulse i {
      color: white;
      width: 100%;
      height: 100%;
    }
  }


</style>