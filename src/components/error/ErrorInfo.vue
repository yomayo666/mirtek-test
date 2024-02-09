<template>

  <div class="error-info">
    <img class="error-img" :src="error" alt="error" />
    <div>
      <h1 class="title-error">Page not found</h1>
      <p>
        Oops! Looks like you followed a bad link. If you think this is a problem
        with us, please tell us.
      </p>
      <button class="back-error">Go back home</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorInfo",
  props: {
    msg: String,
  },
  data() {
    return {
      error: require("@/assets/error/404.png"),
    };
  },
};
</script>

<style>
.error-info {
  height: 90vh;
}
.error-img {
  margin: 0 auto;
  width: 70vh;
}

.title-error {
  font-size: 2rem; /* Увеличьте размер шрифта на ваш выбор */
  font-weight: bold;
}
.back-error {
    margin-top: 10px;
  padding: 9px 17px;
  background-color: #0e9f6e;
  color: white;
  border-radius: 12px;
}
</style>
