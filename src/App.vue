<template>
  <div id="app">
    <NavBar id="top"/>

    <transition
            name="fade"
            mode="out-in"
            @after-enter="afterEnter"
            appear
    >
      <router-view :key="this.$route.fullPath"></router-view>
    </transition>

<!--    <router-view/>-->
    <Strip id="contactForm"/>
    <Contact />
  </div>
</template>

<script>
  // import NavBar from "./components/NavBar";
  // import Strip from "./components/Strip";
  // import Contact from "./components/Contact";
  const NavBar = () => import('./components/NavBar.vue')
  const Strip = () => import('./components/Strip.vue')
  const Contact = () => import('./components/Contact.vue')

  import VueScrollTo from "vue-scrollto";
  import {scroll_options} from "./config";

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
      NavBar,
      Strip,
      Contact
  },
  methods: {
    afterEnter () {
      this.$root.$emit('scrollAfterEnter');
    },
    toPageAncorn(page, href) {
      if (this.$route.path !== page && page !== '') {
        return this.$router.push({
          path: page,
          hash: href
        })
      }
      this.scrollTo(href)
    },
    scrollTo(href) {
      VueScrollTo.scrollTo(href, scroll_options.duration, scroll_options.options)
    },
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway&font-display=fallback');

  /*@import url('https://fonts.googleapis.com/css?family=Nunito:300i&font-display=fallback');*/
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&family=Rubik:wght@300&display=swap');

  @import url('https://fonts.googleapis.com/css?family=Quicksand&font-display=fallback');
  @import url('https://fonts.googleapis.com/css?family=M+PLUS+1p&font-display=fallback');

  /*@import url('https://fonts.googleapis.com/css?family=Rubik&font-display=fallback');*/
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@380&display=swap');

  @font-face {
    font-display: fallback; /* Задаем поведение браузера на время загрузки */
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }


  html {
  background: #f9f9f9;
  max-width: 100%;
}
body {
  width: 100%;
  height: auto;
  background-color: white;
  font-family: 'Rubik', sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: #1b1b1b;
  line-height: 1.5;

  -webkit-font-smoothing: antialiased;
  -webkit-overflow-scrolling: touch;
}
body::-webkit-scrollbar {
  width: 5px;
}
body.thin::-webkit-scrollbar {
  width: 2.5px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
  background: white;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #070e62;
}
::-webkit-scrollbar-thumb:window-inactive {
  background: white;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Nunito', sans-serif;
  font-weight: 300;
}
h1 {
  font-size: 5em;
  color: #f9f9f9;
  font-weight: 400;
  font-family: 'Rubik', sans-serif;
}
h3 {
  font-size: 1.7em;
  color: #f9f9f9;
  font-family: 'Rubik', sans-serif;
}
h4 {
  font-size: 1.5em;
  color: #2b2b2b;
  margin-bottom: 2vh;
  font-family: 'Rubik', sans-serif;
}
h5 {
  font-size: 1.2em;
  color: #f9f9f9;
  font-family: 'Rubik', sans-serif;
}
h6 {
  font-size: 1.9em;
  font-style: normal;
  color: #2b2b2b;
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
}
small {
  font-family: 'Rubik', sans-serif;
  font-size: 1em;
  color: #afafaf;
}

.row {
  margin-right: 0;
  margin-left: 0;
  justify-content: center;
}
.decoration {
    display: block;
    height: 2px;
    border: 0;
    border-top: 1px solid;
    color: rgb(3, 38, 71);
    margin: 1em 0;
    padding: 0;
}

  i {
    cursor: pointer;
    font-size: 2em;
    color: #032647;
  }

p {
  line-height: 28px;
  margin-bottom: 25px;
  font-family: 'Rubik', sans-serif;
  color: #2b2b2b;
  font-size: 1em;
}
a {
  text-decoration: none;
  color: #f9f9f9;
  transition: all .4s;
}

.block {
  margin-top: 8vh;
}


@media (max-width: 1000px) {
  .container-fluid {
    margin: 0;
    padding: 0;
  }
}

button {
  width: 50%;
  height: 3.5vw;
  color: white;
  font-size: 1.3vw;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  border-radius: 25px;
  background-color: #032647;
  border: 3px solid #032647;
  /* opacity: 1; */
  transition: .6s;
  cursor: pointer;
}
button:hover {
  cursor: pointer;
  color: #032647;
  border: 3px solid #032647;
  background-color: transparent;
}

.title {
  margin-bottom: 4vh;
}

.centered {
  text-align: center;
  justify-content: center;
}
.right {
  text-align: right;
  justify-content: right;
}
.left {
  text-align: left;
}

@media (max-width: 768px) {
  body::-webkit-scrollbar {
    display: none;
  }
  body.thin::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar-track {
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    display: none;
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    display: none;
  }

  .title {
    margin-bottom: 2vh;
  }
  h1 {
    font-size: 12vw;
  }
  h3 {
    font-size: 3vw;
  }
  h5 {
    font-size: 2.7vw;
  }
  h6 {
    font-size: 1.4em;
  }

  button {
    height: 5vw;
    font-size: 2.5vw;
  }
}

@media (max-width: 576px) {
  h1 {
    font-size: 12vw;
  }
  h3 {
    font-size: 5vw;
  }
  h5 {
    font-size: 4vw;
  }

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

  button {
    height: 8vw;
    font-size: 3vw;
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

  h2 {
    font-size: 1.5rem;
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
