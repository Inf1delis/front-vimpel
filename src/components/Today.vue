<template>
  <div class="status-weather-block">
<!--    <div class="row block today-status">-->
<!--      <Header title="За сегодня мы:"-->
<!--              :small-text-bool="true"-->
<!--              small-text="Данные обновляются каждый час"/>-->
<!--      <div class="col-md-5 col-12 today-status-card">-->
<!--        <TodayStatus />-->
<!--      </div>-->
<!--    </div>-->
    <div class="row block today-status">
      <Header title="Погодные условия:"
              :small-text-bool="true"
              small-text="Для заливки бетона следует обратить внимание на погоду"/>
      <div class="col-md-5 col-12 today-status-card" style="margin-top: auto; margin-bottom: auto; height: 72%;">
        <WeatherWeek />
      </div>
    </div>
  </div>
</template>

<script>
  // import Header from "./Header";
  // import TodayStatus from "./TodayStatus";
  // import Weather from "./Weather";
  const Header = () => import('./Header.vue')
//  const TodayStatus = () => import('./Status.vue')
  const WeatherWeek = () => import('./WeatherWeek.vue')

  export default {
    name: "StatusWeather",
    components: {
      WeatherWeek,
//      TodayStatus,
      Header
    }
  }
</script>

<style>
  .status-weather-block {
    display: grid;
    grid-template-columns: 100%;

  }

  .today-status-card {
    width: 100% !important;
    max-width: 95% !important;
    flex: unset;
    margin-bottom: 2em;
    padding-top: 1em !important;
  }

  @media (max-width: 1024px) {
    .status-weather-block {
      display: block;
      margin-bottom: 2vh;
    }

    .block {
      margin-top: 5vh !important;
    }
  }

  @media (max-width: 576px) {
    .today-status-card {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
  }

</style>