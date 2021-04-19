<template>
  <div id="goods">
    <div class="container-fluid">
      <div class="row block">
        <Header :title="this.tableTitle"
                small-text="Вы можете выбрать интересующий Вас товар по нажатию на цену и указав необходимое количество. Цены на нашу продукцию указаны без учета доставки."
                :small-text-bool="true"/>
      </div>

      <div class="price-table">
        <table class="table table-hover">
          <thead>
          <tr>
            <th scope="col" v-for="table_col in table_columns" :key="table_col.id">{{table_col}}</th>
            <th scope="col" v-for="col in columns.slice(0, slice_number)" :key="col.id">{{col}}</th>
            <th scope="col">{{calcUnits}}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(row, row_id) in rows"
              :key="row.id"
          >
            <th>{{row.name}}</th>
            <td v-if="row.classification">{{row.classification}}</td>
            <td class="price centered"
                v-for="(price, price_id) in row.prices.slice(0, slice_number)"
                :key="price.id"
                :class="{ 'select-price': calc.rows[row_id].price_id === price_id}"
                v-on:click="select_price(row_id, price_id)"
            >
              {{price}}
            </td>
            <th class="table-calc">
              <input class="btn table-calc-input" type="number"
                     v-model="calc.rows[row_id].vol"
              >
            </th>
          </tr>
          </tbody>
        </table>
      </div>


      <div class="modal-window" v-if="calc.modalShow">
        <div v-if="!calc.sended && calc.total !== 0" class="modal-window-content col-md-4 col-12 advantage centered faq-content">
          <h1 class='card-title' style="color: #2b2b2b;">Оформление заказа</h1>
          <h3 style="color: #2b2b2b;">
            Цена на Ваш заказ {{this.number_with_sep(this.calc_total())}} руб. без учета доставки
          </h3>
          <p style="font-size: 1em;">
            Для оформления заказа оставьте Ваш номер телефона, Вам перезвонит наш менеджер и уточнит детали.
            <br>
            <input class="btn modal-window-center"
                   type="text"
                   placeholder="Ваш телефон*"
                   v-model="form.phone"
                   required
            />
            Для рассчета доставки Вы можете оставить Ваш адрес.
            <br>
            <input class="btn modal-window-center"
                   type="text"
                   placeholder="Адрес доставки"
                   v-model="form.address"
            />
            <a class="button-text btn btn-deep-orange modal-window-center modal-btn"
               v-bind:style="(!form.phone && !form.process) ? 'background: grey !important' : '' "
               @click="send_application()"
            >
              Отправить заявку
            </a>
            <a class="button-text btn btn-deep-orange modal-window-center modal-btn"
               @click="close()">
              Закрыть
            </a>
          </p>
        </div>

        <div v-else-if="calc.sended"
             class="modal-window-content col-md-4 col-12 advantage centered faq-content"
             @click="close()"
        >
          <h1 class='card-title' style="color: #2b2b2b;">Заказ оформлен</h1>
          <h3 style="color: #2b2b2b;">
            Вскорее Вам позвонят наши менеджеры
          </h3>
          <p style="font-size: 1em;">
            Большое спасибо за проявленное к нам доверие!
          </p>
          <a class="button-text btn btn-deep-orange modal-window-center modal-btn"
             @click="close()">
            Закрыть
          </a>
        </div>

        <div v-else
             class="modal-window-content col-md-4 col-12 advantage centered faq-content"
             @click="close()"
        >
          <h1 class='card-title' style="color: #2b2b2b;">Пустой заказ</h1>
          <h3 style="color: #2b2b2b;">
            Оформите заказ и получите индивидуальную скидку
          </h3>
          <p style="font-size: 1em;">
            Это можно сделать, выбрав интересующую Вас марку бетона и указав необходимое Вам значение {{calcUnits}}.
            <br>
            <br>
            Скидка дается в зависимости от объема.
          </p>
          <a class="button-text btn btn-deep-orange modal-window-center modal-btn"
             @click="close()">
            Закрыть
          </a>
        </div>
      </div>

<!--      <div class="col-12 centered mobile">-->
<!--        <h3 style="color: #1b1b1b; margin-top: 1em">Сумма заказа: {{this.number_with_sep(this.calc_total())}} руб.</h3>-->
<!--      </div>-->

      <div class="row">

        <div class="btn btn-deep-orange help-button"
             v-on:click="openDiscountModal()"
        >
          <div class="button-text">
            Оформить заявку
          </div>

          <div class="button-icon">
            <i class="fas fa-percent icon-style"></i>
          </div>
        </div>
      </div>


      <div class="row">
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

        <!--        <div  class="col-12 centered">-->
        <!--          <h5 style="color: #1b1b1b; margin-top: 1em"> Противоморозная добавка — 150 р/куб</h5>-->
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
  // import Header from "./Header";
  import axios from "axios";
  import {host} from "../variables";

  const Header = () => import('./Header.vue')
  export default {
    name: "PriceTable",
    components: {Header},
    props: {
      tableTitle: {
        type: String,
        required: true
      },
      calcUnits: {
        type: String,
        default: 'м³',
        // required: false
      },
      showButton: {
        type: Boolean,
        default: true,
        required: false
      },
      rows: {
        type: Array,
        required: true
      },
      columns: {
        type: Array,
        required: true
      },
      slice_number: {
        type: Number,
        default: 2,
        required: false
      },
      table_columns: {
        default: [
          'Марка',
          'Класс'
        ],
        required: false
      },
      step: {
        type: Number,
        default: 1,
        required: false
      },
      min_quantity: {
        type: Number,
        default: 1,
        required: false
      }
    },
    data() {
      return {
        form: {
          phone: '',
          address: '',
          process: false
        },
        calc: {
          modalShow: false,
          sended: false,
          selected_rows: [],
          rows: [],
          step: this.step,
          min_quantity: this.min_quantity,
          total: 0,
          discount: 0.
        }
      };
    },
    methods: {
      openDiscountModal() {
        this.calc_total()
        this.calc.sended = false
        this.calc.modalShow = true
      },
      close() {
        this.calc.modalShow = false
      },
      process_goods() {
        let goods = []
        for (let i = 0; i < this.calc.rows.length; i++) {
          let quantity = this.calc.rows[i].vol
          if (quantity > 0) {
            let price_id = this.calc.rows[i].price_id
            let price = this.float_price(this.rows[i].prices[price_id])
            // console.log(this.rows[i].prices[price_id], price)
            price = this.calc.rows[i].vol * price
            goods.push({
              tovar: this.tableTitle + '-' + this.rows[i].name,
              selected: this.columns[price_id],
              price: Math.round(price)+'р',
              quantity: quantity+this.calcUnits,
            })
          }
        }
        return goods
      },
      send_application() {
        if (!this.form.phone && !this.form.process) {
          return
        }
        // console.log(this.form)
        this.form.process = true
        // console.log(this.form)
        let order = {
          'total_cost': this.calc.total,
          'goods': this.process_goods()
        }

        console.log(order)
        axios.post(host + '/redirection_to_telegram', {
          phone: this.form.phone,
          address: this.form.address,
          order: order
        })
            .then(response => {
              console.log(response)
            })
            .catch(error => {
              console.log(error.response)
            });
        this.calc.sended = true
        return true;
      },
      select_price(row_id, price_id) {
        console.log(this.calc.rows)
        this.calc.rows[row_id].price_id = price_id
      },
      subtract_volume(row_id) {
        if (this.calc.rows[row_id].vol >= this.calc.step) {
          let new_vol = parseFloat(this.calc.rows[row_id].vol) - this.calc.step
          this.calc.rows[row_id].vol = this.round_volume(new_vol)
        }
        // console.log(this.calc.rows)
      },
      add_volume(row_id) {
        let new_vol = parseFloat(this.calc.rows[row_id].vol) + this.calc.step
        this.calc.rows[row_id].vol = this.round_volume(new_vol)
        // console.log(this.calc.rows)
      },
      round_volume(volume) {
        volume = parseFloat(volume)
        let volume_round = 0
        if (volume) {
          let volume_int = Math.floor(volume);

          if (volume_int === 0) {
            volume = this.calc.min_quantity
          } else {
            let volume_portion = volume % 1
            if (volume_portion !== 0) {
              volume_round = volume_portion + this.calc.step - (volume_portion % this.calc.step)
            }
            // if (volume_portion%this.calc.step > this.calc.step) {
            //   volume_round = volume_portion + (volume_portion % this.calc.step)
            // }
            // console.log(volume, volume_portion, volume_round)
            volume = volume_int + volume_round
          }
        } else {
          volume = 0
        }
        return volume.toFixed(1);
      },
      float_price(price) {
        return parseFloat(price.replace(' ', ''))
      },
      number_with_sep(x) {
        return Math.floor(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      },
      calc_total() {
        let total = 0
        this.round_all_volumes()
        for (let i = 0; i < this.calc.rows.length; i++) {
          let price_id = this.calc.rows[i].price_id
          let price = this.float_price(this.rows[i].prices[price_id])
          // console.log(this.rows[i].prices[price_id], price)
          total += this.calc.rows[i].vol * price
        }
        this.calc.total = Math.round(total)
        return this.calc.total
      },
      set_default_calc_rows() {
        for (let i = 0; i < this.rows.length; i++) {
          this.calc.rows.push({vol: 0.0, price_id: 0})
        }
      },
      // eslint-disable-next-line no-unused-vars
      round_all_volumes(envt) {
        console.log(this.calc.rows)
        for (let i = 0; i < this.calc.rows.length; i++) {
          this.calc.rows[i].vol = this.round_volume(this.calc.rows[i].vol)
        }
        // this.calc_total()
      },
    },
    beforeMount() {
      // this.set_default_selected_rows()
      this.set_default_calc_rows()
      // select_default() {
      //   for (var item in this.$attrs.rows) {
      //
      //   }
      // }
    },
  }
</script>

<style lang="scss">
  .table th {
    padding: .4rem;
    vertical-align: middle;
    border: 1px solid #dee2e6;
  }

  .table td {
    border: 1px solid #dee2e6;
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
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  .modal-window-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    margin-top: 10%;
    border: 1px solid #888;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    animation-name: animatetop;
    animation-duration: 0.4s
  }

  .modal-btn {
    display: block !important;
    color: white !important;
    margin-top: 10px !important;
    max-width: 300px !important;
  }

  .modal-window-center {
    margin: auto;
    display: block;
    margin-top: 5px;
    margin-bottom: 5px;
    color: #787575;;
  }

  .modal-window-content input::placeholder {
    color: #878484;
  }

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0
    }
    to {
      top: 0;
      opacity: 1
    }
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
    color: white;
    font-size: 1.05em;
  }

  .button-icon {
    margin-bottom: 0;
    place-items: center;
    display: inline-grid;
    background-color: #032647;
    font-size: 1.3em;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  .button-text {
    margin-bottom: 0;
    place-items: center;
    display: inline-grid;
    background-color: #032647;
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

  .select-price {
    background-color: #8f9ead;
  }


  .table-calc {
    /*width: 30%;*/
    width: 20%;
    /*white-space: nowrap;*/
  }

  .table-calc-input {
    min-width: 10px;
    max-width: 100%;
    width: 100%;
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
      padding: 0rem;
      vertical-align: middle;
    }

    td {
      align-items: center;
      text-align: center;
      vertical-align: middle !important;
      padding: 0 !important;
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