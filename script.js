function calculateBill() {
  let roomType = document.getElementById("roomType").value;
  let nights = parseInt(document.getElementById("nights").value);
  let prices = {
    single: 1000,
    double: 1800,
    deluxe: 2500
  };
  let total = prices[roomType] * nights;
  document.getElementById("result").innerText = "Total: ₹" + total;
}
