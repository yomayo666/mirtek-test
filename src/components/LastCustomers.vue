<template>
  <div class="customers-container">
    <h2 class="text-textMain font-bold text-bold">Latest Customers</h2>
    <div class="customers-container_user-all">
        <div class="customers-container_user">
            <img :src="neil" alt="Neil Sims" />
            <div>
                <h3 class="user-name text-textMain font-bold text-custom">Neil Sims</h3>
                <p class="user-mail ">email@example.com</p>
            </div>
            <p class="user-money text-textMain font-bold text-custom">$367</p>
        </div>
        <div class="customers-container_user">
            <img :src="bonnie" alt="Bonnie Green" />
            <div>
                <h3 class="user-name text-textMain font-bold text-custom">Bonnie Green</h3>
                <p class="user-mail">email@example.com</p>
            </div>
            <p class="user-money text-textMain font-bold text-custom">$67</p>
        </div>
        <div class="customers-container_user">
            <img :src="mich" alt="Micheal Gough" />
            <div>
                <h3 class="user-name text-textMain font-bold text-custom">Micheal Gough</h3>
                <p class="user-mail">email@example.com</p>
            </div>
            <p class="user-money text-textMain font-bold text-custom">$3467</p>
        </div>
        <div class="customers-container_user">
            <img :src="thomas" alt="Thomas Lean" />
            <div>
                <h3 class="user-name text-textMain font-bold text-custom">Thomas Lean</h3>
                <p class="user-mail">email@example.com</p>
            </div>
            <p class="user-money text-textMain font-bold text-custom">$2367</p>
        </div>
        <div class="customers-container_user">
            <img :src="lana" alt="Lana Byrd" />
            <div>
                <h3 class="user-name text-textMain font-bold text-custom">Lana Byrd</h3>
                <p class="user-mail">email@example.com</p>
            </div>
            <p class="user-money text-textMain font-bold text-custom">$367</p>
        </div>
        <div class="customers-container_user">
            <img :src="karen" alt="Karen Nelson" />
            <div>
                <h3 class="user-name text-textMain font-bold text-custom">Karen Nelson</h3>
                <p class="user-mail">email@example.com</p>
            </div>
            <p class="user-money text-textMain font-bold text-custom">$1367</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LastCustomers",
  props: {
    msg: String,
  },
  data() {
    return {
        neil: require("@/assets/user/Neil.png"),
        bonnie: require("@/assets/user/bonnie.png"),
      mich: require("@/assets/user/Mich.png"),
      thomas: require("@/assets/user/thomas.png"),
      lana: require("@/assets/user/lana.png"),
      karen: require("@/assets/user/karen.png"),
    };
  },
  
};
</script>

<style>
.customers-container{
    padding: 24px;
}
.customers-container h2{
    text-align: left;
}
.customers-container_user-all{
    margin-top: 16px;
}
.customers-container_user{
    height: 59px;
    display: flex;
}
.customers-container_user img{
    width: 32px;
    height: 32px;
}
.customers-container_user div{
    margin-left: 4.5px;
}
.user-money{
    margin-left: auto;
}
.user-name{
    text-align: left;
}
.user-mail{
    text-align: left;
}

</style>
