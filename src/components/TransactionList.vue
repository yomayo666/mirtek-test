<template>
  <div class="transactions-container">
    <div class="transactions-container_header">
      <h2 class="font-bold text-bold">Transactions</h2>
      <p>This is a list of latest transactions.</p>
    </div>
    <div class="transactions-container_info">
      <table>
        <thead>
          <tr style="height: 50px;">
            <th class="font-custom text-small" style="width: 50%; text-align: left;">TRANSACTION</th>
            <th class="font-custom text-small" style="width: 20%; text-align: left;">DATE & TIME</th>
            <th class="font-custom text-small" style="width: 10%; text-align: left;">AMOUNT</th>
            <th class="font-custom text-small status" style="width: 20%; text-align: left;"><span>STATUS</span></th>
          </tr>
        </thead>
        <tbody>
          <tr style="height: 50px;">
            <td class="font-custom text-small" style="text-align: left;">Payment from <span class="font-bold"> Bonnie Green</span></td>
            <td class="font-custom text-small" style="text-align: left;">Apr 23 ,2021</td>
            <td class="font-bold text-small" style="text-align: left; ">$2300</td>
            <td class="font-custom text-small completed" style="text-align: left;"><span>Completed</span></td>
          </tr>
          <tr style="height: 50px;">
            <td class="font-custom text-small" style="text-align: left;">Payment refund to<span class="font-bold"> #00910</span></td>
            <td class="font-custom text-small" style="text-align: left;">Apr 23, 2021</td>
            <td class="font-bold text-small" style="text-align: left;">-$670</td>
            <td class="font-custom text-small completed" style="text-align: left;"><span>Completed</span></td>
          </tr>
          <tr style="height: 50px;">
            <td class="font-custom text-small" style="text-align: left;">Payment failed from<span class="font-bold"> #087651</span></td>
            <td class="font-custom text-small" style="text-align: left;">Apr 23, 2021</td>
            <td class="font-bold text-small" style="text-align: left;">-$670</td>
            <td class="font-custom text-small cancelled" style="text-align: left;"><span>Cancelled</span></td>
          </tr>
          <tr style="height: 50px;">
            <td class="font-custom text-small" style="text-align: left;">Payment from<span class="font-bold"> Bonnie Green</span></td>
            <td class="font-custom text-small" style="text-align: left;">Apr 15, 2021</td>
            <td class="font-bold text-small" style="text-align: left;">$5000</td>
            <td class="font-custom text-small in-progress" style="text-align: left;"><span>In progress</span></td>
          </tr>
          <tr style="height: 50px;">
            <td class="font-custom text-small" style="text-align: left;">Payment from<span class="font-bold">J ese Leos</span></td>
            <td class="font-custom text-small" style="text-align: left;">Apr 15, 2021</td>
            <td class="font-bold text-small" style="text-align: left;">$2300</td>
            <td class="font-custom text-small in-progress" style="text-align: left;"><span>In progress</span></td>
          </tr>
          <tr style="height: 50px;">
            <td class="font-custom text-small" style="text-align: left;">Payment from<span class="font-bold"> THEMSBERG LLC</span></td>
            <td class="font-custom text-small" style="text-align: left;">Apr 11, 2021</td>
            <td class="font-bold text-small" style="text-align: left;">$280</td>
            <td class="font-custom text-small completed" style="text-align: left;"><span>Completed</span></td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransactionList",
  props: {
    msg: String,
  },
};
</script>

<style>
.transactions-container_info {
  min-width: 800px;
}
.transactions-container {
  padding: 16px;
  overflow-x: auto;
}

.transactions-container_header h2,
.transactions-container_header p {
  text-align: left;
}

.transactions-container_header {
  height: 66px;
}

table {
  width: 100%;
}

.completed span {
  color: green;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(0, 128, 0, 0.116);
}

.cancelled span {
  color: red;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(255, 0, 0, 0.13);
}

.in-progress span {
  color: blue;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(0, 0, 255, 0.151);
}

.status span {
  padding: 10px;
}
</style>
