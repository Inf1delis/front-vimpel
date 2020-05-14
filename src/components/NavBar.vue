<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <div class="navbar-top">
        <img class='logo' @click="toPage('/', '#top')" alt="Логотип компании Вымпел" style='padding-left: 0;'
             src="@/assets/img/logo5.jpeg">
      <div class='' style="
            all: initial;
            width: 85%;
            justify-content: flex-end;
            display: contents;"
      >
        <a class="nav-fix" href='tel:+73952748795' style="
                color: black;
                text-decoration: black;
                line-height: 28px;
                margin: 13px;
                font-family: 'Rubik', sans-serif;
                display: grid;
                text-align: center;
                grid-template-rows: auto auto"
        >
          <div>+7 (3952) 748-795</div>
          <small>Звонок бесплатный!</small>
        </a>
        <button class="navbar-toggler nav-fix" @click="menu">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>

    <vue-slide-up-down :active="this.showMenu"  class="mobile-left" :duration="600">
      <div class="navbar-collapse slider">
        <ul class="navbar-nav">
          <li class="nav-mobile nav-item">
            <div class="nav-link dropdown-toggle"
                 @click="products">
              Продукция
            </div>
            <transition name="slide">
              <div id="product-menu"
                   style="background-color: #f8f9fa; border: 0;"
                   v-if="this.showProducts">
                <a class="dropdown-item" to="/beton" @click="toPage('/beton', '#top')">Бетон</a>
                <a class="dropdown-item" @click="toPage('/peskobeton', '#top')">Пескобетон</a>
                <a class="dropdown-item" @click="toPage('/borders', '#top')">Бордюры</a>
              </div>
            </transition>
          </li>
          <li class="nav-desktop nav-item">
              <a class="nav-link slide-selection"
                 @click="toPage('/', '#top')">Продукция</a>
          </li>
          <li class="nav-item">
            <a class="nav-link slide-selection" @click="toPage('/beton', '#goods')">Прайс-лист</a>
          </li>
          <li class="nav-item">
            <a class="nav-link slide-selection" @click="toPage('/help', '#top')">Помощь</a>
          </li>
          <li class="nav-item">
            <a class="nav-link slide-selection"
               @click="toPage('/beton', '#services')">Услуги</a>
          </li>
          <li class="nav-item">
            <a class="nav-link slide-selection"
               @click="toPage('', '#contactForm')">Контакты</a>
          </li>
        </ul>
      </div>
    </vue-slide-up-down>
  </nav>
</template>

<script>
  import VueSlideUpDown from 'vue-slide-up-down'

  export default {
    name: 'NavBar',
    components: {
      VueSlideUpDown
    },
    data() {
      return {
        showProducts: false,
        showMenu: false,
        desktop: false,
      }
    },
    methods: {
      toPage (page, href) {
        if (!this.desktop) {
          this.showProducts = false;
          this.showMenu = false;
        }
        this.$parent.toPageAncorn(page, href)
      },
      menu() {
        this.showMenu = !this.showMenu;
      },
      products() {
        this.showProducts = !this.showProducts;
      },
      isDesktop() {
        if( screen.width > 1092 ) {
          return true;
        }
        else {
          return false;
        }
      }
    },
    created() {
      if (this.isDesktop()) {
        this.showMenu = true;
        this.desktop = true;
      }
    }
  }
</script>

<style>

  .mobile-left {
    margin-right: 0;
    margin-left: auto;
  }

  .slider {
    overflow-y: hidden;
    max-height: 500px; /* approximate max height */

    transition-property: all;
    transition-duration: .5s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }

  .slider.closed {
    max-height: 0;
  }

  .slide-enter-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: ease-in;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
  }

  .slide-leave-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }

  .slide-enter-to, .slide-leave {
    max-height: 100px;
    overflow: hidden;
  }

  .slide-enter, .slide-leave-to {
    overflow: hidden;
    max-height: 0;
  }

  .navbar-collapse {
    justify-content: flex-end;
    padding-right: 3em;
  }

  .navbar-toggler {
    display: block;
    margin: auto;
    width: 100% !important;
    height: 100% !important;
    border: 0 !important;
  }
  .navbar-toggler:hover {
    border: 0;
  }
  .navbar-top {
    display: inline-grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto;
    text-align: center;
    align-items: center;
  }

  .navbar-toggler-icon {
    margin: auto;
    text-align: center;
    vertical-align: middle;
    display: inline-block;
  }

  .nav-item {
    padding: 0.5em;
  }
  .nav-link {
    color: #2b2b2b !important;
    font-size: 1.2em !important;
    cursor: pointer !important;
  }
  .nav-link:hover {
    color: gray !important;
  }
  .nav-link:active {
    color: #9b9b9b;
  }

  .logo {
    height: 3.25em;
  }
  .nav-fix {
    display: none;
  }
  .nav-mobile {
    display: none;
  }
  .nav-desktop {
    display: block;
  }
  .navbar {
    z-index: 1000;
    /*display: block !important;*/
    /*display: grid !important;*/
    padding: 0 1rem !important;
  }
  .mobile-navbar {
    display: block !important;
    border-bottom: 0;
  }

  @media (max-width: 1092px) {
    .nav-fix {
      /*display: contents;*/
      display: block !important;
    }
    .mobile-left {
      margin: 0;
    }
    .nav-mobile {
      display: block;
    }

    .nav-desktop {
      display: none;
    }
  }

  @media (max-width: 991px) {
    .nav-link {
      font-size: 1em;
    }
  }

  @media (max-width: 768px) {
    .logo {
      height: 7vh;
    }
    .navbar {
      /*display: none;*/
      z-index: 999;
      display: grid !important;
      grid-template-columns: 100% !important;
      grid-auto-rows: auto;
      padding: 0 1rem !important;
      padding-right: 0 !important;
    }
  }

  @media (max-width: 768px) and (orientation: landscape) {
    .navbar {
      /*display: none;*/
      z-index: 999;
      display: grid;
      grid-template-columns: 100%;
      grid-auto-rows: auto;
      padding: 0 1rem;
      padding-right: 0;
    }
    .logo {
      height: 12vh;
    }
  }



</style>
