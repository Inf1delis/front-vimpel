<template>
  <div>
    <Presentation :title="this.title"
                  :ima="this.presentImg"
                  :shortlist="this.shortlist"
                  imgDarkness="0.45"
    />
    <Pulse />

    <HistoryBlock id="table"/>

    <StatusWeather />
    <WhyWe :advantages="this.advantages"/>
  </div>
</template>

<script>
  import StatusWeather from "../StatusWeather";
  import WhyWe from "../Advantages";
  import Pulse from "../Pulse";
  import Presentation from "../Presentation";

  import { advantages, shortList } from '@/variables.js'
  import HistoryBlock from "../HistoryBlock";

  export default {
    name: "History",
    components: {HistoryBlock, Presentation, Pulse, WhyWe, StatusWeather},
    data () {
      return {
        title: "Бетон в Иркутской области",
        presentImg: 'Presentation1.jpeg',
        advantages: advantages,
        shortlist: shortList
      }
    }
  }
</script>

<style>

</style>