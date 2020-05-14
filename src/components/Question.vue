<template>
  <div>
    <p class="help-btn" v-on:click="() => {this.showModal = !this.showModal;}">
      <a class="btn btn-deep-orange faq-button centered">
        {{title}}
      </a>
    </p>
    <transition name="slide">
      <div v-if="this.showModal && !this.cards">
        <div class="card card-body">
          <div class="row">
            <div class="col-md-4 col-12 advantage">
              <p class="help-card-text" v-html="this.data"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-body" v-if="this.showModal && this.cards">
        <div class="row products" >
          <div class="col-md-4 col-12 advantage faq-content" v-for="item in this.data" :key="item.id">
            <h1 class='card-title' style="color: #2b2b2b;">{{item.title}}</h1>
            <h3 style="color: #2b2b2b;">от {{item.price}} руб/м³</h3>
            <p class="help-card-text" v-html="item.text"></p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "Question",
    data () {
      return {
        showModal: false
      }
    },
    props: {
      title: {
        type: String,
        required: true
      },
      data: {
        required: false
      },
      cards: {
        type: Boolean,
        required: true
      }
    }
  }
</script>

<style>
  .help-btn {
    padding: 0;
    margin-bottom: 0;
    margin-top: 1%;
  }

  .help-card-text {
    font-size: 1em;
  }

  .faq-button {
    place-items: center;
    display: block;
    color: #565656;
    background-color: white;
    font-size: 1.6em;
    border-radius: 7px;
    border: 3px #565656 solid;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .faq-content {
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    max-width: 850px;
  }

  @media (max-width: 1024px) {
    .products {
      display: block;
    }
  }
  @media (max-width: 700px) {
    .faq-button {
      margin-left: 11%;
      margin-right: 11%;
      font-size: 5vw;
      margin-bottom: 0.5%;
    }
  }

  @media (max-width: 576px) {
    .faq-content h3 {
      font-size: 5.5vw;
    }
  }


</style>