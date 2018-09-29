<template>
  <v-flex>
    <div class="wrapper">
      <h2>{{title}}
        <slot name="action" />
      </h2>

      <slot>
        <br> No content
        <br>
        <br>
      </slot>
    </div>

  </v-flex>
</template>

<script>
  export default {
    props: [
      'title',


    ]

  }

</script>

<style scoped>
  h2 {

    font-weight: 100;
    margin: 2px;
    color: #FAFAFA;
    background: #1DA1F2;
  }

  .wrapper {
    position: relative;
    background: white;

    width: 100%;

    border-bottom: 1px solid #b3d4fc;
    left: 50%;

    transform: translate(-50%);
  }

</style>
