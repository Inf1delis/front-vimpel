<template>

  <div class="strip strip-1 container problem enclose" id="contact">

    <div class="row centered">

      <div class="col-md-1 col-3 right">
        <i class="fas fa-map-marker-alt" style="font-size: 2em"></i>
      </div>
      <div class="col-md-3 col-9 centered">
        <p style="font-size: 1em">ул. Фролова, 1А<br> <span
                style="font-family: 'Rubik', sans-serif; font-size: .9em; color: rgb(150, 150, 150)">г. Иркутск, Иркутская область</span>
        </p>
      </div>
      <div class="col-md-1 col-3 right">
        <i class="fas fa-phone" style="font-size: 2em"></i>
      </div>
      <div class="col-md-3 col-9 centered fix" style="">
        <p href='tel:+73952748795' onclick="ym(54688534, 'reachGoal', 'call'); return true;"
           style="font-family: 'Rubik', sans-serif; font-size: 1em;">
          +7 (3952) 748-795
          <!--                +7 (3952) 748 - 795-->
          <br><span style='text-align:center'>vmp-38@ya.ru</span>
        </p>
      </div>

      <div class="col-md-1 col-3 right">
        <i class="fas fa-clock" style="font-size: 2em"></i>
      </div>
      <div class="col-md-3 col-9 centered fix">
        <p style="font-size: 1em">Пн - Вс: 8:00 - 22:00<br><span
                style="font-family: 'Rubik', sans-serif; font-size: .9em; color: rgb(150, 150, 150)">Без выходных</span>
        </p>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "scope"
  }
</script>

<style>
  .strip {
    height: 6em;
    padding: 1.3em;
    background-color: #f2f2f2;
    opacity: .8;
    transition: all .4s;
    z-index: 1000;
    /* display: none; */
  }

  .problem {
    text-align:center
  }

  .enclose {
    /*position:sticky;*/
    /*bottom:0px;*/
    /*width:100%;*/
    position: fixed;
    bottom: 0px;
    margin-right: auto;
    margin-left: auto;
    left: 0px;
    right: 0px;
  }

  .strip:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    .strip {
      height: auto;
    }

    .enclose {
      position: unset;
    }
  }

</style>