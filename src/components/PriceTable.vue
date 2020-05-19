<template>
  <div id="goods">
    <div class="container-fluid">
      <div class="row block">
        <Header :title="this.tableTitle"
                small-text="Цены на нашем сайте всегда актульны и реальны."
                :small-text-bool="true"/>
      </div>

      <div class="price-table">
        <table class="table table-hover">
          <thead>
          <tr>
<!--            <th scope="col">#</th>-->
            <th scope="col">Марка</th>
            <th scope="col">Класс</th>
            <th scope="col">П2</th>
            <th scope="col">П3</th>
            <th scope="col"> </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in rows"
              :key="item.id">
<!--            <th scope="row">{{index+1}}</th>-->
            <th>{{item.name}}</th>
            <td>{{item.classification}}</td>
            <td class="price" v-for="price in item.prices.slice(0, 2)" :key="price.id">{{price}}</td>
            <th class="table-button">
              <a class="btn btn-primary" role="button" @click="openModal(item)">
                Подробнее
              </a>
            </th>
          </tr>
          </tbody>
        </table>
      </div>

      <div class="modal-window" v-if="this.modalShow" @click="close()">
          <div class="modal-window-content col-md-4 col-12 advantage centered faq-content">
            <h1 class='card-title' style="color: #2b2b2b;">{{this.modal.title}}</h1>
            <h3 style="color: #2b2b2b;">от {{this.modal.price}} руб/м³</h3>
            <p style="font-size: 1em;">
              {{this.modal.text1}}
              <br>
              <br>
              {{this.modal.text2}}
            </p>
        </div>
      </div>


      <div class="row">
<!--        <div class="btn btn-deep-orange help-button"-->
<!--             v-on:click="() => {this.$router.push({ path: '/help', hash: '#top'})}"-->
<!--        >-->
<!--          <div class="button-text">-->
<!--            Калькулятор-->
<!--          </div>-->

<!--          <div class="button-icon">-->
<!--            <i class="fas fa-external-link-alt icon-style"></i>-->
<!--          </div>-->
<!--        </div>-->

        <div class="btn btn-deep-orange help-button"
             v-on:click="() => {this.$router.push({ path: '/concrete_styling', hash: '#style_guide'})}"
             style="margin-top: 0"
        >
          <div class="button-text">
            Руководство заливки
          </div>

          <div class="button-icon">
            <i class="fas fa-external-link-alt icon-style"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import Header from "./Header";
  const Header = () => import('./Header.vue')
  export default {
    name: "PriceTable",
    components: {Header},
    props: {
      tableTitle: {
        type: String,
        required: true
      },
      rows: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        modalShow: false,
        modal: {
          title: '',
          classification: '',
          price: '',
          text1: '',
          text2: ''
        }
      };
    },
    methods: {
      openModal(itemInfo) {
        this.modal = {
          title: itemInfo.name,
          price: itemInfo.prices[0],
          text1: itemInfo.modal.text1,
          text2: itemInfo.modal.text2,
          classification: itemInfo.classification
        }
        this.modalShow = true
      },
      close() {
        this.modalShow = false
      }
    }
  }
</script>

<style>
  .table th {
    padding: .4rem;
    vertical-align: middle;
  }

  .faq-content {
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    max-width: 850px;
  }

  .advantage {
    height: auto;
    text-align: left !important;
    transition: all .4s;
    margin-bottom: 2em;
    box-shadow: 2px 2px 20px 2px #d4d2d282;
  }

  .modal-window {
    display: block; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 10000; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }

  .modal-window-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    margin-top: 10%;
    border: 1px solid #888;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    animation-name: animatetop;
    animation-duration: 0.4s
  }

  @keyframes animatetop {
    from {top: -300px; opacity: 0}
    to {top: 0; opacity: 1}
  }

  tr {
    align-items: center;
    text-align: center;
  }

  .table-button {
    padding: 0.5rem !important;
  }

  .btn-primary {
    color: #2b2b2b;
    background-color: #fffefe;
    border-color: #2b2b2b;
  }

  .btn-primary:hover {
    color: #fffefe;
    background-color: #2b2b2b;
    border-color: #fffefe;
  }

  .icon-style {
    color: white; font-size: 1.2em;
  }

  .button-icon {
    margin-bottom: 0;
    place-items: center;
    display: inline-grid;
    background-color:#032647;
    font-size: 1.3em;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  .button-text {
    margin-bottom: 0;
    place-items: center;
    display: inline-grid;
    background-color:#032647;
    font-size: 1.4em;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    color: white;
  }

  .price-table {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }

  .help-button {
    display: grid;
    background: white;
    grid-template-columns: 80% 20%;
    padding: 0 0;
    justify-content: center;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
    width: 450px;
  }

  .price {
    font-weight: bold;
  }

  @media (max-width: 1024px) {
    .modal-window-content {
      margin-top: 20%;
    }
  }

  @media (max-width: 768px) {
    .modal-window-content {
      margin-top: 40%;
    }

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
    .container-fluid {
      margin: 0;
      padding: 0;
    }

    table .btn {
      padding: .375rem .5rem !important;
      font-size: 3.5vw;
    }

    small {
      font-size: 4vw;
    }

    .faq-content h3 {
      font-size: 5.5vw;
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
    .help-button {
      margin-left: 2%;
      margin-right: 2%;
      /*width: auto;*/
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