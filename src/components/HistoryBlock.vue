<template>
  <div id="history-block">
    <div class="container-fluid">
      <div class="row block">
        <Header :title="this.title"
                :small-text-bool="false"/>
      </div>

      <div class="price-table">
        <table class="table table-striped table-hover">
          <thead>
          <tr>
            <!--            <th scope="col">#</th>-->
            <th class="history-block-row-el" scope="col">Дата</th>
            <th class="history-block-row-el" scope="col">Объем</th>
            <th class="history-block-row-el" scope="col">Кол-во миксеров</th>
            <th class="history-block-row-el" scope="col">Средняя загрузка</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in this.historyData"
              :key="item.id">
            <!--            <th scope="row">{{index+1}}</th>-->
            <th class="history-block-row-el">{{item.date}}</th>
            <td class="history-block-row-el">{{item.total_volume}}</td>
            <td class="history-block-row-el">{{item.total_mixers}}</td>
            <td class="history-block-row-el">{{Number(item.total_mean.toFixed(1))}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "./Header";
  import axios from 'axios'
  import {host} from '../variables.js'

  export default {
    name: "HistoryBlock",
    components: {Header},
    data () {
      return {
        title: 'История отгрузки бетона',
        historyData: [{
          date: '',
          total_volume: 0,
          total_mixers: 0,
          total_mean: 0
        }]
      }
    },
    async created() {
      this.historyData = await axios.get(host + '/history_volume'
      ).then(response => {
        return response.data
      }).catch(() => {})
    }
  }
</script>

<style>
  .history-block-row-el {
    text-align: center;
  }

  .table th {
    padding: .4rem;
    vertical-align: middle;
  }

  tr {
    align-items: center;
    text-align: center;
  }

  .price-table {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }


  @media (max-width: 768px) {

    .container-fluid {
      margin: 0;
      padding: 0;
    }


    .table {
      font-size: 3.5vw;
    }

    .price-table {
      width: 100%;
    }

  }

  @media (max-width: 576px) {

    small {
      font-size: 4vw;
    }

    p {
      line-height: 22px;
      margin-bottom: 25px;
      font-family: 'Rubik', sans-serif;
      color: #2b2b2b;
      font-size: 3.5vw !important;
    }

    .table {
      font-size: 4vw;
    }
  }

  @media (max-width: 400px) {
    p {
      line-height: 20px;
    }

  }

  @media (max-width: 360px) {
    ul a {
      font-size: 16px;
    }

    .table th {
      padding: .15rem;
    }

    p {
      line-height: 19px;
    }

    .container-fluid {
      margin: 0;
      padding: 0;
    }

    .table {
      font-size: 4.4vw;
    }
  }
</style>