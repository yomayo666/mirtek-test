<template>
  <div class="left-bar">
    <input type="checkbox" id="burgerMenuToggle" class="burger-menu-toggle" />
    <label
      for="burgerMenuToggle"
      class="burger-menu-bt"
      @click="toggleNavigation"
      ><img :src="burger" alt="Burger Icon" /></label
    >
    <nav class="nav-container" :class="{ active: isNavVisible }">
      <div class="nav-container_title">
        <img :src="chart" alt="Overview" />
        <h2 class="text-info font-custom text-custom">Overview</h2>
      </div>
      <div class="nav-container_main">
        <div>
          <img :src="flesh" alt="flesh" />
          <p class="text-textMain">Pages</p>
          <img class="but-end" :src="arrDown" alt="arrDown" />
        </div>
        <div>
          <img :src="bag" alt="bag" />
          <p class="text-textMain">Sales</p>
          <img class="but-end" :src="arrUp" alt="arrUp" />
        </div>
        <div class="detail-products">
            <div>Product List</div>
            <div>Billing</div>
            <div>Invoice</div>
        </div>
        <div>
          <img :src="messeg" alt="messeg" />
          <p class="text-textMain">Messages</p>
          <div class="but-end count-massges">1</div>
        </div>
        <div>
          <img :src="key" alt="key" />
          <p class="text-textMain">Authentication</p>
          <img class="but-end" :src="arrDown" alt="arrDown" />
        </div>
      </div>
      <div class="nav-container_second">
        <div>
          <img :src="docs" alt="docs" />
          <p class="text-textMain">Docs</p>
        </div>
        <div>
          <img :src="components" alt="components" />
          <p class="text-textMain">Components</p>
        </div>
        <div>
          <img :src="help" alt="help" />
          <p class="text-textMain">Help</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      chart: require("@/assets/solid/chart-pie.png"),
      flesh: require("@/assets/solid/flesh.png"),
      bag: require("@/assets/solid/bag.png"),
      messeg: require("@/assets/solid/messeg.png"),
      key: require("@/assets/solid/key.png"),
      docs: require("@/assets/solid/docs.png"),
      components: require("@/assets/solid/components.png"),
      help: require("@/assets/solid/help.png"),
      arrDown: require("@/assets/solid/arr-down.png"),
      arrUp: require("@/assets/solid/arr-up.png"),
      burger: require("@/assets/solid/burger.png"),
      isNavVisible: false,
    };
  },
  methods: {
    toggleNavigation() {
      this.isNavVisible = !this.isNavVisible;
    },
  },
};
</script>

<style>
.nav-container_title {
  margin-top: 16px;
  display: flex;
  align-items: center;
}
.nav-container_title img {
  width: 19px;
  height: 19px;
}
.nav-container_title h2 {
  margin-left: 16px;
}
.nav-container_main > div {
  margin-top: 22px;
  display: flex;
  align-items: center;
}
.nav-container_main img {
  width: 14px;
  height: 19px;
}
.nav-container_main p {
  margin-left: 16px;
}
.but-end {
  margin-left: auto;
  margin-right: 2px;
}
.count-massges {
  background-color: rgb(251, 213, 213);
  border-radius: 80px;
  padding-left: 10px;
  padding-right: 10px;
}
.nav-container_second {
  margin-top: 27px;
}
.nav-container_second > div {
  display: flex;
  align-items: center;
  margin-top: 22px;
}
.nav-container_second p {
  margin-left: 16px;
}
.nav-container_second img {
  width: 15px;
  height: 15px;
}

.burger-menu-toggle {
  display: none;
}
.burger-menu-bt {
  z-index: 999;
  display: none;
  position: absolute;
  top: 25px;
  left: 20px;
  z-index: 999;
  font-size: 20px;
  cursor: pointer;
  color: black;
}
.detail-products {
  display: flex;
  flex-direction: column;
}


.detail-products div:first-child {
  margin-right: auto;
  margin-left: 30px;
  text-align: start;
}

.detail-products div:not(:first-child) {
  margin-top: 16px;
  margin-right: auto;
  margin-left: 30px;
  text-align: start;
}
@media screen and (max-width: 800px) {
  .nav-container {
    display: none;
  }
  .active {
    display: block;
    position: absolute;
    left: 0px;
    top: 70px;
    background-color: white;
    border: 1 solid black;
  }
  .burger-menu-bt {
    display: block;
  }
}
</style>
