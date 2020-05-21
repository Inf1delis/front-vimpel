<template>
  <section class="section pb-5" id="contactform-desktop">
    <div class="row" style='margin-right: 0; margin-left: 0'>
      <!--Grid column-->
      <div class="col-lg-5 mb-4">

        <!--Form with header-->
        <div class="card">
          <div class="card-body">
            <!--Header-->
            <div class="form-header bluer accent-1">
              <h2><i class="fas fa-envelope"></i> Напишите нам:</h2>
            </div>

            <p>Оставьте данные и мы перезвоним!</p>
            <br>
            <!--Body-->
            <form>
              <div class="alert col-12" role="alert" style="margin-bottom: 2vw;    display: block;" v-if="this.sended">Ваше сообщение
                отправлено
              </div>

              <div class="md-form"
                   style='display:grid; grid-template-columns: 12% 88%; text-align:center; align-items: center;'
                   >
                <i class="fas fa-user prefix "></i>
                <input type="text"
                       class="form-control"
                       placeholder="Ваше имя"
                       style="border: 4px solid #f2f2f2; margin: 5px"
                       v-model="form.name"
                       required />
              </div>

              <div class="row" style='margin-right: 0; margin-left: 0'>
                <div class="col-5"></div>
                <div class="col-2">
                  <div class="decoration"></div>
                </div>
                <div class="col-5"></div>
              </div>

              <div class="md-form"
                   style='display:grid; grid-template-columns: 12% 88%; text-align:center; align-items: center;'>
                <i class="fas fa-phone prefix"></i>
                <input type="text"
                       class="form-control"
                       placeholder="Ваш телефон"
                       style="border: 4px solid #f2f2f2; margin: 5px"
                       v-model="form.phone"
                       required />
              </div>

              <div class="row" style='margin-right: 0; margin-left: 0'>
                <div class="col-5"></div>
                <div class="col-2">
                  <div class="decoration"></div>
                </div>
                <div class="col-5"></div>
              </div>

              <div class="md-form"
                   style='display:grid; grid-template-columns: 12% 88%; text-align:center; '>
                <i class="fas fa-pencil-alt prefix"></i>
                <textarea class="form-control md-textarea"
                          placeholder="Напишите ваш заказ здесь (необязательно)"
                          style="border: 4px solid #f2f2f2; margin: 5px"
                          v-model="form.desc"
                          rows="3">
                </textarea>
              </div>

              <div class="text-center mt-4">
                <button @click.prevent="checkForm" style="padding: 0;" class="btn btn-light-blue">
                  Отправить
                </button>
              </div>
            </form>
          </div>

        </div>
        <!--Form with header-->
      </div>
      <!--Grid column-->

      <div class="col-lg-7">
        <!--Google map-->
        <div v-if="this.loadMap" :key="this.loadMap">
          <div id="map-container-google-11" class="z-depth-1-half map-container-6" style="height: 400px">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.7583378838117!2d104.18938121579731!3d52.24777297976353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x51736c9d9fd236a7!2z0JHQtdGC0L7QvdC90LDRjyDRhNCw0LHRgNC40LrQsCDQktGL0LzQv9C10Ls!5e0!3m2!1sru!2sru!4v1556920725593!5m2!1sru!2sru"
                    allowfullscreen style="height: 400px; width: 100%; border:0" ></iframe>
          </div>
        </div>
      </div>
      <!--Grid column-->
    </div>

  </section>
</template>

<script>
  import axios from 'axios';
  import { host } from '../variables.js'

  export default {
    name: "Contact",
    data() {
      return {
        sended: false,
        loadMap: false,
        form: {
          name: '',
          phone: '',
          desc: ''
        }
      }
    },
    methods: {
      checkForm() {
        if (this.form.name && this.form.phone) {
          this.sended = true;
          // const str = JSON.stringify();
          axios.post(host + '/redirection_to_telegram', this.form)
              .then(response => {
                console.log(response)
              })
              .catch(error => {
                console.log(error.response)
              });
          return true;
        }

        this.errors = [];

        if (!this.form.name) {
          this.errors.push('Требуется указать имя.');
        }
        if (!this.form.phone) {
          this.errors.push('Требуется указать возраст.');
        }

        return false
        // e.preventDefault();
      }
    },
    created() {
      setTimeout(() => {
        this.loadMap = true
      }, 3000);
    }
  }
</script >

<style lang="scss">

  .alert {
    text-align: center;
    color: #2b2b2b;
    background: #79c879;
    padding: 10px;
    font-style: italic;
    display: none;
  }
  /*.prefix {*/
  /*  position: absolute;*/
  /*}*/
  textarea {
    background-color: #f1f1f1;
    font-size: 1em;
    color: #2b2b2b;
  }
  textarea:focus {
    box-shadow: 0px 0px 5px 0px #f1f1f1;
    color: #2b2b2b;
  }
  ::placeholder {
    color: #2b2b2b;
  }
  input {
    background-color: #f1f1f1;
    font-size: 1em;
    color: #2b2b2b;
  }
  .card {
    border: 0 !important;
  }

  @media (max-width: 576px) {
    .card-title {
      font-size: 10vw;
    }

    .form-header {
      h2 {
        font-size: 1.5rem;
      }
    }
  }

</style>