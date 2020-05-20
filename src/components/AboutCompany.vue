<template>
  <div class="container-fluid" id="about">
    <div class="card card-body">
      <div class="row products" style="">
        <Header title="О компании"
                :small-text-bool="this.showSmallText"
                small-text="Производственный комплекс «Вымпел» предлагает товарный бетон от производителя
                с доставкой на ваш объект."/>
        <div class="about-block">
          <div class="card-body">
            <p class="about-text">
              Покупая бетонные смеси у нас, вы можете быть уверены в качестве, которое подтверждается
              соответствующими сертификатами. Автоматизированная система контроля качества следит за
              соблюдением всех рецептур, используемых при производстве бетона.
            </p>
            <br>
            <p class="about-text">
              Импортное оборудование имеет минимальные погрешности при замесе и взвешивании бетонной
              смеси,
              поэтому вы получите именно тот бетон, который вы заказали и именно в том количестве, что
              было
              вам необходимо. Мы не обманываем наших клиентов, как многие другие поставщики бетона, мы
              боремся
              за свою репутацию!
            </p>
            <br>
            <p class="about-text">
              Если вы еще не уверены в том, какая марка бетона вам необходима, то вы всегда можете
              любой
              вопрос нашим менеджерам - мы гарантируем квалифицированную консультацию.
            </p>
          </div>
          <div :style="
          'background-image: url(' + require('@/assets/img/' + this.aboutImg) + '); ' +
          'background-position: center; ' +
          'background-size: cover; ' +
          'height: 55vh;' +
           'width:100%;'
        "></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import Header from "./Header";
  const Header = () => import('./Header.vue')

  export default {
    name: "AboutCompany",
    components: {Header},
    data () {
      return {
        showSmallText: true
      }
    },
    props: {
      aboutImg: {
        type: String,
        required: true
      }
    },
    created() {
      if( screen.width > 1092 ) {
        this.showSmallText = true;
      }
      else {
        this.showSmallText = false;
      }
    }
  }
</script>

<style lang="scss">
  .about-block {
    display: grid;
    grid-template-columns: 50% 50%;
    width: 100%;
  }

  @media (max-width: 768px  ) {
    .about-block {
      display: grid;
      grid-template-columns: 100% 0%;
      width: 100%;
    }
  }

  .about-text {
    padding: 5vh;
    padding-bottom: 0;
    padding-top: 0;
    margin: 0;
  }

  @media (max-width: 576px) {
    .about-text {
      padding: 0vh;
      margin: 0;
      /*text-indent: 3%;*/
    }

    .card-body {
      padding: 10px;
    }
  }

</style>