<template>
  <div class="error-nav-container">
    <input type="checkbox" id="burgerMenuToggle" class="burger-menu-toggle" />
  <label
    for="burgerMenuToggle"
    class="burger-menu-btn"
    @click="toggleNavigation"
  >
    <img :src="burger" alt="Burger Icon" />
  </label>
    <div>
      <img class="logo-error" :src="logo" alt="logo" />
    </div>
    <div class="error-nav-container_main">
      <div
        class="error-nav-container_buttons"
        :class="{ active: isNavVisible }"
      >
        <div class="dashboard">Dashboard</div>
        <div>Team</div>
        <div>Projects</div>
        <div>Calendar</div>
      </div>
      <div class="login-container">
        <img :src="retu" alt="retu" />
        <div>Login/Register</div>
      </div>
    </div>
  </div>
</template>

<style>
.logo-error {
  margin-left: 20px;
  width: 35px;
  height: 33px;
}
.error-nav-container {
    position: relative;
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(128, 128, 128, 0.281);
}
.error-nav-container_main {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.error-nav-container_buttons {
  margin-left: 15.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
}
.error-nav-container_buttons div {
  cursor: pointer;
}
.login-container {
  margin-left: auto;
  margin-right: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.login-container img {
  margin-right: 6px;
  width: 18px;
  height: 16px;
}
.dashboard {
  color: #03543f;
}
.burger-menu-toggle {
  display: none;
}
.burger-menu-btn {
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
@media screen and (max-width: 550px) {
  .error-nav-container_buttons {
    display: none;
  }
  .active {
    display: block;
    position: absolute;
    left: 0px;
    top: 70px;
    width: 100px;
    background-color: white;
  }
  .logo-error {
    display: none;
  }
  .burger-menu-btn {
    display: block;
  }
}
</style>

<script>
export default {
  name: "ErrorNav",
  props: {
    msg: String,
  },
  data() {
    return {
      logo: require("@/assets/Logo.png"),
      retu: require("@/assets/solid/return.png"),
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
