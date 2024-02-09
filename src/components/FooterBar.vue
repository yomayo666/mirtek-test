<template>
    <div class="footer">
        <p class="font-custom text-custom">© 2021 Themesberg, LLC. All rights reserved.</p>
        <div class="contacts">
            <img class="facebook" :src="facebook" alt="facebook" />
            <img class="twitter" :src="twitter" alt="twitter" />
            <img class="github" :src="github" alt="github" />
            <img class="dribbble" :src="dribbble" alt="dribbble" />
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FooterBar",
    props: {
      msg: String,
    },
    data() {
      return {
        facebook: require("@/assets/solid/facebook.png"),
        twitter: require("@/assets/solid/twitter.png"),
        github: require("@/assets/solid/github.png"),
        dribbble: require("@/assets/solid//dribbble.png"),
      };
    },
  };
  
  </script>
  <style>
  .footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px;
  }
  .contacts{
    height: 24px;
    width: 168px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .facebook{
    width: 9.67px;
    height: 18px;
  }
  .twitter{
    width: 17.96px;
    height: 14.59px;
  }
  .github{
    width: 17.44px;
    height: 17.03px;
  }
  .dribbble{
    width: 17.44px;
    height: 17.44px;
  }
  @media screen and (max-width: 480px) {
  .footer {
    display: flex;
    flex-direction: column;
  }
  .contacts{
    margin-top: 16px;
  }
}
  </style>
  