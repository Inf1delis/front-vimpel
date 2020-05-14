<template>
  <div class="row block">
    <Header title="Услуги компании"
            :small-text-bool="false"/>

    <div class="col-md-5 col-12 service">
      <img src="https://img.icons8.com/ios/50/000000/delivery.png" alt="Миксер доставки">
      <h4>Доставка</h4>
      <p style="font-size: 1em; font-style: italic">Можем доставить ваш бетон через 1,5 часа.
        <br>
        Если к вам сложно подъехать, мы подберем для вас подходящие миксеры.
        <br>
        <br>
        Миксеры: 2.5м³, 5м³, 7м³
      </p>
    </div>
    <div class="nav-mobile col align-self-center"></div>
    <div class="col-md-5 col-12 service">
      <img src="https://img.icons8.com/ios/50/000000/fire-truck.png" alt="Швинг/Бетононасос">
      <br>
      <h4>Бетононасос</h4>
      <p style="font-size: 1em; font-style: italic">Оказываем услуги по укладке и доставки бетонных смесей
        в любое время и место.
        <br>
        <br>
        Швинг: 16 м, 21м, 25м, 32м, 43м, 52м
      </p>
    </div>
  </div>
</template>

<script>
  // import Header from "./Header";
  const Header = () => import('./Header.vue')

  export default {
    name: "Service",
    components: {Header}
  }
</script>

<style>
  .service {
    height: auto;
    padding-right: 5px;
    padding-left: 5px;
    padding: 2em !important;
    transition: all .4s;
    margin-bottom: 2em;
    border-radius: 25px;
    background-color: rgba(0,0,0,.05);
    margin: auto;
  }

  .service > i {
    font-size: 4em;
    margin-bottom: 3vh;
  }

  .service:hover {
    box-shadow: 2px 2px 20px 2px rgb(212, 212, 212);
  }
</style>