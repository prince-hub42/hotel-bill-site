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
const menuItems = [
  { name: "Paneer Tikka", price: 150 },
  { name: "Veg Biryani", price: 120 },
  { name: "Butter Naan", price: 30 },
  { name: "Masala Dosa", price: 80 }
];

window.onload = function () {
  const menuDiv = document.getElementById("menu");
  menuItems.forEach((item, index) => {
    menuDiv.innerHTML += `
      <div>
        <label>${item.name} - ₹${item.price}</label>
        <input type="number" id="food${index}" placeholder="Qty" min="0" value="0" />
      </div>
    `;
  });
};

function placeOrder() {
  let total = 0;
  menuItems.forEach((item, index) => {
    const qty = parseInt(document.getElementById(`food${index}`).value) || 0;
    total += item.price * qty;
  });

  document.getElementById("orderTotal").innerText = "Total Bill: ₹" + total;

  // Show QR code section
  const qr = document.getElementById("qrSection");
  const amt = document.getElementById("payAmount");
  qr.style.display = "block";
  amt.innerText = "Please pay ₹" + total + " using UPI";
}
