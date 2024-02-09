<template>
  <div style="height: 70px" class="w-full flex justify-between  ">
    <div style="width: 30%" class=" flex justify-between items-center">
      <img :src="logo" alt="Logo" class="logo" />
      <div class="serch">
        <img style="margin-left: 10px; height: 19px;" :src="search" alt="Search" />
        <input style="margin-left: 10px; height: 19px;" type="text" placeholder="Search" />
      </div>
    </div>
    <div class="search-container_user flex items-center">
      <img class="coll" style="margin-right: 10px" :src="vector" alt="coll"/>
      <img class="avatar" :src="avatar" alt="avatar"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SercBar",
  props: {
    msg: String,
  },
  data() {
    return {
      logo: require("@/assets/Logo.png"),
      search: require("@/assets/solid/search.png"),
      vector: require("@/assets/solid/Vector.png"),
      avatar: require("@/assets/user/Avatar.png"),
    };
  },
};

</script>
<style>
.serch{
  border: 1px solid rgba(128, 128, 128, 0.699);
  border-radius: 16px;
  height: 45px;
  display: flex;
  align-items: center;
  min-width: 350px;
  margin-left: 32px;
}
.serch input{
  width: 80%;
}
.avatar{
  width: 32px;
  height: 32px;
}
.coll{
  width: 16.8px;
  height: 19.2px;
}.logo{
  height: 33.05px;
  width: auto;
}
@media screen and (max-width: 800px) {
  .logo {
    display: none;
  }
}
@media screen and (max-width: 480px) {
  .serch {
    display: none;
  }
}
</style>
