<template>
  <div class="status-weather-block">
    <div class="row block today-status">
      <Header title="За сегодня мы:"
              :small-text-bool="true"
              small-text="Данные обновляются каждый час"/>
      <div class="col-md-5 col-12 today-status-card" style="padding-top: 1em !important;">
        <TodayStatus />
      </div>
    </div>
    <div class="row block today-status">
      <Header title="Погодные условия:"
              :small-text-bool="false"
              small-text="Данные обновляются каждые 30 минут"/>
      <div class="col-md-5 col-12 today-status-card" style="padding-top: 1em !important;">
        <Weather />
      </div>
    </div>
  </div>
</template>

<script>
  // import Header from "./Header";
  // import TodayStatus from "./TodayStatus";
  // import Weather from "./Weather";
  const Header = () => import('./Header.vue')
  const TodayStatus = () => import('./TodayStatus.vue')
  const Weather = () => import('./Weather.vue')

  export default {
    name: "StatusWeather",
    components: {
      Weather,
      TodayStatus,
      Header
    }
  }
</script>

<style>
  .status-weather-block {
    display: grid;
    grid-template-columns: 50% 50%;

  }

  .today-status-card {
    width: 100% !important;
    max-width: 95% !important;
    flex: unset;
    margin-bottom: 2em;
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

</style>