<template>
      <div class="bottom-info">
        <img :src="mechanism" alt="mechanism" />
        <img :src="world" alt="world" />
        <img :src="cog" alt="cog" />
      </div>
  </template>
  
  <script>
  export default {
    name: "BottoInfo",
    props: {
      msg: String,
    },
    data() {
      return {
        mechanism: require("@/assets/solid/mechanism.png"),
        world: require("@/assets/solid/world.png"),
        cog: require("@/assets/solid/cog.png"),
      };
    },
  };
  </script>
  <style>
  .bottom-info {
    display: flex;
    justify-content: center; /* Центрирование по горизонтали */
    align-items: flex-end; /* Выравнивание по нижнему краю */
  }
  .bottom-info img{
    width: 24px;
    height: 24px;
    margin-right: 22px;
    margin-bottom: 16px;
  }
  .bottom-info img:last-child{
    margin-right: 0;
    margin-bottom: 16px;
  }
  </style>
  