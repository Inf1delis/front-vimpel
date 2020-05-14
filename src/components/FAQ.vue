<template>
  <div id="help1">
    <div class="row block">
      <div class="col-12 centered" style="margin-bottom: 2vh;">
        <h6>Вам нужна помощь с выбором?</h6>
        <div class="row">
          <div class="col-5"></div>
          <div class="col-2">
            <div class="decoration"></div>
          </div>
          <div class="col-5"></div>
        </div>
        <div class="row">
          <div class="col-md-3 col-1"></div>
          <div class="col-md-6 centered">
            <small>Если у вас возникли затруднения, позвоните нам! Мы поможем.
            </small>
          </div>
          <div class="col-md-3 col-1"></div>
        </div>
      </div>
    </div>

    <div class="questions" >
      <question v-for="item in this.FAQText" :key="item.id"
                :title="item.title"
                :cards="item.cards"
                :data="item.data"/>

    </div>
  </div>
</template>

<script>
  // import Question from "./Question";
  const Question = () => import('./Question.vue')
  import {FAQText} from "../variables.js"
  export default {
    name: "Help",
    data () {
      return {
        FAQText: FAQText
      }
    },
    components: {
      Question
    }
  }
</script>

<style>
  .questions {
    margin-bottom: 2em;
  }

</style>