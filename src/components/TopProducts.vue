<template>
  <div class="top-products-container">
    <h2 class="top-products-container_header text-textMain font-bold text-bold">Top products</h2>
    <div class="top-products-container_products">
      <div class="top-products-container_product">
        <div>
          <h3 class="text-textMain font-bold text-custom">
            Restaurant Booking App
          </h3>
          <p>React & Bootstrap Framework</p>
        </div>
        <div>
            <p class="text-textMain font-bold text-custom">70</p>
            <span>sales</span>
        </div>
      </div>
      <div class="top-products-container_product">
        <div>
          <h3 class="text-textMain font-bold text-custom">UI Kit</h3>
          <p>React & Bootstrap Framework</p>
        </div>
        <div>
            <p class="text-textMain font-bold text-custom">54</p>
            <span>sales</span>
        </div>
      </div>
      <div class="top-products-container_product">
        <div>
          <h3 class="text-textMain font-bold text-custom">Design System Pro</h3>
          <p>Bootstrap Framework</p>
        </div>
        <div>
            <p class="text-textMain font-bold text-custom">47</p>
            <span>sales</span>
        </div>
      </div>
      <div class="top-products-container_product">
        <div>
          <h3 class="text-textMain font-bold text-custom">Dashboard</h3>
          <p>Tailwind, React</p>
        </div>
        <div>
            <p class="text-textMain font-bold text-custom">43</p>
            <span>sales</span>
        </div>
      </div>
      <div class="top-products-container_product">
        <div>
          <h3 class="text-textMain font-bold text-custom">Glassmorphism UI</h3>
          <p>Vue Js, Tailwind</p>
        </div>
        <div>
            <p class="text-textMain font-bold text-custom">38</p>
            <span>sales</span>
        </div>
      </div>
      <div class="top-products-container_product">
        <div>
          <h3 class="text-textMain font-bold text-custom">
            Multipurpose Template
          </h3>
          <p>React & Bootstrap Framework</p>
        </div>
        <div>
            <p class="text-textMain font-bold text-custom">22</p>
            <span>sales</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopProducts",
  props: {
    msg: String,
  },
};
</script>

<style>
.top-products-container{
    padding: 24px;
}
.top-products-container h2{
    text-align: left;
}
.top-products-container_products{
    margin-top: 16px;
}
.top-products-container_product{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.top-products-container_product h3, .top-products-container_product p{
    text-align: left;

}
</style>
