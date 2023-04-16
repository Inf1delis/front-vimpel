<template>
  <div class="col-12 presentation" id="home" :style="
     ' background: linear-gradient( rgba(0, 0, 0,'+ this.imgDarkness +'), rgba(0, 0, 0, '+ this.imgDarkness +') ), url(' + require('@/assets/img/' + this.ima) + ');' +
     ' background-size: cover;' +
     ' background-position: top;' +
     ' z-index: 998;' +
     ' text-align: left;' +
     ' padding: 0;'
">
    <div class="row greet" style="justify-content: center;">
      <div class="col-12">
        <h1>
          Бетон <br>Иркутск
        </h1>
      </div>
      <br>
      <div class="col-12" style="margin-bottom: 2em">
        <h3>{{this.title}}</h3>
      </div>

      <div class=" col-md-4 col-sm-8 greet-good">
        <div class="nav nav-stacked mobile-navbar slide-selection" v-for="short in this.shortlist" v-bind:key="short.id">
          • {{short}}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Presentation",
    props: {
      ima: {
        type: String,
        required: true
      },
      imgDarkness: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      shortlist: {
        type: Array,
        required: true
      }
    }
  }
</script>

<!--<style scoped>-->
<!--  h1 {-->
<!--    font-size: 5em;-->
<!--  }-->
<!--</style>-->

<style>
  .col-12 {
    padding-right: 15px !important;
    padding-left: 15px !important;
  }
  .presentation {
    height: 100vh;

  }
  .greet {
    position: relative;
    top: 25%;
    color: white;
    justify-content: left !important;
    margin-left: 10vh;
  }
  .greet-good {
    margin-left: 11vh;
    font-size: 20px;
  }



  @media (max-width: 1092px) {
    .nav-fix {
      display: contents;
    }

    .nav-mobile {
      display: block;
    }

    .nav-desktop {
      display: none;
    }

    .greet, .greet-good {
      margin-left: 0;
    }
  }


  @media (max-width: 991px) {
    .presentation {
      height: 100vh;
      margin-top: 0;
    }

  }


</style>