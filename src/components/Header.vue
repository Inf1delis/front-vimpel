<template>
    <div class="col-12 centered title">
      <h2 style="color: #1b1b1b"> {{title}}</h2>
      <div class="row" v-if="smallTextBool">
        <div class="col-md-3 col-1"></div>
        <div class="col-md-6 col-10 centered">
          <small>{{smallText}}
          </small>
        </div>
        <div class="col-md-3 col-1"></div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Header",
    props: {
      title: {
        type: String,
        required: true
      },
      smallTextBool: {
        type: Boolean,
        default: false
      },
      smallText:{
        type: String
      }
    }
  }
</script>

<style>

</style>