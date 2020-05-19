<template>
  <div>
    <div class="status-card">
      <div class="status-column">
        <h3 style="color: #1b1b1b">Отгрузили</h3>
        <h2 style="color: #1b1b1b">
          <span style="color: #085b08">{{this.status_data.volume}}</span> м³
        </h2>
      </div>

      <div class="status-column">
        <h3 style="color: #1b1b1b">Загрузили миксеров</h3>
        <h2 style="color: #1b1b1b">
          <span style="color: #085b08">{{this.status_data.mixer_cnt}}</span>
        </h2>
      </div>

      <div class="status-column" style="border: 0;">
        <h3 style="color: #1b1b1b">Средняя загрузка</h3>
        <h2 style="color: #1b1b1b">
          <span style="color: #085b08">{{ Number((this.status_data.mean).toFixed(1))}}</span> м³
        </h2>
      </div>
    </div>
<!--    <div style="text-align: center;"-->
<!--         @click="toPage('/history_beton', '#table')">-->
<!--      <button type="button"-->
<!--              class="btn btn-outline-secondary"-->
<!--      >История работы</button>-->
<!--    </div>-->
  </div>
</template>

<script>
  // import { BContainer, BRow, BCol } from 'bootstrap-vue'
  import { host } from '../variables.js'
  import axios from 'axios'

  export default {
    name: "TodayStatus",
    data () {
      return {
        status_data: {
          volume: 0,
          mixer_cnt: 0,
          mean: 0
        }
      }
    },
    methods: {
      toPage(page, href) {
        this.$parent.$parent.$parent.toPageAncorn(page, href)
      }
    },
    async created() {
      this.status_data = await axios.get(host + '/today_volume')
                        .then((response) => {
                          return response.data
                        })
                        .catch(() => { return null })
    }
  }
</script>

<style>


  .btn-outline-secondary {
    max-width: 600px;
    /*padding: 0 !important;*/
    margin-top: 1em;
  }

  .status-card {
    display: grid;
    grid-template-columns: 33% 33% 33%;
  }

  .status-column {
    display: grid;
    grid-template-rows: 50% 50%;
    grid-gap: 1em;
    text-align: center;
    border-right: 2px solid #1b1b1b;
  }

  @media (max-width: 768px) {
    .btn-outline-secondary {
      width: 100%;
      padding: 0 !important;
    }

    .status-card {
      display: grid;
      grid-template-rows: auto auto auto;
      grid-template-columns: 100%;
      margin-bottom: 1em;
    }

    .status-column {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 100%;
      grid-gap: 0.2em;
      text-align: left;
      border: 0;
    }

    .status-column h2 {
      text-align: center;
      margin-top: auto;
      margin-bottom: auto !important;
    }
  }

  @media (max-width: 576px) {
    .status-column h2 {
      font-size: 1.8rem;
    }
  }
</style>