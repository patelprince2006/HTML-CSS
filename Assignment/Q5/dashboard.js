
const salesData = [
  { product: "Laptop", units: 30, price: 750 },
  { product: "Phone", units: 80, price: 500 },
  { product: "Tablet", units: 45, price: 300 },
  { product: "Monitor", units: 25, price: 200 },
  { product: "Keyboard", units: 60, price: 50 },
  { product: "Mouse", units: 75, price: 40 },
];

const totalRevenue = salesData
  .map(item => item.units * item.price)
  .reduce((sum, value) => sum + value, 0);

const totalUnits = salesData.reduce((sum, item) => sum + item.units, 0);

const avgRevenue = (totalRevenue / salesData.length).toFixed(2);

const topProduct = salesData.reduce((max, item) => 
  item.units > max.units ? item : max
);

const top3 = [...salesData]
  .sort((a, b) => (b.units * b.price) - (a.units * a.price))
  .slice(0, 3);
  
const kpiContainer = document.getElementById("kpi-cards");
const kpiData = [
  { title: "Total Revenue", value: `$${totalRevenue.toLocaleString()}` },
  { title: "Total Units Sold", value: totalUnits },
  { title: "Average Revenue/Product", value: `$${avgRevenue}` },
  { title: "Top Product", value: topProduct.product },
];

kpiContainer.innerHTML = kpiData
  .map(kpi => `
    <div class="card">
      <h3>${kpi.title}</h3>
      <p>${kpi.value}</p>
    </div>
  `)
  .join("");

const tableBody = document.querySelector("#product-table tbody");
tableBody.innerHTML = top3
  .map(item => `
    <tr>
      <td>${item.product}</td>
      <td>${item.units}</td>
      <td>$${(item.units * item.price).toLocaleString()}</td>
    </tr>
  `)
  .join("");
