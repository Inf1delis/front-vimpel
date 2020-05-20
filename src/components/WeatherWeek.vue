<template>
  <div class="weather-card-week">
    <div class="weather-card-day weather-mobile">
      <p>День</p>
      <p>Дата</p>
      <p>Погода</p>
      <p>Днем</p>
      <p>Ночью</p>
    </div>
    <div class="weather-card-day" v-for="item in this.weather" :key="item.id">
      <p>{{item.weekday}}</p>
      <small>{{item.date}}</small>
      <img :src="getImg(item.condition_img)"/>
      <p>{{item.day_temp}}°</p>
      <small>{{item.night_temp}}°</small>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import {host} from "../variables.js";

  export default {
    name: "WeatherWeek",
    data() {
      return {
        weather: []
      }
    },
    methods: {
      getImg(img_name) {
        return ('' + require('@/assets/yandex_weather_icons/' + img_name))
      }
    },
    async created() {
      this.weather = await axios.get(host + '/today_weather')
          .then((response) => {
            return response.data
          })
          .catch(() => { return null })
    }
  }
</script>

<style lang="scss">
  .weather-card-week {
    display: grid;
    grid-template-columns: 14% 14% 14% 14% 14% 14% 14%;
    justify-content: center;
    background-color: rgba(0,0,0,.05);
    text-align: center;
    height: 72%;

    .weather-mobile {
      display: none !important;
    }

    .weather-card-day {
      display: grid;
      grid-template-rows: 12% 15% 25% 10% 10%;
      padding-top: 1em;
      padding-bottom: 1em;

      img {
        height: 3em;
        margin-right: auto;
        margin-left: auto;
      }
    }

    @media (max-width: 576px) {
      grid-template-columns: 100%;
      grid-template-rows: 14% 14% 14% 14% 14% 14% 14%;

      .weather-mobile {
        display: grid !important;
        border-bottom: 1px black solid;

        p {
          font-weight: 800;
        }
      }

      .weather-card-day {
        display: grid;
        grid-template-rows: 100%;
        grid-template-columns: 20% 20% 20% 20% 20%;
        vertical-align: center;
        align-items: center;

        p {
          margin: 0;
        }

        padding-top: 0;
        padding-bottom: 0;

        img {
          height: 3em;
          margin-right: auto;
          margin-left: auto;
        }
      }
    }
  }
</style>