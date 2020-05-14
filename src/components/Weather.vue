<template>
  <div class="weather-card">
    <div style="margin-left:auto; margin-right:0;">
      <img style="height: 6em;" :src="getImg(this.weather_data.condition_img)"/>
      <h2 style="text-align: center"> {{this.weather_data.temp_value}}° </h2>
      <span>Ощущается {{this.weather_data.feel_temp}}°</span>

    </div>
    <div class="weather-date">
      <h1 style="color: #1b1b1b"> {{this.weather_data.date}} </h1>
      <h3 style="color: #1b1b1b">Влажность: {{this.weather_data.term_value}}</h3>
      <h3 style="color: #1b1b1b">Ветер: {{this.weather_data.wind}} м/с</h3>
    </div>
  </div>
</template>

<script>
  // import axios from 'axios'
  // import { host } from '../variables.js'

  import axios from "axios";
  import {host} from "../variables";

  export default {
    name: "Weather",
    data () {
      return {
        weather_data: {
          'date': '-',
          'temp_value': '-',
          'condition_img': 'ясно.svg',
          'wind': '-',
          'term_value': '-%',
          'feel_temp': '-'
        }
      }
    },
    methods: {
      getImg(img_name) {
        return ('' + require('@/assets/yandex_weather_icons/' + img_name))
      }
    },
    async created() {
      this.weather_data = await axios.get(host + '/today_weather')
          .then((response) => {
            return response.data
          })
          .catch(() => { return null })
    }
  }
</script>

<style>
  .weather-date {
    /*margin-top: 1em;*/
    margin-left: 1em;
  }

  .weather-card {
    display: grid;
    grid-template-columns: 43% 57%;
  }

  @media (max-width: 576px) {
    .weather-date {
      margin-top: 1em;
      margin-left: 1em;
    }

    .weather-card {
      display: grid;
      grid-template-columns: 43% 57%;
    }
  }
</style>