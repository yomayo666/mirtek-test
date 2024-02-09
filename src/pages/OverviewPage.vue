<template>
  <div class="search-container mx-4 bg-page">
    <SercBar/>
    <div class="main-container">
      <NavBar class="navBar"></NavBar>
      <BottomInfo class="bottomInfo"></BottomInfo>
      <ChartBar class="chartBar"></ChartBar>
      <LastCustomers class="lastCustomers"></LastCustomers>
      <TopProducts class="topProducts"></TopProducts>
      <TransactionList class="transactions"></TransactionList>
      <FooterBar class="footer"></FooterBar>
    </div>
  </div>
</template>

<style>
.main-container {
  display: grid;
  grid-template-columns: minmax(200px, 14.5%) 30% 1fr;
  grid-template-rows: 570.85px 448px 473px auto;
  grid-template-areas:
    "navBar      chartBar          chartBar"
    "navBar      lastCustomers     topProducts"
    "navBar      transactions      transactions"
    "bottomInfo  footer            footer";
  grid-gap: 16px;
}
.main-container > * {
  border: 1px solid rgba(128, 128, 128, 0.13);
}
.navBar {
  grid-area: navBar;
}
.bottomInfo{
  grid-area: bottomInfo;
}
.chartBar {
  grid-area: chartBar;
  height: 570.85px;
}
.lastCustomers {
  grid-area: lastCustomers;
}
.topProducts{
  grid-area: topProducts;
}
.transactions {
  grid-area: transactions;
}
.transactions::-webkit-scrollbar {
    width: 10px;
  }

  .transactions::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  .transactions::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }
.footer {
  grid-area: footer;
}
@media (max-width: 1200px) {
  .main-container {
    grid-template-areas:
      "navBar chartBar chartBar"
      "navBar lastCustomers lastCustomers"
      "navBar topProducts topProducts"
      "navBar transactions transactions"
      "bottomInfo footer footer";
  }

}
@media (max-width: 800px) {
  .bottomInfo {
    display: none;
  }
  .main-container {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px 0px;
    grid-template-areas:
      "chartBar chartBar chartBar"
      "lastCustomers lastCustomers lastCustomers" 
      "topProducts topProducts topProducts"
      "transactions transactions transactions"
      "footer footer footer";
  }
}
@media (max-width: 500px) {
  html {
    font-size: 14px;
  }
}
@media (max-width: 350px) {
  html {
    font-size: 10px;
  }
}
</style>

<script>
import SercBar from '../components/SercBar.vue'
import NavBar from '../components/NavBar.vue';
import ChartBar from '../components/ChartBar.vue';
import BottomInfo from '../components/BottomInfo.vue';
import LastCustomers from '../components/LastCustomers.vue';
import TopProducts from '../components/TopProducts.vue';
import TransactionList from '../components/TransactionList.vue';
import FooterBar from '../components/FooterBar.vue';

export default {
  name: 'OverviewPage',
  props: {
    msg: String
  },
  components: {
    SercBar,
    NavBar,
    ChartBar,
    BottomInfo,
    LastCustomers,
    TopProducts,
    TransactionList,
    FooterBar
  }
}
</script>
